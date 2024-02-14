//---Создание Cookie-------------------------------------------------------------------------------------
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = '; expires='+date.toGMTString();
    }
    else var expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
}
//End
//---Чтение Cookie-------------------------------------------------------------------------------------
function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
//End
//---Удаление Cookie-------------------------------------------------------------------------------------
function eraseCookie(name) {
    createCookie(name,'',-1);
}
//End
//--- RND от 0 до scale ---------------------------------------------------------------------------------------
function rnd(scale)
{
 var dd=new Date();
	scale=scale+1;
 return((Math.round(Math.abs(Math.sin(dd.getTime()))*1000000000)%scale));
}
//End
//--- Путь домой из URL ---------------------------------------------------------------------------------------
function homeDir() {
  var variable = '';
  var str = window.location.pathname.toString();
  var kolvo = 0;
  var pos = -1;
  while ((pos = str.indexOf('/', pos + 1)) != -1) {kolvo = kolvo + 1;}
  for (i = 0; i < kolvo-1; i++) {variable = variable + '../';}
  return variable;
}
//End
//--- Извлечение переменной из URL ---------------------------------------------------------------------------------------
function param(Name) {
  var Params = location.search.substring(1).split("&");
  var variable = "";
  for (var i = 0; i < Params.length; i++)
  {
    if(Params[i].split("=")[0] == Name)
  {
  if (Params[i].split("=").length > 1)
  variable = Params[i].split("=")[1];
  return variable;
  }}
  return "";
}
//End
//--- Добавление скрипта из файла в html ---------------------------------------------------------------------------------------
function addScript(src) {
  var script = document.createElement('script');
  script.type="text/javascript";
  script.async = false; // false чтобы гарантировать порядок
  script.defer = false; // false чтобы гарантировать порядок
  script.src = src;
  //document.getElementsByTagName("head")[0].appendChild(script);
  document.write ('<script type="text/javascript" src="'+src+'"></script>');
}
//End
//--- RND от 0 до scale ---------------------------------------------------------------------------------------
function testPrice()
{
  colnum = 4;
  price = param("price");
  if (price.length == 0) {price = 'price';}
  if (prcode.indexOf(price, 2) == -1) {price = 'price';}
  else {colnum = prprice[prcode.indexOf(price, 2)];}
  currency = param("currency");
  if (currency.length == 0) {currency = 'uah';}
  if (currency != 'eur') {
    if (currency != 'usd') {
      currency = 'uah';
    }
  }
  if (currency == 'eur') {curr = ', &euro;';} /*€*/
  if (currency == 'usd') {curr = ', &#36;';} /*$*/
  if (currency == 'uah') {curr = ', &#8372;';} /*₴*/
  if (price == 'price') {curr = ', шт';}
  if (price != 'price') {addScript('../../files/'+price+'.js');
    if (window.ceur == undefined) {addScript('../../files/currency.js');}
  }
  if (window.rowspan == undefined) {addScript('../../js/wrprice.js');}
}
//End
//--- Разделение строки с числом на разряды  ---------------------------------------------------------------------------------------
function separ(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }
    if (parts.length > 1) {
        output += ',' + parts[1];
    }
    return output;
};
//End
//--- function SetVarWeb ---------------------------------------------------------------------------------------
function setvar(dn,fn) {
  dl = 0;
  goh = '';
  dnl = dn.length;
  if (dnl!=0) {
    dl = 1;
    goh = '../';
    var pos = -1;
    while ((pos = dn.indexOf('/', pos + 1)) != -1) {
      dl = dl + 1;
      goh = goh + '../';
    }
  }
  poshttp = top.location.href.indexOf ('http', 0);
  if (poshttp==-1)
  {
    weboff = true; /*Local*/
    pshttp = goh+'';
    aphttp = goh+'aquaplus.html';
    gsps = goh+'index.html';
    gsap = goh+'aquaplus.html';
    fin = 'index.html';
  }
  else {
    weboff = false; /*Net*/
    pshttp = 'http://poolstudio.github.io/apps/';
    aphttp = 'http://poolstudio.github.io/apps/';
    /*gsps = pshttp;*/
    gsps = '/';
    gsap = aphttp;
    fin = '';
  }
  vdn = dn;
  vfn = fn;
  clockc = 0;
}
//End
//--- function AllSetVar ---------------------------------------------------------------------------------------
function allsetvar(vdn,vfn) {
  cnavp = '';
  cnav = '';
  tcnavp = '';
  tcnav = '';
  if (vdn == '' && vfn == 'index') {cngo = '';
    cnavp = ''; cnav = ''; tcnavp = ''; tcnav = 'Вверх сираницы';
  }

  if (vdn == 'pools' && vfn == 'index') {hmpools = 'class="active"'; pools = '#pools';
    cnavp = ''; cnav = 'pools'; tcnavp = ''; tcnav = 'Бассейны';
  } else {hmpools = ''; pools = pshttp+'pools/'+fin;}
  if (vdn == 'pools/fpools' && vfn == 'index') {hmpools = 'class="activ"'; hmfpools = 'class="active"'; fpools = '#fpools';
    cnavp = pshttp+'pools/'+fin; cnav = 'fpools'; tcnavp = 'Бассейны'; tcnav = 'Композитные бассейны';
  } else {hmfpools = ''; fpools = pshttp+'pools/fpools/'+fin;}
  if (vdn == 'pools/spools' && vfn == 'index') {hmpools = 'class="activ"'; hmspools = 'class="active"'; spools = '#spools';
    cnavp = pshttp+'pools/'+fin; cnav = 'spools'; tcnavp = 'Бассейны'; tcnav = 'Спа бассейны';
  } else {hmspools = ''; spools = pshttp+'pools/spools/'+fin;}

  if (vdn == 'equip' && vfn == 'index') {hmequip = 'class="active"'; equip = '#equip';
    cnavp = ''; cnav = 'equip'; tcnavp = ''; tcnav = 'Оборудование';
  } else {hmequip = ''; equip = pshttp+'equip/'+fin;}
  if (vdn == 'equip/kfiltr' && vfn == 'index') {hmequip = 'class="activ"'; hmkfiltr = 'class="active"'; kfiltr = '#kfiltr';
    cnavp = pshttp+'equip/'+fin; cnav = 'kfiltr'; tcnavp = 'Оборудование'; tcnav = 'Автономный фильтр';
  } else {hmkfiltr = ''; kfiltr = pshttp+'equip/kfiltr/'+fin;}
  if (vdn == 'equip/sfiltr' && vfn == 'index') {hmequip = 'class="activ"'; hmsfiltr = 'class="active"'; sfiltr = '#sfiltr';
    cnavp = pshttp+'equip/'+fin; cnav = 'sfiltr'; tcnavp = 'Оборудование'; tcnav = 'Стационарный фильтр';
  } else {hmsfiltr = ''; sfiltr = pshttp+'equip/sfiltr/'+fin;}
  if (vdn == 'equip/rollet' && vfn == 'index') {hmequip = 'class="activ"'; hmrollet = 'class="active"'; rollet = '#rollet';
    cnavp = pshttp+'equip/'+fin; cnav = 'rollet'; tcnavp = 'Оборудование'; tcnav = 'Роллетные накрытия';
  } else {hmrollet = ''; rollet = pshttp+'equip/rollet/'+fin;}
  if (vdn == 'equip/solar' && vfn == 'index') {hmequip = 'class="activ"'; hmsolar = 'class="active"'; solar = '#solar';
    cnavp = pshttp+'equip/'+fin; cnav = 'solar'; tcnavp = 'Оборудование'; tcnav = 'Солярная пленка';
  } else {hmsolar = ''; solar = pshttp+'equip/solar/'+fin;}
  if (vdn == 'equip/protect' && vfn == 'index') {hmequip = 'class="activ"'; hmprotect = 'class="active"'; protect = '#protect';
    cnavp = pshttp+'equip/'+fin; cnav = 'protect'; tcnavp = 'Оборудование'; tcnav = 'Защитное накрытие';
  } else {hmprotect = ''; protect = pshttp+'equip/protect/'+fin;}

  if (vdn == 'material' && vfn == 'index') {hmmaterial = 'class="active"'; material = '#material';
    cnavp = ''; cnav = 'material'; tcnavp = ''; tcnav = 'Материалы';
  } else {hmmaterial = ''; material = pshttp+'material/'+fin;}
  if (vdn == 'material/chemical' && vfn == 'index') {hmmaterial = 'class="activ"'; hmchemical = 'class="active"'; chemical = '#chemical';
    cnavp = pshttp+'material/'+fin; cnav = 'chemical'; tcnavp = 'Материалы'; tcnav = 'Химия для бассейна';
  } else {hmchemical = ''; chemical = pshttp+'material/chemical/'+fin;}
  if (vdn == 'material/coping' && vfn == 'index') {hmmaterial = 'class="activ"'; hmcoping = 'class="active"'; coping = '#coping';
    cnavp = pshttp+'material/'+fin; cnav = 'coping'; tcnavp = 'Материалы'; tcnav = 'Бортовой и террасный камень';
  } else {hmcoping = ''; coping = pshttp+'material/coping/'+fin;}
  if (vdn == 'material/garden' && vfn == 'index') {hmmaterial = 'class="activ"'; hmgarden = 'class="active"'; garden = '#garden';
    cnavp = pshttp+'material/'+fin; cnav = 'garden'; tcnavp = 'Материалы'; tcnav = 'Садовая серия камня';
  } else {hmgarden = ''; garden = pshttp+'material/garden/'+fin;}
  if (vdn == 'material/facade' && vfn == 'index') {hmmaterial = 'class="activ"'; hmfacade = 'class="active"'; facade = '#facade';
    cnavp = pshttp+'material/'+fin; cnav = 'facade'; tcnavp = 'Материалы'; tcnav = 'Облицовка стен и фасадов';
  } else {hmfacade = ''; facade = pshttp+'material/facade/'+fin;}
  if (vdn == 'material/fountain' && vfn == 'index') {hmmaterial = 'class="activ"'; hmfountain = 'class="active"'; fountain = '#fountain';
    cnavp = pshttp+'material/'+fin; cnav = 'fountain'; tcnavp = 'Материалы'; tcnav = 'Фонтаны из камня';
  } else {hmfountain = ''; fountain = pshttp+'material/fountain/'+fin;}
  if (vdn == 'material/tiles' && vfn == 'index') {hmmaterial = 'class="activ"'; hmtiles = 'class="active"'; tiles = '#tiles';
    cnavp = pshttp+'material/'+fin; cnav = 'tiles'; tcnavp = 'Материалы'; tcnav = 'Плитка для пола';
  } else {hmtiles = ''; tiles = pshttp+'material/tiles/'+fin;}
  if (vdn == 'material/careprod' && vfn == 'index') {hmmaterial = 'class="activ"'; hmcareprod = 'class="active"'; careprod = '#careprod';
    cnavp = pshttp+'material/'+fin; cnav = 'careprod'; tcnavp = 'Материалы'; tcnav = 'Химия для камня';
  } else {hmcareprod = ''; careprod = pshttp+'material/careprod/'+fin;}

  if (vdn == 'service' && vfn == 'index') {hmservice = 'class="active"'; service = '#service';
    cnavp = ''; cnav = 'service'; tcnavp = ''; tcnav = 'Сервис';
  } else {hmservice = ''; service = pshttp+'service/'+fin;}
  if (vdn == 'service/spool' && vfn == 'index') {hmservice = 'class="activ"'; hmspool = 'class="active"'; spool = '#spool';
    cnavp = pshttp+'service/'+fin; cnav = 'spool'; tcnavp = 'Сервис'; tcnav = 'Обслуживание бассейна';
  } else {hmspool = ''; spool = pshttp+'service/spool/'+fin;}
  if (vdn == 'service/cpool' && vfn == 'index') {hmservice = 'class="activ"'; hmcpool = 'class="active"'; cpool = '#cpool';
    cnavp = pshttp+'service/'+fin; cnav = 'cpool'; tcnavp = 'Сервис'; tcnav = 'Консервация бассейна';
  } else {hmcpool = ''; cpool = pshttp+'service/cpool/'+fin;}
  if (vdn == 'service/rpool' && vfn == 'index') {hmservice = 'class="activ"'; hmrpool = 'class="active"'; rpool = '#rpool';
    cnavp = pshttp+'service/'+fin; cnav = 'rpool'; tcnavp = 'Сервис'; tcnav = 'Расконсервация бассейна';
  } else {hmrpool = ''; rpool = pshttp+'service/rpool/'+fin;}
  if (vdn == 'service/ppool' && vfn == 'index') {hmservice = 'class="activ"'; hmppool = 'class="active"'; ppool = '#ppool';
    cnavp = pshttp+'service/'+fin; cnav = 'ppool'; tcnavp = 'Сервис'; tcnav = 'Проектирование бассейна';
  } else {hmppool = ''; ppool = pshttp+'service/ppool/'+fin;}
  if (vdn == 'service/bpool' && vfn == 'index') {hmservice = 'class="activ"'; hmbpool = 'class="active"'; bpool = '#bpool';
    cnavp = pshttp+'service/'+fin; cnav = 'bpool'; tcnavp = 'Сервис'; tcnav = 'Строительство бассейна';
  } else {hmbpool = ''; bpool = pshttp+'service/bpool/'+fin;}

  if (vdn == 'info' && vfn == 'index') {hminfo = 'class="active"'; info = '#info';
    cnavp = ''; cnav = 'info'; tcnavp = ''; tcnav = 'Информация';
  } else {hminfo = ''; info = pshttp+'info/'+fin;}
  if (vdn == 'info/price' && vfn == 'index') {
    if (price == 'price') {hminfo = 'class="activ"'; hmpricem = 'class="active"'; pricem = '#pricem';
      cnavp = pshttp+'info/'+fin; cnav = 'pricem'; tcnavp = 'Информация'; tcnav = 'Список прайсов';
    } else {dl = 3; hmpricem = ''; pricem = pshttp+'info/price/'+fin;;
      cnavpp = pshttp+'info/'+fin; cnavp = pshttp+'info/price/'+fin; cnav = 'pricem'; tcnavpp = 'Информация'; tcnavp = 'Список прайсов'; tcnav = 'Список цен';
    }
  } else {hmpricem = ''; pricem = pshttp+'info/price/'+fin;}
  if (vdn == 'info/scost' && vfn == 'index') {hminfo = 'class="activ"'; hmscost = 'class="active"'; scost = '#scost';
    cnavp = pshttp+'info/'+fin; cnav = 'scost'; tcnavp = 'Информация'; tcnav = 'Стоимость услуг';
  } else {hmscost = ''; scost = pshttp+'info/scost/'+fin;}
  if (vdn == 'info/winter' && vfn == 'index') {hminfo = 'class="activ"'; hmwinter = 'class="active"'; winter = '#winter';
    cnavp = pshttp+'info/'+fin; cnav = 'season'; tcnavp = 'Информация'; tcnav = 'Зимний сезон';
  } else {hmwinter = ''; winter = pshttp+'info/winter/'+fin;}
  if (vdn == 'info/spring' && vfn == 'index') {hminfo = 'class="activ"'; hmspring = 'class="active"'; spring = '#spring';
    cnavp = pshttp+'info/'+fin; cnav = 'season'; tcnavp = 'Информация'; tcnav = 'Весенний сезон';
  } else {hmspring = ''; spring = pshttp+'info/spring/'+fin;}
  if (vdn == 'info/summer' && vfn == 'index') {hminfo = 'class="activ"'; hmsummer = 'class="active"'; summer = '#summer';
    cnavp = pshttp+'info/'+fin; cnav = 'season'; tcnavp = 'Информация'; tcnav = 'Летний сезон';
  } else {hmsummer = ''; summer = pshttp+'info/summer/'+fin;}
  if (vdn == 'info/autumn' && vfn == 'index') {hminfo = 'class="activ"'; hmautumn = 'class="active"'; autumn = '#autumn';
    cnavp = pshttp+'info/'+fin; cnav = 'season'; tcnavp = 'Информация'; tcnav = 'Осенний сезон';
  } else {hmautumn = ''; autumn = pshttp+'info/autumn/'+fin;}
  var date = new Date();
  nms = date.getMonth();
  if (nms == 0 || nms == 1 || nms == 11) {hmsnav = hmwinter; snav = pshttp+'info/winter/'+fin; idseason = 'iswinter'; tsnav = 'Зимний сезон';}
  if (nms == 2 || nms == 3 || nms == 4) {hmsnav = hmspring; snav = pshttp+'info/spring/'+fin; idseason = 'isspring'; tsnav = 'Весенний сезон';}
  if (nms == 5 || nms == 6 || nms == 7) {hmsnav = hmsummer; snav = pshttp+'info/summer/'+fin; idseason = 'issummer'; tsnav = 'Летний сезон';}
  if (nms == 8 || nms == 9 || nms == 10) {hmsnav = hmautumn; snav = pshttp+'info/autumn/'+fin; idseason = 'isautumn'; tsnav = 'Осенний сезон';}
  if (vdn == 'info/photo' && vfn == 'index') {
    hminfo = 'class="activ"'; hmf00 = 'class="active"';
    f00 = pshttp+'info/photo/'+fin+'?foto=ph00#photo';
    f01 = pshttp+'info/photo/'+fin+'?foto=ph01#ph';
    f02 = pshttp+'info/photo/'+fin+'?foto=ph02#ph';
    f03 = pshttp+'info/photo/'+fin+'?foto=ph03#ph';
    f04 = pshttp+'info/photo/'+fin+'?foto=ph04#ph';
    f05 = pshttp+'info/photo/'+fin+'?foto=ph05#ph';
    f06 = pshttp+'info/photo/'+fin+'?foto=ph06#ph';
    cnavp = pshttp+'info/'+fin; cnav = 'photo'; tcnavp = 'Информация'; tcnav = 'Фотографии';
  } else {
    hmf00 = '';
    f00 = pshttp+'info/photo/'+fin+'?foto=ph00';
  }
  if (vdn == 'info/factory' && vfn == 'index') {hminfo = 'class="activ"'; hmfactory = 'class="active"'; factory = '#factory';
    cnavp = pshttp+'info/'+fin; cnav = 'factory'; tcnavp = 'Информация'; tcnav = 'Производители';
  } else {hmfactory = ''; factory = pshttp+'info/factory/'+fin;}
  if (vdn == 'info/factory/barchemicals' && vfn == 'index') {barchemicals = '#barchemicals';
    cnavpp = pshttp+'info/'+fin; cnavp = pshttp+'info/factory/'+fin; cnav = 'barchemicals'; tcnavpp = 'Информация'; tcnavp = 'Производители'; tcnav = 'Barchemicals (Италия)';
  } else {barchemicals = pshttp+'info/factory/barchemicals/'+fin;}
  if (vdn == 'info/factory/del' && vfn == 'index') {del = '#del';
    cnavpp = pshttp+'info/'+fin; cnavp = pshttp+'info/factory/'+fin; cnav = 'del'; tcnavpp = 'Информация'; tcnavp = 'Производители'; tcnav = 'DEL (Франция)';
  } else {del = pshttp+'info/factory/del/'+fin;}
  if (vdn == 'info/factory/hayward' && vfn == 'index') {hayward = '#hayward';
    cnavpp = pshttp+'info/'+fin; cnavp = pshttp+'info/factory/'+fin; cnav = 'hayward'; tcnavpp = 'Информация'; tcnavp = 'Производители'; tcnav = 'Hayward (США)';
  } else {hayward = pshttp+'info/factory/hayward/'+fin;}
  if (vdn == 'info/factory/pierra' && vfn == 'index') {pierra = '#pierra';
    cnavpp = pshttp+'info/'+fin; cnavp = pshttp+'info/factory/'+fin; cnav = 'pierra'; tcnavpp = 'Информация'; tcnavp = 'Производители'; tcnav = 'Pierra (Франция)';
  } else {pierra = pshttp+'info/factory/pierra/'+fin;}
  if (vdn == 'info/studio' && vfn == 'index') {hminfo = 'class="activ"'; hmpstudio = 'class="active"'; pstudio = '#pstudio';
    cnavp = pshttp+'info/'+fin; cnav = 'pstudio'; tcnavp = 'Информация'; tcnav = 'О студии';
  } else {hmpstudio = ''; pstudio = pshttp+'info/studio/'+fin;}
}
//End
//--- <div class="cnav"> ---------------------------------------------------------------------------------------
function jsCnav(ngo) {
  if (arguments.length == 0) {ngo = '';}
  cngo = ngo;
  document.write('\
  <a id="cnav" name="cnav"></a>\
  <div class="block"><div class="b-wrap"><div class="b-cont">\
  </div></div></div>\
  <div class="sectors"><div class="s-wrap"><div class="s-cont">\
');
  document.write('<div class="c-nav"><ul id="c-menu"><li><a href="'+gsps+'"><span>с</span><span>тудия</span> <span>бассейнов</span></a></li>');
  if (dl == 1) {document.write('<li id="cn'+cnav+'" class="current"><a href="#'+cnav+ngo+'">'+tcnav+'</a></li>');}
  if (dl == 2) {document.write('<li><a href="'+cnavp+'">'+tcnavp+'</a></li><li id="cn'+cnav+'" class="current"><a href="#'+cnav+ngo+'">'+tcnav+'</a></li>');}
  if (dl == 3) {document.write('<li><a href="'+cnavpp+'">'+tcnavpp+'</a></li><li><a href="'+cnavp+'">'+tcnavp+'</a></li><li id="cn'+cnav+'" class="current"><a href="#'+cnav+ngo+'">'+tcnav+'</a></li>');}
  document.write('</ul></div>');
  document.write('\
    </div></div></div>\
  ');
/*  document.write('\
    <a id="'+cnav+'" name="'+cnav+'"></a>\
  ');*/
}
//End
//--- <div class="snav"> ---------------------------------------------------------------------------------------
function jsSnav() {
  document.write('<ul class="s-menu">');
  if (vdn == 'pools' && vfn == 'index') {
    document.write('\
      <li id="fpools"><a href="'+fpools+'">Композитные бассейны</a></li>\
      <li id="spools"><a href="'+spools+'">Спа бассейны</a></li>\
    ');
  }
  if (vdn == 'equip' && vfn == 'index') {
    document.write('\
      <li id="kfiltr"><a href="'+kfiltr+'">Автономный фильтр</a></li>\
      <li id="sfiltr"><a href="'+sfiltr+'">Стационарный фильтр</a></li>\
      <li id="rollet"><a href="'+rollet+'">Роллетные накрытия</a></li>\
      <li id="solar"><a href="'+solar+'">Солярная пленка</a></li>\
      <li id="protect"><a href="'+protect+'">Защитное накрытие</a></li>\
    ');
  }
  if (vdn == 'material' && vfn == 'index') {
    document.write('\
    <li id="chemical"><a href="'+chemical+'">Химия для бассейна</a></li>\
    <li id="coping"><a href="'+coping+'">Бортовой и террасный камень</a></li>\
    <!--li id="garden"><a href="'+garden+'">Садовая серия камня</a></li-->\
    <li id="facade"><a href="'+facade+'">Облицовка стен и фасадов</a></li>\
    <li id="fountain"><a href="'+fountain+'">Фонтаны из камня</a></li>\
    <!--li id="tiles"><a href="'+tiles+'">Плитка для пола</a></li-->\
    <li id="careprod"><a href="'+careprod+'">Химия для камня</a></li>\
    ');
  }
  if (vdn == 'service' && vfn == 'index') {
    document.write('\
    <li id="spool"><a href="'+spool+'">Обслуживание бассейна</a></li>\
    <li id="cpool"><a href="'+cpool+'">Консервация бассейна</a></li>\
    <li id="rpool"><a href="'+rpool+'">Расконсервация бассейна</a></li>\
    <li id="ppool"><a href="'+ppool+'">Проектирование бассейна</a></li>\
    <li id="bpool"><a href="'+bpool+'">Строительство бассейна</a></li>\
    ');
  }
  if (vdn == 'info' && vfn == 'index') {
    document.write('\
    <li id="pricem"><a href="'+pricem+'">Список прайсов</a></li>\
    <li id="scost"><a href="'+scost+'">Стоимость услуг</a></li>\
    <li id='+idseason+'><a href="'+snav+'">'+tsnav+'</a></li>\
    <li id="f00"><a href="'+f00+'">Фотографии</a></li>\
    <li id="factory"><a href="'+factory+'">Производители</a></li>\
    <li id="pstudio"><a href="'+pstudio+'">О студии</a></li>\
    ');
  }
  if (vdn == 'info/photo' && vfn == 'index') {
    document.write('\
    <li id="if01"><a href="'+f01+'">Бассейн в пансионате</a></li>\
    <li id="if02"><a href="'+f02+'">Общественный бассейн</a></li>\
    <li id="if03"><a href="'+f03+'">Частный бассейн</a></li>\
    <li id="if04"><a href="'+f04+'">Скиммерный бассейн</a></li>\
    <li id="if05"><a href="'+f05+'">Переливной бассейн</a></li>\
    <li id="if06"><a href="'+f06+'">Строительство бассейна</a></li>\
    ');
  }
  if (vdn == 'info/factory' && vfn == 'index') {
    document.write('\
    <li id="barchemicals"><a href="'+barchemicals+'">Barchemicals (Италия)</a></li>\
    <li id="del"><a href="'+del+'">DEL (Франция)</a></li>\
    <li id="hayward"><a href="'+hayward+'">Hayward (США)</a></li>\
    <li id="pierra"><a href="'+pierra+'">Pierra (Франция)</a></li>\
    ');
  }
  document.write('</ul>');
}
//End
//--- <div class="fnav"> ---------------------------------------------------------------------------------------
function jsFnav() {
  document.write('\
  <ul class="f-menu">\
    <li><a href="'+pools+'">Бассейны</a></li>\
    <li><a href="'+equip+'">Оборудование</a></li>\
    <li><a href="'+material+'">Материалы</a></li>\
    <li><a href="'+service+'">Сервис</a></li>\
    <li><a href="'+info+'">Информация</a></li>\
    <li><p class="t-inpb">&nbsp;</p></li>\
    <li><a href="'+pricem+'">Список прайсов</a></li>\
    <li><a href="'+scost+'">Стоимость услуг</a></li>\
  </ul>\
  ');
}
//End
//--- <div class="hsp-scrol"> ----------------------------------------------------------------------------------
function jsHspScrol() {
  f = allsetvar(vdn,vfn);
  document.write('\
  <div class="hsp-scrol">\
    <ul class="hsp-menu">\
      <li '+hmpools+'><a href="'+pools+'">Бассейны</a>\
        <ul>\
          <li '+hmfpools+'><a href="'+fpools+'">Композитные бассейны</a></li>\
          <li '+hmspools+'><a href="'+spools+'">Спа бассейны</a></li>\
        </ul>\
      </li>\
      <li '+hmequip+'><a href="'+equip+'">Оборудование</a>\
        <ul>\
          <li '+hmkfiltr+'><a href="'+kfiltr+'">Автономный фильтр</a></li>\
          <li '+hmsfiltr+'><a href="'+sfiltr+'">Стационарный фильтр</a></li>\
          <li '+hmrollet+'><a href="'+rollet+'">Роллетные накрытия</a></li>\
          <li '+hmsolar+'><a href="'+solar+'">Солярная пленка</a></li>\
          <li '+hmprotect+'><a href="'+protect+'">Защитное накрытие</a></li>\
        </ul>\
      </li>\
      <li '+hmmaterial+'><a href="'+material+'">Материалы</a>\
        <ul>\
          <li '+hmchemical+'><a href="'+chemical+'">Химия для бассейна</a></li>\
          <li '+hmcoping+'><a href="'+coping+'">Бортовой и террасный камень</a></li>\
          <!--li '+hmgarden+'><a href="'+garden+'">Садовая серия камня</a></li-->\
          <li '+hmfacade+'><a href="'+facade+'">Облицовка стен и фасадов</a></li>\
          <li '+hmfountain+'><a href="'+fountain+'">Фонтаны из камня</a></li>\
          <!--li '+hmtiles+'><a href="'+tiles+'">Плитка для пола</a></li-->\
          <li '+hmcareprod+'><a href="'+careprod+'">Химия для камня</a></li>\
        </ul>\
      </li>\
      <li '+hmservice+'><a href="'+service+'">Сервис</a>\
        <ul>\
          <li '+hmspool+'><a href="'+spool+'">Обслуживание бассейна</a></li>\
          <li '+hmcpool+'><a href="'+cpool+'">Консервация бассейна</a></li>\
          <li '+hmrpool+'><a href="'+rpool+'">Расконсервация бассейна</a></li>\
          <li '+hmppool+'><a href="'+ppool+'">Проектирование бассейна</a></li>\
          <li '+hmbpool+'><a href="'+bpool+'">Строительство бассейна</a></li>\
        </ul>\
      </li>\
      <li '+hminfo+'><a href="'+info+'">Информация</a>\
        <ul>\
          <li '+hmpricem+'><a href="'+pricem+'">Список прайсов</a></li>\
          <li '+hmscost+'><a href="'+scost+'">Стоимость услуг</a></li>\
          <li '+hmsnav+'><a href="'+snav+'">'+tsnav+'</a></li>\
          <li '+hmf00+'><a href="'+f00+'">Фотографии</a></li>\
          <li '+hmfactory+'><a href="'+factory+'">Производители</a></li>\
          <li '+hmpstudio+'><a href="'+pstudio+'">О студии</a></li>\
        </ul>\
      </li>\
    </ul>\
  </div>\
  ');
}
//End
//--- <a id="goseason" name="goseason"></a> ---------------------------------------------------------------------------------------
function jsGoSeason() {
  /*var date = new Date();
  var nms = date.getMonth();*/
  if (nms == 0 || nms == 1 || nms == 11) {slidegoseason = 'slidewinter'; alslideseason = 'Winter';}
  if (nms == 2 || nms == 3 || nms == 4) {slidegoseason = 'slidespring'; alslideseason = 'Spring';}
  if (nms == 5 || nms == 6 || nms == 7) {slidegoseason = 'slidesummer'; alslideseason = 'Summer';}
  if (nms == 8 || nms == 9 || nms == 10) {slidegoseason = 'slideautumn'; alslideseason = 'Autumn';}
  document.write('\
  <a id="sliderseason" name="sliderseason"></a>\
  <div class="block"><div class="b-wrap"><div class="b-cont"></div></div></div>\
  <div class="sectors"><div class="s-wrap"><div class="s-cont">\
    <div class="'+slidegoseason+' ifc"><a href="#season"><div class="img-wrap"><span id="slide" role="img" aria-label="'+alslideseason+' season"><span class="inner"></span></span></div></a></div>\
  </div></div></div>\
  ');
}
//End
//--- <a id="season" name="season"></a> ---------------------------------------------------------------------------------------
function jsSeason() {
  goseason = '#season';
  if (vdn == '' && vfn == 'index') {goseason = '#sliderseason';}
  /*var date = new Date();
  var nms = date.getMonth();*/
  if (nms == 0 || nms == 1 || nms == 11) {clifl = 'winters'; clbttnsn = 'winter'; clbttnsnr0 = 'spring'; clbttnsnr1 = 'summer'; clbttnsnr2 = 'autumn'; clbttnsnr3 = 'winter'; seasoname = 'зимнем';}
  if (nms == 2 || nms == 3 || nms == 4) {clifl = 'springs'; clbttnsn = 'spring'; clbttnsnr0 = 'summer'; clbttnsnr1 = 'autumn'; clbttnsnr2 = 'winter'; clbttnsnr3 = 'spring'; seasoname = 'весеннем';}
  if (nms == 5 || nms == 6 || nms == 7) {clifl = 'summers'; clbttnsn = 'summer'; clbttnsnr0 = 'autumn'; clbttnsnr1 = 'winter'; clbttnsnr2 = 'spring'; clbttnsnr3 = 'summer'; seasoname = 'летнем';}
  if (nms == 8 || nms == 9 || nms == 10) {clifl = 'autumns'; clbttnsn = 'autumn'; clbttnsnr0 = 'winter'; clbttnsnr1 = 'spring'; clbttnsnr2 = 'summer'; clbttnsnr3 = 'autumn'; seasoname = 'осеннем';}
  document.write('\
  <div class="block"><div class="b-wrap"><div class="b-cont"></div></div></div>\
  <div class="sector"><div class="s-wrap"><div class="s-cont">\
  <a id="season" name="season"></a>\
    <div class="'+clifl+' ifl"><a href="'+goseason+'"><div class="img-wrap"><span id="jpg" role="img" aria-label="'+clbttnsn+'"><span class="inner"></span></span></div></a></div>\
    <div class="snwrap">\
      <h2 class="s-title2 t-center">В '+seasoname+' сезоне</h2>\
      <h3 class="s-title t-center t-pb">самые популярные и&nbsp;востребованные:</h3>\
      <div class="snbttn">\
        <a href="'+pshttp+'info/'+clbttnsn+'/'+fin+'#seasonproduct" class="bttnsn '+clbttnsn+'">Товар сезона</a>\
        <a href="'+pshttp+'info/'+clbttnsn+'/'+fin+'#seasonservice" class="bttnsn '+clbttnsn+'">Услуга сезона</a>\
        <a href="'+pshttp+'info/'+clbttnsn+'/'+fin+'#seasonaction" class="bttnsn '+clbttnsn+'">Сезонная акция</a>\
        <a href="'+pshttp+'info/'+clbttnsnr0+'/'+fin+'#season" class="bttnsnr '+clbttnsnr0+'"></a>\
        <a href="'+pshttp+'info/'+clbttnsnr1+'/'+fin+'#season" class="bttnsnr '+clbttnsnr1+'"></a>\
        <a href="'+pshttp+'info/'+clbttnsnr2+'/'+fin+'#season" class="bttnsnr '+clbttnsnr2+'"></a>\
        <a href="'+pshttp+'info/'+clbttnsnr3+'/'+fin+'#season" class="bttnsnr '+clbttnsnr3+'"></a>\
      </div>\
    </div>\
  </div></div></div>\
  ');
}
//End
//--- <div class="hsp-lps"> ---------------------------------------------------------------------------------------
function jsHsplps() {document.write('<div class="hsp-lps"><a href="'+gsps+'"><div class="img-wrap"><span id="svg" role="img" aria-label="Pools Studio"><span class="inner"><div class="lsstudio">с</div><div class="lstudio">тудия</div><div class="lpools">Бассейнов</div></span></span></div></a></div>');}
//End
//--- <div class="hsp-lap"> ---------------------------------------------------------------------------------------
function jsHsplap() {document.write('<div class="hsp-lap"><a href="'+gsap+'" target="_blank"><div class="img-wrap"><span id="svg" role="img" aria-label="Aquaplus"><img class="inner" src="'+goh+'images/logo_p.svg" ></span></div></a></div>');}
//End
//--- <div class="h-lps f-lps"> ---------------------------------------------------------------------------------------
function jsHflps() {document.write('<div class="img-wrap"><a href="'+gsps+'"><span id="svg" role="img" aria-label="Pools Studio"><span class="inner"><div class="sstudio">с</div><div class="studio">тудия</div><div class="pools">Бассейнов</div></span></span></a></div>');}
//End
//--- <div class="h-lap f-lap"> ---------------------------------------------------------------------------------------
function jsHflap() {document.write('<div class="img-wrap"><a href="'+gsap+'" target="_blank"><span id="svg" role="img" aria-label="Aquaplus"><img class="inner" src="'+goh+'images/logo-p.svg" ></span></a></div>');}
//End
//--- <div class="moreinfo"> ---------------------------------------------------------------------------------------
function jsMoreinfo() {
  document.write('\
  <div class="block"><div class="b-wrap"><div class="b-cont">\
  </div></div></div>\
  <div class="sector"><div class="s-wrap"><div class="s-cont">\
    <div class="mobile ifr"><a href="#moreinfo"><div class="img-wrap"><span id="jpg" role="img" aria-label="Mobile"><span class="inner"></span></span></div></a></div>\
    <div class="snwrap">\
      <a id="moreinfo" name="moreinfo" class="aname"></a>\
      <h3 class="s-title t-center t-pb">Нужен совет?</h3>\
      <h3 class="s-title t-center t-pb">Возникли вопросы?</h3>\
      <h3 class="s-title t-center t-pb">Хотите получить консультацию?</h3>\
      <h3 class="s-title t-center t-pb">Позвоните нам, мы&nbsp;готовы поделиться своим&nbsp;опытом!</h3>\
      <div class="snbttn">\
        <a href="tel:+01234567890" value="+01234567890" class="bttncall"><p><small>+0</small>&nbsp;123&nbsp;456&nbsp;78&nbsp;90</p><p>Позвонить</p></a>\
      </div>\
    </div>\
  </div></div></div>\
  ');
}
//End
//--- <div class="contact"> ---------------------------------------------------------------------------------------
function jsComunOLD(last) {
  if (arguments.length == 0) {last = false;} else {last = true;}
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }
  else {isMobile = false;}
  document.write('\
  <div class="block"><div class="b-wrap"><div class="b-cont"></div></div></div>\
  <div class="sectors"><div class="s-wrap"><div class="s-cont">\
  ');
  if (last) {
    document.write('\
    <div class="fxcomun">\
    <div class="pwb usn dhr" data-hint="Telegram: @PoolWaterBot">\
      <div class="img-wrap"><a href="tg://resolve?domain=PoolWaterBot"><span id="png" role="img" aria-label="PoolWaterBot"><span class="inner"></span></span></a></div>\
    </div>\
    <div class="tpwb">\
      <p class="t-inpb">Telegram бот <a href="http://t.me/PoolWaterBot" target="_blank">@PoolWaterBot</a> создан для оказания помощи владельцу бассейна в&nbsp;решение проблем возникающих с&nbsp;водой в&nbsp;бассейне.</p>\
    </div>\
    ');
    document.write('<div class="tbttn">');
  } else {
    document.write('<div class="pbttn">');
  }
  if ((vdn == '' && vfn == 'autumn') || (vdn == '' && vfn == 'winter') || (vdn == '' && vfn == 'spring') || (vdn == '' && vfn == 'summer')) {
    document.write('<a href="#season"><div class="bttnsmbl f-right" data-hint="Самые популярные и востребованные..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'pools/fpools' && vfn == 'index') {
    document.write('<a href="#fpoolsn"><div class="bttnsmbl f-right" data-hint="Композитные бассейны..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'material/chemical' && vfn == 'index') {
    document.write('<a href="#chemical"><div class="bttnsmbl f-right" data-hint="Химия для бассейна..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'material/coping' && vfn == 'index') {
    document.write('<a href="#coping"><div class="bttnsmbl f-right" data-hint="Бортовой и террасный камень..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'material/careprod' && vfn == 'index') {
    document.write('<a href="#careprod"><div class="bttnsmbl f-right" data-hint="Химия для камня..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'material/fountain' && vfn == 'index') {
    document.write('<a href="#fountain"><div class="bttnsmbl f-right" data-hint="Фонтаны из камня..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'material/facade' && vfn == 'index') {
    document.write('<a href="#facade"><div class="bttnsmbl f-right" data-hint="Облицовка стен и фасадов..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'service/scost' && vfn == 'index') {
    document.write('<a href="#scost"><div class="bttnsmbl f-right" data-hint="Расчет стоимости услуг..."><span class="smblup"></span></div></a>');
  }
  if (vdn == '' && vfn == 'photo') {
    document.write('<a href="#photo"><div class="bttnsmbl f-right" data-hint="Фотографии..."><span class="smblup"></span></div></a>');
  }
/*  if (vdn == '' && vfn == 'price') {
    document.write('<a href="photo.html"><div class="bttnsmbl f-right" data-hint="Фотографии."><span class="smblph"></span></div></a>');
  }
*/
if (last) {
  if (vdn == '' && vfn == 'price') {
    posparam = top.location.href.indexOf ('?', 0);
    if (posparam==-1) {bpricelist = '#pricelist'; tpldh = 'Список прайсов...';} else {bpricelist = '#cnav'; tpldh = 'Список цен...';}
    document.write('<a href="'+bpricelist+'"><div class="bttnsmbl f-right" data-hint="'+tpldh+'"><span class="smblup"></span></div></a>');
  }
} else {
  if (vdn == '' && vfn == 'price') {
    posparam = top.location.href.indexOf ('?', 0);
    if (posparam==-1) {bpricelist = '#pricelist'; tpldh = 'Список прайсов...';} else {bpricelist = '#cnav'; tpldh = 'Список цен...';}
    document.write('<a href="'+bpricelist+'"><div class="bttnsmbl f-right" data-hint="'+tpldh+'"><span class="smblup"></span></div></a>');
  }
}
  document.write('\
  <a href="tel:+01234567890" value="+01234567890"><div class="bttnsmbl f-right" data-hint="Позвонить: +0 123 456 78 90"><span class="smblphone"></span></div></a>\
  ');
  if(isMobile) {
    document.write('\
    <a href="viber://chat?number=01234567890"><div class="bttnsmbl f-right" data-hint="Viber: +0 123 456 78 90"><span class="imgviber"></span></div></a>\
    ');
  }
  else {
    document.write('\
    <a href="viber://chat?number=+01234567890"><div class="bttnsmbl f-right" data-hint="Viber: +0 123 456 78 90"><span class="imgviber"></span></div></a>\
    ');
  }
  document.write('\
    <a href="tg://resolve?domain=PoolStudioBot"><div class="bttnsmbl f-right" data-hint="Telegram: @PoolStudioBot"><span class="imgtelegram"></span></div></a>\
  ');
  if (last) {
    if (vdn == '' && vfn == 'price') {
      posparam = top.location.href.indexOf ('?', 0);
      if (posparam==-1) {bpricelist = '#cnav'; tpldh = 'Показать список прайсов.';} else {bpricelist = pshttp+'price.html#cnav'; tpldh = 'Переход к списоку прайсов.';}
    }
    else {bpricelist = pshttp+'price.html#cnav'; tpldh = 'Переход к списоку прайсов.';}
    document.write('\
    <a href="'+bpricelist+'"><div class="bttnsmbl f-right pricebttn" data-hint="'+tpldh+'"><span class="smblprice"></span></div></a>\
    ');
  }
  if (last) {document.write('</div></div>');} else {document.write('</div>');}
  document.write('</div></div></div>');
}
//End


//--- <div class="contact"> ---------------------------------------------------------------------------------------
function jsComun(plast) {
  if (arguments.length == 0) {last = false; ccnav = false;
  } else {
    last = true;
    ccnav = true;
    switch (plast) {
      case 0:
        last = true;
        ccnav = false;
        break;
      case 1:
        last = false;
        ccnav = true;
        break;
      case 2:
        last = true;
        ccnav = true;
        break;
      default:
        last = true;
        ccnav = true;
    }
  }
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  } else {isMobile = false;}

  if (last) {
    document.write('\
    <div class="block"><div class="b-wrap"><div class="b-cont"></div></div></div>\
    <div class="sectors"><div class="s-wrap"><div class="s-cont">\
    ');
    document.write('\
    <div class="fxcomun">\
      <div class="pwb usn dhr" data-hint="Telegram: @PoolWaterBot">\
        <a href="tg://resolve?domain=PoolWaterBot"><div class="img-wrap"><span id="png" role="img" aria-label="PoolWaterBot"><span class="inner"></span></span></div></a>\
      </div>\
      <div class="tpwb">\
        <p class="t-inpb">Telegram бот <a href="http://t.me/PoolWaterBot" target="_blank">@PoolWaterBot</a> помогает владельцу бассейна решать проблемы, возникающие с&nbsp;водой в&nbsp;бассейне.</p>\
      </div>\
    ');
    document.write('<div class="tbttn">');
    document.write('\
    <div class="qrctbpwb" data-hint="Telegram: @PoolWaterBot QR-Code">\
      <a href="#qrctb"><div class="img-wrap"><span id="svg" role="img" aria-label="PoolWaterBot"><span class="inner"></span></span></div></a>\
      <acide id="qrctb" class="modal"><div class="qrctb"><img src="'+goh+'images/qr-code-tb.png" alt="QR-Code" /><a href="#mw" title="Закрыть"></a></div></acide>\
    </div>\
    ');
    document.write('</div></div>');
    document.write('</div></div></div>');
  }





  document.write('\
  <div class="block"><div class="b-wrap"><div class="b-cont"></div></div></div>\
  <div class="sectors"><div class="s-wrap"><div class="s-cont">\
  ');
  document.write('<div class="pbttn">');


  if (ccnav) {
    document.write('<a href="#cnav"><div class="bttnsmbl f-right" data-hint="Вверх к навигации..."><span class="smblup"></span></div></a>');
  } else {
    document.write('<a href="#'+cnav+cngo+'"><div class="bttnsmbl f-right" data-hint="'+tcnav+'..."><span class="smblup"></span></div></a>');
  }





  if ((vdn == '' && vfn == 'autumn') || (vdn == '' && vfn == 'winter') || (vdn == '' && vfn == 'spring') || (vdn == '' && vfn == 'summer')) {
    document.write('<a href="#season"><div class="bttnsmbl f-right" data-hint="Самые популярные и востребованные..."><span class="smblup"></span></div></a>');
  }
  if (vdn == 'service/scost' && vfn == 'index') {
    document.write('<a href="#scost"><div class="bttnsmbl f-right" data-hint="Расчет стоимости услуг..."><span class="smblup"></span></div></a>');
  }
  if (vdn == '' && vfn == 'photo') {
    document.write('<a href="#photo"><div class="bttnsmbl f-right" data-hint="Фотографии..."><span class="smblup"></span></div></a>');
  }
/*  if (vdn == '' && vfn == 'price') {
    document.write('<a href="photo.html"><div class="bttnsmbl f-right" data-hint="Фотографии."><span class="smblph"></span></div></a>');
  }
*/

  if (last) {
    if (vdn == '' && vfn == 'price') {
      posparam = top.location.href.indexOf ('?', 0);
      if (posparam==-1) {bpricelist = '#pricelist'; tpldh = 'Список прайсов...';} else {bpricelist = '#cnav'; tpldh = 'Список цен...';}
      document.write('<a href="'+bpricelist+'"><div class="bttnsmbl f-right" data-hint="'+tpldh+'"><span class="smblup"></span></div></a>');
    }
  } else {
    if (vdn == '' && vfn == 'price') {
      posparam = top.location.href.indexOf ('?', 0);
      if (posparam==-1) {bpricelist = '#pricelist'; tpldh = 'Список прайсов...';} else {bpricelist = '#cnav'; tpldh = 'Список цен...';}
      document.write('<a href="'+bpricelist+'"><div class="bttnsmbl f-right" data-hint="'+tpldh+'"><span class="smblup"></span></div></a>');
    }
  }

  document.write('\
    <a href="tel:+01234567890" value="+01234567890"><div class="bttnsmbl f-right" data-hint="Позвонить: +0 123 456 78 90"><span class="smblphone"></span></div></a>\
  ');
  document.write('\
    <a href="https://wa.me/01234567890" target="_blank"><div class="bttnsmbl f-right" data-hint="WhatsApp: +0 123 456 78 90"><span class="imgwhatsapp"></span></div></a>\
  ');
  if (isMobile) {
    document.write('\
      <a href="viber://chat?number=01234567890"><div class="bttnsmbl f-right" data-hint="Viber: +0 123 456 78 90"><span class="imgviber"></span></div></a>\
    ');
  }else {
    document.write('\
      <a href="viber://chat?number=+01234567890"><div class="bttnsmbl f-right" data-hint="Viber: +0 123 456 78 90"><span class="imgviber"></span></div></a>\
    ');
  }
  document.write('\
    <a href="tg://resolve?domain=PoolStudioBot"><div class="bttnsmbl f-right" data-hint="Telegram: @PoolStudioBot"><span class="imgtelegram"></span></div></a>\
  ');
  /*
  if (last) {
    if (vdn == '' && vfn == 'price') {
      posparam = top.location.href.indexOf ('?', 0);
      if (posparam==-1) {bpricelist = '#cnav'; tpldh = 'Показать список прайсов.';} else {bpricelist = pshttp+'price.html#cnav'; tpldh = 'Переход к списоку прайсов.';}
    } else {
      bpricelist = pshttp+'price.html#cnav'; tpldh = 'Переход к списоку прайсов.';
    }
    document.write('\
      <a href="'+bpricelist+'"><div class="bttnsmbl f-right pricebttn" data-hint="'+tpldh+'"><span class="smblprice"></span></div></a>\
    ');
  }
  */
  /*if (last) {document.write('</div></div>');} else {document.write('</div>');}*/
  document.write('</div>');
  document.write('</div></div></div>');
}
//End




//--- <div class="pwb"> ---------------------------------------------------------------------------------------
function jsTpwb() {
  if (vdn == '' && vfn == 'price') {
    posparam = top.location.href.indexOf ('?', 0);
    if (posparam==-1) {bpricelist = '#pricelist';} else {bpricelist = pshttp+'price.html#pricelist';}
  }
  else {bpricelist = pshttp+'price.html#pricelist';}
  document.write('\
  <div class="block"><div class="b-wrap"><div class="b-cont">\
  </div></div></div>\
  <div class="sector"><div class="s-wrap"><div class="s-cont">\
    <!--div class="telegram usn dhr" data-hint="Telegram: @PoolStudioBot">\
     <a href="tg://resolve?domain=PoolStudioBot"><div class="img-wrap"><span id="png" role="img" aria-label="PoolStudioBot"><span class="inner"></span></span></div></a>\
    </div-->\
    <div class="pwb usn dhr" data-hint="Telegram: @PoolWaterBot">\
      <a href="tg://resolve?domain=PoolWaterBot"><div class="img-wrap"><span id="png" role="img" aria-label="PoolWaterBot"><span class="inner"></span></span></div></a>\
    </div>\
    <div class="tpwb">\
      <p class="t-inpb">Telegram бот <a href="http://t.me/PoolWaterBot" target="_blank">@PoolWaterBot</a> создан для оказания помощи владельцу бассейна в решение проблем возникших с водой в бассейне.</p>\
    </div>\
    <div class="tbttn">\
    ');
    if ((vdn == '' && vfn == 'autumn') || (vdn == '' && vfn == 'winter') || (vdn == '' && vfn == 'spring') || (vdn == '' && vfn == 'summer')) {
      document.write('<a href="#season"><div class="bttnsmbl f-right" data-hint="Самые популярные и востребованные..."><span class="smblup"></span></div></a>');
    }
    document.write('\
      <a href="'+bpricelist+'"><div class="bttnsmbl f-right pricebttn" data-hint="Переход к списоку прайсов"><span class="smblprice"></span></div></a>\
      <!-- a href="#moreinfo"><div class="bttnsmbl f-right" data-hint="Больше информации..."><span class="smblphonelt"></span></div></a -->\
      <a href="tel:+01234567890" value="+01234567890"><div class="bttnsmbl f-right" data-hint="Позвонить: +0 123 456 78 90"><span class="smblphone"></span></div></a>\
  ');
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
    document.write('\
      <a href="viber://chat?number=01234567890"><div class="bttnsmbl f-right" data-hint="Viber: +0 123 456 78 90"><span class="imgviber"></span></div></a>\
    ');
  }
  else {
    isMobile = false;
    document.write('\
      <a href="viber://chat?number=+01234567890"><div class="bttnsmbl f-right" data-hint="Viber: +0 123 456 78 90"><span class="imgviber"></span></div></a>\
    ');
  }
  document.write('\
    <a href="tg://resolve?domain=PoolStudioBot"><div class="bttnsmbl f-right" data-hint="Telegram: @PoolStudioBot"><span class="imgtelegram"></span></div></a>\
  ');
  document.write('\
    </div>\
  </div></div></div>\
  ');
}
//End
//--- <div class="clock"> ---------------------------------------------------------------------------------------
function jsClock() {
  var date = new Date();
  cdw = date.getDay();
  if (cdw == 0) {cdw0 = ' cdw'} else {cdw0 = ''}
  if (cdw == 1) {cdw1 = ' cdw'} else {cdw1 = ''}
  if (cdw == 2) {cdw2 = ' cdw'} else {cdw2 = ''}
  if (cdw == 3) {cdw3 = ' cdw'} else {cdw3 = ''}
  if (cdw == 4) {cdw4 = ' cdw'} else {cdw4 = ''}
  if (cdw == 5) {cdw5 = ' cdw'} else {cdw5 = ''}
  if (cdw == 6) {cdw6 = ' cdw'} else {cdw6 = ''}
  if (clockc == 0) {clockhf = ' clock-h'; clockc += 1;} else {clockhf = ' clock-f'}
  document.write('\
  <div class="clock'+clockhf+'"data-hint="Время работы">\
    <a href="#tw"><div class="img-wrap"><span id="svg" role="img" aria-label="Clock"><span class="inner"></span></span></div></a>\
    <acide id="tw" class="modal">\
      <div class="timework">\
        <div class="tw-t">\
          <div class="tw-r"><div class="tw-c dw'+cdw1+'">Пн</div><div class="tw-c wt t-right'+cdw1+'">10:00 – 18:00</div></div>\
          <div class="tw-r"><div class="tw-c dw'+cdw2+'">Вт</div><div class="tw-c wt t-right'+cdw2+'">10:00 – 18:00</div></div>\
          <div class="tw-r"><div class="tw-c dw'+cdw3+'">Ср</div><div class="tw-c wt t-right'+cdw3+'">10:00 – 18:00</div></div>\
          <div class="tw-r"><div class="tw-c dw'+cdw4+'">Чт</div><div class="tw-c wt t-right'+cdw4+'">10:00 – 18:00</div></div>\
          <div class="tw-r"><div class="tw-c dw fri'+cdw5+'">Пт</div><div class="tw-c wt fri t-right'+cdw5+'">10:00 – 17:00</div></div>\
          <div class="tw-r"><div class="tw-c dw sat'+cdw6+'">Сб</div><div class="tw-c wt sat t-right'+cdw6+'">11:00 – 15:00</div></div>\
          <div class="tw-r"><div class="tw-c dw sun'+cdw0+'">Вс</div><div class="tw-c wt sun t-center'+cdw0+'">Выходной</div></div>\
        </div>\
        <a href="#mw" title="Закрыть"></a>\
      </div>\
    </acide>\
  </div>\
  ');
}
//End
//--- <div class="phone"> ---------------------------------------------------------------------------------------
function jsPhone() {
  document.write('\
<div class="phone" data-hint="Контакты QR-Code">\
  <a href="#qrc"><div class="img-wrap"><span id="svg" role="img" aria-label="Phone"><span class="inner"></span></span></div></a>\
  <acide id="qrc" class="modal"><div class="qrcod"><img src="'+goh+'images/qr-code.gif" alt="QR-Code" /><a href="#mw" title="Закрыть"></a></div></acide>\
</div>\
  ');
document.getElementsByClassName('phone')[0].classList.add('dhr')
}
//End
//--- <div class="contact"> ---------------------------------------------------------------------------------------
function jsContact() {
  document.write('\
  <div class="contact">\
    <p class="tel"><a href="tel:+01234567890" value="+01234567890"><small>+0</small>&nbsp;123&nbsp;456&nbsp;78&nbsp;90</a></p>\
    <p class="mail"><a href="mailto:email@gmail.com">email@gmail.com</a></p>\
  </div>\
  ');
}
//End
//--- <div class="calendar usn"> ---------------------------------------------------------------------------------------
function jsCalendar() {
  document.write('\
  <div class="calendar usn" data-hint="Рабочий календарь">\
    <a href="#tdc"><p class="p-date"><span id="tdy" class="year"></span><span id="tdd" class="day"></span><span id="tdm" class="month"></span></p></a>\
    <acide id="tdc" class="modal">\
      <div class="calendar1">\
        <table id="calendar2">\
          <thead>\
            <tr><td>&#9668;<td colspan="5"><td>&#9658;\
            <tr><td>&nbsp;Пн&nbsp;<td>&nbsp;Вт&nbsp;<td>&nbsp;Ср&nbsp;<td>&nbsp;Чт&nbsp;<td>&nbsp;Пт&nbsp;<td>&nbsp;Сб&nbsp;<td>&nbsp;Вс&nbsp;\
          <tfoot><tr><td colspan="7">Сегодня</td></tr></tfoot>\
          <tbody>\
        </table>\
        <a href="#mw" title="Закрыть"></a>\
      </div>\
    </acide>\
  </div>\
  ');
}
//End
//--- <div class="f-home"> ---------------------------------------------------------------------------------------
function jsHome() {
  document.write('\
  <div class="f-pwb usn"  data-hint="Telegram: @PoolWaterBot">\
    <a href="tg://resolve?domain=PoolWaterBot"><div class="img-wrap"><span id="png" role="img" aria-label="PoolWaterBot"><span class="inner"></span></span></div></a>\
  </div>\
  ');
/*

  if (vdn == '' && vfn == 'index') {
    document.write('\
      <div class="f-home" data-hint="Домашняя страница">\
        <a href="http://poolstudio.github.io/"><div class="img-wrap"><span id="svg" role="img" aria-label="Home"><span class="inner"></span></span></div></a>\
      </div>\
    ');
  } else {
    document.write('\
      <div class="f-home" data-hint="Вверх к навигации">\
        <a href="#cnav"><div class="img-wrap"><span id="svg" role="img" aria-label="Home"><span class="inner"></span></span></div></a>\
      </div>\
    ');
  }
  */
}
//End
//--- <div class="f-telegram"> - <div class="f-pwb"> -----------------------------------------------------
function jsTelegram() {
/*
  document.write('\
  <div class="f-pwb usn"  data-hint="Telegram: @PoolWaterBot">\
    <a href="tg://resolve?domain=PoolWaterBot"><div class="img-wrap"><span id="png" role="img" aria-label="PoolWaterBot"><span class="inner"></span></span></div></a>\
  </div>\
  ');


*/

  document.write('\
  <div class="f-whatsapp usn"  data-hint="WhatsApp: +0 123 456 78 90">\
    <a href="https://wa.me/01234567890" target="_blank"><div class="img-wrap"><span id="png" role="img" aria-label="WhatsApp"><span class="inner"></span></span></div></a>\
  </div>\
  ');



  document.write('<div class="f-viber usn" data-hint="Viber: +0 123 456 78 90">');
  isMobile = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
    document.write('\
      <a href="viber://chat?number=01234567890"><div class="img-wrap"><span id="png" role="img" aria-label="Pool Studio"><span class="inner"></span></span></div></a>\
    ');
  } else {
    isMobile = false;
    document.write('\
      <a href="viber://chat?number=+01234567890"><div class="img-wrap"><span id="png" role="img" aria-label="Pool Studio"><span class="inner"></span></span></div></a>\
    ');
  }
  document.write('</div>');
  document.write('\
    <div class="f-telegram usn" data-hint="Telegram: @PoolStudioBot">\
      <a href="tg://resolve?domain=PoolStudioBot"><div class="img-wrap"><span id="png" role="img" aria-label="PoolStudioBot"><span class="inner"></span></span></div></a>\
    </div>\
  ');
}
//End
//--- <div class="f-SocialNetworkLinks"> -----------------------------------------------------
function jsRss() {
  document.write('\
  <div class="f-rss usn" data-hint="Новости RSS">\
    <a href="http://poolstudio.github.io/rss.html" target="_blank"><div class="img-wrap"><span id="svg" role="img" aria-label="RSS"><span class="inner"></span></span></div></a>\
    <a href="http://poolstudio.github.io/rss.xml" target="_blank">RSS</a>\
  </div>\
  <div class="f-fbl usn" data-hint="Facebook">\
    <a href="https://www.facebook.com/" target="_blank"><div class="img-wrap"><span id="png" role="img" aria-label="Facebook"><span class="inner"></span></span></div></a>\
  </div>\
  <div class="f-ytl usn" data-hint="YouTube">\
    <a href="https://www.youtube.com/" target="_blank"><div class="img-wrap"><span id="png" role="img" aria-label="YouTube"><span class="inner"></span></span></div></a>\
  </div>\
  ');

  if (vdn == 'info/studio' && vfn == 'index') {
    document.write('\
      <div class="f-home" data-hint="Вверх к навигации">\
        <a href="#cnav"><div class="img-wrap"><span id="svg" role="img" aria-label="PoolStudio"><span class="inner"></span></span></div></a>\
      </div>\
    ');
  } else {
    document.write('\
      <div class="f-home" data-hint="Информация о студии">\
        <a href="'+pstudio+'"><div class="img-wrap"><span id="svg" role="img" aria-label="PoolStudio"><span class="inner"></span></span></div></a>\
      </div>\
    ');
  }
  document.write('\
    <div class="f-factory" data-hint="Производители">\
      <a href="'+factory+'"><div class="img-wrap"><span id="svg" role="img" aria-label="Home"><span class="inner"></span></span></div></a>\
    </div>\
  ');
  document.write('\
    <div class="f-photo" data-hint="Фотографии">\
      <a href="'+f00+'"><div class="img-wrap"><span id="svg" role="img" aria-label="Home"><span class="inner"></span></span></div></a>\
    </div>\
  ');

}
//End
//--- <div class="f-rss"> ---------------------------------------------------------------------------------------
function jsRssOLD() {
  document.write('\
  <div class="f-rss usn" data-hint="Новости RSS">\
    <a href="http://poolstudio.github.io/rss.html" target="_blank"><div class="img-wrap"><span id="svg" role="img" aria-label="RSS"><span class="inner"></span></span></div></a>\
    <a href="http://poolstudio.github.io/rss.xml" target="_blank">RSS</a>\
  </div>\
  <div class="facebook usn" data-hint="Facebook">\
    <a href="https://www.facebook.com/%D0%A1%D1%82%D1%83%D0%B4%D0%B8%D1%8F-%D0%B1%D0%B0%D1%81%D1%81%D0%B5%D0%B9%D0%BD%D0%BE%D0%B2-430713563976513/" target="_blank"><p class="p-fb"><span class="sp-fb">f</span></p></a>\
  </div>\
  <div class="googleplus usn" data-hint="Google+">\
    <a href="https://plus.google.com/u/0/110322720093850924396" target="_blank"><p class="p-gp"><span class="sp-g">G</span><span class="sp-p">+</span></p></a>\
  </div>\
  <!-- div class="youtube">\
    <a href="https://www.youtube.com/user/aplpst" target="_blank"><p class="p-yt"><span class="sp-y">You</span><span class="sp-t">Tube</span></p></a>\
  </div -->\
  <div class="newyoutube usn" data-hint="YouTube">\
    <a href="https://www.youtube.com/user/aplpst" target="_blank"><p class="p-yt"><span class="sp-yt">&#9658;</span></p></a>\
  </div>\
  ');
}
//End
//--- <div id="scrolpage" class="usn"> ---------------------------------------------------------------------------------------
function jsScrolpage() {
  document.write('\
    <div id="scrolpage" class="usn">\
      <div class="spu-cb" id="spu-cb" data-hint="Вверх страницы">\
        <input type="checkbox" class="spu-icb" id="spucb">\
        <label for="spucb" class="spu-lcb" id="spu-lcb"></label>\
      </div>\
      <div class="spd-cb" id="spd-cb" data-hint="Вниз страницы">\
        <input type="checkbox" class="spd-icb" id="spdcb">\
        <label for="spdcb" class="spd-lcb" id="spd-lcb"></label>\
      </div>\
    </div>\
  ');
}
//End
