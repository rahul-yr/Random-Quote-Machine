// Document Initialization
$(document).ready(function(){
 $(".bl").addClass("animated bounce");
getQuote();
}); 

//Getting Json data and separting required data and displaying
function getQuote(){
       $(".cc").addClass("animated fadeIn");
      var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url,function(data){
       quote=data.quoteText;
      author=data.quoteAuthor;
        if(author==""){
          author="Unknown Author";
        }
   // var id=data.id;
         $("#author").html("<i>by "+author+"</i>");
          $("#quote").html('" '+quote+' "');
          $(".cc").removeClass("animated fadeIn");

   }); 
}

//Getting next quote function when nextQuote button pressed
$("#pbutton").on("click",function(){
 // $("#quote").html("Here is second quote");
 // $("#author").html("2 Author"); 
  getQuote();
 
 
});

//Sharing Quotes in twitter

$("#ptweet").on("click",function(){
   // $("#author").html("3 Author");
window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(' " ' + quote + ' "  ~' + author));
}); 
