package com.techelevator.crm;

import java.util.ArrayList;
import java.util.List;

public class Pet {

    private String name;
    private String species;
    private List<String> vaccinations = new ArrayList<>();

    //constructor
    public Pet(String name, String species) {
        this.name = name;
        this.species = species;
    }
    //method
    public String listVaccinations(){
        //takes the list of vaccinations and returns a string
        String output = "";
        for(String vax: vaccinations){
            output += vax + ", ";
        }
        //account for the comma at the end if there's less than 2
        if(output.length() > 2){
            output = output.substring(0, output.length()-2);
        }
        return output;
    }

    //getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public List<String> getVaccinations() {
        return vaccinations;
    }

    public void setVaccinations(List<String> vaccinations) {
        this.vaccinations = vaccinations;
    }
}
