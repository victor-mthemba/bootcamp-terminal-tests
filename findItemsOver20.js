module.exports = function(str) {
 
    var results = [];
    for(var i=0;i<str.length;i++)
    {
      var listItem = str[i];
      if(listItem.qty > 20)
      {
        results.push(listItem);
      }
    }
    return results;
  }