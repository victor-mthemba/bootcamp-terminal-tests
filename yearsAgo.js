module.exports = function(year) {
    
    var d = new Date().getFullYear();
    var diff = d - year;
    
    return diff;
  }