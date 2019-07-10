//circular number

function dummy(a) {
  console.log("a="+a);
  console.log("I am dummy");
  for(i=0;i<arguments.length;i++)
    console.log(arguments[i]);
}

dummy(10,20,30);

var count=0;
function func(one,two){
  for(i=0;i<arguments.length;i++)
    {
      var num=(arguments[i]);
      var unit=num%10;
      var high=num;
      while(high>=10)
        high=high/10;
      high=parseInt(high);
      console.log(unit);
      console.log(high);
      
    }
}

func(123,456);
