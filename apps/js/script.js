$(document).ready(function() {
  //weboff = true; /*Local*/
  /*Set Var*/
  setVarCalendar();
  setVarMenu();
  setBodyClass();
  setVarScrolPage()
  setMenuShow();
  setScrolPageShow();
  /*Resize*/
  $(window).resize(function() {
    setBodyClass();
    setMenuShow();
    setScrolPageShow();
  });
  /*scroll*/
  $(window).scroll(function () {
    setMenuShow();
    setScrolPageShow();
  });
  /*click*/
  /*click Menu '#hsp-lcb'*/
  $('#hsp-lcb').click(function () {
    clickHspLcb()
  });
  /*click Page Scrol UP*/
  $('#spu-lcb').click(function () {
    clickSpuLcb();
  });
  /*click Page Scrol DOWN*/
  $('#spd-lcb').click(function () {
    clickSpdLcb();
  });
  /*hover*/
  if (vdn == 'pools' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super fpools spools').addClass('super');*/
    smenuli();
    pools();
  }
  if (vdn == 'equip' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super kfiltr sfiltr rollet solar protect').addClass('super');*/
    smenuli();
    equip();
  }
  if (vdn == 'material' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super chemical coping garden facade fountain tiles careprod').addClass('super');*/
    smenuli();
    material();
    //cssjpg = $('#jpg').css('transition');
    //$('#jpg').css('transition', 'border-radius 0s ease-in-out 0s, background-image .3s ease-in-out 0s !important');
    //$('#jpg').css('transition', cssjpg);
  }
  if (vdn == 'service' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super spool cpool rpool ppool bpool').addClass('super');*/
    smenuli();
    service();
  }
  if (vdn == 'info' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super spool cpool rpool ppool bpool').addClass('super');*/
    smenuli();
    info();
  }
  if (vdn == 'info/photo' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super spool cpool rpool ppool bpool').addClass('super');*/
    smenuli();
    photo();
  }
  if (vdn == 'info/factory' && vfn == 'index') {
    /*$('#imgsnav').removeClass('super spool cpool rpool ppool bpool').addClass('super');*/
    smenuli();
    factory();
  }
});
// End document).ready(function()
// Function
/*For Menu*/
function setVarMenu() {
  if (weboff) {cRevers = 1;} else {cRevers = readCookie('Revers');}
  if (cRevers == null) {
    Revers = false;
    cRevers = 0;
  }
  else {
    if (cRevers == 0) {Revers = false;}
    else {
      Revers = true;
      cRevers = 1;
    }
  }
  $('#hspcb').attr('checked', false);
  hspcbCheck = false;
  wbw = 'l-wbw';
}
// End function setVarMenu()
function setBodyClass() {
/*
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)
*/
/*
if (!!('ontouchstart' in window) || !!('onmsgesturechange' in window)){onynts = 'nts';} else{onynts = 'yts';}
*/
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  onynts = 'yts';
} else {onynts = 'nts';}
  wbw = 'l-wbw';
  ynts = 'nts';
  if(window.matchMedia('(max-width: 1024px)').matches){wbw = 'm-wbw'; ynts = 'yts';}
  if(window.matchMedia('(max-width: 768px)').matches){wbw = 's-wbw'; ynts = 'yts';}
  $('body').removeClass('s-wbw m-wbw l-wbw').addClass(wbw);
  $('body').removeClass('nts yts').addClass(onynts);
  //*alert(onynts);

}
// End function setBodyClass()
function setMenuShow() {
  if(($('body').hasClass('l-wbw')) == true) {
    if ($(this).scrollTop() > ($(this).height() / 3)) {
      if (Revers) {
        hspcbCheck = false;
        $('#hsp').removeClass('show-hsp').addClass('hide-hsp');
        $('#hsp-nav').fadeOut('slow');
      }
      else {
        hspcbCheck = true;
        $('#hsp-nav').fadeIn('slow');
        $('#hsp').removeClass('hide hide-hsp').addClass('show-hsp');
      }
    }
    else {
      if (Revers) {
        hspcbCheck = true;
        $('#hsp-nav').fadeIn('slow');
        $('#hsp').removeClass('hide hide-hsp').addClass('show-hsp');
      }
      else {
        hspcbCheck = false;
        $('#hsp').removeClass('show-hsp').addClass('hide-hsp');
        $('#hsp-nav').fadeOut('slow');
      }
    }
    if (hspcbCheck) {
      $('#hspcb').attr('checked', true);
      document.getElementById('hspcb').checked = true;
      $('#hsp-cb').attr('data-hint', 'Скрыть меню');
    }
    else {
      $('#hspcb').attr('checked', false);
      document.getElementById('hspcb').checked = false;
      $('#hsp-cb').attr('data-hint', 'Показать меню');
    }
  }
}
// End function setMenuShow()
/*click Menu '#hsp-lcb'*/
function clickHspLcb() {
  if(($('body').hasClass('l-wbw')) == true) {
    if ($('#hspcb').is(':checked')) {
      hspcbCheck = false;
      $('#hsp').removeClass('show-hsp').addClass('hide-hsp');
      $('#hsp-nav').fadeOut('slow');
      $('#hsp-cb').attr('data-hint', 'Показать меню');
      if ($(window).scrollTop() > ($(window).height() / 3)) {Revers = true;}
      else {Revers = false;}
    }
    else {
      hspcbCheck = true;
      $('#hsp-nav').fadeIn('slow');
      $('#hsp').removeClass('hide hide-hsp').addClass('show-hsp');
      $('#hsp-cb').attr('data-hint', 'Скрыть меню');
      if ($(window).scrollTop() > ($(window).height() / 3)) {Revers = false;}
      else {Revers =true ;}
    }
    eraseCookie('Revers');
    if (Revers) {cRevers = 1;} else {cRevers = 0;}
    createCookie('Revers', cRevers, 7);
  }
  else {
    if ($('#hspcb').is(':checked')) {
      hspcbCheck = false;
      $('#hsp').removeClass('show-hsp').addClass('hide-hsp');
      $('#hsp-nav').fadeOut('slow');
      $('#hsp-cb').attr('data-hint', 'Показать меню');
    }
    else {
      hspcbCheck = true;
      $('#hsp-nav').fadeIn('slow');
      $('#hsp').removeClass('hide hide-hsp').addClass('show-hsp');
      $('#hsp-cb').attr('data-hint', 'Скрыть меню');
    }
  }
}
// End function clickHspLcb()
/*For ScrolPage*/
function setVarScrolPage() {
  $('#spucb').attr('checked', false);
  spucbCheck = false;
  $('#spdcb').attr('checked', false);
  spdcbCheck = false;
  jumpClick = 0; //0-нет 1-верх 2-метка 3-низ
  scrollSpeed = 6;
  curPos=$('html, body').scrollTop();
  curPos=360;
  heightP=$(document).height();
  scrollDistance=heightP;
  scrollTime=scrollDistance/scrollSpeed;
  $('#scrolpage').css('display','none');
}
// End function setVarScrolPage()
function setScrolPageShow() {
  if(($('body').hasClass('l-wbw')) == true) {
    if($(window).height() >360) {
      $('#scrolpage').css('display','block');
      if(jumpClick != 0) {
        $('#spd-cb').css('display','block');
        if($('html, body').scrollTop()==0){
          spucbCheck = true;
          $('#spu-cb').attr('data-hint', 'Вернуться к метке');
          document.getElementById('spucb').checked = true;
          spdcbCheck = false;
          $('#spd-cb').attr('data-hint', 'Вниз страницы');
          document.getElementById('spdcb').checked = false;
        }
        else {
          if($('html, body').scrollTop()>=$(document).height()-$(window).height()-1){
            spucbCheck = false;
            $('#spu-cb').attr('data-hint', 'Вверх страницы');
            document.getElementById('spucb').checked = false;
            spdcbCheck = true;
            $('#spd-cb').attr('data-hint', 'Вернуться к метке');
            document.getElementById('spdcb').checked = true;
          }
          else {
            spucbCheck = false;
            $('#spu-cb').attr('data-hint', 'Вверх страницы');
            document.getElementById('spucb').checked = false;
            spdcbCheck = false;
            $('#spd-cb').attr('data-hint', 'Вниз страницы');
            document.getElementById('spdcb').checked = false;
          }
        }
      }
      else {
        if ($('html, body').scrollTop() > ($(window).height() / 2)) {
          $('#scrolpage').css('display','block');
          if($('html, body').scrollTop()>=$(document).height()-$(window).height()-1) {$('#spd-cb').css('display','none');}
          else {$('#spd-cb').css('display','block');}
        }
        else {$('#scrolpage').css('display','none');}
      }
    }
    else {$('#scrolpage').css('display','none');}
  }
  else {$('#scrolpage').css('display','none');}
}
// End function setScrolPageShow()
function clickSpuLcb() {
  if ($('#spucb').is(':checked')) {
    // переход к метке
    spucbCheck = false;
    $('#spu-cb').attr('data-hint', 'Вверх страницы');
    scrollDistance=curPos;
    scrollTime=scrollDistance/scrollSpeed;
    $('html,body').animate ({scrollTop: curPos},scrollTime)
    jumpClick = 2;
  }
  else {
    // переход вверх страницы
    //spucbCheck = true;
    //$('#spu-cb').attr('data-hint', 'Вернуться к метке вниз');
    heightP=$(document).height();
    if($('html, body').scrollTop()>=$(document).height()-$(window).height()-1){scrollDistance=heightP;}
    else {curPos=$('html, body').scrollTop();scrollDistance=curPos;}
    scrollTime=scrollDistance/scrollSpeed;
    //scrollTime='slow';
    $('html, body').animate({scrollTop:0},scrollTime);
    spdcbCheck = false;
    $('#spd-cb').attr('data-hint', 'Вниз страницы');
    document.getElementById('spdcb').checked = false;
    jumpClick = 1;
  }
}
// End function clickSpuLcb()
function clickSpdLcb() {
  if ($('#spdcb').is(':checked')) {
    // переход к метке
    spdcbCheck = false;
    $('#spd-cb').attr('data-hint', 'Вниз страницы');
    heightP=$(document).height();
    scrollDistance=heightP-curPos;
    scrollTime=scrollDistance/scrollSpeed;
    $('html,body').animate ({scrollTop: curPos},scrollTime)
    jumpClick = 2;
  }
  else {
    // переход вниз страницы
    //spdcbCheck = true;
    //$('#spd-cb').attr('data-hint', 'Вернуться к метке вверх');
    heightP=$(document).height();
    if($('html, body').scrollTop()==0){scrollDistance=heightP;}
    else {curPos=$('html, body').scrollTop();scrollDistance=heightP-curPos;}
    scrollTime=scrollDistance/scrollSpeed;
    $('html, body').animate({scrollTop:heightP},scrollTime);
    spucbCheck = false;
    $('#spu-cb').attr('data-hint', 'Вверх страницы');
    document.getElementById('spucb').checked = false;
    jumpClick = 3;
  }
}
// End function clickSpdLcb()

