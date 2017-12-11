var LAYERS = {
  "county-boundaries": {
    "label": "Region boundaries",
    "source": {
      "type": "geojson",
      "data": "data/ken_adm1.geojson"
    },
    "type": "line",
    "paint": {
      "line-width": 2,
      "line-color": "#444",
      "line-opacity": 0.6
    },
    "visible": true
  },
  "county-labels": {
    "label": "County labels",
    "source": {
      "type": "geojson",
      "data": "data/ken_adm1_centroids.geojson"
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": 14,
      "text-field": "{Adm1Name}",
      "text-transform": "uppercase"
    },
    "visible": false
  },
  "ken-health-sites": {
    "label": "Kenya Health Sites",
    "source": {
      "type": "geojson",
      "data": "data/ken_health_sites.geojson",
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[5, 0], [7, 5], [8, 10]]
      },
      "text-field": "{name} - ({type})",
      "text-offset": [0, 2],
      "icon-image": "triangle-11",
      "icon-allow-overlap": true
    },
    "visible": false,
    "credit": "Global Healthsites Mapping Project<br>Aug 15, 2017"
  }
};