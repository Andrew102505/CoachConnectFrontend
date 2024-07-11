package com.example.coach_connect_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach_connect_backend.repository.CoachConnectAdminRepository;

//requests that have an origin of localhost:3000 are allowed
@CrossOrigin(origins = "http://localhost:3000")//have to add this because spring blocks cross site request mappings if if don't specify which origins we will allow requests from
@RestController
@RequestMapping("/coachconnect/coachconnectadmin")
public class CoachConnectAdminController {
	@Autowired
	private CoachConnectAdminRepository coachConnectAdminRepository;
}
