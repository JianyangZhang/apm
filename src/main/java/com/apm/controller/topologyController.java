package com.apm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apm.model.Edge;
import com.apm.model.Node;
import com.apm.model.Topology;
import com.apm.service.EdgeService;
import com.apm.service.NodeService;
import com.apm.service.TopologyService;


@RestController
@RequestMapping("/topology")
public class TopologyController {
	
	@Autowired
	private TopologyService topologyService;
	
	@Autowired
	private NodeService nodeService;
	
	@Autowired
	private EdgeService edgeService;
	
	@CrossOrigin
	@RequestMapping("/graphs")
	public List<Topology> getAllTopologies() {
		return topologyService.getAll();
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/{topology_id}")
	public void delete(@PathVariable("topology_id") String topology_id) {
		nodeService.erase(topology_id);
		edgeService.erase(topology_id);
	}
	
	@CrossOrigin
	@RequestMapping("/nodes")
	public List<Node> getAllNodes() {
		return nodeService.getAll();
	}
	
	@CrossOrigin
	@RequestMapping("/edges")
	public List<Edge> getAllEdges() {
		return edgeService.getAll();
	}
	
	@CrossOrigin
	@RequestMapping("/nodes/{topology_id}")
	public List<Node> getNodes(@PathVariable("topology_id") String topology_id) {
		return nodeService.getNodes(topology_id);
	}
	
	@CrossOrigin
	@RequestMapping("/edges/{topology_id}")
	public List<Edge> getEdges(@PathVariable("topology_id") String topology_id) {
		return edgeService.getEdges(topology_id);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.PUT, value="/nodes")
	public void updateNodes(@RequestBody List<Node> nodes) {
		nodeService.update(nodes);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.PUT, value="/edges")
	public void updateEdges(@RequestBody List<Edge> edges) {
		edgeService.update(edges);
	}
}