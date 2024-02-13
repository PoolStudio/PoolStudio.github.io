//--- rpool ---------------------------------------------------------------------------------------
/*$( document ).ready(function() {*/
  txtdateset(1);
  calcCost();
  $('#purppl').click(function(){frbfCl('purppl', 1, 2);});
  $('#shappl').click(function(){frbfCl('shappl', 2, 8);});
  $('.itnc').unbind().blur(function(){fitncB(this);});
  $('input[type="number"]').on('focus',function(){
    var $self = $(this);
    $('#tsizepl00').removeClass('hide show').addClass('hide');
    $('#tsizepl01').removeClass('hide show').addClass('hide');
    $('#tsizepl02').removeClass('hide show').addClass('hide');
    $('#tsizepl03').removeClass('hide show').addClass('hide');
    if ($self.attr('id') == 'r0301') {$('#tsizepl01').removeClass('hide show').addClass('show');}
    if ($self.attr('id') == 'r0302') {$('#tsizepl02').removeClass('hide show').addClass('show');}
    if ($self.attr('id') == 'r0303') {$('#tsizepl03').removeClass('hide show').addClass('show');}
  });
  $('.dsm').click(function(){fdsm(this);});
  $('.dsp').click(function(){fdsp(this);});

  $('#typepl').click(function(){frbfCl('typepl', 4, 2);});
  $('#bowlpl').click(function(){frbfCl('bowlpl', 5, 6);});
  $('#coatpl').click(function(){frbfCl('coatpl', 6, 3);});
  $('#typefr').click(function(){frbfCl('typefr', 7, 5);});
  $('#locatpl').click(function(){frbfCl('locatpl', 8, 2);});
  $('#distpl').click(function(){frbfCl('distpl', 9, 6);});
  $('#typese').click(function(){frbfCl('typese', 10, 5);});
  $('#datese').click(function(){frbfCl('datese', 11, 4);});
  $('#timese').click(function(){frbfCl('timese', 12, 2);});

  $('#equipl').click(function(){frbfCl('equipl', 15, 8);});
  $('#covepl').click(function(){frbfCl('covepl', 16, 5);});
