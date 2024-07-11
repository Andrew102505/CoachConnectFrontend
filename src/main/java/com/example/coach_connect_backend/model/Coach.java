package com.example.coach_connect_backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Transient;
import lombok.Data;
@Data
@Entity
public class Coach extends CoachConnectUser{
	//****in the controller method for post convert the array of levels to an arraylist before storing the object
	@Transient
	private Level[] levelsObjectArray;//we have this field because the array of levels will be passed to the backend in the request body as a string array and we need a way to accept it before we transfer the values to an arraylist
	private List<String> levels = new ArrayList<>();
	private int yearsOfExperience;
	private String bio;
	private String location;//city, state format
	
	public Coach() {
		super();
		this.setRole("COACH");
	}
	public Coach(String firstName, String lastName, String email, String password, Level[] levelsObjectArray, int yearsOfExperience, String bio, String location) {
		super(firstName, lastName, email, password, "COACH");
		
		for(Level level : levelsObjectArray) {//javascript frontend will pass the levels as a string array, but we want the coaches to be able to update their info so its better as an arraylist
			this.levels.add(level.getValue());
		}
		this.yearsOfExperience = yearsOfExperience;
		this.bio = bio;
		this.location = location;
	}
	public List<String> getLevels() {
		return levels;
	}
	public void setLevels(List<String> levels) {
		this.levels = levels;
	}
	public int getYearsOfExperience() {
		return yearsOfExperience;
	}
	public void setYearsOfExperience(int yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Level[] getLevelsObjectArray() {
		return this.levelsObjectArray;
	}
	
}
