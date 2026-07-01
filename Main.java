// Superclass 
class Vehicle {
    // Attributes 
    String brand = "Ford";
    
    // Method 
    public void honk() {
        System.out.println("Tuut, tuut!");
    }
}

// Subclass 
class Car extends Vehicle {
    // Attribute unique to the child class
    String modelName = "Mustang";
}

// Main class 
public class Main {
    public static void main(String[] args) {
        // Create an object of the child class
        Car myCar = new Car();

        // Call the inherited method from the Vehicle class
        myCar.honk();

        // Display the inherited brand attribute and the unique model name
        System.out.println("Brand: " + myCar.brand);
        System.out.println("Model: " + myCar.modelName);
    }
}
