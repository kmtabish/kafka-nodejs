const { kafka } = require("./client");

const init = async () => {
  const producer = kafka.producer();

  console.log("Connecting Producer...");
  await producer.connect();
  console.log("Producer Connect Success");

  await producer.send({
    topic: "animal-planet",
    messages: [
      {
        partition: 0,
        key: "pet",
        value: JSON.stringify({ name: "Cat", location: "HOME" }),
      },
    ],
  });

  await producer.disconnect();
};

init();
