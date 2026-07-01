import java.util.Scanner;

public class Addition {

    // Method to add two integers
    void add(int a, int b) {
        System.out.println("Sum of two integers: " + (a + b));
    }

    // Overloaded method to add three integers
    void add(int a, int b, int c) {
        System.out.println("Sum of three integers: " + (a + b + c));
    }

    // Overloaded method to add two double values
    void add(double a, double b) {
        System.out.println("Sum of two double values: " + (a + b));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Addition obj = new Addition();

        System.out.print("Enter first integer: ");
        int x = sc.nextInt();

        System.out.print("Enter second integer: ");
        int y = sc.nextInt();

        obj.add(x, y);

        System.out.print("Enter third integer: ");
        int z = sc.nextInt();

        obj.add(x, y, z);

        System.out.print("Enter first decimal number: ");
        double d1 = sc.nextDouble();

        System.out.print("Enter second decimal number: ");
        double d2 = sc.nextDouble();

        obj.add(d1, d2);

        sc.close();
    }
}