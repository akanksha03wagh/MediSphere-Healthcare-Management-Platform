import java.util.Scanner;

public class PalindromeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // To take User input
        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        int original = number;
        int reverse = 0;
        int remainder;

        // To Reverse the number
        while (number != 0) {
            remainder = number % 10;
            reverse = reverse * 10 + remainder;
            number = number / 10;
        }

        // To Check palindrome
        if (original == reverse) {
            System.out.println(original + " is a Palindrome Number.");
        } else {
            System.out.println(original + " is Not a Palindrome Number.");
        }

        sc.close();
    }
}