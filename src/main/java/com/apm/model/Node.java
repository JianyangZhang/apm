package com.apm.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Node {
	@Id
	String topology_id;
	@Id
	String id;
	
	String res_id;
	String label;
	String shape;
	String image;
	int size;
	int x;
	int y;
	
	public Node() {
		super();
	}
	
	public Node(String topology_id, String id, String res_id, String label, String shape, String image, int size, int x, int y) {
		super();
		this.topology_id = topology_id;
		this.id = id;
		this.res_id = res_id;
		this.label = label;
		this.shape = shape;
		this.image = image;
		this.size = size;
		this.x = x;
		this.y = y;
	}
	
	
	@Override
	public String toString() {
		return "Node [topology_id=" + topology_id + ", id=" + id + ", res_id=" + res_id + ", label=" + label
				+ ", shape=" + shape + ", image=" + image + ", size=" + size + ", x=" + x + ", y=" + y + "]";
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

	public String getRes_id() {
		return res_id;
	}

	public void setRes_id(String res_id) {
		this.res_id = res_id;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getShape() {
		return shape;
	}

	public void setShape(String shape) {
		this.shape = shape;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
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
