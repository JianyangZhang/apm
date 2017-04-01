package com.apm.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apm.model.Edge;

@Service
public class EdgeService {

	private List<Edge> edges = new ArrayList<>();

	public EdgeService() {
		edges.add(new Edge("sample", "101102", "101", "102"));
		edges.add(new Edge("sample", "102103", "102", "103"));
		edges.add(new Edge("sample", "102104", "102", "104"));
	}

	public List<Edge> getAll() {
		return edges;
	}

	public List<Edge> getEdges(String topology_id) {
		List<Edge> rst = new ArrayList<>();
		for (Edge edge : edges) {
			if (edge.getTopology_id().equals(topology_id)) {
				rst.add(edge);
			}
		}
		return rst;
	}

	public Edge getEdge(String topology_id, String edge_id) {
		for (Edge edge : edges) {
			if (edge.getTopology_id().equals(topology_id) && edge.getId().equals(edge_id)) {
				return edge;
			}
		}
		return null;
	}

	public void erase(String topology_id) {
		for (Iterator<Edge> iterator = edges.iterator(); iterator.hasNext();) {
			Edge edge = iterator.next();
			if (edge.getTopology_id().equals(topology_id)) {
				iterator.remove();
			}
		}
	}

	public void update(List<Edge> edges) {
		erase(edges.get(0).getTopology_id());
		for (Edge edge : edges) {
			this.edges.add(edge);
		}
	}
}
