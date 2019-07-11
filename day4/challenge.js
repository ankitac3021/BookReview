var i;
function genericfunction(test){
  test(11);
  console.log("////////////////////////////////////////");
  test(20);
  console.log("////////////////////////////////////////");
  test(42);
  console.log("////////////////////////////////////////");
  test(31);
}


//To generate Factors of a number
genericfunction(function(num){
  for(i=1;i<=num;i++)
    if(num%i==0)
      console.log("Number "+num+" divisible by "+i);
});

//To generate all the numbers divisible by 5 from 1 to given number
genericfunction(function(num){
  for(i=1;i<num;i++)
    if(i%5==0)
      console.log("Number "+num+" divisible by 5");
});

//To generate even numbers
genericfunction(function(num){
  for(i=1;i<=num;i++)
    if(i%2==0)
      console.log(i+" is an even number");
});

//To generate odd numbers
genericfunction(function(num){
  for(i=1;i<=num;i++)
    if(i%2==1)
      console.log(i+" is an odd number");
});



