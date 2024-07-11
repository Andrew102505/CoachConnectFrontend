package com.example.coach_connect_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.coach_connect_backend.model.CoachConnectAdmin;
import com.example.coach_connect_backend.model.Customer;

@Repository
public interface CoachConnectAdminRepository extends JpaRepository<CoachConnectAdmin, Integer>{
	@Query(value = "SELECT * FROM coach_connect_admin WHERE email = :email", nativeQuery = true)
	CoachConnectAdmin getAdminByEmail(String email);
}
