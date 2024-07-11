package com.example.coach_connect_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)//whenever our rest apis throws a ResourceNotFoundException then rest api will send NotFound http status to the client
public class ResourceNotFoundException extends RuntimeException{//customer exception
	private static final long serialVersionUID = 1L;
	private String resourceName;
	private String fieldName;
	private Object fieldValue;
	
	public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
		super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}

	public String getResourceName() {
		return resourceName;
	}

	

	public String getFieldName() {
		return fieldName;
	}



	public Object getFieldValue() {
		return fieldValue;
	}

	
	
	
	
	
}

