var myArr=[10,20,"hello",{}];
myArr.forEach(function(item){
  console.log(item);
});

myArr.forEach(function(item,index){
  console.log(item+" at index "+index);
});

