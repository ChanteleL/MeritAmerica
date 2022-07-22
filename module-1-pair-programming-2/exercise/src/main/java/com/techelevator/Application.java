package com.techelevator;

import javax.print.attribute.standard.MediaSize;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Application {
    private List<Department> departments = new ArrayList<>();
    private List<Employee> employees = new ArrayList<>();
    private Map<String,Project> projects = new HashMap<>();

    /**
     * The main entry point in the application
     * @param args
     */
    public static void main(String[] args) {
        Application app = new Application();
        app.run();
    }

    private void run() {
        // create some departments
        createDepartments();

        // print each department by name
        printDepartments();

        // create employees
        createEmployees();
        // give Angie a 10% raise, she is doing a great job!
        employees.get(1).raiseSalary(10);
        // print all employees
        printEmployees();

        // create the TEams project
        createTeamsProject();
        // create the Marketing Landing Page Project
        createLandingPageProject();

        // print each project name and the total number of employees on the project
        printProjectsReport();
    }

    /**
     * Create departments and add them to the collection of departments
     */
    private void createDepartments() {
        departments.add(new Department(1,"Marketing"));
        departments.add(new Department(2,"Sales"));
        departments.add(new Department(3,"Engineering"));
    }

    /**
     * Print out each department in the collection.
     */
    private void printDepartments() {
        System.out.println("------------- DEPARTMENTS ------------------------------");
        for (Department d: departments) {
            System.out.println(d.getName());
        }

    }

    /**
     * Create employees and add them to the collection of employees
     */
    private void createEmployees() {
        LocalDate today = LocalDate.now();
        employees.add(new Employee());
        employees.get(0).setEmployeeId(1);
        employees.get(0).setFirstName("Dean");
        employees.get(0).setLastName("Johnson");
        employees.get(0).setEmail("djohnson@teams.com");
        employees.get(0).setSalary(Employee.STARTING_SALARY);
        employees.get(0).setDepartment(getDepartmentByName("Engineering"));
        employees.get(0).setHireDate(today);

        employees.add(new Employee(2, "Angie", "Smith",
                "asmith@teams.com", getDepartmentByName("Engineering"), today) );
        employees.add(new Employee(3, "Margaret", "Thompson",
                "mthompson@teams.com", getDepartmentByName("Marketing"), today) );
    }

    /**
     * Print out each employee in the collection.
     */
    private void printEmployees() {
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        System.out.println("\n------------- EMPLOYEES ------------------------------");
        for (Employee d : employees) {
            System.out.println(d.getFullName()+" (" + currency.format(d.getSalary()) + ") " +
                    d.getDepartment().getName());
        }
    }

    /**
     * Create the 'TEams' project.
     */
    private void createTeamsProject() {
        projects.put("TEams", new Project("TEams", "Project Management Software",
                30));
        for (Employee e : employees) {
            if (e.getDepartment() == departments.get(2)) {
                projects.get("TEams").getTeamMembers().add(e);
            }
        }
    }

    /**
     * Create the 'Marketing Landing Page' project.
     */
    private void createLandingPageProject() {
        Project p = new Project("Marketing Landing Page", "Lead Capture Landing Page for Marketing",
                LocalDate.now().plusDays(31), 7);
        for (Employee e : employees) {
            if (e.getDepartment() == departments.get(0)) {
                p.getTeamMembers().add(e);
            }
        } projects.put(p.getName(),p);
    }

    /**
     * Print out each project in the collection.
     */
    private void printProjectsReport() {
        System.out.println("\n------------- PROJECTS ------------------------------");
        for (Map.Entry<String, Project> e: projects.entrySet()) {
            System.out.println(e.getKey()+ ": " + e.getValue().getTeamMembers().size() +
                    " : startDate " + e.getValue().getStartDate() + " / dueDate " + e.getValue().getDueDate());
        }

    }

    private Department getDepartmentByName(String departmentName) {
        for (Department d : departments) {
            if (departmentName.equals(d.getName())) {
                return d;
            }
        }
        return null;
    }

}
