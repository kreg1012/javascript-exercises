const fibonacci = function(n) {

    const fib = [0,1];

    if (n < 0) return "OOPS";
    if (typeof n === 'string'){
        n = parseInt(n);
        if (n < 0 || Number.isInteger(n) == false) return "OOPS";
    } 
    if (n == 1 || n == 2){
        return 1;
    }
    else if (n > 2){
        for (i = 1; i < n; i++){
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
        }
    }
    return fib[n];
    
};

// Do not edit below this line
module.exports = fibonacci;
