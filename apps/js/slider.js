//--- Slider ---------------------------------------------------------------------------------------
addScript('../../js/jquery.elz.min.js');
$( document ).ready(function() {
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
});
/*Input radio*/
document.onmouseover   = function(e) {
  var el = e.target || window.event.srcElement;
  if (el.className == "zoomLens") {reCheckedRadio();}
}
/*Slider*/
  document.onclick = function(e) {
    var el = e.target || window.event.srcElement;
//    if (el.className == "zoomContainer") {reCheckedRadio();}
    if (el.className == "zoomWindow") {reCheckedRadio();}
  //  if (el.className == "zoomWindowContainer") {reCheckedRadio();}
    if (el.className == "sprev") {
      prevDiv = el.parentNode;
      slbarDiv = prevDiv.nextElementSibling;
      sliderDiv = slbarDiv.children[0];
      prevSlider(sliderDiv);
    }
    if (el.className == "bttnsmbl f-left prev") {
      slbarDiv = el.nextElementSibling;
      sliderDiv = slbarDiv.children[0];
      prevSlider(sliderDiv);
    }
    if (el.className == "snext") {
      nextDiv = el.parentNode;
      slbarDiv = nextDiv.previousElementSibling;
      sliderDiv = slbarDiv.children[0];
      nextSlider(sliderDiv);
    }
    if (el.className == "bttnsmbl f-left dhr next") {
      slbarDiv = el.previousElementSibling;
      sliderDiv = slbarDiv.children[0];
      nextSlider(sliderDiv);
    }
  }
  document.onmousedown = function(e) {
    var el = e.target || window.event.srcElement;
    if (el.className == "bttnsmbl slider dhtr") {
      //alert(el.className);
      //alert(el.id);
      sliderDiv = el;
      if(($('body').hasClass('nts')) == true) {moveSlider(e,sliderDiv);} else {nextSlider(sliderDiv);}
    }
    if (el.className == "snumb") {
      sliderDiv = el.parentNode;
      if(($('body').hasClass('nts')) == true) {moveSlider(e,sliderDiv);} else {nextSlider(sliderDiv);}
    }
  }

  $("input[name=rustiquebullee]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorTPN = 'inset 0 0 0 300px rgba(211,193,157,.4), ' + boxShadow;
    colorRP = 'inset 0 0 0 300px rgba(219,160,125,.1), ' + boxShadow;
    colorQ = 'inset 0 0 0 300px rgba(233,172,53,.4), ' + boxShadow;
    colorGN = 'inset 0 0 0 300px rgba(175,177,178,.4), ' + boxShadow;
    if ($("#radio011").prop("checked")) {$(".rustiquebulleeZ").css("box-shadow", colorTPN)}
    //if ($("#radio011").prop("checked")) {$(".rustiquebullee0 #jpg").css("box-shadow", colorTPN)}
    if ($("#radio012").prop("checked")) {$(".rustiquebulleeZ").css("box-shadow", colorRP)}
    //if ($("#radio012").prop("checked")) {$(".rustiquebullee0 #jpg").css("box-shadow", colorRP)}
    if ($("#radio013").prop("checked")) {$(".rustiquebulleeZ").css("box-shadow", colorQ)}
    //if ($("#radio013").prop("checked")) {$(".rustiquebullee0 #jpg").css("box-shadow", colorQ)}
    if ($("#radio014").prop("checked")) {$(".rustiquebulleeZ").css("box-shadow", colorGN)}
    //if ($("#radio014").prop("checked")) {$(".rustiquebullee0 #jpg").css("box-shadow", colorGN)}
  });
  $("input[name=pierredulot]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorTPN = 'inset 0 0 0 300px rgba(211,193,157,.1), ' + boxShadow;
    colorRP = 'inset 0 0 0 300px rgba(219,160,125,.4), ' + boxShadow;
    colorQ = 'inset 0 0 0 300px rgba(233,172,53,.4), ' + boxShadow;
    colorGN = 'inset 0 0 0 300px rgba(175,177,178,.4), ' + boxShadow;
    if ($("#radio021").prop("checked")) {$(".pierredulotZ").css("box-shadow", colorTPN)}
    //if ($("#radio021").prop("checked")) {$(".pierredulot0 #jpg").css("box-shadow", colorTPN)}
    if ($("#radio022").prop("checked")) {$(".pierredulotZ").css("box-shadow", colorRP)}
    //if ($("#radio022").prop("checked")) {$(".pierredulot0 #jpg").css("box-shadow", colorRP)}
    if ($("#radio023").prop("checked")) {$(".pierredulotZ").css("box-shadow", colorQ)}
    //if ($("#radio023").prop("checked")) {$(".pierredulot0 #jpg").css("box-shadow", colorQ)}
    if ($("#radio024").prop("checked")) {$(".pierredulotZ").css("box-shadow", colorGN)}
    //if ($("#radio024").prop("checked")) {$(".pierredulot0 #jpg").css("box-shadow", colorGN)}
  });
  $("input[name=collegiale]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorSc = 'inset 0 0 0 300px rgba(226,194,173,.4), ' + boxShadow;
    colorRP = 'inset 0 0 0 300px rgba(219,160,125,.4), ' + boxShadow;
    colorQ = 'inset 0 0 0 300px rgba(233,172,53,.1), ' + boxShadow;
    if ($("#radio031").prop("checked")) {$(".collegialeZ").css("box-shadow", colorSc)}
    //if ($("#radio031").prop("checked")) {$(".collegiale0 #jpg").css("box-shadow", colorSc)}
    if ($("#radio032").prop("checked")) {$(".collegialeZ").css("box-shadow", colorRP)}
    //if ($("#radio032").prop("checked")) {$(".collegiale0 #jpg").css("box-shadow", colorRP)}
    if ($("#radio033").prop("checked")) {$(".collegialeZ").css("box-shadow", colorQ)}
    //if ($("#radio033").prop("checked")) {$(".collegiale0 #jpg").css("box-shadow", colorQ)}
  });
  $("input[name=florence]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorTPN = 'inset 0 0 0 300px rgba(211,193,157,.4), ' + boxShadow;
    colorRP = 'inset 0 0 0 300px rgba(219,160,125,.1), ' + boxShadow;
    colorQ = 'inset 0 0 0 300px rgba(233,172,53,.4), ' + boxShadow;
    if ($("#radio041").prop("checked")) {$(".florenceZ").css("box-shadow", colorTPN)}
    //if ($("#radio041").prop("checked")) {$(".florence0 #jpg").css("box-shadow", colorTPN)}
    if ($("#radio042").prop("checked")) {$(".florenceZ").css("box-shadow", colorRP)}
    //if ($("#radio042").prop("checked")) {$(".florence0 #jpg").css("box-shadow", colorRP)}
    if ($("#radio043").prop("checked")) {$(".florenceZ").css("box-shadow", colorQ)}
    //if ($("#radio043").prop("checked")) {$(".florence0 #jpg").css("box-shadow", colorQ)}
  });
  $("input[name=abbaye]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorTPN = 'inset 0 0 0 300px rgba(211,193,157,.4), ' + boxShadow;
    colorRP = 'inset 0 0 0 300px rgba(219,160,125,.4), ' + boxShadow;
    colorGa = 'inset 0 0 0 300px rgba(238,213,185,.1), ' + boxShadow;
    if ($("#radio051").prop("checked")) {$(".abbayeZ").css("box-shadow", colorTPN)}
    //if ($("#radio051").prop("checked")) {$(".abbaye0 #jpg").css("box-shadow", colorTPN)}
    if ($("#radio052").prop("checked")) {$(".abbayeZ").css("box-shadow", colorRP)}
    //if ($("#radio052").prop("checked")) {$(".abbaye0 #jpg").css("box-shadow", colorRP)}
    if ($("#radio053").prop("checked")) {$(".abbayeZ").css("box-shadow", colorGa)}
    //if ($("#radio053").prop("checked")) {$(".abbaye0 #jpg").css("box-shadow", colorGa)}
  });
  $("input[name=beauregard]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorV = 'inset 0 0 0 300px rgba(232,214,188,.4), ' + boxShadow;
    colorSab = 'inset 0 0 0 300px rgba(211,140,72,.1), ' + boxShadow;
    if ($("#radio061").prop("checked")) {$(".beauregardZ").css("box-shadow", colorV)}
    //if ($("#radio061").prop("checked")) {$(".beauregard0 #jpg").css("box-shadow", colorV)}
    if ($("#radio062").prop("checked")) {$(".beauregardZ").css("box-shadow", colorSab)}
    //if ($("#radio062").prop("checked")) {$(".beauregard0 #jpg").css("box-shadow", colorSab)}
  });
  $("input[name=ghisa]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorM = 'inset 0 0 0 300px rgba(232,214,188,.1), ' + boxShadow;
    colorGN = 'inset 0 0 0 300px rgba(175,177,178,.5), ' + boxShadow;
    colorTPN = 'inset 0 0 0 300px rgba(211,193,157,.5), ' + boxShadow;
    if ($("#radio081").prop("checked")) {$(".ghisaZ").css("box-shadow", colorM)}
    //if ($("#radio081").prop("checked")) {$(".beauregard0 #jpg").css("box-shadow", colorM)}
    if ($("#radio082").prop("checked")) {$(".ghisaZ").css("box-shadow", colorGN)}
    //if ($("#radio082").prop("checked")) {$(".beauregard0 #jpg").css("box-shadow", colorGN)}
    if ($("#radio083").prop("checked")) {$(".ghisaZ").css("box-shadow", colorTPN)}
    //if ($("#radio083").prop("checked")) {$(".beauregard0 #jpg").css("box-shadow", colorTPN)}
  });
  $("input[name=nevada]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorTPN = 'inset 0 0 0 300px rgba(211,193,157,.5), ' + boxShadow;
    colorGCn = 'inset 0 0 0 300px rgba(208,212,215,.1), ' + boxShadow;
    if ($("#radio091").prop("checked")) {$(".nevadaZ").css("box-shadow", colorTPN)}
    //if ($("#radio091").prop("checked")) {$(".nevada0 #jpg").css("box-shadow", colorTPN)}
    if ($("#radio092").prop("checked")) {$(".nevadaZ").css("box-shadow", colorGCn)}
    //if ($("#radio092").prop("checked")) {$(".nevada0 #jpg").css("box-shadow", colorGCn)}
  });
  $("input[name=tennessee]").change( function() {
    boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
    colorBD = 'inset 0 0 0 300px rgba(157,115,73,0), ' + boxShadow;
    colorBL = 'inset 0 0 0 300px rgba(155,120,89,0), ' + boxShadow;
    colorBP = 'inset 0 0 0 300px rgba(157,115,73,.5), ' + boxShadow;
    colorT = 'inset 0 0 0 300px rgba(141,126,119,.5), ' + boxShadow;
    colorGta = 'inset 0 0 0 300px rgba(173,176,178,0), ' + boxShadow;
    //if ($("#radio101").prop("checked")) {$("#imgtennessee").removeClass('tennesseeD0 tennesseeL0 tennesseeG0').addClass('tennesseeD0');}
    //if ($("#radio102").prop("checked")) {$("#imgtennessee").removeClass('tennesseeD0 tennesseeL0 tennesseeG0').addClass('tennesseeL0');}
    //if ($("#radio103").prop("checked")) {$("#imgtennessee").removeClass('tennesseeD0 tennesseeL0 tennesseeG0').addClass('tennesseeG0');}
    //if ($("#radio104").prop("checked")) {$("#imgtennessee").removeClass('tennesseeD0 tennesseeL0 tennesseeG0').addClass('tennesseeG0');}
    //if ($("#radio105").prop("checked")) {$("#imgtennessee").removeClass('tennesseeD0 tennesseeL0 tennesseeG0').addClass('tennesseeG0');}
    $("#tDZ").removeClass('dbvo dnvo').addClass('dnvo');
    $("#tLZ").removeClass('dbvo dnvo').addClass('dnvo');
    $("#tGZ").removeClass('dbvo dnvo').addClass('dnvo');
    if ($("#radio101").prop("checked")) {$("#tDZ").removeClass('dbvo dnvo').addClass('dbvo');}
    if ($("#radio102").prop("checked")) {$("#tLZ").removeClass('dbvo dnvo').addClass('dbvo');}
    if ($("#radio103").prop("checked")) {$("#tGZ").removeClass('dbvo dnvo').addClass('dbvo');}
    if ($("#radio104").prop("checked")) {$("#tGZ").removeClass('dbvo dnvo').addClass('dbvo');}
    if ($("#radio105").prop("checked")) {$("#tGZ").removeClass('dbvo dnvo').addClass('dbvo');}
    onElevateZoom('.imgElZoom');
    if ($("#radio101").prop("checked")) {$(".tennesseeDZ").css("box-shadow", boxShadow)}
    //if ($("#radio101").prop("checked")) {$(".tennesseeD0 #jpg").css("box-shadow", boxShadow)}
    if ($("#radio102").prop("checked")) {$(".tennesseeLZ").css("box-shadow", boxShadow)}
    //if ($("#radio102").prop("checked")) {$(".tennesseeL0 #jpg").css("box-shadow", boxShadow)}
    if ($("#radio103").prop("checked")) {$(".tennesseeGZ").css("box-shadow", colorBP)}
    //if ($("#radio103").prop("checked")) {$(".tennesseeG0 #jpg").css("box-shadow", colorBP)}
    if ($("#radio104").prop("checked")) {$(".tennesseeGZ").css("box-shadow", colorT)}
    //if ($("#radio104").prop("checked")) {$(".tennesseeG0 #jpg").css("box-shadow", colorT)}
    if ($("#radio105").prop("checked")) {$(".tennesseeGZ").css("box-shadow", boxShadow)}
    //if ($("#radio105").prop("checked")) {$(".tennesseeG0 #jpg").css("box-shadow", boxShadow)}
  });
