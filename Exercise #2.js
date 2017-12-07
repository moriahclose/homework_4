function reverseString(str) {
    var revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    alert (revStr);
}
reverseString(prompt('hello'));
