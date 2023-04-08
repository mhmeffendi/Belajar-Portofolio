// event pada saat link di klik
$('.page-scroll').on('click',function (event){

     
    var tujuan =$(this).attr('href');
    
    var elemenTujuan = $(tujuan);


  $('html,body').animate({
      scrollTop: elemenTujuan.offset().top - 50
  },1000);
   event.preventDefault();
});


function login(){
    window.location = "login.html";
}