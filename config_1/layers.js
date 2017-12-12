var LAYERS = {
  "county-boundaries": {
    "label": "County Boundaries",
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
      "text-size": 12,
      "text-field": "{Adm1Name}",
      "text-transform": "uppercase",
      "text-offset": [0, 1.5]
    },
    "visible": false
  }
};