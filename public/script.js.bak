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

