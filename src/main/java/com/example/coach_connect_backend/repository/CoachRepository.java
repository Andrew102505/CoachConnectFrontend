package com.example.coach_connect_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.coach_connect_backend.model.Coach;


@Repository
public interface CoachRepository extends JpaRepository<Coach, Integer>{
	@Query(value = "SELECT * FROM coach WHERE email = :email", nativeQuery = true)
	Coach getCoachByEmail(String email);
}
