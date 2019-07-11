/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var count;
var c;
var a;
var rest1,rest2;
function func(one,two){
  count=0;
  
  for(i=0;i<arguments.length;i++)
    {
      c=0;
      a=1;
      var num=(arguments[i]);
      var unit=num%10;
      var high=num;
      while(high>=10)
        high=high/10;
      high=parseInt(high);
      //console.log("unit="+unit);
      //console.log("high="+high);
      
      var newnum=num*unit;
      //console.log("new number="+newnum);
      
      var newhigh=newnum;
      while(newhigh>=10)
        {
        newhigh=newhigh/10;
          c++;
        }
        
      newhigh=parseInt(newhigh);
       if(newhigh===unit){
         // console.log("matched");
         //to compare the rest of the numbers
         rest1=parseInt(num/10);
        //console.log("rest1="+rest1);
         while(c>0){
           a=a*10;
           c--;
         }
        rest2=(newnum-(newhigh*a));
         //console.log("rest2="+rest2);
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