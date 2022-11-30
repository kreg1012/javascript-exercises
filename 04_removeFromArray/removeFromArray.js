const removeFromArray = function(...args) {
    const currentArray = args[0];
    const tempArr = [];

    currentArray.forEach(element => {
        if(!args.includes(element))
        tempArr.push(element);
    });
    
    
    return tempArr;


};

// Do not edit below this line
module.exports = removeFromArray;
