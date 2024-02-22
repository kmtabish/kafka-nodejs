const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "newFirstKafkaApp",
  brokers: ["192.168.1.40:9092"],
});
