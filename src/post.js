const http = require('http');

const data = JSON.stringify({
    name: "Pooja",
    age: 10
});

// HTTP request options
const options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

// Create the HTTP request
const req = http.request(options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log('Server Response:', JSON.parse(responseBody));
    });
});

// Error handling
req.on('error', (error) => {
    console.error('Request error:', error);
});

// Write data to request body and end the request
req.write(data);
req.end();
