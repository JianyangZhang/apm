# DROP SCHEMA IF EXISTS topologyDB;
CREATE SCHEMA IF NOT EXISTS topologyDB;

USE topologyDB;

# DROP TABLE IF EXISTS topology;
CREATE TABLE IF NOT EXISTS topology(
	topology_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(topology_id)
);

# DROP TABLE IF EXISTS node;
CREATE TABLE IF NOT EXISTS node(
	topology_id VARCHAR(100) NOT NULL,
	node_id VARCHAR(100) NOT NULL,
    node_label VARCHAR(100) NOT NULL,
    node_x SMALLINT NOT NULL,
    node_y SMALLINT NOT NULL,
    FOREIGN KEY(topology_id) REFERENCES topology(topology_id),
    PRIMARY KEY(topology_id, node_id)
);