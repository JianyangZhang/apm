package com.apm.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Topology {
	@Id
	private String topology_id;
	
	public Topology() {
		super();
	}
	
	public Topology(String topology_id) {
		super();
		this.topology_id = topology_id;
	}
	
	public String getTopology_id() {
		return topology_id;
	}

	public void setTopology_id(String topology_id) {
		this.topology_id = topology_id;
	}
}
