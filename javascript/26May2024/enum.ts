enum PrintMedia {
    Newspaper, //0
    Newsletter, //1
    Magazine, //2
    Book //3
  }
  enum PrintMedia1 {
    Newspaper = 10,
    Newsletter = 11,
    Magazine = 12,
    Book = 13,
  }
  enum PrintMedia2 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}

  console.log(PrintMedia);
let x : number =12;
if(x === PrintMedia.Magazine || PrintMedia1.Magazine){
    console.log("this is magazine");
}else{
    console.log("this is not Magazine");
}
