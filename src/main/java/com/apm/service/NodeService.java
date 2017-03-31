package com.apm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apm.model.Node;

@Service
public class NodeService {
	
	private List<Node> nodes = new ArrayList<>();
	
	public NodeService() {
		nodes.add(new Node("sample", "101", "imnode", 100, 100));
		nodes.add(new Node("balabala", "102", "abc", 200, 200));
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
		for (Node node : nodes) {
			if (node.getTopology_id().equals(topology_id)) {
				nodes.remove(node);
			}
		}
	}
	
	public void update(List<Node> nodes) {
		erase(nodes.get(0).getTopology_id());
		for (Node node : nodes) {
			nodes.add(node);
		}
	}
}
