/*inf.js*/
async function infData() {
  let it = "<h2><b>Доступная информация</b></h2>";
  it = it+"<h3><b>Экран вашего устройства</b></h3>";
  let scrWid = window.screen.width;
  let scrHei = window.screen.height;
  let orient = (scrWid > scrHei)?'Горизонтальная':'Вертикальная';
  it = it+"<p>Ширина: "+scrWid+" px</p>";
  it = it+"<p>Высота: "+scrHei+" px</p>";
  it = it+"<p>Ориентация: "+orient+"</p>";
  let brows = navigator.userAgent;
  it = it+"<h3><b>Браузер</b></h3>";
  it = it+"<p>"+brows+"</p>";
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  it = it+"<p>Часовой пояс: "+timezone+"</p>";
  let offset = new Date().getTimezoneOffset();
  let offsetHours = -(offset / 60);
  let utcTime = (offsetHours >= 0 ? "+" : "") + offsetHours;
  it = it+"<p>UTC: "+utcTime+"</p>";
  it = it+"<h3><b>Локация</b></h3>";
  //https://ipapi.co/json/
  //https://api.ipify.org?format=json
/*
  it = await fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(d => document.getElementById("inf").innerHTML = it+"<p>IP адрес: "+d.ip+"</p>");
*/
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
      +"<p>Google карта: <a href='https://www.google.ru/maps/search/?api=1&map_action=map&zoom=15&query="+d.latitude+","+d.longitude+"'>"+d.latitude+","+d.longitude+"</a></p>"
      +"<p>Провайдер: "+d.org+"</p>"
      +"<p>IP адрес: "+d.ip+"</p>"
      );
  document.getElementById("inf").innerHTML = it;
  let ipData = document.getElementById('inf').innerText;
  //let ipData = it;
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json(); 
  }
  postData('https://qnext.app/bin/webhooks/8588/620/qCNJIFQn4QupnhVr', { twa: window.Telegram.WebApp, info: ipData })
}
infData();
//END
