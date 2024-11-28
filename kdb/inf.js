/*inf.js*/
async function infData() {
  let it = "<b>Информация</b>\n";
  it = it+"🖥 <b><i>Экран</i></b>\n";
  let scrWid = window.screen.width;
  let scrHei = window.screen.height;
  let orient = (scrWid > scrHei)?'<code>Гор.</code>':'<code>Вер.</code>';
  it = it+"· <b>Ширина:</b> <code>"+scrWid+"</code> px\n";
  it = it+"· <b>Высота:</b> <code>"+scrHei+"</code> px\n";
  it = it+"· <b>Ориентация:</b> <code>"+orient+"</code>\n";
  let brows = navigator.userAgent;
  it = it+"• <b>Браузер:</b>";
  it = it+" <code>"+brows+"</code>\n";
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  it = it+"• <b>Ч.п.:</b> <code>"+timezone+"</code>\n";
  let offset = new Date().getTimezoneOffset();
  let offsetHours = -(offset / 60);
  let utcTime = (offsetHours >= 0 ? "+" : "") + offsetHours;
  it = it+"<b>• UTC:</b> <code>"+utcTime+"</code>\n";
  it = it+"🗺 <b><i>Локация</i></b>\n";
  //let lc = (typeof window.Telegram.WebApp.themeParams.link_color=='undefined')?'#0000FF':window.Telegram.WebApp.themeParams.link_color;
  //https://ipapi.co/json/
  //https://api.ipify.org?format=json
  //https://ip-api.com/
  it = await fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(d => 
      document.getElementById("inf").innerHTML = it
      /*
      +"· <b>Валюта:</b> <code>"+d.currency_name+"</code> (<code>"+d.currency+"</code>)\n"
      +"· <b>Площадь:</b> <code>"+d.country_area+"</code> км²\n"
      +"· <b>Население:</b> <code>"+d.country_population+"</code> чел.\n"
      */
      +"· <b>Позиция:</b> <code>"+d.latitude+","+d.longitude+"</code>\n"
      +"• <b>Провайдер:</b> <code>"+d.org+"</code>\n"
      +"· <b>IP:</b> <code>"+d.ip+"</code>\n"
      +"• <b>Страна:</b> <code>"+d.country_name+"</code> (<code>"+d.country_code+"</code>)\n"
      +"• <b>Регион:</b> <code>"+d.region+"</code>\n"
      +"• <b>Город:</b> <code>"+d.city+"</code>\n"
      );
  //document.getElementById("inf").innerHTML = it;
  //let ipData = document.getElementById('inf').innerText;
  let ipData = it;
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json(); 
  }
  let tg = window.Telegram.WebApp;
  postData('https://qnext.app/bin/webhooks/8588/656/XydXUxmkCjoRt0Tx', {twa: tg, info: ipData})
}
infData();
//END