/*getZoom();*/
});

function prevSlider(el) {
  sliderElem = el;
  slbarElem = sliderElem.parentNode;
  spanElem = sliderElem.children[0];
  slnavElem = slbarElem.parentNode;
  slwrapElem = slnavElem.parentNode;
  slnumElem = slnavElem.nextElementSibling;
  prevElem = slnavElem.children[0];
  nextElem = slnavElem.children[2];
  slnumKolvo = slwrapElem.children.length - 2;
  slnumCurrent = spanElem.dataset.after;
  slnumOld = slnumCurrent;
  rightEdge = slbarElem.offsetWidth - sliderElem.offsetWidth - 2;
  kolSegment = slnumKolvo - 1;
  stepPos = rightEdge / kolSegment;
  if (slnumCurrent == 1) {
    slnumCurrent = slnumKolvo;
    newLeft = rightEdge;
  }
  else {
    slnumCurrent = slnumCurrent - 1;
    newLeft = stepPos * (slnumCurrent - 1);
  }
  sliderElem.style.left = newLeft + 'px';
  spanElem.dataset.after = slnumCurrent;
  sliderElem.dataset.hint = slnumCurrent + ' из ' + slnumKolvo;
  if (slnumCurrent == 1) {prevElem.dataset.hint = 'Последний'; nextElem.dataset.hint = 'Следующий';}
  else {
    if (slnumCurrent == slnumKolvo) {prevElem.dataset.hint = 'Предыдущий'; nextElem.dataset.hint = 'Первый';}
    else {prevElem.dataset.hint = 'Предыдущий'; nextElem.dataset.hint = 'Следующий';}
  }

  $(slwrapElem.children[Number(slnumOld) + 1]).removeClass('dbvo');
  //$(slwrapElem.children[Number(slnumOld) + 1]).addClass('dnvo');
  //setTimeout(function() {$(slwrapElem.children[Number(slnumOld) + 1]).removeClass('dnvo');}, 500);
  //$(slwrapElem.children[Number(slnumOld) + 1]).removeClass('dnvo');
  //setTimeout(function() {$(slwrapElem.children[Number(slnumCurrent) + 1]).addClass('dbvo');}, 500);

  $(slwrapElem.children[Number(slnumCurrent) + 1]).addClass('dbvo');
  return false;
} //end function prevSlider(el)

