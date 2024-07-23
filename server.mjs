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
