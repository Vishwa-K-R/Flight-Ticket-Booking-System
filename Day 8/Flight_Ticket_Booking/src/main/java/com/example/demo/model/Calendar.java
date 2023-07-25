package com.example.demo.model;

import jakarta.persistence.Id;

public class Calendar {
	@Id
	int event_id;
	//FK reference flight_details(flight_id)
	int flight_id;
	String event_name;
	String travel_date;
	String travel_time;
	String travel_location;
	String discription;
	String contact_email;
	int contact_phone;
	public int getEvent_id() {
		return event_id;
	}
	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}
	public int getFlight_id() {
		return flight_id;
	}
	public void setFlight_id(int flight_id) {
		this.flight_id = flight_id;
	}
	public String getEvent_name() {
		return event_name;
	}
	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}
	public String getTravel_date() {
		return travel_date;
	}
	public void setTravel_date(String travel_date) {
		this.travel_date = travel_date;
	}
	public String getTravel_time() {
		return travel_time;
	}
	public void setTravel_time(String travel_time) {
		this.travel_time = travel_time;
	}
	public String getTravel_location() {
		return travel_location;
	}
	public void setTravel_location(String travel_location) {
		this.travel_location = travel_location;
	}
	public String getDiscription() {
		return discription;
	}
	public void setDiscription(String discription) {
		this.discription = discription;
	}
	public String getContact_email() {
		return contact_email;
	}
	public void setContact_email(String contact_email) {
		this.contact_email = contact_email;
	}
	public int getContact_phone() {
		return contact_phone;
	}
	public void setContact_phone(int contact_phone) {
		this.contact_phone = contact_phone;
	}
	@Override
	public String toString() {
		return "Calendar [event_id=" + event_id + ", flight_id=" + flight_id + ", event_name=" + event_name
				+ ", travel_date=" + travel_date + ", travel_time=" + travel_time + ", travel_location="
				+ travel_location + ", discription=" + discription + ", contact_email=" + contact_email
				+ ", contact_phone=" + contact_phone + "]";
	}
	
}
