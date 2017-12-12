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
        "stops": [[0, 0], [8, 5], [9, 10]]
      },
      "text-field": "{name} ({type})",
      "text-offset": [0, 2],
      "icon-image": "hospital-11",
      "icon-allow-overlap": true,
      "text-transform": "uppercase"
    },
    "visible": false,
    "credit": "Global Healthsites Mapping Project<br>Aug 15, 2017"
  },

  "health-spending": {
    "label": "Health Spending Per Capita",
    "source": {
      "type": "vector",
      "layer": "KEN_Adm1-1rmsg5",
      "url": "mapbox://ona.0daagepb",
      "data": "data/health_spending_per_capita.csv",
      "join": ["Adm1Name", "County"]
    },
    "type": "fill",
    "property": "Heath_Spending_Per_Person_",
    "categories": {
      "breaks": "yes",
      "color": "Greens",
      "clusters": 7
    },
    "labels": {
      "data": "data/health_spending_per_capita.csv",
      "label": "{{Heath_Spending_Per_Person_}}",
      "join": ["Adm1Name", "County"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": " Health Spending per person: {{Heath_Spending_Per_Person_}}%"
    },
    "visible": false,
    "credit": "Health Spending Per Capita"
  },

  "bednets": {
    "label": "% People Sleeping Under Bednets",
    "source": {
      "type": "vector",
      "layer": "KEN_Adm1-1rmsg5",
      "url": "mapbox://ona.0daagepb",
      "data": "data/health_spending_per_capita.csv",
      "join": ["Adm1Name", "County"]
    },
    "type": "fill",
    "property": "bednet",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "labels": {
      "data": "data/health_spending_per_capita.csv",
      "label": "{{Heath_Spending_Per_Person_}}",
      "join": ["Adm1Name", "County"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": " Health Spending per person: {{Heath_Spending_Per_Person_}}%"
    },
    "visible": false,
    "credit": "Health Spending Per Capita"
  },

  "malaria": {
    "label": "% of People with Fever or Malaria",
    "source": {
      "type": "vector",
      "layer": "ken_adm1_centroids-1b1p68",
      "url": "mapbox://ona.1wfeceam",
      "data": "data/health_spending_per_capita.csv",
      "join": ["Adm1Name", "County"]
    },
    "property": "malaria",
    "type": "circle",
    "minZoom": 0,
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": [ "#2ca25f", "#feb24c", "#f03b20"],
      "limit": [0.15, 0.3, 1],
      "label": ["Below 15%", "15% - 30%", "Above 30%"],
    },
    "popup": {
      "header": "region",
      "body": "Malaria Incidence: {{malaria}}"
    },
    "credit": "MoH Kenya 2017",
    "visible": false,
  }
};
