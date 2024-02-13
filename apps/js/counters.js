// ---------------------------------------------------------------------------------------------------------------
// weboff = false; //Net
// weboff = true; //Local
// ---------------------------------------------------------------------------------------------------------------
/*poshttp = top.location.href.indexOf ('http', 0);
if (poshttp==-1)
{
 weboff = true; //Local
}
else {
 weboff = false; //Net
}*/
// ---------------------------------------------------------------------------------------------------------------
document.write('\
  <div style="margin: 0 auto; clear: both; display: block;" class="usn"><center>\
');
if (weboff) {
  document.write('\
    <img src="'+goh+'img/counter_yandex.png" style="width:88px; height:31px; border:0;" alt="Yandex" title="Яндекс" />\
  ');
} else {
// Счетчики ------------------------------------------------------------------------------------------------------
// Google --------------------------------------------------------------------------------------------------------
document.write('\
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-40065851-1"></script>\
  <script>\
    window.dataLayer = window.dataLayer || [];\
    function gtag(){dataLayer.push(arguments);}\
    gtag("js", new Date());\
    gtag("config", "UA-40065851-1");\
  </script>\
');
/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-40065851-1', 'ltd.ua');
ga('send', 'pageview');
*/
// END Google ----------------------------------------------------------------------------------------------------
// Яндекс --------------------------------------------------------------------------------------------------------
/*
document.write('\
<script src="js/ymi.js" async></script>\
');
*/
document.write('\
  <script src="'+goh+'js/ymc.js"></script>\
');
// END Яндекс ----------------------------------------------------------------------------------------------------
// END Счетчики -------------------------------------------------------------------------------------------------
}
document.write('</center></div>');
// ----------------------------------------------------------------------------------------------------------------------
// Переводчик Google ------------------------------------------------------------------------------------------
if (weboff) {
document.write('\
<div style="margin: 0 auto; clear: both; display: block;" class="usn"><center>\
');
if (weboff) {
  document.write('Google');
} else {
  document.write('\
    <div id="google_translate_element"></div><script type="text/javascript">\
    function googleTranslateElementInit() {\
      new google.translate.TranslateElement({pageLanguage: "ru", includedLanguages: "en,ru,uk", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, "google_translate_element");\
    }\
    </script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>\
  ');
}
// END Переводчик Google -----------------------------------------------------------------------------------
document.write('</center></div>');
}
// End -----------------------------------------------------------------------------------------------------------
