function palindromeCheck() {
    var input = document.getElementById("inputPalindrome").value;
    var re = /[\W_]/g;
    var lowRegStr = input.toLowerCase().replace(re,"");
    var reversedStr = lowRegStr.split("").reverse().join("");
    if (reversedStr == lowRegStr) {
        document.getElementById('message').innerHTML = "This is a palindrome.";
    } else {
        document.getElementById('message').innerHTML = "This is not a palindrome.";
    }   
}

