#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

// Connect to RabbitMQ using credentials
amqp.connect('amqp://<USERNAME>:<PASSWORD>@<SERVER_ADRESS>:5672?heartbeat=30', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    // Create a channel for this session
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = '<EXCHANGE>';
        var routingKey = '<ROUTING_KEY>';

        // Create a queue to consume
        channel.assertQueue('', {
            exclusive: true
        }, function(error2, q) {
            if (error2) {
                throw error2;
            }
            // Bind the queue to the exchange with the right routing key
            channel.bindQueue(q.queue, exchange, routingKey);

            console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q.queue);

            // Consume the queue
            channel.consume(q.queue, function(msg) {
                if (msg.content) {
                    console.log(' [x] %s', msg.content.toString());
                }
            }, {
                noAck: true
            });
        });
    });
});
