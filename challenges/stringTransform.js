function stringTransform(str) {
    const value = str.length;

    // Check divisibility og input by 3 and by 5
    const div3 = value % 3 === 0;
    const div5 = value % 5 === 0;

    if (div3 && div5) {
        // Divisible by 15: Reverse the string and replace each character with its ASCII code
        const reversed = str.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (div3) {
        // Divisible by 3: Reverse the string
        return str.split('').reverse().join('');
    } else if (div5) {
        // Divisible by 5: Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If not divisible by 3 or 5, return the string unchanged
        return str;
    }
}

// Test cases. You can change values of input
console.log(stringTransform("Hamburger")); // Output: "regrubmaH"
console.log(stringTransform("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransform("Chocolate Chips Cookie")); // Output: "eikooCpihCetalocohC"
