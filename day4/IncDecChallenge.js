function counting(){
  var counter=0;
  var returnObj={
  increment:function(){
    counter++;
  },
  decrement:function(){
    counter--;
  },
  getValue:function(){
    return counter;
  }
}
return returnObj;
}

var countVar=counting();
countVar.increment();
countVar.increment();
countVar.increment();
countVar.increment();
console.log(countVar.getValue());
countVar.decrement();
console.log(countVar.getValue());
countVar.decrement();
countVar.decrement();
countVar.decrement();
console.log(countVar.getValue());
