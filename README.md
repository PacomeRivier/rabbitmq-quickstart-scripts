# Node.js code for RabbitMQ tutorials

Here you can find JavaScript (Node) code examples from [RabbitMQ
tutorials](https://www.rabbitmq.com/getstarted.html).

To successfully use the examples you will need a running RabbitMQ server.

## Requirements

### Node.js

You need [Node.js](https://nodejs.org/en/download/) and [amqp.node](https://github.com/squaremo/amqp.node)
to run these tutorials.


### Client Library

To install `amqp.node` using npm:

    npm install amqplib -g

## Code

You must fill in the values between brackets before sunning the code:

    <USERNAME>
    <PASSWORD>
    <SERVER_ADRESS>
    <EXCHANGE>
    <ROUTING_KEY>
    
### Emitter

    node src/emitter.js


### Subscriber

    node src/subscriber.js
