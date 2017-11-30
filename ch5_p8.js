function countChar( char , str ) {
    var occurences = 0; 

    //check that char is one character
    if (char.length > 1) {
        return("Not a single character");
    }
    
    for (index in str){
        if (str.charAt(index) === char){
            occurences++;
        }
    }
    
    return occurences;
}