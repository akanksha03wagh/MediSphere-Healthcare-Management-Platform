import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // User input
        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        // Check even or odd
        if (number % 2 == 0) {
            System.out.println(number + " is an Even Number.");
        } else {
            System.out.println(number + " is an Odd Number.");
        }

        sc.close();
    }
}