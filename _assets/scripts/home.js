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
  if(!$('#hamburgers').hasClass('dropdown')){
    $('.dropdown').show(1000);
  }
  else{
    console.log('another click');
    $('.dropdown').hide(1000);
  }
});

