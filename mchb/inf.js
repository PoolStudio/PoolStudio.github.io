/*inf.js*/
async function getVisitorIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    return '0.0.0.0';
  }
}
async function infData() {
  let dat = {};
  dat.winscr = {
    width: window.screen.width,
    height: window.screen.height,
    availWidth: window.screen.availWidth,
    availHeight: window.screen.availHeight,
    colorDepth: window.screen.colorDepth
  };
  dat.navua = navigator.userAgent;
  dat.tzname = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let offset = new Date().getTimezoneOffset();
  let offsetHours = -(offset / 60);
  dat.tzutc = (offsetHours >= 0 ? "+" : "") + offsetHours;
  dat.ip = await getVisitorIP();
  dat.tgwa = window.Telegram.WebApp;
  let url = 'https://qnext.app/bin/webhooks/7927/689/h319iH3Bm1aWJweF';
  let data = {dat: dat};
  let whr = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  let mad = await whr.json();
  if (mad.act) {
    if (mad.accessVS == 0) {
      document.getElementById('bt').style.display = 'block';
      document.getElementById('bd').style.display = 'block';
    } else {
      document.getElementById('bt').style.display = 'none';
      document.getElementById('bd').style.display = 'none';
      document.getElementById('br').style.display = 'block';
    }
  } else {
    document.getElementById('bt').style.display = 'none';
    document.getElementById('bd').style.display = 'none';
  }
  document.getElementById("inf").innerHTML = "";
  return;
}
infData();
//END
