package com.apm.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Node {
	@Id
	String topology_id;
	@Id
	String id;
	
	String label;
	int x;
	int y;
	
	public Node() {
		super();
	}
	
	@Override
	public String toString() {
		return "Node [topology_id=" + topology_id + ", id=" + id + ", label=" + label + ", x=" + x + ", y=" + y + "]";
	}

	public Node(String topology_id, String id, String label, int x, int y) {
		super();
		this.topology_id = topology_id;
		this.id = id;
		this.label = label;
		this.x = x;
		this.y = y;
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

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}
}
