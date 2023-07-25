package com.example.demo.model;

import jakarta.persistence.Id;

public class Flight_Details {
	@Id
	int Flight_id;
	String Flight_number;
	String Airline;
	String Departure_airport_code;
	String Departure_datetime;
	String arrival_airport_code;
	String arrival_datetime;
	int Duration_minutes;
	int Total_seats;
	int Available_seats;
	double fare;
	public int getFlight_id() {
		return Flight_id;
	}
	public void setFlight_id(int flight_id) {
		Flight_id = flight_id;
	}
	public String getFlight_number() {
		return Flight_number;
	}
	public void setFlight_number(String flight_number) {
		Flight_number = flight_number;
	}
	public String getAirline() {
		return Airline;
	}
	public void setAirline(String airline) {
		Airline = airline;
	}
	public String getDeparture_airport_code() {
		return Departure_airport_code;
	}
	public void setDeparture_airport_code(String departure_airport_code) {
		Departure_airport_code = departure_airport_code;
	}
	public String getDeparture_datetime() {
		return Departure_datetime;
	}
	public void setDeparture_datetime(String departure_datetime) {
		Departure_datetime = departure_datetime;
	}
	public String getArrival_airport_code() {
		return arrival_airport_code;
	}
	public void setArrival_airport_code(String arrival_airport_code) {
		this.arrival_airport_code = arrival_airport_code;
	}
	public String getArrival_datetime() {
		return arrival_datetime;
	}
	public void setArrival_datetime(String arrival_datetime) {
		this.arrival_datetime = arrival_datetime;
	}
	public int getDuration_minutes() {
		return Duration_minutes;
	}
	public void setDuration_minutes(int duration_minutes) {
		Duration_minutes = duration_minutes;
	}
	public int getTotal_seats() {
		return Total_seats;
	}
	public void setTotal_seats(int total_seats) {
		Total_seats = total_seats;
	}
	public int getAvailable_seats() {
		return Available_seats;
	}
	public void setAvailable_seats(int available_seats) {
		Available_seats = available_seats;
	}
	public double getFare() {
		return fare;
	}
	public void setFare(double fare) {
		this.fare = fare;
	}
	@Override
	public String toString() {
		return "Flight_Details [Flight_id=" + Flight_id + ", Flight_number=" + Flight_number + ", Airline=" + Airline
				+ ", Departure_airport_code=" + Departure_airport_code + ", Departure_datetime=" + Departure_datetime
				+ ", arrival_airport_code=" + arrival_airport_code + ", arrival_datetime=" + arrival_datetime
				+ ", Duration_minutes=" + Duration_minutes + ", Total_seats=" + Total_seats + ", Available_seats="
				+ Available_seats + ", fare=" + fare + "]";
	}
	
}
