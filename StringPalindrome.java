import java.util.Scanner;

public class StringPalindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // User input
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        String original = str;
        String reverse = "";

        // Reverse the string
        for (int i = str.length() - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }

        // Check palindrome
        if (original.equals(reverse)) {
            System.out.println("The string is a Palindrome.");
        } else {
            System.out.println("The string is Not a Palindrome.");
        }

        sc.close();
    }
}