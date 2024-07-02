/*inf.js*/
async function infData() {
  let it = "<h1>Доступная информация</h1>";
  it = it+"<h2>Экран вашего устройства</h2>";
  let scrWid = window.screen.width;
  let scrHei = window.screen.height;
  let orient = (scrWid > scrHei)?'Горизонтальная':'Вертикальная';
  it = it+"<p>Ширина: "+scrWid+" px</p>";
  it = it+"<p>Высота: "+scrHei+" px</p>";
  it = it+"<p>Ориентация: "+orient+"</p>";
  let brows = navigator.userAgent;
  it = it+"<h2>Браузер</h2>";
  it = it+"<p>"+brows+"</p>";
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  it = it+"<p>Часовой пояс: "+timezone+"</p>";
  let offset = new Date().getTimezoneOffset();
  let offsetHours = -(offset / 60);
  let utcTime = (offsetHours >= 0 ? "+" : "") + offsetHours;
  it = it+"<p>UTC: "+utcTime+"</p>";
  it = it+"<h2>Локация</h2>";
  //https://ipapi.co/json/
  //https://api.ipify.org?format=json
  //https://ip-api.com/
/*
  it = await fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(d => document.getElementById("inf").innerHTML = it+"<p>IP адрес: "+d.ip+"</p>");
*/
  it = await fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(d => 
      document.getElementById("inf").innerHTML = it
      +"<p>Страна: "+d.country_name+" ("+d.country_code+")</p>"
      +"<p>• Валюта: "+d.currency_name+" ("+d.currency+")</p>"
      +"<p>• Площадь: "+d.country_area+" км²</p>"
      +"<p>• Население: "+d.country_population+" чел.</p>"
      +"<p>Регион: "+d.region+"</p>"
      +"<p>Населенный пункт: "+d.city+"</p>"
      +"<p>Google карта: <a href='https://www.google.ru/maps/search/?api=1&map_action=map&zoom=15&query="+d.latitude+","+d.longitude+"'>"+d.latitude+","+d.longitude+"</a></p>"
      +"<p>Провайдер: "+d.org+"</p>"
      +"<p>IP адрес: "+d.ip+"</p>"
      );
  document.getElementById("inf").innerHTML = it;
  let ipData = document.getElementById('inf').innerText;
  //let ipData = it;
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json(); 
  }
  //postData('https://qnext.app/bin/webhooks/8588/620/qCNJIFQn4QupnhVr', { twa: window.Telegram.WebApp, info: ipData })
}
infData();
//END

/*
function navProp() {
  let navig = "";
  for (var property in navigator) {
    navig += "<strong>"+property+"</strong> :" + navigator[property];
    navig +="<br />";
  }
  //document.getElementById("inf").innerHTML = navig;
  return navig;
}
//document.getElementById("inf").innerHTML = navProp();





  <!--div class="outer">  
    <div class="inner">
      <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="PoolStudioBot" data-size="large" data-radius="10" data-auth-url="https://poolstudio.github.io/cs/" data-request-access="write"></script>
    </div>
  </div-->
  <script>
    document.writeln("<h2><b>Доступная информация</b></h2>");
    document.write("<h3><b>Экран вашего устройства</b></h3>");
    let screenWidth = window.screen.width;
    document.write("<p>Ширина: "+screenWidth+" px</p>");
    let screenHeight = window.screen.height;
    document.write("<p>Высота: "+screenHeight+" px</p>");
    let orientation = (screenWidth > screenHeight) ? 'Горизонтальная' : 'Вертикальная';
    document.write("<p>Ориентация: "+orientation+"</p>");
    document.write("<h3><b>Браузер</b></h3>");
    let browser = navigator.userAgent;
    document.writeln('<p>'+browser+"</p>");

    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(d => document.querySelector('#ip').innerHTML = "<p>IP адрес: "+d.ip+"</p>");









    async function ipData(){
      const res = await fetch('https://api.ipify.org?format=json');
      resp = res.json();
      return resp.ip;
    }

    let ipRes = ipData().then(d => d = resp.ip);



res = fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => resp = d.ip);

//let ipres = res.then(d => resp = d.ip);





  
function checkIP() {
  return fetch('https://api.ipify.org?format=json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var userid = JSON.parse(data);
      return userid;
    })
}
let ipAddress = checkIP();





//let ipAddress = Promise.resolve(res);

    
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(d => document.querySelector('#ip').innerHTML = "<p>IP адрес: "+d.ip+"</p>");







      //.then(d => d.json())
      //.then(d => ipAddress = d.ip);
    //document.writeln('<p>IP адрес: '+ipAddress+"</p>");
  //.then(d => document.querySelector('#ip').innerHTML = "<p>IP адрес: "+d.ip+"</p>");
    let inf = {
          width: screenWidth,
          height: screenHeight,
          orient: orientation,
          brows: browser
        };

    const postData = async (url = '', data = {}) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json(); 
    }
    postData('https://qnext.app/bin/webhooks/8588/620/qCNJIFQn4QupnhVr', { twa: window.Telegram.WebApp, info: inf })

  </script>

<div id="ip"></div>
<br><br><br>
<div id="navig" class="alert alert-waring">
</div-->

<!--script>

var navig = "";
for (var property in navigator) {
  navig += "<strong>"+property+"</strong> :" + navigator[property];
  navig +="<br />";
}
document.getElementById("navig").innerHTML = navig;
</script-->
</body>
</html>



*/
