const ftoc = function(temp) {
    let cTemp;
    
    cTemp = Math.round((temp - 32) * (5/9) * 10) / 10;

    return cTemp;
};

const ctof = function(temp) {
  let fTemp;

  fTemp = Math.round(((temp * 9/5) + 32) * 10) / 10;

  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
