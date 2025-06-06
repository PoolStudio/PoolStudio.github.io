addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const apiUrl = 'https://api.ip2location.io/?key=687D5768B7A7FBB61B883B574B92ED66';
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  return new Response(JSON.stringify(data), {
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
}