function nextSlider(el) {
  sliderElem = el;
  slbarElem = sliderElem.parentNode;
  spanElem = sliderElem.children[0];
  slnavElem = slbarElem.parentNode;
  slwrapElem = slnavElem.parentNode;
  slnumElem = slnavElem.nextElementSibling;
  prevElem = slnavElem.children[0];
  nextElem = slnavElem.children[2];
  slnumKolvo = slwrapElem.children.length - 2;
  slnumCurrent = spanElem.dataset.after;
  slnumOld = slnumCurrent;
  slnumCurrentN = slnumCurrent;
  rightEdge = slbarElem.offsetWidth - sliderElem.offsetWidth - 2;
  kolSegment = slnumKolvo - 1;
  stepPos = rightEdge / kolSegment;
  if (slnumCurrent == slnumKolvo) {
    slnumCurrent = 1;
    newLeft = 0;
  }
  else {
    slnumCurrent = Number(slnumCurrentN) + 1;
    newLeft = stepPos * (slnumCurrent - 1);
  }
  sliderElem.style.left = newLeft + 'px';
  spanElem.dataset.after = slnumCurrent;
  sliderElem.dataset.hint = slnumCurrent + ' из ' + slnumKolvo;
  if (slnumCurrent == 1) {prevElem.dataset.hint = 'Последний'; nextElem.dataset.hint = 'Следующий';}
  else {
    if (slnumCurrent == slnumKolvo) {prevElem.dataset.hint = 'Предыдущий'; nextElem.dataset.hint = 'Первый';}
    else {prevElem.dataset.hint = 'Предыдущий'; nextElem.dataset.hint = 'Следующий';}
  }
  $(slwrapElem.children[Number(slnumOld) + 1]).removeClass('dbvo');
  $(slwrapElem.children[Number(slnumCurrent) + 1]).addClass('dbvo');
  return false;
} //end function nextSlider(el)

