package com.apm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apm.model.Node;
import com.apm.model.Topology;

@Service
public class TopologyService {
	
	private List<Topology> topologies = new ArrayList<>();
	
	public TopologyService() {
		topologies.add(new Topology("sample"));
	}
	
	public List<Topology> getAll() {
		return topologies;
	}
	
	public Topology get(String id) {
		for (Topology topology : topologies) {
			if (topology.getTopology_id().equals(id)) {
				return topology;
			}
		}
		return null;
	}
}
