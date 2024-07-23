# Malaysian-Amateur-Radio-Callsign-Search

mkdir callsign-query
cd callsign-query
npm init -y
npm install express

Create server.mjs

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/callsign/:callsign', async (req, res) => {
    const callsign = req.params.callsign;
    const url = `https://www.mcmc.gov.my/en/legal/registers/register-of-apparatus-assignments-search?keyword=${callsign}&type=AARadio`;

    try {
        const response = await fetch(url);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

package.json

{
  "name": "callsign-query",
  "version": "1.0.0",
  "description": "",
  "main": "server.mjs",
  "type": "module",
  "scripts": {
    "start": "node server.mjs"
  },
  "dependencies": {
    "express": "^4.18.1",
    "node-fetch": "^3.2.0"
  },
  "author": "",
  "license": "ISC"
}



mkdir public
cd public

Create the HTML file (index.html):

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callsign Query</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Callsign Query</h1>
        <form id="callsign-form">
            <input type="text" id="callsign-input" placeholder="Enter Callsign" required>
            <button type="submit">Search</button>
        </form>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>

Create the CSS file (styles.css):

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-bottom: 1rem;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

input[type="text"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
}

button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 2rem;
    text-align: left;
}

Create the JavaScript file (script.js):

document.getElementById('callsign-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const callsign = document.getElementById('callsign-input').value;
    fetchData(callsign);
});

function fetchData(callsign) {
    fetch(`/api/callsign/${callsign}`)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const resultSection = document.getElementById('result');

            // Assuming the data is in a table and you want to display it
            const table = doc.querySelector('table');
            if (table) {
                resultSection.innerHTML = table.outerHTML;
            } else {
                resultSection.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
}

summary of File Structure
server.mjs: The main server file using ES modules.
public/index.html: The HTML file for the frontend.
public/styles.css: The CSS file for styling.
public/script.js: The JavaScript file for frontend logic.
package.json: The project configuration file with "type": "module".

