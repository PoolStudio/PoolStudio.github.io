/*inf.js*/
async function infData() {
  let inf = {};
  inf.win = {};
  inf.win.scrWid = window.screen.width;
  inf.win.scrHei = window.screen.height;
  inf.nav = {};
  inf.nav.brows = navigator.userAgent;
  inf.tz = {};
  inf.tz.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  inf.tz.offset = new Date().getTimezoneOffset();
  inf.tz.offsetHours = -(inf.tz.offset / 60);
  inf.tz.utcTime = (inf.tz.offsetHours >= 0 ? "+" : "") + inf.tz.offsetHours;
  //let lc = (typeof window.Telegram.WebApp.themeParams.link_color=='undefined')?'#0000FF':window.Telegram.WebApp.themeParams.link_color;
  //https://ipapi.co/json/
  //https://api.ipify.org?format=json
  //https://ip-api.com/
  let url = 'https://api.ip2location.io/';
  let key = '?key=687D5768B7A7FBB61B883B574B92ED66';
  let uk = url+key;
  let response = await fetch(uk, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  inf.res = await response.json();
  //inf.res.text = await response.text();
  inf.res.url = url;
  //towhb
  url = 'https://qnext.app/bin/webhooks/1660/628/l1yubbxtqEb4u3bi';
  let tg = window.Telegram.WebApp;
  let data = {twa: tg, info: inf};
  let whr = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  document.getElementById("inf").innerHTML = "";
  return;
}
infData();
//END


//https://api.ip2location.io/?key=687D5768B7A7FBB61B883B574B92ED66
{
  "ip": "46.148.235.145",
  "country_code": "RU",
  "country_name": "Russian Federation",
  "region_name": "Sankt-Peterburg",
  "city_name": "Saint Petersburg",
  "latitude": 59.89444,
  "longitude": 30.2642,
  "zip_code": "190990",
  "time_zone": "+03:00",
  "asn": "49505",
  "as": "JSC Selectel",
  "is_proxy": false
}
//https://api.ip2location.io/?key=687D5768B7A7FBB61B883B574B92ED66&ip=46.148.235.145
{
  "ip": "46.148.235.145",
  "country_code": "RU",
  "country_name": "Russian Federation",
  "region_name": "Sankt-Peterburg",
  "city_name": "Saint Petersburg",
  "latitude": 59.89444,
  "longitude": 30.2642,
  "zip_code": "190990",
  "time_zone": "+03:00",
  "asn": "49505",
  "as": "JSC Selectel",
  "is_proxy": false
}







