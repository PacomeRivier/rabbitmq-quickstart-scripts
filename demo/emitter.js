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
        var msg = {
            data: {
                name: 'Relief Applications',
                category: 'IT Company'
            }
        };
        // Publish the message to the exchange with a specific routing key
        channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(msg)));
        console.log(' [x] Sent %s', msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 1000);
});
