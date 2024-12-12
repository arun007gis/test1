// Create the map
var map = L.map('map', {
    center: [20.5937, 78.9629], // Default center: India (can be adjusted based on your shapefile)
    zoom: 12
});

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add Fullscreen control
map.addControl(new L.Control.Fullscreen({
    position: 'topright',
    title: 'Expand',
    titleCancel: 'Exit'
}));

// Load the GeoJSON data from the same folder (assumes tt.geojson is in the same folder as your HTML)
fetch('tt.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);  // Add the GeoJSON layer to the map
    })
    .catch(error => console.error('Error loading GeoJSON:', error));


