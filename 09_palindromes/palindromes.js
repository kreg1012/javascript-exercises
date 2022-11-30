const palindromes = function (str) {
    let filter = /[\W_]/g;
    let filteredStr = str.toLowerCase().replace(filter, "");
    let revStr = filteredStr.split("").reverse().join("");

    return revStr === str ? true : false;
    console.log(revStr);

};

// Do not edit below this line
module.exports = palindromes;
