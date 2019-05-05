//Javascript for navigation menu overlay - width set to 100% overlay when menu is opened & set to 0% once closed//
function openNav() {
   document.getElementById("GHRLnav") .style.width="100%";
 }

  function closeNav() {
   document.getElementById("GHRLnav") .style.width="0%";
 }

//script for scroll button to top of window//
  $(window).scroll(scrollFunction);


 function scrollFunction() {
   if ( $(window).scrollTop() > 20 ) {
     $("#navBtn").show();
   } else {
     $("#navBtn").hide();
   }
 };

 function topFunction() {
   $(window).scrollTop(0);
 }