function moveSlider(e,el) {
  //sliderElem = document.getElementById(idElem);
  sliderElem = el;
  slbarElem = sliderElem.parentNode;
  spanElem = sliderElem.children[0];
  slnavElem = slbarElem.parentNode;
  slwrapElem = slnavElem.parentNode;
  slnumElem = slnavElem.nextElementSibling;
  prevElem = slnavElem.children[0];
  nextElem = slnavElem.children[2];
  slnumKolvo = slwrapElem.children.length - 2;
  slnumCurrent = 1;
  slnumOld = slnumCurrent;
  //*sliderElem.dataset.hint = slnumCurrent + ' из ' + slnumKolvo;
  /*sliderElem.onmousedown = function(e) {*/
  sliderCoords = getCoords(sliderElem);
  shiftX = e.pageX - sliderCoords.left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали
  slbarCoords = getCoords(slbarElem);
  movSl = false;
  document.onmousemove = function(e) {
    movSl = true;
    //  вычесть координату родителя, т.к. position: relative
    newLeft = e.pageX - shiftX - slbarCoords.left;
    rightEdge = slbarElem.offsetWidth - sliderElem.offsetWidth - 2;
    // привязка позиции слайдера к точкам слайдбара
    kolSegment = slnumKolvo - 1;
    stepPos = rightEdge / kolSegment;
    stepPosC = stepPos / 2;
    begSegment = 0;
    cenSegment = stepPosC;
    endSegment = stepPos;
    for (i = 1; i < slnumKolvo; i++) {
      if ((newLeft > cenSegment) && (newLeft < endSegment)) {
        newLeftTime = endSegment;
        slnumOld = slnumCurrent;
        slnumCurrent = i+1;
      }
      if ((newLeft < cenSegment) && (newLeft > begSegment)) {
        newLeftTime = begSegment;
        slnumOld = slnumCurrent;
        slnumCurrent = i;
      }
      begSegment = begSegment + stepPos;
      cenSegment = cenSegment + stepPos;
      endSegment = endSegment + stepPos;
    }
    // курсор ушёл вне слайдбара
    if (newLeft < 0) {
      newLeftTime = 0;
      slnumOld = slnumCurrent;
      slnumCurrent = 1;
    }
    if (newLeft > rightEdge) {
      newLeftTime = rightEdge;
      slnumOld = slnumCurrent;
      slnumCurrent = slnumKolvo;
    }
    newLeft = newLeftTime;
    sliderElem.style.left = newLeft + 'px';
    spanElem.dataset.after = slnumCurrent;
    sliderElem.dataset.hint = slnumCurrent + ' из ' + slnumKolvo;
    if (slnumCurrent == 1) {prevElem.dataset.hint = 'Последний'; nextElem.dataset.hint = 'Следующий';}
    else {
      if (slnumCurrent == slnumKolvo) {prevElem.dataset.hint = 'Предыдущий'; nextElem.dataset.hint = 'Первый';}
      else {prevElem.dataset.hint = 'Предыдущий'; nextElem.dataset.hint = 'Следующий';}
    }
    $(slwrapElem.children[Number(slnumOld) + 1]).removeClass('dbvo');
    $(slwrapElem.children[Number(slnumCurrent) + 1]).addClass('dbvo');
  }
  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
  //*if (!movSl) {nextSlider(sliderDiv);}
  return false; // disable selection start (cursor change)
  //***
  sliderElem.ondragstart = function() {
    return false;
  };
  //***
  function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  };
}; //end function moveSlider(el)
/*Zoom*/
function offElevateZoom(classImage) {
  $('.zoomContainer').remove();
  $(classImage).removeData('elevateZoom');
}; //end function offElevateZoom(classImage)