function smenuli(){
  $('.s-menu li').mouseenter(function(){
    cssjpg = $('#jpg').css('transition');
    $('#imgsnav .img-wrap #jpg').css('transition', 'background-image .2s ease-in-out');
  });
  $('.s-menu li').mouseleave(function(){
    $('#imgsnav .img-wrap #jpg').css('transition', cssjpg);
  });
}

function pools(){
  /*if (vdn == 'pools' && vfn == 'index') {*/
  remCl = 'poolsi fpools spools';
  $('#cnpools').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('poolsi');
  });
  $('#fpools').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('fpools');
  });
  $('#spools').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('spools');
  });
  /*}*/
}

function equip(){
  /*if (vdn == 'equip' && vfn == 'index') {*/
  remCl = 'equipi kfiltr sfiltr rollet solar protect';
  $('#cnequip').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('equipi');
  });
  $('#kfiltr').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('kfiltr');
  });
  $('#sfiltr').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('sfiltr');
  });
  $('#rollet').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('rollet');
  });
  $('#solar').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('solar');
  });
  $('#protect').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('protect');
  });
  /*}*/
}

function material(){
/*  if (vdn == 'material' && vfn == 'index') {*/
  remCl = 'materiali chemical coping garden facade fountain tiles careprod';
  $('#cnmaterial').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('materiali');
  });
  $('#chemical').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('chemical');
  });
  $('#coping').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('coping');
  });
  $('#garden').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('garden');
  });
  $('#facade').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('facade');
  });
  $('#fountain').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('fountain');
  });
  $('#tiles').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('tiles');
  });
  $('#careprod').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('careprod');
  });
  /*}*/
}

