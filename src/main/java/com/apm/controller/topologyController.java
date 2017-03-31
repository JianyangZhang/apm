package com.apm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apm.model.Node;
import com.apm.model.Topology;
import com.apm.service.NodeService;
import com.apm.service.TopologyService;


@RestController
@RequestMapping("/topology")
public class TopologyController {
	
	@Autowired
	private TopologyService topologyService;
	
	@Autowired
	private NodeService nodeService;
	
	@CrossOrigin
	@RequestMapping("/graphs")
	public List<Topology> getAllTopologies() {
		return topologyService.getAll();
	}
	
	@CrossOrigin
	@RequestMapping("/nodes")
	public List<Node> getAllNodes() {
		return nodeService.getAll();
	}
	
	@CrossOrigin
	@RequestMapping("/nodes/{topology_id}")
	public List<Node> getNodes(@PathVariable("topology_id") String topology_id) {
		return nodeService.getNodes(topology_id);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.PUT, value="/nodes")
	public void update(@RequestBody List<Node> nodes) {
		nodeService.update(nodes);
	}
}