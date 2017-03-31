package com.apm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apm.model.Topology;
import com.apm.service.TopologyService;

// 这个controller暂时没什么用
@RestController
@RequestMapping("/topology")
public class topologyController {
	
	@Autowired
	private TopologyService topologyService;
	
	@CrossOrigin
	@RequestMapping("/graphs")
	public List<Topology> getAll() {
		return topologyService.getAll();
	}
}