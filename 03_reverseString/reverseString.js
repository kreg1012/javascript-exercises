const reverseString = function(string) {
    const arr = string.split('');
    let revStr = "";
    
    for (l = arr.length-1; l >= 0; l--){
        revStr += arr[l];
    }
    return revStr;
};


// Do not edit below this line
module.exports = reverseString;
