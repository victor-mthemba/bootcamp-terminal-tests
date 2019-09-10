module.exports =  function (str) {
 
    var highSale = 0;
    var answer = [];
    for(var i = 0; i < str.length; i++)
    {
      var sale = str[i].sales;
      if(sale > highSale)
      {
        highSale = sale;
        answer = str[i].department;
      }
    }
    return answer;
}