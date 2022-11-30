const repeatString = function(text, numberOfTimes) {
    if (numberOfTimes < 0) return 'ERROR';
    
    let tempStr = '';
    for(let n = 0; n < numberOfTimes; n++){
        tempStr += text;
    }
    
    return tempStr;
};

// Do not edit below this line
module.exports = repeatString;
