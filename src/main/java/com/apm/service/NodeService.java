package com.apm.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apm.model.Node;

@Service
public class NodeService {
	
	private List<Node> nodes = new ArrayList<>();
	
	public NodeService() {
		nodes.add(new Node("sample", "101", "res1", "计算机(小)", "circularImage", "./img/computer.png", 10, 100, 100));
		nodes.add(new Node("sample", "102", "res2", "星形节点(大)", "star", null, 30, -400, -120));
		nodes.add(new Node("sample", "103", "res3", "硬盘", "circularImage", "./img/disk.png", 20, -200, 150));
		nodes.add(new Node("sample", "104", "res4", "菱形节点", "diamond", null, 20, 300, -20));
	}
	
	public List<Node> getAll() {
		return nodes;
	}

	public List<Node> getNodes(String topology_id) {
		List<Node> rst = new ArrayList<>();
		for (Node node : nodes) {
			if (node.getTopology_id().equals(topology_id)) {
				rst.add(node);
			}
		}
		return rst;
	}
	
	public Node getNode(String topology_id, String node_id) {
		for (Node node : nodes) {
			if (node.getTopology_id().equals(topology_id) && node.getId().equals(node_id)) {
				return node;
			}
		}
		return null;
	}
	
	public void erase(String topology_id) {
		for (Iterator<Node> iterator = nodes.iterator(); iterator.hasNext();) {
		    Node node = iterator.next();
		    if (node.getTopology_id().equals(topology_id)) {
		        iterator.remove();
		    }
		}
	}
	
	public void update(List<Node> nodes) {
		erase(nodes.get(0).getTopology_id());
		for (Node node : nodes) {
			this.nodes.add(node);
		}
	}
}
