/*circular number
The given number is multiplied by its unit number. This unit number 
should become the hight of the new number and the rest of elements 
are same.

example: 102564
             X4
        ----------
          410256
        ----------
        unit place of orignal number=4
        high place of new number =4
        now rest of the numbers of orignal =10256 should be in new number
        

*/
var count;
var rest1,rest2;
function func(one,two){
  count=0;
  for(i=0;i<arguments.length;i++)
    {
      var num=(arguments[i]);
      var unit=num%10;
      var high=num;
      while(high>=10)
        high=high/10;
      high=parseInt(high);
      console.log("unit="+unit);
      console.log("high="+high);
      
      var newnum=num*unit;
      console.log("new number="+newnum);
      
      var newhigh=newnum;
      while(newhigh>=10)
        newhigh=newhigh/10;
        
      newhigh=parseInt(newhigh);
       if(newhigh===unit){
          console.log("matched");
         //to compare the rest of the numbers
         rest1=parseInt(num/10);
         console.log("rest1="+rest1);
         rest2=parseInt(num/10);
         console.log("rest2="+rest2);
         if(rest1===rest2)
           {
             count++;
           }
         
          }
      console.log("------------------------------------------------");
    }
  
}

func(102564,456);
console.log("Number of circular numbers among arguments="+count);
func(102564,11111,345898,12345);
console.log("Number of circular numbers among arguments="+count);


