
$(document).ready(function(){
   setTimeout(function(){
    $(".preloder").hide();
    

   },3000);
});


$(document).ready(function(){
   setTimeout(function(){

    $("#popup").show();
    $("#popex").click(function(){
      $("#popup").hide();
    });

   },20000);
});


$("#reg").validate({
  rules:{
    firstname:{
      required:true,
      minlength:3,
      lettersonly: true,
      maxlength:10
    },

    lastname:{
      required:true,
      minlength:3,
      lettersonly: true,
      maxlength:10
    },

    pass:{
      required:true,
      minlength:6,
      maxlength:15
    },

    passcom:{
      required:true,
      minlength:6,
      maxlength:15,
      equalTo: "#pass"
    },

    email:{
      required:true,
      email:true
    }
  },

  messages:{
    firstname:{
      required:"Въведете име",
      minlength:"Минимум 3 букви",
      lettersonly:"Само букви",
      maxlength:"Максимум 10 букви"
    },

    lastname:{
      required:"Въведете фамилия",
      minlength:"Минимум 3 букви",
      lettersonly:"Само букви",
      maxlength:"Максимум 10 букви"
    },

    pass:{
      required:"Въведете парола",
      minlength:"Минимум 6 символа",
      maxlength:"Максимум 15 символа"
    },

    passcom:{
      required:"Потвърдете парола",
      minlength:"Минимум 6 символа",
      maxlength:"Максимум 15 символа",
      equalTo:"Потвърдете вярна парола"
    },

    email:{
      required:"Въведете имейл адрес",
      email:"Въведете валиден имейл адрес"
    }
  },

    submitHandler:function(form){
      alert("Регистрацията беше успешa");
        return false;

  }

});

$('#reg').submit(function(){
    $('#popup').hide();  
});




$( "#tog" ).click(function() {
  $( "#login" ).toggle( "fold", 500 );
});

$("#tog").click(function(){
    $("#pro").toggleClass("profi");
});

$(function(){

  $(".nav").linkUnderlineAnim({
  	"speed"     : 300,
  	"color"     : "#000",
  	"thickness" : 1,
  	"distance"  : 1,

  });

});

$( ".ham" ).click(function() {
  $("#stk").toggleClass( "hid" );
});


$('#srolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

window.onscroll = function() {fixed()};

var navbar = document.getElementById("top");
var sticky = navbar.offsetTop;

function fixed() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fix")
  } else {
    navbar.classList.remove("fix");
  }
}


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
		$(".fix").slideUp("fast");
   } else {
		$(".fix").slideDown("fast");
   }
   lastScrollTop = st;
});





