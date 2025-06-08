/*sc.js*/
let bgc = document.getElementsByClassName('bgc')[0];
bgc.style.color = window.Telegram.WebApp.themeParams.text_color;
bgc.style.backgroundColor = window.Telegram.WebApp.themeParams.bg_color;
let btc = document.getElementsByClassName('btc')[0];
btc.style.color = window.Telegram.WebApp.themeParams.button_text_color;
btc.style.backgroundColor = window.Telegram.WebApp.themeParams.button_color;
//document.getElementById('bt').onclick = bttn;
function bttn() {
  //alert('Вы нажали на кнопку!');
  document.getElementById('bt').style.display = 'none';
  document.getElementById('bd').style.display = 'none';
  document.getElementById('bc').style.display = 'block';
	f();
}
async function f() {
  let dat = {};
  dat.actbt = true;
  dat.tgwa = window.Telegram.WebApp;
  let url = 'https://qnext.app/bin/webhooks/7927/689/h319iH3Bm1aWJweF';
  let data = {dat: dat};
  let whr = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  let mad = await whr.json();
  return;
}
//END
