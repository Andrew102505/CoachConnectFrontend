package com.example.coach_connect_backend.model;

//we have this class because when we add levels for a coach in the coach registration form we get a list of object containing the label and value but we only want the value so we have this class so we can accept the array in the request body and then we can pull the value attribute out of each object and add the values to a String arraylist
public class Level {
	
	private String label;
	private String value;
	
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	
}
