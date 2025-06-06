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
  dat.winscr = window.screen;
  dat.navua = navigator.userAgent;
  dat.tzname = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let offset = new Date().getTimezoneOffset();
  let offsetHours = -(offset / 60);
  dat.tzutc = (offsetHours >= 0 ? "+" : "") + offsetHours;
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

