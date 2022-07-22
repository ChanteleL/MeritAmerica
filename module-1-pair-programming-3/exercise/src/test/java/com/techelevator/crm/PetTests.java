package com.techelevator.crm;

import junit.framework.TestCase;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class PetTests {

    private Pet objectUnderTest;

    @Before
    public void setObjectUnderTest(){
        objectUnderTest = new Pet("Test Name", "Test Species");
    }

    @Test
    public void testListVaccinations() {
        String expected = "Rabies, Distemper, Parvo";
        List<String> testList = new ArrayList<>();
        testList.add("Rabies");
        testList.add("Distemper");
        testList.add("Parvo");

        objectUnderTest.setVaccinations(testList);

        String output = objectUnderTest.listVaccinations();
        Assert.assertEquals(expected, output);

    }
}