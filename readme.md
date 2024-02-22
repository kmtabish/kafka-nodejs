**Setup and Run the Application**

Start Zookeeper container

    docker run --name zookeeper -p 2181:2181 wurstmeister/zookeeper:latest
Start Kafka Container

    docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka

Run the `node producer` command to produce messages

Run the `node consumer` command to received the message