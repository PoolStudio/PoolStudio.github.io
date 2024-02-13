//--- photo ---------------------------------------------------------------------------------------
function photos() {
  afoto = param('foto');
  if (afoto == '') {
    afoto = 'ph00';
    kfoto = 3;
    nfoto = 'Фотографии бассейнов';
  } else {
    if (afoto == 'ph00') {kfoto = 3; nfoto = 'Фотографии бассейнов';}
    if (afoto == 'ph01') {kfoto = 30; nfoto = 'Бассейн в пансионате';}
    if (afoto == 'ph02') {kfoto = 11; nfoto = 'Общественный бассейн';}
    if (afoto == 'ph03') {kfoto = 39; nfoto = 'Частный бассейн';}
    if (afoto == 'ph04') {kfoto = 30; nfoto = 'Скиммерный бассейн';}
    if (afoto == 'ph05') {kfoto = 22; nfoto = 'Переливной бассейн';}
    if (afoto == 'ph06') {kfoto = 19; nfoto = 'Строительство бассейна';}
  }
  printPhoto(afoto, kfoto, nfoto);
}
function printPhoto(anum, fkol, aname) {
  document.write ('</a><div class="block"><div class="b-wrap"><div class="b-cont"><a id="ph" name="ph"></div></div></div>');
  document.write ('<div class="sectors"><div class="s-wrap"><div class="s-cont">');
  document.write ('<h3 id="taname" class="t-center t-pb">'+aname+'</h3>');
  document.write ('<div class="fc-img">');
  for (i = 1; i <= fkol; i++) {
    if (i < 10) {fki = '0' + i;} else {fki = i;}
    document.write ('<style>');
    document.write ('.ord'+i+' {order: '+i+';}');
    document.write ('.fimg'+fki+' {width: 100%; height: auto; margin: 0; float: none;}');
    if (anum == 'ph00') {df = '';} else {df = anum.substr(2,2)+'/';}
    document.write ('.fimg'+fki+' #img {background-image: url(../../images/info/photo/'+df+'f'+fki+'.jpg);}');
    if (anum == 'ph00') {wf = 600; hf = 400;} else {wf = 500; hf = 375;}
    document.write ('.fimg'+fki+' #img .inner {padding-top: calc('+hf+' / '+wf+' * 100%); /* высота/ширина изображения */}');
    document.write ('</style>');
    document.write ('<div class="fi-img ord'+i+'"><div class="fimg'+fki+'"><div class="img-wrap"><span id="img" role="img" aria-label="Фото"><span class="inner"></span></span></div></div></div>');
  }
  document.write ('</div>');
  document.write ('</div></div></div>');
}
//End
