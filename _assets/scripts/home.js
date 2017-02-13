//Write JS logic here

// $(".fa").click(function() {
//   alert("hello world !");
//   $(".dropdown").css ({
//     "display" :"flex",
//     "flex-direction":"column",
//     "padding-top":"22px",
//     "margin-right":"100px"
//     });
// });


$("#hamburgers").click(function() {
  alert('hello world');
  $('.dropdown').css("display","flex");
});


$('#crossbutton').click(function() {
  $('.dropdown').css("display","none");

});

