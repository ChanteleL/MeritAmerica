package com.techelevator.hr;

import com.techelevator.crm.Customer;
import org.junit.Assert;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class EmployeeTests {

    @Test
    public void getFullNameReturnsCorrectFormat() {
        Employee employee = new Employee("Test", "Testerson");
        String fullName = employee.getFullName();

        assertEquals("The employee full name is not in the correct format.", "Testerson, Test", fullName);
    }

    @Test
    public void raiseSalaryTest_Positive() {
        Employee employee = new Employee("Test", "Testerson");
        employee.setSalary(100);
        employee.raiseSalary(5);

        assertEquals("The employee raise of 5% was not computed correctly.",employee.getSalary(), 100 * 1.05, 0.0);
    }

    @Test
    public void raiseSalaryTest_Negative() {
        Employee employee = new Employee("Test", "Testerson");
        employee.setSalary(100);
        employee.raiseSalary(-10); //"raise" by negative 10%

        assertEquals("Salary should remain the same when raise percentage is negative.",100, employee.getSalary(),0.0);
    }

    //our test
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
