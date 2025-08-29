/**
 * Function to check if a number is a palindrome.
 * A palindrome number reads the same forwards and backwards (e.g., 121, 1221).
 *
 * @param x - The number to check
 * @returns true if the number is a palindrome, false otherwise
 */
function isPalindrome(x: number): boolean {
    // Negative numbers cannot be palindromes
    // Example: -121 is not the same backwards
    if (x < 0) return false;

    // Store the original value so we can compare later
    const original = x;

    // Variable to build the reversed number
    let reversed: number = 0;

    // Loop until the number becomes 0
    while (x > 0) {
        // Extract the last digit of x
        let digit = x % 10;

        // Append the digit to the reversed number
        reversed = reversed * 10 + digit;

        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    // Compare reversed with original
    return reversed === original;
}
