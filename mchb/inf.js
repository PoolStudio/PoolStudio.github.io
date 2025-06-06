/*inf.js*/
async function getVisitorIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
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
  nf.ip = await getVisitorIP();
  url = 'https://qnext.app/bin/webhooks/1660/628/l1yubbxtqEb4u3bi';
  let tg = window.Telegram.WebApp;
  let data = {twa: tg, info: nf};
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

