mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: [73.8786, 18.5246],
    zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat([73.8786, 18.5246])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        "<h6>Exact location provided after booking!</h6>"
      )
    )
    .addTo(map);