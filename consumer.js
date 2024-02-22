const { kafka } = require("./client");

const init = async () => {
  const consumer = kafka.consumer({ groupId: "zoo-1" });

  console.log("Consumer Connecting...");
  await consumer.connect();
  console.log("Consumer Connect Success");

  consumer.subscribe({ topics: ["animal-planet"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) =>
      console.log(
        `[${topic}]: PARTITION: ${partition} MESSAGE: `,
        message.value.toString()
      ),
  });
};

init();
