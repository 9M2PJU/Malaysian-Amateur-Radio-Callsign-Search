import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 7388;

app.use(express.static('public'));

app.get('/api/callsign/:callsign', async (req, res) => {
    const callsign = req.params.callsign;
    const url = `https://www.mcmc.gov.my/en/legal/registers/register-of-apparatus-assignments-search?keyword=${callsign}&type=AARadio`;

    const userAgent = 'Mozilla/5.0 (Linux; Android 10; Pixel 3 XL Build/QQ1A.200105.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 Mobile Safari/537.36';

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': userAgent
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send(`Error fetching data: ${error.message} - ${error.response ? error.response.body : 'No response body'}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

