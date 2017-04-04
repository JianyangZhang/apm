package com.apm.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Edge {
	@Id
	String topology_id;
	@Id
	String id;

	String from;
	String to;
	
	public Edge() {
		super();
	}
	
	public Edge(String topology_id, String id, String from, String to) {
		super();
		this.topology_id = topology_id;
		this.id = id;
		this.from = from;
		this.to = to;
	}

	@Override
	public String toString() {
		return "Edge [topology_id=" + topology_id + ", id=" + id + ", from=" + from + ", to=" + to + "]";
	}

	public String getTopology_id() {
		return topology_id;
	}

	public void setTopology_id(String topology_id) {
		this.topology_id = topology_id;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	
}

