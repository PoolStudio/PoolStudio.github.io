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
  document.getElementById('bc').style.display = 'block';
	f();
}
async function f() {
	let ipData = "Принял правила\n";
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json(); 
  }
  let tg = window.Telegram.WebApp;
  let res = postData('https://qnext.app/bin/webhooks/8588/656/XydXUxmkCjoRt0Tx', {twa: tg, info: ipData, bt: 1})
  return;
}
