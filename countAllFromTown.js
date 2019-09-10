module.exports = function(str) {
    var list = str.split(",");
    var fromStellies = [];
    
    for(var i = 0; i < list.length; i++)
    {
      var item = list[i];
      if(item.startsWith("CL")) {
        fromStellies.push(item);
      }  
    }
    return fromStellies.length;
  }