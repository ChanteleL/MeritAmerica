package com.techelevator;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Project {
    private String name;
    private String description;
    private LocalDate startDate;
    private LocalDate dueDate;
    private List<Employee> teamMembers;

    public Project(String name, String description, int deadlineDate) {
        this.name = name;
        this.description = description;
        this.startDate = startDate.now();
        this.dueDate = startDate.plusDays(deadlineDate);
        this.teamMembers = new ArrayList<>();
    }

    public Project(String name, String description,
                   LocalDate startDate, int deadlineDate) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = startDate.plusDays(deadlineDate);
        this.teamMembers = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public List<Employee> getTeamMembers() {
        return teamMembers;
    }

    public void setTeamMembers(List<Employee> teamMembers) {
        this.teamMembers = teamMembers;
    }
}
