module.exports = function(str, amount) {
 
    var results = [];
    for(var i=0;i<str.length;i++)
    {
      var listItem = str[i];
      if(listItem.qty > amount)
      {
        results.push(listItem);
      }
    }
    return results;
}