import java.util.Scanner;

// Abstract class
abstract class Animal {
    
    // Abstract method
    abstract void sound();

    // Normal method
    void eat() {
        System.out.println("Animal is eating.");
    }
}

// Child class
class Dog extends Animal {

    // Implement abstract method
    void sound() {
        System.out.println("Dog barks.");
    }
}

// Main class
public class Abstraction {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter 1 to see Dog details: ");
        int choice = sc.nextInt();

        if (choice == 1) {
            Dog d = new Dog();
            d.sound();
            d.eat();
        } else {
            System.out.println("Invalid Choice");
        }

        sc.close();
    }
}