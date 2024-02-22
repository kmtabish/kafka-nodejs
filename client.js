const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "newFirstKafkaApp",
  brokers: ["192.168.0.168:9092"],
});