function service(){
  /*if (vdn == 'service' && vfn == 'index') {*/
  remCl = 'servicei spool cpool rpool ppool bpool';
  $('#cnservice').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('servicei');
  });
  $('#spool').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('spool');
  });
  $('#cpool').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('cpool');
  });
  $('#rpool').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('rpool');
  });
  $('#ppool').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('ppool');
  });
  $('#bpool').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('bpool');
  });
  /*}*/
}
function info(){
  /*if (vdn == 'service' && vfn == 'index') {*/
  remCl = 'info pricem scost iswinter isspring issummer isautumn f00 factory pstudio';
  $('#cninfo').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('info');
  });
  $('#pricem').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('pricem');
  });
  $('#scost').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('scost');
  });
  $('#iswinter').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('iswinter');
  });
  $('#isspring').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('isspring');
  });
  $('#issummer').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('issummer');
  });
  $('#isautumn').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('isautumn');
  });
  $('#f00').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f00');
  });
  $('#factory').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('factory');
  });
  $('#pstudio').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('pstudio');
  });
  /*}*/
}
function photo(){
  /*if (vdn == 'info/photo' && vfn == 'index') {*/
  remCl = 'f00 f01 f02 f03 f04 f05 f06';
  $('#cnphoto').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f00');
  });
  $('#if01').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f01');
  });
  $('#if02').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f02');
  });
  $('#if03').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f03');
  });
  $('#if04').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f04');
  });
  $('#if05').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f05');
  });
  $('#if06').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('f06');
  });
  /*}*/
}
function factory(){
  /*if (vdn == 'service' && vfn == 'index') {*/
  remCl = 'factory barchemicals del hayward pierra';
  $('#cnfactory').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('factory');
  });
  $('#barchemicals').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('barchemicals');
  });
  $('#del').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('del');
  });
  $('#hayward').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('hayward');
  });
  $('#pierra').mouseover(function(){
    $('#imgsnav').removeClass(remCl).addClass('pierra');
  });
  /*}*/
}
/*
if(($('body').hasClass('b-page')) == true) {
  if (document.getElementById('mcb').checked==false) {
    $('#n-lcb').click(function() {
      $('.hsp-menu').fadeToggle('slow');
    })
  }
}
*/
//---Календарь-------------------------------------------------------------------------------------
/*function setVarCalendar*/
function setVarCalendar() {
  var aMonth=new Array(12)
  aMonth[0]="Января"
  aMonth[1]="Февраля"
  aMonth[2]="Марта"
  aMonth[3]="Апреля"
  aMonth[4]="Майя"
  aMonth[5]="Июня"
  aMonth[6]="Июля"
  aMonth[7]="Августа"
  aMonth[8]="Сентября"
  aMonth[9]="Октября"
  aMonth[10]="Ноября"
  aMonth[11]="Декабря"
  var d=new Date();
  document.getElementById("tdm").innerHTML = aMonth[d.getMonth()];
  document.getElementById("tdd").innerHTML = d.getDate();
  document.getElementById("tdy").innerHTML = d.getFullYear();
}
/*Calendar*/
function Calendar2(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}
/*for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    calendar += '<td>' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}*/
for(var  i = 1; i <= Dlast; i++) {
  if (  // список официальных праздников
      (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
      (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
      ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8 || i == 9) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
      (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
      (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001 && D.getFullYear() < 2016)  || // День защитника Отечества
      (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
      ((i == 15 || i == 16 || i == 17) && D.getMonth() == 3 && D.getFullYear() == 2017) || // Пасха
      ((i == 7 || i == 8 || i == 9) && D.getMonth() == 3 && D.getFullYear() == 2018) || // Пасха
      ((i == 1 || i == 2) && D.getMonth() == 4 && D.getFullYear() > 1917 && D.getFullYear() < 2018) || // Праздник Весны и Труда
      ((i == 1) && D.getMonth() == 4 && D.getFullYear() > 2017) || // Праздник Весны и Труда Украина
      (i == 8 && D.getMonth() == 4 && D.getFullYear() > 2013) || // День Победы Украина
      (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
      (i == 5 && D.getMonth() == 5 && D.getFullYear() == 2017) || // Троица
      (i == 28 && D.getMonth() == 4 && D.getFullYear() == 2018) || // Троица
      (i == 28 && D.getMonth() == 5 && D.getFullYear() >= 2017) || // день Конституции Украины
      ((i == 29 || i == 30) && D.getMonth() == 5 && D.getFullYear() == 2018) || // день Конституции Украины
      (i == 24 && D.getMonth() == 7 && D.getFullYear() > 1991) || // День Независимости Украины
      ((i == 24 || i == 25 || i == 26) && D.getMonth() == 7 && D.getFullYear() == 2017) || // День Независимости Украины
      (i == 25 && D.getMonth() == 7 && D.getFullYear() == 2018) || // День Независимости Украины
      (i == 14 && D.getMonth() == 9 && D.getFullYear() > 2014) || // День защитника Украины
      (i == 16 && D.getMonth() == 9 && D.getFullYear() == 2017) || // День защитника Украины
      (i == 15 && D.getMonth() == 9 && D.getFullYear() == 2018) || // День защитника Украины
      (i == 25 && D.getMonth() == 11 && D.getFullYear() >= 2017) || // Рождество католическое
      (i == 24 && D.getMonth() == 11 && D.getFullYear() == 2018) || // Рождество католическое
      ((i == 30 || i == 31) && D.getMonth() == 11 && D.getFullYear() >= 2017) // Новый год
     ) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="holiday today">' + i;
      }else{
        calendar += '<td class="holiday">' + i;
      }
      }else{
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }else{
      calendar += '<td>' + i;
    }
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}
// переключатель Сегодня
document.querySelector('#calendar2 tfoot tr td').onclick = function() {
  //Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month));
  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
}
//End---Календарь-------------------------------------------------------------------------------------
/*EoF*/
