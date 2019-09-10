module.exports = function(str) {
    var list = str.split(", ");
    var paarl = []
    for(var i = 0; i < list.length; i++) {
      var item = list[i];
      if(item.startsWith("CJ")) {
         paarl.push(item);
      }
    }
    return paarl.length;
  }