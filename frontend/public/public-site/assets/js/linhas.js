function toggleMap() {
    var mapContainer = document.getElementById('map-container');
    mapContainer.style.display = (mapContainer.style.display === 'none' || mapContainer.style.display === '') ? 'block' : 'none';
  }

  function fecharMapa() {
    var mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'none';
  }