/*});*/
function fdsm(e){
  var el = e.nextElementSibling;
  var id = $(el).attr('id');
  var value = Number($(el).val());
  var min = Number($(el).attr('min'));
  var max = Number($(el).attr('max'));
  var step = Number($(el).attr('step'));
  var currentVal = 0;
  if (value>min+step) {
      currentVal = Math.round(parseFloat(value - step) * 10) / 10;
      $(el).val(currentVal).change();
  } else {
    currentVal = min;
    $(el).val(currentVal).change();
  }
  if ($('#r0202').prop('checked')) {
    if (id == 'r0301') {$('#r0302').val(currentVal).change();}
    if (id == 'r0302') {$('#r0301').val(currentVal).change();}
  } else {
    if (id == 'r0301') {if (currentVal < Number($('#r0302').val())) {$('#r0302').val(currentVal).change();}}
  }
  calcCost();
}
function fdsp(e){
  var el = e.previousElementSibling;
  var id = $(el).attr('id');
  var value = Number($(el).val());
  var min = Number($(el).attr('min'));
  var max = Number($(el).attr('max'));
  var step = Number($(el).attr('step'));
  var currentVal = 0;
  if (value<max-step) {
      currentVal = Math.round(parseFloat(value + step) * 10) / 10;
      $(el).val(currentVal).change();
  } else {
    currentVal = max;
    $(el).val(currentVal).change();
  }
  if ($('#r0202').prop('checked')) {
    if (id == 'r0301') {$('#r0302').val(currentVal).change();}
    if (id == 'r0302') {$('#r0301').val(currentVal).change();}
  } else {
    if (id == 'r0302') {if (currentVal > Number($('#r0301').val())) {$('#r0301').val(currentVal).change();}}
  }
  calcCost();
}
function calcCost(e){
  var tarArea = 18;
  var taxArea = [tarArea, tarArea*4, tarArea*9, tarArea*16, tarArea*25];
  var tarDiag = 400; // Тариф диагностики за tarArea[0] кв.м
  var taxDiag = [tarDiag, tarDiag*2, tarDiag*3, tarDiag*4, tarDiag*5]; // Тариф диагностики за tarArea кв.м
  var tarProf = 600; // Тариф профилактики за tarArea[0] кв.м
  var taxProf = [tarProf, tarProf*2, tarProf*3, tarProf*4, tarProf*5]; // Тариф профилактики за tarArea кв.м
  var tarCorr = 700; // Тариф коррекции за tarArea[0] кв.м
  var taxCorr = [tarCorr, tarCorr*2, tarCorr*3, tarCorr*4, tarCorr*5]; // Тариф коррекции за tarArea кв.м
  var tarCons = 1000; // Тариф консервации за tarArea[0] кв.м
  var taxCons = [tarCons, tarCons*2, tarCons*3, tarCons*4, tarCons*5]; // Тариф консервации за tarArea кв.м
  var tarUncon = 1200; // Тариф расконсервации за tarArea[0] кв.м
  var taxUncon = [tarUncon, tarUncon*2, tarUncon*3, tarUncon*4, tarUncon*5]; // Тариф расконсервации за tarArea кв.м
  var tarClean = 28; // Тариф чистки при расконсервации грн за 1 кв.м
  var tarServ = 0; // Тариф выбранной услуги грн за 1 кв.м
  var taxServ = []; // Тариф выбранной услуги грн за tarArea кв.м
  var calcClean = 0;
  var calcServ = 0;
  var advClean = 0;
  var advServ = 0;
  // r0100 r1600  + Наценка в % - Скидка в %
  // Назначение бассейна
  if ($('#r0101').prop('checked')) {r01 = [0, 0, 0, 0, 0, 0]; npurppl = 'Частный';}
  if ($('#r0102').prop('checked')) {r01 = [0, 0, 0, 0, 0, 0]; npurppl = 'Общественный';}
  // Форма бассейна
  if ($('#r0201').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Прямоугольный';}
  if ($('#r0202').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Круглый';}
  if ($('#r0203').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Закругленный';}
  if ($('#r0204').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Комбинированный';}
  if ($('#r0205').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Овальный';}
  if ($('#r0206').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Овал–усеченный';}
  if ($('#r0207').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Округлый';}
  if ($('#r0208').prop('checked')) {r02 = [0, 0, 0, 0, 0, 0]; nshappl = 'Сложный';}

  // Тип бассейна
  if ($('#r0401').prop('checked')) {r04 = [0, 0, 0, 0, 0, 0]; ntypepl = 'скиммерный';}
  if ($('#r0402').prop('checked')) {r04 = [5, 1, 1, 0, 1, 2]; ntypepl = 'переливной';}
  // Чаша бассейна
  if ($('#r0501').prop('checked')) {r05 = [0, 0, 0, 0, 0, 0]; nbowlpl = 'железобетонный';}
  if ($('#r0502').prop('checked')) {r05 = [0, 0, 0, 0, 0, 0]; nbowlpl = 'композитный';}
  if ($('#r0503').prop('checked')) {r05 = [0, 0, 0, 0, 0, 0]; nbowlpl = 'полипропиленовый';}
  if ($('#r0504').prop('checked')) {r05 = [5, 0, 0, 0, 0, 0]; nbowlpl = 'сборно–щитовой';}
  if ($('#r0505').prop('checked')) {r05 = [10, 0, 0, 0, 0, 0]; nbowlpl = 'каркасный';}
  if ($('#r0506').prop('checked')) {r05 = [10, 0, 0, 0, 0, 0]; nbowlpl = 'надувной';}
  // Облицовка бассейна
  if ($('#r0601').prop('checked')) {r06 = [0, 0, 0, 0, 0, 0]; ncoatpl = 'лайнером';}
  if ($('#r0602').prop('checked')) {r06 = [1, 0, 1, 0, 0, 0]; ncoatpl = 'мозаикой';}
  if ($('#r0603').prop('checked')) {r06 = [2, 0, 0.5, 0, 0, 0]; ncoatpl = 'плиткой';}
  if ($('#r0604').prop('checked')) {r06 = [0, 0, 0, 0, 0, 0]; ncoatpl = 'гелькоутом';}
  if ($('#r0605').prop('checked')) {r06 = [0, 0, 0, 0, 0, 0]; ncoatpl = 'полипропиленом';}
  // Тип фильтра
  if ($('#r0701').prop('checked')) {r07 = [0, 0, 0, 0, 0, 0]; ntypefr = 'с <a href="#typefrf" class="bb">песчаным</a> фильтром';}
  if ($('#r0702').prop('checked')) {r07 = [0, 0, 0, 0, 0, 0]; ntypefr = 'с <a href="#typefrf" class="bb">диатомовым</a> фильтром';}
  if ($('#r0703').prop('checked')) {r07 = [0, 0, 1, 0, 0, 0]; ntypefr = 'с <a href="#typefrf" class="bb">картриджным</a> фильтром';}
  if ($('#r0704').prop('checked')) {r07 = [0, 0, 5, 0, 0, 0]; ntypefr = 'с <a href="#typefrf" class="bb">мембранным</a> фильтром';}
  if ($('#r0705').prop('checked')) {r07 = [0, -2, 10, 0, 0, 0]; ntypefr = '<a href="#typefrf" class="bb">без</a> фильтра';}
  // Расположение бассейна
  if ($('#r0801').prop('checked')) {r08 = [0, 0, 0, 0, 0, 0]; nlocatpl = 'в помещении';}
  if ($('#r0802').prop('checked')) {r08 = [0, 0, 0, 0, 0, 0]; nlocatpl = 'вне помещения';}
  // Расположение бассейна
  uahkm = 4; //2 грн/км в одну сторону + 2 грн/км обратно
  if ($('#r0901').prop('checked')) {r09s = 0; ndistpl = 'в&nbsp;<a href="#distplf" class="bb">черте города</a>';}
  if ($('#r0902').prop('checked')) {r09s = uahkm*10; ndistpl = 'за&nbsp;городом на&nbsp;растоянии <a href="#distplf" class="bb">до&nbsp;10&thinsp;км</a>';}
  if ($('#r0903').prop('checked')) {r09s = uahkm*20; ndistpl = 'за&nbsp;городом на&nbsp;растоянии <a href="#distplf" class="bb">до&nbsp;20&thinsp;км</a>';}
  if ($('#r0904').prop('checked')) {r09s = uahkm*30; ndistpl = 'за&nbsp;городом на&nbsp;растоянии <a href="#distplf" class="bb">до&nbsp;30&thinsp;км</a>';}
  if ($('#r0905').prop('checked')) {r09s = uahkm*40; ndistpl = 'за&nbsp;городом на&nbsp;растоянии <a href="#distplf" class="bb">до&nbsp;40&thinsp;км</a>';}
  if ($('#r0906').prop('checked')) {r09s = uahkm*50; ndistpl = 'за&nbsp;городом на&nbsp;растоянии <a href="#distplf" class="bb">до&nbsp;50&thinsp;км</a>';}
  var ds = new Date();
  var dz = new Date(Date.now()+24*60*60*1000);
  var dp = new Date(Date.now()+24*60*60*1000+24*60*60*1000) ;
  // Дата и время оказания услуги
  if ($('#r1101').prop('checked')) {r11 = [50, 50, 50, 50, 50, 50]; ndatese = '<a href="#datesef" class="bb">Сегодня</a>, ' + formatDate(ds,3);}
  if ($('#r1102').prop('checked')) {r11 = [10, 10, 10, 10, 10, 10]; ndatese = '<a href="#datesef" class="bb">Завтра</a>, ' + formatDate(dz,3);}
  if ($('#r1103').prop('checked')) {r11 = [0, 0, 0, 0, 0, 0]; ndatese = '<a href="#datesef" class="bb">Послезавтра</a>, ' + formatDate(dp,3);}
  if ($('#r1104').prop('checked')) {r11 = [0, 0, 0, 0, 0, 0]; ndatese = 'Любой следующий рабочий <a href="#datesef" class="bb">день</a> после ' + formatDate(dp,0) + ' г.';}
  // Дата и время оказания услуги
  if ($('#r1201').prop('checked')) {r12 = [0, 0, 0, 0, 0, 0]; ntimese = 'В <a href="#timesef" class="bb">рабочее</a> время с 10:00 до 18:00 ';}
  if ($('#r1202').prop('checked')) {r12 = [100, 100, 100, 100, 100, 100]; ntimese = 'В <a href="#timesef" class="bb">нерабочее</a> время с 18:00 до 10:00 ';}
  // Оборудование бассейна
  var nequipl = '';
  var r15c = 0;
  var r15d = 0;
  var r15p = 0;
  var r15r = 0;
  var r15k = 0;
  var r15u = 0;
  r15 = [r15c+0, r15d+0, r15p+0, r15r+0, r15k+0, r15u+0];
  if ($('#r1501').prop('checked')) {r15 = [r15c+0, r15d+5, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'водопадом';} else {nequipl = nequipl + 'Водопадом';};}
  if ($('#r1502').prop('checked')) {r15 = [r15c+0, r15d+5, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'противотоком';} else {nequipl = nequipl + ', противотоком';};}
  if ($('#r1503').prop('checked')) {r15 = [r15c+0, r15d+5, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'гидромассажем';} else {nequipl = nequipl + ', гидромассажем';};}
  if ($('#r1504').prop('checked')) {r15 = [r15c+0, r15d+5, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'гейзером';} else {nequipl = nequipl + ', гейзером';};}
  if ($('#r1505').prop('checked')) {r15 = [r15c+0, r15d+5, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'фонтаном';} else {nequipl = nequipl + ', фонтаном';};}
  if ($('#r1506').prop('checked')) {r15 = [r15c+0, r15d+1, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'электронагревом';} else {nequipl = nequipl + ', электронагревом';};}
  if ($('#r1507').prop('checked')) {r15 = [r15c+0, r15d+1, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'теплообменником';} else {nequipl = nequipl + ', теплообменником';};}
  if ($('#r1508').prop('checked')) {r15 = [r15c+0, r15d+3, r15p+0, r15r+0, r15k+1, r15u+1]; if (nequipl.length == 0) {nequipl = 'автодозацией';} else {nequipl = nequipl + ', автодозацией';};}
  // Накрытие бассейна
  var ncovepl = '';
  var r16d = 0;
  var r16p = 0;
  var r16r = 0;
  var r16k = 0;
  var r16u = 0;
  var r16c = 0;
  r16 = [r16c+0, r16d+0, r16p+0, r16r+0, r16k+0, r16u+0];
  if ($('#r1601').prop('checked')) {r16 = [r16c+0, r16d+0, r16p+0, r16r+0, r16k+0, r16u+0]; if (ncovepl.length == 0) {ncovepl = 'павильоном';} else {ncovepl = ncovepl + 'Павильоном';};}
  if ($('#r1602').prop('checked')) {r16 = [r16c+0, r16d+3, r16p+0, r16r+0, r16k+1, r16u+1]; if (ncovepl.length == 0) {ncovepl = 'роллетой';} else {ncovepl = ncovepl + ', роллетой';};}
  if ($('#r1603').prop('checked')) {r16 = [r16c+0, r16d+0, r16p+0, r16r+0, r16k+0, r16u+0]; if (ncovepl.length == 0) {ncovepl = 'солярной пленкой';} else {ncovepl = ncovepl + ', солярной пленкой';};}
  if ($('#r1604').prop('checked')) {r16 = [r16c+0, r16d+0, r16p+0, r16r+0, r16k+0, r16u+0]; if (ncovepl.length == 0) {ncovepl = 'всесезонным покрывалом';} else {ncovepl = ncovepl + ', всесезонным покрывалом';};}
  if ($('#r1605').prop('checked')) {r16 = [r16c+0, r16d+0, r16p+10, r16r+0, r16k+1, r16u+1]; if (ncovepl.length == 0) {ncovepl = 'зимним покрывалом';} else {ncovepl = ncovepl + ', зимним покрывалом';};}
  // Вид услуги
  if ($('#r1001').prop('checked')) {tarServ = tarDiag; taxServ = taxDiag; ntypese = '<a href="#typesef" class="bb">Диагностика бассейна</a>';}
  if ($('#r1002').prop('checked')) {tarServ = tarProf; taxServ = taxProf; ntypese = '<a href="#typesef" class="bb">Профилактическое обслуживание</a>';}
  if ($('#r1003').prop('checked')) {tarServ = tarCorr; taxServ = taxCorr; ntypese = '<a href="#typesef" class="bb">Корректирующее обслуживание</a>';}
  if ($('#r1004').prop('checked')) {tarServ = tarCons; taxServ = taxCons; ntypese = '<a href="#typesef" class="bb">Консервация бассейна</a>';}
  if ($('#r1005').prop('checked')) {tarServ = tarUncon; taxServ = taxUncon; ntypese = '<a href="#typesef" class="bb">Расконсервация бассейна</a>';}
  // Площадь зеркала воды
  var sizepl1 = Number($('#r0301').val());
  var sizepl2 = Number($('#r0302').val());
  var sizepl3 = Number($('#r0303').val());
  areaZV = calcAreaZV();
  // Площадь чаши бассейна
  areaBP = calcAreaBP();
  // Текст размер бассейна
  var tsizepl1 = sizepl1;
  var tsizepl2 = sizepl2;
  var tsizepl3 = sizepl3;
  tareaZV = areaZV.toFixed(3);
  tareaBP = areaBP.toFixed(3);
  //tareaSP = 'Размер бассейна: ' + tsizepl1 + ' х ' + tsizepl2 + ' м, глубина: ' + tsizepl3 + ' м, Sv = ' + tareaZV + ' кв.м,  Sp = ' + tareaBP + ' кв.м.';
  tareaSP = 'Размер бассейна: ' + tsizepl1 + ' х ' + tsizepl2 + ' м, глубина: ' + tsizepl3 + ' м.';
  $('#tsizepl00').text(tareaSP);
  $('#tsizepl00').removeClass('hide show').addClass('show');
  $('#tsizepl01').removeClass('hide show').addClass('hide');
  $('#tsizepl02').removeClass('hide show').addClass('hide');
  $('#tsizepl03').removeClass('hide show').addClass('hide');
  // Расчет стоимости чистки
  calcClean = tarClean * areaBP; // Стоимость чистки = Тариф чистки * Площадь чаши бассейна
  if ($('#r1005').prop('checked')) {
    advClean = advClean + r01[0] + r02[0] + r04[0] + r05[0] + r06[0] + r07[0] + r08[0] + r11[0] + r12[0] + r15[0] + r16[0];
  } //Расконсервация
  calcClean = calcClean + calcClean * advClean / 100;
  cosClean = Math.round(parseFloat(Number(calcClean).toFixed()) * 0.1) / 0.1;
  // Расчет стоимости сервиса
  if (areaZV <= taxArea[1]) {
    taxN = 0;
  } else {
    if (areaZV <= taxArea[2]) {
      taxN = 1;
    } else {
      if (areaZV <= taxArea[3]) {
        taxN = 2;
      } else {
        taxN = 3;
      }
    }
  }
  calcServ = (taxServ[taxN+1]-taxServ[taxN])/(taxArea[taxN+1]-taxArea[taxN])*(areaZV-taxArea[taxN])+taxServ[taxN];
  if ($('#r1001').prop('checked')) {
    advServ = advServ + r01[1] + r02[1] + r04[1] + r05[1] + r06[1] + r07[1] + r08[1] + r11[1] + r12[1] + r15[1] + r16[1];
  } //Диагностика
  if ($('#r1002').prop('checked')) {
    advServ = advServ + r01[2] + r02[2] + r04[2] + r05[2] + r06[2] + r07[2] + r08[2] + r11[2] + r12[2] + r15[2] + r16[2];
  } //Профилактика
  if ($('#r1003').prop('checked')) {
    advServ = advServ + r01[3] + r02[3] + r04[3] + r05[3] + r06[3] + r07[3] + r08[3] + r11[3] + r12[3] + r15[3] + r16[3];
  } //Коррекция
  if ($('#r1004').prop('checked')) {
    advServ = advServ + r01[4] + r02[4] + r04[4] + r05[4] + r06[4] + r07[4] + r08[4] + r11[4] + r12[4] + r15[4] + r16[4];
  } //Консервация
  if ($('#r1005').prop('checked')) {
    advServ = advServ + r01[5] + r02[5] + r04[5] + r05[5] + r06[5] + r07[5] + r08[5] + r11[5] + r12[5] + r15[5] + r16[5];
  } //Расконсервация
  calcServ = calcServ + calcServ * advServ / 100;
  calcServ = calcServ + r09s; // Стоимость услуги = Стоимость услуги + Дорога
  cosServ = Math.round(parseFloat(Number(calcServ).toFixed()) * 0.1) / 0.1;
  if ($('#r1005').prop('checked')) {
    cosWork = cosServ + cosClean;
    sc01 = ' (включая чистку чаши: ' + cosClean+' грн)';
  } else {
    cosWork = cosServ;
    sc01 = '';}
  // Строка 1 Диагностика.
  sc1 = ntypese + sc01;
  $('#servcost01').html(sc1);
  // Строка 2 Сегодня.
  sc2 = ndatese;
  $('#servcost02').html(sc2);
  // Строка 3 Рабочее время.
  sc3 = ntimese;
  $('#servcost03').html(sc3);
  // Строка 4 Стоимость: 600 грн.
  sc4 = 'Стоимость: ' + cosWork + ' грн';
  $('#servcost04').text(sc4);
  // Строка 5 Частный переливной бассейн в помещении расположен в черте города
  sc5 = '<a href="#purpplf" class="bb">' + npurppl + '</a>, ' + '<a href="#typeplf" class="bb">' + ntypepl + '</a> бассейн <a href="#locatplf" class="bb">' + nlocatpl + '</a>, находится ' + ndistpl + '.';
  $('#servcost05').html(sc5);
  // Строка 6 Размер бассейна: 6 х 3 м, глубина: 1,5 м
  sc6 = '<a href="#sizeplf" class="bb">Размер</a> бассейна: ' + tsizepl1 + ' х ' + tsizepl2 + ' м, глубина: ' + tsizepl3 + ' м.';
  $('#servcost06').html(sc6);
  // Строка 7 Прямоугольный железобетонный бассейн, облицован лайнером, с песчаным фильтром.
  sc7 = '<a href="#shapplf" class="bb">' + nshappl + '</a>, <a href="#bowlplf" class="bb">' + nbowlpl + '</a> бассейн, облицован <a href="#coatplf" class="bb">' + ncoatpl + '</a>, ' + ntypefr+ '.';
  $('#servcost07').html(sc7);
  // Строка 8 В бассейне не установлено дополнительное оборудование.
  if (nequipl.length == 0) {sc8 = 'Бассейн без дополнительного <a href="#equiplf" class="bb">оборудования</a>.';} else {sc8 = 'Бассейн <a href="#equiplf" class="bb">оборудован</a>: ' + nequipl + '.';}
  $('#servcost08').html(sc8);
  // Строка 9 Бассейн без накрытия.
  if (ncovepl.length == 0) {sc9 = 'Бассейн без <a href="#coveplf" class="bb">накрытия</a>.';} else {sc9 = 'Бассейн <a href="#coveplf" class="bb">накрыт</a>: ' + ncovepl + '.';}
  $('#servcost09').html(sc9);
}

function calcAreaZV(){
  var csizepl1 = Number($('#r0301').val());
  var csizepl2 = Number($('#r0302').val());
  var csizepl3 = Number($('#r0303').val());
  var cs2 = 0;
  var csR = 0;
  var csh = 0;
  var csa = 0;
  var careaZV = 0;
  if ($('#r0201').prop('checked')) {careaZV = csizepl1 * csizepl2;}
  if ($('#r0202').prop('checked')) {careaZV = Math.PI * Math.pow((csizepl1 / 2),2);}
  if ($('#r0203').prop('checked')) {
    if (csizepl1 == csizepl2 + csizepl2) {cs2 = 0;} else {cs2 = csizepl2 / 3;}
    csR = (csizepl2-cs2)/2;
    careaZV =((csizepl1-csR*2)*csizepl2)+(cs2*csR*2)+(Math.PI*Math.pow(csR,2));
  }
  if ($('#r0204').prop('checked')) {
    if (csizepl1 == csizepl2 + csizepl2) {cs2 = 0;} else {cs2 = csizepl2 / 3;}
    csR = (csizepl2 - cs2) / 2;
    careaZV = ((csizepl1 - csR) * csizepl2) + (csR * cs2) + ((Math.PI * Math.pow(csR,2)) / 2);
  }
  if ($('#r0205').prop('checked')) {careaZV = Math.PI * (csizepl1 / 2) * (csizepl2 / 2);}
  if ($('#r0206').prop('checked')) {
    if (csizepl1 == csizepl2 + csizepl2) {cs2 = csizepl2/3*2;} else {cs2 = csizepl2/4*2;}
    csh = (csizepl2 - cs2) / 2;
    csR = (csh / 2) + ((csizepl1 * csizepl1) / (8 * csh));
    csa = 2 * Math.asin(csizepl1 / (2 * csR));
    careaZV = (csizepl1 * (csizepl2 - (csh * 2))) + (((1 / 2 * (csR * csR)) * (csa - Math.sin(csa))) * 2);
  }
  if ($('#r0207').prop('checked')) {careaZV = csizepl1 * csizepl2 * 0.98;}
  if ($('#r0208').prop('checked')) {careaZV = csizepl1 * csizepl2 * 0.99;}
  return careaZV;
}

function calcAreaBP(){
  var csizepl1 = Number($('#r0301').val()); //C4
  var csizepl2 = Number($('#r0302').val()); //C5
  var csizepl3 = Number($('#r0303').val()); //C7
  var cs2 = 0; //C6
  var csR = 0;//M8
  var csh = 0; //O8
  var csa = 0; //P8
  var csL = 0; //L8
  var careaBP = 0;
  if ($('#r0201').prop('checked')) {careaBP = csizepl1*csizepl2+(csizepl1*csizepl3*2+csizepl2*csizepl3*2);}
  if ($('#r0202').prop('checked')) {careaBP = Math.PI*Math.pow(csizepl1/2,2) + (2 * Math.PI * (csizepl1/2))*csizepl3;}
  if ($('#r0203').prop('checked')) {
    if (csizepl1 == csizepl2 + csizepl2) {cs2 = 0;} else {cs2 = csizepl2 / 3;}
    csR = (csizepl2-cs2)/2;
    careaBP = ((csizepl1-csR*2) * csizepl2) + (cs2 * csR * 2) + (Math.PI*Math.pow(csR,2))+((((csizepl1-csR*2)*2) + (cs2*2) + (2 * Math.PI * csR))*csizepl3);
  }
  if ($('#r0204').prop('checked')) {if (csizepl1 == csizepl2 + csizepl2) {cs2 = 0;} else {cs2 = csizepl2 / 3;}
    csR = (csizepl2-cs2)/2;
    careaBP = (((csizepl1-csR)*csizepl2)+(csR*cs2)+((Math.PI*Math.pow(csR,2))/2))+((((csizepl1-csR)*2) + (csizepl2) + (((Math.PI*csR*45)/180)*2)+cs2)*csizepl3);
  }
  if ($('#r0205').prop('checked')) {careaBP = Math.PI*(csizepl1/2)*(csizepl2/2)+(2*Math.PI*Math.sqrt((Math.pow(csizepl1,2)+Math.pow(csizepl2,2))/8))*csizepl3;}
  if ($('#r0206').prop('checked')) {
    if (csizepl1 == csizepl2 + csizepl2) {cs2 = csizepl2/3*2;} else {cs2 = csizepl2/4*2;}
    csh = (csizepl2 - cs2) / 2;
    csR = (csh / 2) + ((csizepl1 * csizepl1) / (8 * csh));
    csa = 2 * Math.asin(csizepl1 / (2 * csR));
    csL = csa*csR;
    careaBP = ((csizepl1*cs2)+(((1/2*(csR*csR))*(csa-(Math.sin(csa))))*2)) + ((csL*2+cs2*2)*csizepl3);
  }
  if ($('#r0207').prop('checked')) {careaBP = (csizepl1*csizepl2+(csizepl1*csizepl3*2+csizepl2*csizepl3*2))*1.02;}
  if ($('#r0208').prop('checked')) {careaBP = (csizepl1*csizepl2+(csizepl1*csizepl3*2+csizepl2*csizepl3*2))*1.01;}
  return careaBP;
}

function fitncB(e){
  var id = $(e).attr('id');
  var value = Number($(e).val());
  var min = Number($(e).attr('min'));
  var max = Number($(e).attr('max'));
  var step = Number($(e).attr('step'));
  var currentVal = value;
  if (value < min) {
    currentVal = min;
    $('#id').val(currentVal).change();
    //document.getElementById(id).value = min;
  }
  if (value > max) {
    currentVal = max;
    $('#id').val(currentVal).change();
    //document.getElementById(id).value = max
  }
  if (Math.floor(value / step) != (value / step)) {
    currentVal = Math.round(parseFloat(value) * 10) / 10;
    $('#id').val(currentVal).change();
    //document.getElementById(id).value = Math.round(parseFloat(Number(v)) * 10) / 10;
  }
  if ($('#r0202').prop('checked')) {
    if (id == 'r0301') {
      currentVal = Math.round(parseFloat(value) * 10) / 10;
      $('#r0302').val(currentVal).change();
    }
    if (id == 'r0302') {
      currentVal = Math.round(parseFloat(value) * 10) / 10;
      $('#r0301').val(currentVal).change();
    }
   } else {
     if (id == 'r0301') {if (currentVal < Number($('#r0302').val())) {$('#r0302').val(currentVal).change();}}
     if (id == 'r0302') {if (currentVal > Number($('#r0301').val())) {$('#r0301').val(currentVal).change();}}
   }
  document.getElementById(id).value = currentVal;
  calcCost();
}

function frbfCl(rbName, rbNum, rbKol){
  if (rbNum < 10) {rbNumT = '0' + (rbNum);} else {rbNumT = '' + rbNum;}
  rbi = '';
  if (rbName == 'shappl') {
    for (i = 1; i <= rbKol; i++) {
      if (i < 10) {rbi = '0' + i;} else {rbi = i;}
      if ($('#r' + rbNumT + rbi).prop('checked')) {$('#i' + rbName).removeClass('sp01 sp02 sp03 sp04 sp05 sp06 sp07 sp08 sp09 sp10 sp11 sp12').addClass('sp' + rbi);}
      if ($('#r0202').prop('checked')) {
        var val01 = Number($('#r0301').val());
        var val02 = Number($('#r0302').val());
        if (val01 > val02) {$('#r0301').val(val02).change();} else {$('#r0302').val(val01).change();}
      }
    }
  } else {
    for (i = 1; i <= rbKol; i++) {
      if (i < 10) {rbi = '0' + i;} else {rbi = i;}
      $('#t' + rbName + rbi).removeClass('hide show').addClass('hide');
    }
    for (i = 1; i <= rbKol; i++) {
      if (i < 10) {rbi = '0' + i;} else {rbi = i;}
      if (rbName == 'sizepl') {
        if ($('#r' + rbNumT + rbi) == $("input[type='number']:focus")) {
          $('#t' + rbName + rbi).removeClass('hide').addClass('show');
        }
      } else {
        if ($('#r' + rbNumT + rbi).prop('checked')) {
          if (rbName == 'datese') {txtdateset(i);}
          $('#t' + rbName + rbi).removeClass('hide').addClass('show');
        }
      }
    }
    if (rbName == 'bowlpl') {
      if ($('#r0501').prop('checked')) {
        var r06check = [true, false, false, false, false];
        var r06disab = [false, false, false, true, true];
      } else {
        if ($('#r0502').prop('checked')) {
          var r06check = [false, false, false, true, false];
          var r06disab = [true, true, true, false, true];
        } else {
          if ($('#r0503').prop('checked')) {
            var r06check = [false, false, false, false, true];
            var r06disab = [true, true, true, true, false];
          } else {
            var r06check = [true, false, false, false, false];
            var r06disab = [false, true, true, true, true];
          }
        }
      }
      for (i = 1; i <= 5; i++) {
        if (i < 10) {rbi = '0' + i;} else {rbi = i;}
        $('#r06'+rbi).attr('checked', false);
        document.getElementById('r06'+rbi).checked = false;
        $('#tcoatpl' + rbi).removeClass('hide show').addClass('hide');
        if (r06check[i-1]) {
          $('#r06'+rbi).attr('checked', true);
          document.getElementById('r06'+rbi).checked = true;
          $('#tcoatpl' + rbi).removeClass('hide show').addClass('show');
        }
        $('#r06'+rbi).attr('disabled', false);
        document.getElementById('r06'+rbi).disabled = false;
        if (r06disab[i-1]) {
          $('#r06'+rbi).attr('disabled', true);
          document.getElementById('r06'+rbi).disabled = true;
        }
      }
    }
  }
  calcCost();
};

function txtdateset(rbN) {
  if (rbN < 10) {rbNt = '0' + (rbN);} else {rbNt = '' + rbN;}
  var ds = new Date();
  var dz = new Date(Date.now()+24*60*60*1000);
  var dp = new Date(Date.now()+24*60*60*1000+24*60*60*1000) ;
  var txtdse = ['Сегодня, ', 'Завтра, ', 'Послезавтра, ', 'Любой следующий рабочий день после '];
  td = txtdse[rbN - 1];
  var timdse = [ds, dz, dp, dp];
  tt = timdse[rbN - 1];
  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  dn = days[tt.getDay()];
  var wday = ['Выходной день.', 'Рабочий день.', 'Рабочий день.', 'Рабочий день.', 'Рабочий день.', 'Рабочий день.', 'Укороченный рабочий день.'];
  wd = wday[tt.getDay()];
  if (rbN < 4) {ift = ' (' + dn + '), ' + wd;} else {ift = '';}
  nt = td + formatDate(tt,1) + ' г.' + ift;
  $('#tdatese' + rbNt).text(nt);
}

function formatDate(date, formD) {
  var dd = date.getDate();
  //if (dd < 10) dd = '0' + dd;
  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;
  var ma = ['января', 'феврвля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  mmm = ma[date.getMonth()];
  var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  dn = days[date.getDay()];
  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  dnf = days[date.getDay()];
  if (formD == 3) {return dd + ' ' + mm + ' ' + yy + ' г.' + ' (' + dn + ')';}
  if (formD == 2) {return dd + ' ' + mmm + ' ' + yy + ' г.' + ' (' + dnf + ')';}
  if (formD == 1) {return dd + ' ' + mmm + ' ' + yy;}
  if (formD == 0) {return dd + '.' + mm + '.' + yy;}
}




function checkForm(e) {
} //end function checkForm(e)

function resetForm(e) {
} //end function resetForm(e)

//End
