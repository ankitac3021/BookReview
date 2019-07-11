var bookList=[{bookid:"B001",
               bookNmae:"You don't know JS",
               price:500,
               noOfPages:300,
               author:"Mr.XYZ"},
              {bookid:"B002",
               bookNmae:"Mastering in JS",
               price:900,
               noOfPages:400,
               author:"Mr.ABC"},
              {bookid:"B003",
               bookNmae:"JS is interesting",
               price:750,
               noOfPages:180,
               author:"Mr.PQR"},
              {bookid:"B004",
               bookNmae:"Learn JS",
               price:730,
               noOfPages:800,
               author:"Mr.ORE"}];

function searchBookByAuthor(bookList,aut){
  for(i=0;i<bookList.length;i++){
    if(bookList[i].author===aut)
      console.log(bookList[i]);
  }
}



searchBookByAuthor(bookList,"Mr.PQR");

function searchCostlyBook(bookList){
 for(i=0;i<bookList.length;i++){
    if(bookList[i].price>800)
      console.log(bookList[i]);
  }
}

searchCostlyBook(bookList);

//anonymous functions
function genericSearchBook(bookList,test){
  for(i=0;i<bookList.length;i++){
    if(test(bookList[i])) //call function from here only and define test below
      console.log(bookList[i]);
  }
}

genericSearchBook(bookList,function(book){
  return book.price>800;
});  

genericSearchBook(bookList,function(book){
  return book.author==="Mr.ORE";
});
