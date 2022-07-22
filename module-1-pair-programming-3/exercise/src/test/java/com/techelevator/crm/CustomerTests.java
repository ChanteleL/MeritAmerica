package com.techelevator.crm;


import org.junit.Assert;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class CustomerTests {

    @Test
    public void getBalanceDue(){
        Customer customer = new Customer("Shana", "Russell");

        Map<String, Double> testMap = new HashMap<>();
        testMap.put("Grooming", 80.00);
        testMap.put("Walking", 15.00);
        testMap.put("Sitting", 40.00);
        testMap.put("Vaccination", 36.00);

        double methodTotal = customer.getBalanceDue(testMap);
        Assert.assertEquals("The customer's balance is not correct", 171.00, methodTotal, 0.0);


    }

}
