/*inf.js*/
async function getIpLocation(url) {  
  try {
    const response = await fetch(url, {
    method: 'GET',
    mode: 'no-cors'
  });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json(); // Возвращаем данные
  } catch (error) {
    return { error: error.message }; // Возвращаем ошибку в виде объекта
  }
}
async function infData() {
  let nf = {};
  nf.win = {};
  nf.win.scrWid = window.screen.width;
  nf.win.scrHei = window.screen.height;
  nf.nav = {};
  nf.nav.brows = navigator.userAgent;
  nf.tz = {};
  nf.tz.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  nf.tz.offset = new Date().getTimezoneOffset();
  nf.tz.offsetHours = -(nf.tz.offset / 60);
  nf.tz.utcTime = (nf.tz.offsetHours >= 0 ? "+" : "") + nf.tz.offsetHours;
  //let lc = (typeof window.Telegram.WebApp.themeParams.link_color=='undefined')?'#0000FF':window.Telegram.WebApp.themeParams.link_color;
  //https://ipapi.co/json/
  //https://api.ipify.org?format=json
  //https://ip-api.com/
  let url = 'https://api.ip2location.io/';
  let key = '?key=687D5768B7A7FBB61B883B574B92ED66';
  //let uk = url+key;
  let uk = 'https://ipapi.co/json/';
  let res = await getIpLocation(uk);

  /*
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
  //inf.res.text = await response.text();
  //inf.res.url = url;
  //towhb


  
  url = 'https://qnext.app/bin/webhooks/1660/628/l1yubbxtqEb4u3bi';
  let tg = window.Telegram.WebApp;
  let data = {twa: tg, info: nf};
  let whr = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  document.getElementById("nf").innerHTML = "";
  return;
}
infData();
//END

