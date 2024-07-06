function firstWord(s) {
  // your code here
	function firstWord(str: string): string {
    // Handle edge case: empty string
    if (str.length === 0) {
        return "";
    }

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If spaceIndex is -1, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Otherwise, return substring from start to spaceIndex
    return str.substring(0, spaceIndex);
}

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
