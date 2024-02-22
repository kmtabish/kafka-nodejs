const { kafka } = require("./client");

const init = async () => {
  const admin = kafka.admin();
  console.log("--------- Admin Connecting... --------");
  await admin.connect();
  console.log("--------- Admin Connected Success --------");

  console.log("--------- Creating Topic [animal-planet]... --------");
  await admin.createTopics({
    topics: [
      {
        topic: "animal-planet",
        numPartitions: 2,
      },
    ],
  });
  console.log("--------- Topic Created Success --------");

  console.log("--------- Admin Disconnected --------");
  await admin.disconnect();
};

init();