function onElevateZoom(classImage) {
  offElevateZoom(classImage);
  if (($('body').hasClass('l-wbw'))) {
    $(classImage).elevateZoom(zoomConfigW);
  } else {
    $(classImage).elevateZoom(zoomConfig);
  }
}; //end function onElevateZoom(classImage)
/*Zoom*/
function reCheckedRadio(){
  boxShadow = 'inset 0 0 8px 1px rgba(255,255,255,1), inset 0 0 12px 1px rgba(255,255,255,1), inset 0 0 16px 1px rgba(255,255,255,1)';
  $(".rustiquebulleeZ").css("box-shadow", boxShadow);
  document.getElementById('radio011').checked = false;
  document.getElementById('radio012').checked = true;
  document.getElementById('radio013').checked = false;
  document.getElementById('radio014').checked = false;
  $(".pierredulotZ").css("box-shadow", boxShadow);
  document.getElementById('radio021').checked = true;
  document.getElementById('radio022').checked = false;
  document.getElementById('radio023').checked = false;
  document.getElementById('radio024').checked = false;
  $(".collegialeZ").css("box-shadow", boxShadow);
  document.getElementById('radio031').checked = false;
  document.getElementById('radio032').checked = false;
  document.getElementById('radio033').checked = true;
  $(".florenceZ").css("box-shadow", boxShadow);
  document.getElementById('radio041').checked = false;
  document.getElementById('radio042').checked = true;
  document.getElementById('radio043').checked = false;
  $(".abbayeZ").css("box-shadow", boxShadow);
  document.getElementById('radio051').checked = false;
  document.getElementById('radio052').checked = false;
  document.getElementById('radio053').checked = true;
  $(".beauregardZ").css("box-shadow", boxShadow);
  document.getElementById('radio061').checked = false;
  document.getElementById('radio062').checked = true;
  $(".ghisaZ").css("box-shadow", boxShadow);
  document.getElementById('radio081').checked = true;
  document.getElementById('radio082').checked = false;
  document.getElementById('radio083').checked = false;
  $(".nevadaZ").css("box-shadow", boxShadow);
  document.getElementById('radio091').checked = false;
  document.getElementById('radio092').checked = true;
  if ($("#radio103").prop("checked")) {
    $(".tennesseeGZ").css("box-shadow", boxShadow);
    document.getElementById('radio103').checked = false;
    document.getElementById('radio104').checked = false;
    document.getElementById('radio105').checked = true;
  }
  if ($("#radio104").prop("checked")) {
    $(".tennesseeGZ").css("box-shadow", boxShadow);
    document.getElementById('radio103').checked = false;
    document.getElementById('radio104').checked = false;
    document.getElementById('radio105').checked = true;
  }
}
//End
