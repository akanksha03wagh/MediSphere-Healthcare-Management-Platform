import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // User input
        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        int sum = 0;

        // Calculate sum of digits
        while (number != 0) {
            int digit = number % 10;
            sum = sum + digit;
            number = number / 10;
        }

        // Display result
        System.out.println("Sum of digits = " + sum);

        sc.close();
    }
}