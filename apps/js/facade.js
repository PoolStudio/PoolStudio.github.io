//--- Facade ---------------------------------------------------------------------------------------
addScript('../../js/jquery.elz.min.js');
$( document ).ready(function() {
  bodyClassBegin = document.querySelector('body').className;
/*Zoom*/
zoomConfigW = {
  constrainType: 'width',
  responsive: true,
  scrollZoom: true,
  zoomType: "window",
  cursor: "crosshair",
  borderColour: "#000",
  lensBorder: 1,
  borderSize: 0,
  lensFadeIn:  100,
  lensFadeOut: 100,
  zoomTintFadeIn: 1,
  zoomTintFadeOut: 1,
  zoomWindowPosition: 10,
  zoomWindowOffetx: -20,
  zoomWindowWidth:600,
  zoomWindowHeight:400,
  zoomWindowFadeIn: 300,
  zoomWindowFadeOut: 300
};
zoomConfig = {
  responsive: true,
  zoomEnabled: true,
  scrollZoom: false,
  zoomType: "inner",
  cursor: "crosshair",
  borderColour: "#000",
  lensBorder: 1,
  borderSize: 0,
  lensFadeIn:  100,
  lensFadeOut: 100,
  zoomTintFadeIn: 1,
  zoomTintFadeOut: 1,
  zoomWindowFadeIn: 300,
  zoomWindowFadeOut: 300
};
onElevateZoom('.imgElZoom');
$(window).resize(function () {
  onElevateZoom('.imgElZoom');
  firstSlider();
  setScroll();
});
/*End Zoom*/
/*Slider*/
setScroll();
document.onclick = function(e) {
  var el = e.target || window.event.srcElement;
  if (el.className == "sprev") {
    prevDiv = el.parentNode;
    slbarDiv = prevDiv.nextElementSibling;
    sliderDiv = slbarDiv.children[0];
    slnavBttn(sliderDiv, 'prev');
  }
  if (el.className == "bttnsmbl f-left prev") {
    slbarDiv = el.nextElementSibling;
    sliderDiv = slbarDiv.children[0];
    slnavBttn(sliderDiv, 'prev');
  }
  if (el.className == "snext") {
    nextDiv = el.parentNode;
    slbarDiv = nextDiv.previousElementSibling;
    sliderDiv = slbarDiv.children[0];
    slnavBttn(sliderDiv, 'next');
  }
  if (el.className == "bttnsmbl f-left dhr next") {
    slbarDiv = el.previousElementSibling;
    sliderDiv = slbarDiv.children[0];
    slnavBttn(sliderDiv, 'next');
  }
  if (el.className == "inner") {
    prevDiv = el.parentNode;
    if (prevDiv.id == 'png') {
      prev1Div = prevDiv.parentNode;
      if (prev1Div.className == 'img-wrap') {
        prev2Div = prev1Div.parentNode;
        prev2DivCN = prev2Div.className;
        if (prev2DivCN.substr(prev2DivCN.length - 5) == 'slcur') {
          prev3Div = prev2Div.parentNode;
          if (prev3Div.className == 'scroll') {
            choiceSlrol(el, 'slcur');
          }
        } else {
          prev3Div = prev2Div.parentNode;
          if (prev3Div.className == 'scroll') {
            choiceSlrol(el, '');
  }}}}}
  if (el.className == 'sbleft') {
    slbutBttn(el, 'left');
  }
  if (el.className == 'dsbleft') {
    sbleftDiv = el.parentNode;
    slbutBttn(sbleftDiv, 'left');
  }
  if (el.className == 'dhr sbright') {
    slbutBttn(el, 'right');
  }
  if (el.className == 'dsbright') {
    sbrightDiv = el.parentNode;
    slbutBttn(sbrightDiv, 'right');
  }
  if (el.className == "zoomWindow") {reCheckRbColor();}
}
document.onmousedown = function(e) {
  var el = e.target || window.event.srcElement;
  if (el.className == "bttnsmbl slider dhtr") {
    //alert(el.className);
    //alert(el.id);
    sliderDiv = el;
    if(($('body').hasClass('nts')) == true) {moveSlnav(e,sliderDiv);} else {slnavBttn(sliderDiv, 'next');}
  }
  if (el.className == "snumb") {
    sliderDiv = el.parentNode;
    if(($('body').hasClass('nts')) == true) {moveSlnav(e,sliderDiv);} else {slnavBttn(sliderDiv, 'next');}
  }
  if (el.className == "sbslider") {
    sbbarDiv = el.parentNode;
    sbrightDiv = sbbarDiv.nextElementSibling;
    if(($('body').hasClass('nts')) == true) {moveScroll(e,el);} else {slbutBttn(sbrightDiv, 'right');}
  }
}
/*End Slider*/
/*Radio button*/
document.onmouseover   = function(e) {
  var el = e.target || window.event.srcElement;
  if (el.className == "zoomLens") {reCheckRbColor();}
}
$("input[name=cfrust]").change( function() {
  var rustcolor = 'rustPierreN rustSarlat rustDore';
  if ($("#radio011").prop("checked")) {$("#cfrust").removeClass(rustcolor).addClass('rustPierreN');}
  if ($("#radio012").prop("checked")) {$("#cfrust").removeClass(rustcolor).addClass('rustSarlat');}
  if ($("#radio013").prop("checked")) {$("#cfrust").removeClass(rustcolor).addClass('rustDore');}
});
$("input[name=cfassi]").change( function() {
  var assicolor = 'assiPierreN assiSarlat assiDore assiGris';
  if ($("#radio021").prop("checked")) {$("#cfassi").removeClass(assicolor).addClass('assiPierreN');}
  if ($("#radio022").prop("checked")) {$("#cfassi").removeClass(assicolor).addClass('assiSarlat');}
  if ($("#radio023").prop("checked")) {$("#cfassi").removeClass(assicolor).addClass('assiDore');}
  if ($("#radio024").prop("checked")) {$("#cfassi").removeClass(assicolor).addClass('assiGris');}
});
$("input[name=brique]").change( function() {
  boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
  cRoseToulouse = 'inset 0 0 0 300px rgba(242,145,97,.1), ' + boxShadow;
  cRoseToscaneB = 'inset 0 0 0 300px rgba(224,200,191,.4), ' + boxShadow;
  if ($("#radio031").prop("checked")) {$(".briqueZ").css("box-shadow", cRoseToulouse)}
  if ($("#radio032").prop("checked")) {$(".briqueZ").css("box-shadow", cRoseToscaneB)}
/*
  var assicolor = 'briqueZ briqueZC';
  if ($("#radio031").prop("checked")) {$("#briqZC").removeClass(assicolor).addClass('briqueZ');}
  if ($("#radio032").prop("checked")) {$("#briqZC").removeClass(assicolor).addClass('briqueZC');}
*/
});


$("input[name=pierreseche]").change( function() {
  boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
  cTonPierreNuance = 'inset 0 0 0 300px rgba(211,193,157,.4), ' + boxShadow;
  cBlanc = 'inset 0 0 0 300px rgba(252,252,252,0), ' + boxShadow;
  cAnthracite = 'inset 0 0 0 300px rgba(99,96,102,0), ' + boxShadow;
  if ($("#radio051").prop("checked")) {$("#psZ").removeClass('pierresecheZ').addClass('pierresecheB');}
  if ($("#radio052").prop("checked")) {$("#psZ").removeClass('pierresecheZ').addClass('pierresecheB');}
  if ($("#radio053").prop("checked")) {$("#psZ").removeClass('pierresecheB').addClass('pierresecheZ');}
  //onElevateZoom('.imgElZoom');
  if ($("#radio051").prop("checked")) {$(".pierresecheB").css("box-shadow", cTonPierreNuance)}
  if ($("#radio052").prop("checked")) {$(".pierresecheB").css("box-shadow", cBlanc)}
  if ($("#radio053").prop("checked")) {$(".pierresecheZ").css("box-shadow", cAnthracite)}
});

$("input[name=eclat]").change( function() {
  boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
  cTonPierreNuance = 'inset 0 0 0 300px rgba(211,193,157,.4), ' + boxShadow;
  cMetalE = 'inset 0 0 0 300px rgba(86,81,76,0), ' + boxShadow;
  if ($("#radio071").prop("checked")) {$("#eclatZ").removeClass('eclatZ').addClass('eclatP');}
  if ($("#radio072").prop("checked")) {$("#eclatZ").removeClass('eclatP').addClass('eclatZ');}
  //onElevateZoom('.imgElZoom');
  if ($("#radio071").prop("checked")) {$(".eclatP").css("box-shadow", cTonPierreNuance)}
  if ($("#radio072").prop("checked")) {$(".eclatZ").css("box-shadow", cMetalE)}
});


/*End Radio button*/
}); //End $( document ).ready(function() {
/*****************************************************************************************************/
/*Zoom function*/
/*****************************************************************************************************/
function offElevateZoom(classImage) {
  $('.zoomContainer').remove();
  $(classImage).removeData('elevateZoom');
}; //end function offElevateZoom(classImage)
/*****************************************************************************************************/
function onElevateZoom(classImage) {
  offElevateZoom(classImage);
  if (($('body').hasClass('l-wbw'))) {
    $(classImage).elevateZoom(zoomConfigW);
  } else {
    $(classImage).elevateZoom(zoomConfig);
  }
}; //end function onElevateZoom(classImage)
/*****************************************************************************************************/
function reCheckRbColor(){
  boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
  $(".briqueZ").css("box-shadow", boxShadow);
  document.getElementById('radio031').checked = true;
  document.getElementById('radio032').checked = false;
  $("#psZ").removeClass('pierresecheB').addClass('pierresecheZ');
  $(".pierresecheZ").css("box-shadow", boxShadow);
  document.getElementById('radio051').checked = false;
  document.getElementById('radio052').checked = false;
  document.getElementById('radio053').checked = true;

  $("#eclatZ").removeClass('eclatP').addClass('eclatZ');
  $(".eclatZ").css("box-shadow", boxShadow);
  document.getElementById('radio071').checked = false;
  document.getElementById('radio072').checked = true;



}; //End function reCheckRbColor(){
/*****************************************************************************************************/
/*End Zoom function*/
/*Slider function*/
/*****************************************************************************************************/
function firstSlider() {
  bodyClassCurr = document.querySelector('body').className;
  if (bodyClassCurr != bodyClassBegin) {
    bodyClassBegin = document.querySelector('body').className;
    $('.slnid').css('left', '0px');
    $('.slider').css('left', '0px');
    slnavElem = document.getElementsByClassName('slnav');
    slnumElem = document.getElementsByClassName('slnum');
    scrollElem = document.getElementsByClassName('scroll');
    for (var i = 0, scrL = scrollElem.length; i < scrL; i++) {
      slnavElem[i].children[0].dataset.hint = 'Последний';
      slnavElem[i].children[1].children[0].dataset.hint = '1 из ...';
      slnavElem[i].children[2].dataset.hint = 'Следующий';
      slnavElem[i].children[1].children[0].children[0].dataset.after = '1';
      slnidElem = scrollElem[i].children;
      $(slnumElem[i].children[0]).html(slnidElem[0].dataset.htxt);
      $(slnumElem[i].children[2]).html(slnidElem[0].dataset.ptxt1);
      $(slnumElem[i].children[3]).html(slnidElem[0].dataset.ptxt2);
      slnipName = slnumElem[i].children[1].className.slice(0, -2); //dimgElemClass.indexOf(" ")
      slnumOld = Number(slnumElem[i].children[1].className.replace(/\D+/g,""));
      if (slnumOld < 10) {slnumOldT = '0' + (slnumOld);} else {slnumOldT = '' + slnumOld;}
      $(slnumElem[i].children[1]).removeClass(slnipName+slnumOldT).addClass(slnipName+'01');
      for (var j = 0, slnL = slnidElem.length; j < slnL; j++) {
        $(slnidElem[j]).removeClass('slcur');
      }
      $(slnidElem[0]).addClass('slcur');
  }}
}; //End function firstSlider()
/*****************************************************************************************************/
function setScroll(el) {
  if (arguments.length == 0) {
    slnavElem = document.getElementsByClassName('slnav');
    slnumElem = document.getElementsByClassName('slnum');
    slrolElem = document.getElementsByClassName('slrol');
    scrollElem = document.getElementsByClassName('scroll');
    slbutElem = document.getElementsByClassName('slbut');
    for (var i = 0, scrL = scrollElem.length; i < scrL; i++) {
      slnidKol = scrollElem[i].children.length;
      sbsliderElem = slbutElem[i].children[1].children[0];
      if (slnidKol > 5) {
        slnumCurrN = Number(slnumElem[i].children[1].className.replace(/\D+/g,""));
        if (slnumCurrN < 10) {slnumCurrT = '0' + (slnumCurrN);} else {slnumCurrT = '' + slnumCurrN;}
        scrollElemChildLen =
        parseInt($(scrollElem[i].children[slnumCurrN - 1]).css('max-width')) +
        parseInt($(scrollElem[i].children[slnumCurrN - 1]).css('margin-right'));
        if (slnumCurrN > 3 && slnumCurrN < slnidKol-2) {
          lenScrol = (slnumCurrN - 3) * scrollElemChildLen;
        } else {
          if (slnumCurrN <= 3) {
            lenScrol = 0;
          } else {
            lenScrol = (slnidKol - 5) * scrollElemChildLen;
        }}
        sbleftElem = slbutElem[i].children[0];
        sbbarElem = slbutElem[i].children[1];
        sbrightElem = slbutElem[i].children[2];
        sbbarElemWidth = parseInt($(sbbarElem).css('width'));
        oneLen = sbbarElemWidth / slnidKol;
        fiveLen = Math.round((oneLen * 5) * 1) / 1;
        sbsliderLeft = lenScrol / scrollElemChildLen * oneLen;
        sbsliderLeftMax = Math.round((slnidKol - 5) * oneLen * 1) / 1;
        if (sbsliderLeft == 0) {sbleftElem.dataset.hint = 'Вконец'; sbrightElem.dataset.hint = 'Вперед';} else {if (sbsliderLeft == sbsliderLeftMax) {sbleftElem.dataset.hint = 'Назад'; sbrightElem.dataset.hint = 'Вначало';} else {sbleftElem.dataset.hint = 'Назад'; sbrightElem.dataset.hint = 'Вперед';}}
        $(slbutElem[i]).css('visibility', 'visible');
        $(sbsliderElem).css('width', fiveLen+'px');
        $(sbsliderElem).css('left', sbsliderLeft + 'px');
        $(scrollElem[i].children).css('left', '-' + lenScrol + 'px');
      } else { //if (slnidKol > 5) {
        $(slbutElem[i]).css('visibility', 'hidden');
        $(sbsliderElem).css('width', '0px');
      }
      if (slnidKol < 2) {
        $(slnavElem[i]).css('visibility', 'hidden');
        $(slnavElem[i]).css('display', 'none');
        $(slrolElem[i]).css('visibility', 'hidden');
        $(slrolElem[i]).css('display', 'none');
      }
    } //for (var i = 0, scrL = scrollElem.length; i < scrL; i++) {
  } else { //arguments.length == 0) {
    sliderElem = el;
    slbarElem = sliderElem.parentNode;
    slnavElem = slbarElem.parentNode;
    slnumElem = slnavElem.nextElementSibling;
    slrolElem = slnumElem.nextElementSibling;
    scrollElem = slrolElem.children[0];
    slnidKol = scrollElem.children.length;
    if (slnidKol > 5) {
      slnumCurrN = Number(slnumElem.children[1].className.replace(/\D+/g,""));
      if (slnumCurrN < 10) {slnumCurrT = '0' + (slnumCurrN);} else {slnumCurrT = '' + slnumCurrN;}
      scrollElemChildLen =
      parseInt($(scrollElem.children[slnumCurrN - 1]).css('max-width')) +
      parseInt($(scrollElem.children[slnumCurrN - 1]).css('margin-right'));
      if (slnumCurrN > 3 && slnumCurrN < slnidKol-2) {
        lenScrol = (slnumCurrN - 3) * scrollElemChildLen;
      } else {
        if (slnumCurrN <= 3) {
          lenScrol = 0;
        } else {
          lenScrol = (slnidKol - 5) * scrollElemChildLen;
      }}
      slbutElem = slrolElem.nextElementSibling;
      sbsliderElem = slbutElem.children[1].children[0];
      sbleftElem = slbutElem.children[0];
      sbbarElem = slbutElem.children[1];
      sbrightElem = slbutElem.children[2];
      sbbarElemWidth = parseInt($(sbbarElem).css('width'))-1.5;
      //oneLen = Math.round(sbbarElemWidth / slnidKol * 1) / 1;
      //fiveLen = Math.round(sbbarElemWidth / slnidKol * 5 * 1) / 1;
      oneLen = sbbarElemWidth / slnidKol;
      fiveLen = Math.round((oneLen * 5) * 1) / 1;
      sbsliderLeft = lenScrol / scrollElemChildLen * oneLen;
      sbsliderLeftMax = Math.round((slnidKol - 5) * oneLen * 1) / 1;
      if (sbsliderLeft > sbsliderLeftMax) {sbsliderLeft = sbsliderLeftMax;}
      if (sbsliderLeft == 0) {sbleftElem.dataset.hint = 'Вконец'; sbrightElem.dataset.hint = 'Вперед';} else {if (sbsliderLeft == sbsliderLeftMax) {sbleftElem.dataset.hint = 'Назад'; sbrightElem.dataset.hint = 'Вначало';} else {sbleftElem.dataset.hint = 'Назад'; sbrightElem.dataset.hint = 'Вперед';}}
      $(slbutElem).css('visibility', 'visible');
      $(sbsliderElem).css('width', fiveLen+'px');
      $(sbsliderElem).css('left', sbsliderLeft + 'px');
      $(scrollElem.children).css('left', '-' + lenScrol + 'px');
    } else { //if (slnidKol > 5) {
      $(slbutElem).css('visibility', 'hidden');
      $(sbsliderElem).css('width', '0px');
    }
    if (slnidKol < 2) {
      $(slnavElem).css('visibility', 'hidden');
      $(slnavElem).css('display', 'none');
      $(slrolElem).css('visibility', 'hidden');
      $(slrolElem).css('display', 'none');
    }
  } //  } else { //arguments.length == 0) {
}; //End function setScroll(el) {
/*****************************************************************************************************/
function slnavBttn(el, direct) {
  sliderEl = el;
  slbarEl = sliderEl.parentNode;
  spanEl = sliderEl.children[0];
  slnavEl = slbarEl.parentNode;
  slwrapEl = slnavEl.parentNode;
  prevEl = slnavEl.children[0];
  nextEl = slnavEl.children[2];
  slnumEl = slnavEl.nextElementSibling;
  slgalEl = slnumEl.nextElementSibling;
  scrollEl = slgalEl.children[0];
  slnidKol = scrollEl.children.length;
  htxtEl = slnumEl.children[0];
  dimgEl = slnumEl.children[1];
  ptxt1El = slnumEl.children[2];
  ptxt2El = slnumEl.children[3];
  dimgElClass = dimgEl.className;
  slnipName = dimgElClass.slice(0, -2); //dimgElemClass.indexOf(" ")
  slnumCurr = Number(dimgElClass.replace(/\D+/g,""));
  slnumCurrent = spanEl.dataset.after;
  slnumOld = slnumCurrent;
  rightEdge = slbarEl.offsetWidth - sliderEl.offsetWidth - 2;
  kolSegment = slnidKol - 1;
  stepPos = rightEdge / kolSegment;
  if (direct == 'next') {
    if (slnumCurrent == slnidKol) {
      slnumCurrent = 1;
      newLeftS = 0;
    }else {
      slnumCurrent = Number(slnumCurrent) + 1;
      newLeftS = stepPos * (slnumCurrent - 1);
    }
  } else {
    if (slnumCurrent == 1) {
      slnumCurrent = slnidKol;
      newLeftS = rightEdge;
    }
    else {
      slnumCurrent = slnumCurrent - 1;
      newLeftS = stepPos * (slnumCurrent - 1);
    }
  }
  sliderEl.style.left = newLeftS + 'px';
  spanEl.dataset.after = slnumCurrent;
  sliderEl.dataset.hint = slnumCurrent + ' из ' + slnidKol;
  if (slnumCurrent == 1) {prevEl.dataset.hint = 'Последний'; nextEl.dataset.hint = 'Следующий';}
  else {
    if (slnumCurrent == slnidKol) {prevEl.dataset.hint = 'Предыдущий'; nextEl.dataset.hint = 'Первый';}
    else {prevEl.dataset.hint = 'Предыдущий'; nextEl.dataset.hint = 'Следующий';}
  }
  if (slnumOld < 10) {slnumOldT = '0' + (slnumOld);} else {slnumOldT = '' + slnumOld;}
  if (slnumCurrent < 10) {slnumCurrentT = '0' + (slnumCurrent);} else {slnumCurrentT = '' + slnumCurrent;}
  $(dimgEl).removeClass(slnipName+slnumOldT).addClass(slnipName+slnumCurrentT);
  $(htxtEl).html(scrollEl.children[slnumCurrent-1].dataset.htxt);
  $(ptxt1El).html(scrollEl.children[slnumCurrent-1].dataset.ptxt1);
  $(ptxt2El).html(scrollEl.children[slnumCurrent-1].dataset.ptxt2);
  $(scrollEl.children[Number(slnumOld) - 1]).removeClass('slcur');
  $(scrollEl.children[Number(slnumCurrent) - 1]).addClass('slcur');
  setScroll(sliderEl);
  return false;
} //end function prevSlnav(el)
/*****************************************************************************************************/
function choiceSlrol(elem, slcur) {
  prev0Div = elem.parentNode; //prevDiv.id == 'png'
  prev1Div = prevDiv.parentNode; //prev1Div.className == 'img-wrap'
  prev2Div = prev1Div.parentNode; //prev2Div.className.slice(0, -2) == 'slnid sem'
  scrollEl = prev2Div.parentNode; //prev3Div.className == 'scroll'
  slrolEl = prev3Div.parentNode; //prev3Div.className == 'slrol'
  slnumEl = slrolEl.previousElementSibling;
  slnavEl = slnumEl.previousElementSibling;
  slbarEl = slnavEl.children[1];
  sliderEl = slbarEl.children[0];
  spanEl = sliderEl.children[0];
  slnumOld = Number(spanEl.dataset.after);
  slnumCurr = Number(prev2Div.className.replace(/\D+/g,""));
  slnipEl = slnumEl.children[1];
  if (slcur == 'slcur') {
    slnumOld = slnumCurr;
    $(slnipEl.children[0].children[0]).css('border-color', 'rgba(123,123,123,1)');
    setTimeout("$(slnipEl.children[0].children[0]).css('border-color', 'rgba(232,232,232,1)')", 500);
    $(slnipEl.children[0].children[0]).css('filter', 'grayscale(100%)');
    setTimeout("$(slnipEl.children[0].children[0]).css('filter', 'none')", 500);
    $(slnipEl.children[0].children[0]).css('-webkit-filter', 'grayscale(100%)');
    setTimeout("$(slnipEl.children[0].children[0]).css('border-color', 'none')", 500);
  } else {
    slnidKol = scrollEl.children.length;
    htxtEl = slnumEl.children[0];
    dimgEl = slnumEl.children[1];
    ptxt1El = slnumEl.children[2];
    ptxt2El = slnumEl.children[3];
    dimgElClass = dimgEl.className;
    slnipName = dimgElClass.slice(0, -2); //dimgElClass.indexOf(" ")
    prevEl = slnavEl.children[0];
    nextEl = slnavEl.children[2];
    rightEdge = slbarEl.offsetWidth - sliderEl.offsetWidth - 2;
    kolSegment = slnidKol - 1;
    stepPos = rightEdge / kolSegment;
    slnumCurrent = slnumCurr;
    newLeftS = stepPos * (slnumCurrent - 1);
    sliderEl.style.left = newLeftS + 'px';
    spanEl.dataset.after = slnumCurrent;
    sliderEl.dataset.hint = slnumCurrent + ' из ' + slnidKol;
    if (slnumCurrent == 1) {
      prevEl.dataset.hint = 'Последний'; nextEl.dataset.hint = 'Следующий';
    } else {
      if (slnumCurrent == slnidKol) {
        prevEl.dataset.hint = 'Предыдущий'; nextEl.dataset.hint = 'Первый';
      } else {
        prevEl.dataset.hint = 'Предыдущий'; nextEl.dataset.hint = 'Следующий';
    }}
    if (slnumOld < 10) {slnumOldT = '0' + (slnumOld);} else {slnumOldT = '' + slnumOld;}
    if (slnumCurr < 10) {slnumCurrT = '0' + (slnumCurr);} else {slnumCurrT = '' + slnumCurr;}
    $(dimgEl).removeClass(slnipName+slnumOldT).addClass(slnipName+slnumCurrT);
    $(htxtEl).html(scrollEl.children[slnumCurr-1].dataset.htxt);
    $(ptxt1El).html(scrollEl.children[slnumCurr-1].dataset.ptxt1);
    $(ptxt2El).html(scrollEl.children[slnumCurr-1].dataset.ptxt2);
    $(scrollEl.children[Number(slnumOld) - 1]).removeClass('slcur');
    $(scrollEl.children[Number(slnumCurr) - 1]).addClass('slcur');
    setScroll(sliderEl);
  }
}; //end function choiceSlrol(elem, slcur)
/*****************************************************************************************************/
function slbutBttn(el, direct) {
  slbutElem = el.parentNode;
  slrolElem = slbutElem.previousElementSibling;
  sbleftElem = slbutElem.children[0];
  sbbarElem = slbutElem.children[1];
  sbrightElem = slbutElem.children[2];
  scrollElem = slrolElem.children[0];
  slnumElem = slrolElem.previousElementSibling;
  slnidKol = scrollElem.children.length;
  sbsliderElem = slbutElem.children[1].children[0];
  slnumCurrN = Number(slnumElem.children[1].className.replace(/\D+/g,""));
  //if (slnumCurrN < 10) {slnumCurrT = '0' + (slnumCurrN);} else {slnumCurrT = '' + slnumCurrN;}
  scrollElemChildLen =
  parseFloat($(scrollElem.children[slnumCurrN - 1]).css('max-width')) +
  parseFloat($(scrollElem.children[slnumCurrN - 1]).css('margin-right'));
  sbbarElemWidth = parseFloat($(sbbarElem).css('width')) ;
  oneLen = sbbarElemWidth / slnidKol;
  fiveLen = Math.round(oneLen * 5 * 1) / 1;
  slnidLeft = Math.abs(parseFloat($(scrollElem.children).css('left')));
  slnidLeftMax = (slnidKol - 5) * scrollElemChildLen;
  sbsliderLeft = parseFloat($(sbsliderElem).css('left'));
  sbsliderLeftMax = Math.round((slnidKol - 5) * oneLen * 1) / 1;
  rightEdge = sbbarElemWidth - fiveLen - 2;
  sbsliderLeftMax = rightEdge;
  if (direct == 'left') {
    if (slnidLeft == 0) {
      slnidLeftNew = slnidLeftMax;
      sbsliderLeftNew = sbsliderLeftMax;
    } else {
      slnidLeftOne = Math.floor(slnidLeft / scrollElemChildLen * 1) / 1;
      slnidLeftNew = scrollElemChildLen * slnidLeftOne;
      if (slnidLeft == slnidLeftNew) {
        slnidLeftNew = slnidLeftNew - scrollElemChildLen;
        sbsliderLeftNew = oneLen * slnidLeftOne - oneLen;
      } else {
        sbsliderLeftNew = oneLen * slnidLeftOne;
      }
    }
  } else { //direct == 'left')
    if (slnidLeft == slnidLeftMax) {
      slnidLeftNew = 0;
      sbsliderLeftNew = 0;
    } else {
      slnidLeftOne = Math.ceil(slnidLeft / scrollElemChildLen * 1) / 1;
      slnidLeftNew = scrollElemChildLen * slnidLeftOne;
      if (slnidLeft == slnidLeftNew) {
        slnidLeftNew = slnidLeftNew + scrollElemChildLen;
        sbsliderLeftNew = oneLen * slnidLeftOne + oneLen;
      } else {
        sbsliderLeftNew = oneLen * slnidLeftOne;
      }
      if (sbsliderLeftNew > sbsliderLeftMax) {sbsliderLeftNew = sbsliderLeftMax;}
    }
  }
  if (sbsliderLeftNew == 0) {sbleftElem.dataset.hint = 'Вконец'; sbrightElem.dataset.hint = 'Вперед';} else {if (sbsliderLeftNew == sbsliderLeftMax) {sbleftElem.dataset.hint = 'Назад'; sbrightElem.dataset.hint = 'Вначало';} else {sbleftElem.dataset.hint = 'Назад'; sbrightElem.dataset.hint = 'Вперед';}}
  $(sbsliderElem).css('width', fiveLen+'px');
  $(sbsliderElem).css('left', sbsliderLeftNew + 'px');
  $(scrollElem.children).css('left', '-' + slnidLeftNew + 'px');
} //End function slbutBttn(el, direct) {
/*****************************************************************************************************/
function moveSlnav(e,el) {
  sliderEl = el;
  slbarEl = sliderEl.parentNode;
  prevEl = slbarEl.previousElementSibling;
  nextEl = slbarEl.nextElementSibling;
  slnavEl = slbarEl.parentNode;
  slnumEl = slnavEl.nextElementSibling;
  slrolEl = slnumEl.nextElementSibling;
  scrollEl = slrolEl.children[0];
  slnidKol = scrollEl.children.length;
  snumbEl = sliderEl.children[0];
  htxtEl = slnumEl.children[0];
  slnipEl = slnumEl.children[1];
  ptxt1El = slnumEl.children[2];
  ptxt2El = slnumEl.children[3];
  slnipName = slnipEl.className.slice(0, -2); //dimgElemClass.indexOf(" ")
  rightEdge = slbarEl.offsetWidth - sliderEl.offsetWidth-2;
  oneLenSl = rightEdge / slnidKol;
  sliderCoords = getCoords(sliderEl);
  shiftX = e.pageX - sliderCoords.left;
  //shiftY = e.pageY - sliderCoords.top;
  slbarCoords = getCoords(slbarEl);
  oldLeftSl = e.pageX - shiftX - slbarCoords.left;
  document.onmousemove = function(e) {
    slnumCurrN = Number(slnumEl.children[1].className.replace(/\D+/g,""));
    slnumOldN = slnumCurrN;
    if (slnumOldN < 10) {slnumOldT = '0' + (slnumOldN);} else {slnumOldT = '' + slnumOldN;}
    newLeftSl = e.pageX - shiftX - slbarCoords.left;
    newLeftSlTime = newLeftSl;
    if (newLeftSl < 0) {newLeftSlTime = 0;}
    if (newLeftSl > rightEdge) {newLeftSlTime = rightEdge;}
    if (newLeftSlTime == oldLeftSl) {
      slnumCurrN = slnumOldN;
    } else {
      if (newLeftSlTime > oldLeftSl) {
        slnumCurrN = Math.ceil(newLeftSlTime / oneLenSl * 1) / 1;
      } else {
        slnumCurrN = Math.floor(newLeftSlTime / oneLenSl * 1) / 1 + 1;
      }
      if (slnumCurrN > slnidKol) {slnumCurrN = slnidKol;}
    }
    oldLeftSl = newLeftSlTime;
    if (slnumCurrN < 10) {slnumCurrT = '0' + (slnumCurrN);} else {slnumCurrT = '' + slnumCurrN;}
    newLeftSl = newLeftSlTime;
    sliderEl.style.left = newLeftSl + 'px';
    snumbEl.dataset.after = slnumCurrN;
    sliderEl.dataset.hint = slnumCurrN + ' из ' + slnidKol;
    if (slnumCurrN == 1) {prevEl.dataset.hint = 'Последний'; nextEl.dataset.hint = 'Следующий';} else {if (slnumCurrN == slnidKol) {prevEl.dataset.hint = 'Предыдущий'; nextEl.dataset.hint = 'Первый';} else {prevEl.dataset.hint = 'Предыдущий'; nextEl.dataset.hint = 'Следующий';}}
    $(slnipEl).removeClass(slnipName+slnumOldT).addClass(slnipName+slnumCurrT);
    $(htxtEl).html(scrollEl.children[slnumCurrN-1].dataset.htxt);
    $(ptxt1El).html(scrollEl.children[slnumCurrN-1].dataset.ptxt1);
    $(ptxt2El).html(scrollEl.children[slnumCurrN-1].dataset.ptxt2);
    $(scrollEl.children[slnumOldN - 1]).removeClass('slcur');
    $(scrollEl.children[slnumCurrN - 1]).addClass('slcur');
    setScroll(sliderEl);
    document.onmouseup = function() {document.onmousemove = document.onmouseup = null;};
    return false; // disable selection start (cursor change)
  } //End document.onmousemove = function(e) {
  sliderEl.ondragstart = function() {return false;};
} //End function moveSlnav(e,el) {
/*****************************************************************************************************/
function moveScroll(e,el) {
  sbsliderElem = el;
  sbbarElem = sbsliderElem.parentNode;
  slbutElem = sbbarElem.parentNode;
  slrolElem = slbutElem.previousElementSibling;
  scrollElem = slrolElem.children[0];
  slnumElem = slrolElem.previousElementSibling;
  slnidKol = scrollElem.children.length;
  slnumCurrN = Number(slnumElem.children[1].className.replace(/\D+/g,""));
  if (slnumCurrN < 10) {slnumCurrT = '0' + (slnumCurrN);} else {slnumCurrT = '' + slnumCurrN;}
  scrollElemChildLen =
  Math.round(parseInt($(scrollElem.children[slnumCurrN - 1]).css('max-width'))* 1) / 1 +
  Math.round(parseInt($(scrollElem.children[slnumCurrN - 1]).css('margin-right'))* 1) / 1;
  scrollElemLen = scrollElemChildLen * (slnidKol - 5);
  rightEdge = sbbarElem.offsetWidth - sbsliderElem.offsetWidth-2;
  sbsliderCoords = getCoords(sbsliderElem);
  shiftX = e.pageX - sbsliderCoords.left;
  //shiftY = e.pageY - sbsliderCoords.top;
  sbbarCoords = getCoords(sbbarElem);
  document.onmousemove = function(e) {
    newLeftS = e.pageX - shiftX - sbbarCoords.left;
    newLeftSTime = newLeftS;
    if (newLeftS < 0) {newLeftSTime = 0;}
    if (newLeftS > rightEdge) {newLeftSTime = rightEdge;}
    newLeftR = scrollElemLen / rightEdge * newLeftSTime;
    slnidLeftNew = newLeftR;
    newLeftS = newLeftSTime;
    sbsliderElem.style.left = newLeftS + 'px';
    $(scrollElem.children).css('left', '-' + slnidLeftNew + 'px');
    document.onmouseup = function() {document.onmousemove = document.onmouseup = null;};
    return false; // disable selection start (cursor change)
  } //End document.onmousemove = function(e) {
  sbsliderElem.ondragstart = function() {return false;};
} //End function moveScroll(e,el) {
/* function getCoords(elem) **********************************************************************/
function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
} //End function getCoords(elem) { // кроме IE8-
/*End Slider function*/
//End
