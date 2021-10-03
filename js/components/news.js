const api = {
  key: "c24c3d671ee1c125a99c6fbe56fedec5",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then((weather) => {
      console.log(weather);
      buildMap(weather.coord.lat, weather.coord.lon);
    });
}

function buildMap(lat, lon) {
  document.getElementById("mapid").innerHTML =
    "<div id='map' style='width: 850px; height: 1200px;'></div>";
  const mymap = L.map("map").setView([lat, lon], 12);
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);

  // todo map
  var todoMap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
  );
  // water color map
  var watercolor = L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: "abcd",
      minZoom: 1,
      maxZoom: 16,
      ext: "jpg",
    }
  );
  //ersi world map
  var Esri_WorldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  );

  // Making a marker with a custom icon
  //Main ele
  const icon1 = L.icon({
    iconUrl: "img/pin.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker1 = L.marker([16.4675, 107.5904], { icon: icon1 });
  var popup1 = marker1
    .bindPopup(
      '<h1> DISASTER WARNING !!! </h1> <h2>Very High Wind Speed, Pressure and Precipitation Level Increasing So Fast! </h2> <img src="img/22.png" alt="" width="260" height="160"/><img src="img/33.png" alt="" width="260" height="160"/><img src="img/mua.png" alt="" width="260" height="160"/>'
    )
    .openPopup();
  popup1.addTo(mymap);
  var circle = L.circle([16.4675, 107.5904], {
    color: "red",
    radius: 3500,
    fillOpacity: 0.5,
    fillColor: "red",
  }).addTo(mymap);

  const iconS = L.icon({
    iconUrl: "img/noenergy.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markerS = L.marker([16.4596, 107.5883], { icon: iconS });
  var popupS = markerS
    .bindPopup("<h1>Power outage area </h1>" + markerS.getLatLng())
    .openPopup();
  popupS.addTo(mymap);

  const icon2 = L.icon({
    iconUrl: "img/rainny1.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker2 = L.marker([16.5134, 107.5636], { icon: icon2 });
  var popup2 = marker2
    .bindPopup("Rainny at " + marker2.getLatLng())
    .openPopup();
  popup2.addTo(mymap);

  const icon3 = L.icon({
    iconUrl: "img/1.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker3 = L.marker([16.44334, 107.5397], { icon: icon3 });
  var popup3 = marker3
    .bindPopup(
      '<h1> Some datas related to Solar energy: </h1> <h2>All Sky Surface Shortwave Downward Irradiance Average in 6 years (2015-2020): ~15.467 (MJ/m^2/day)</h2> <h2>All Sky Insolation Clearness Index Average in 6 years (2015-2020): ~0.4467 (dimensionless)</h2> <h2>Cloud Amount Average in 6 years (2015-2020): 72.395 (%) </h2> <img src="img/newplot.png" alt="" width="260" height="160"/><img src="img/newplot (2).png" alt="" width="260" height="160"/><img src="img/newplot (1).png" alt="" width="260" height="160"/>'
    )
    .openPopup();
  popup3.addTo(mymap);

  const icon6 = L.icon({
    iconUrl: "img/1.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker6 = L.marker([16.584, 107.5302], { icon: icon6 });
  var popup6 = marker6
    .bindPopup("Solar panel " + marker6.getLatLng())
    .openPopup();
  popup6.addTo(mymap);

  const icon7 = L.icon({
    iconUrl: "img/1.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker7 = L.marker([16.5429, 107.4921], { icon: icon7 });
  var popup7 = marker7
    .bindPopup("Solar panel " + marker7.getLatLng())
    .openPopup();
  popup7.addTo(mymap);

  const icon4 = L.icon({
    iconUrl: "img/2.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker4 = L.marker([16.457, 107.6279], { icon: icon4 });
  var popup4 = marker4.bindPopup("Rain at " + marker4.getLatLng()).openPopup();
  popup4.addTo(mymap);

  const icon5 = L.icon({
    iconUrl: "img/weather-iconset.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker5 = L.marker([16.4859, 107.6051], { icon: icon5 });
  var popup5 = marker5.bindPopup("Rain at " + marker5.getLatLng()).openPopup();
  popup5.addTo(mymap);
  //
  const icon8 = L.icon({
    iconUrl: "img/5.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker8 = L.marker([48.847, 2.2919], { icon: icon8 });
  var popup8 = marker8.bindPopup("Sunny at " + marker8.getLatLng()).openPopup();
  popup8.addTo(mymap);

  const icon9 = L.icon({
    iconUrl: "img/4.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker9 = L.marker([48.4918, 2.2483], { icon: icon9 });
  var popup9 = marker9.bindPopup("Sun at " + marker9.getLatLng()).openPopup();
  popup9.addTo(mymap);

  const icon10 = L.icon({
    iconUrl: "img/8.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let marker10 = L.marker([48.2974, 4.0656], { icon: icon10 });
  var popup10 = marker10
    .bindPopup("Sun at " + marker10.getLatLng())
    .openPopup();
  popup10.addTo(mymap);

  const iconn9 = L.icon({
    iconUrl: "img/solar-panel.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markern9 = L.marker([48.7992, 2.945], { icon: iconn9 });
  var popupn9 = markern9
    .bindPopup("Solar panel system at " + markern9.getLatLng())
    .openPopup();
  popupn9.addTo(mymap);

  const iconnn9 = L.icon({
    iconUrl: "img/solar-panel.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markernn9 = L.marker([48.538, 3.0659], { icon: iconnn9 });
  var popupnn9 = markernn9
    .bindPopup("Solar panel system at " + markernn9.getLatLng())
    .openPopup();
  popupnn9.addTo(mymap);

  const iconnnn9 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markernnn9 = L.marker([49.1472, 2.0716], { icon: iconnnn9 });
  var popupnnn9 = markernnn9
    .bindPopup("Tree at " + markernnn9.getLatLng())
    .openPopup();
  popupnnn9.addTo(mymap);

  const iconnnnn9 = L.icon({
    iconUrl: "img/2.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markernnnn9 = L.marker([48.7722, 1.7209], { icon: iconnnnn9 });
  var popupnnnn9 = markernnnn9
    .bindPopup("Rain at " + markernnn9.getLatLng())
    .openPopup();
  popupnnnn9.addTo(mymap);

  const iconD11 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markerD11 = L.marker([49.0781, 2.1302], { icon: iconD11 });
  var popupD11 = markerD11
    .bindPopup("Tree at " + markerD11.getLatLng())
    .openPopup();
  popupD11.addTo(mymap);

  const iconD111 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markerD111 = L.marker([48.7306, 2.5916], { icon: iconD111 });
  var popupD111 = markerD111
    .bindPopup("Tree at " + markerD111.getLatLng())
    .openPopup();
  popupD111.addTo(mymap);

  const iconD1111 = L.icon({
    iconUrl: "img/pin.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markerD1111 = L.marker([48.9376, 2.446], { icon: iconD1111 });
  var popupD1111 = markerD1111
    .bindPopup("Disaster at " + markerD1111.getLatLng())
    .openPopup();
  popupD1111.addTo(mymap);

  //
  // Marker disaster
  const iconD1 = L.icon({
    iconUrl: "img/pin.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markerD1 = L.marker([16.521, 107.6432], { icon: iconD1 });
  var popupD1 = markerD1
    .bindPopup("Disaster at " + markerD1.getLatLng())
    .openPopup();
  popupD1.addTo(mymap);

  const iconD2 = L.icon({
    iconUrl: "img/pin.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  let markerD2 = L.marker([16.44761, 107.4837], { icon: iconD2 });
  var popupD2 = markerD2
    .bindPopup("Disaster at " + markerD2.getLatLng())
    .openPopup();
  popupD2.addTo(mymap);

  // const iconD3 = L.icon({
  //   iconUrl: "img/pin.png",
  //   iconSize: [38, 65],
  //   iconAnchor: [22, 94],
  //   popupAnchor: [-3, -76],
  // });
  // let markerD3 = L.marker([16.521, 107.6432], { icon: iconD3 });
  // var popupD3 = markerD3
  //   .bindPopup("Disaster at " + markerD3.getLatLng())
  //   .openPopup();
  // popupD3.addTo(mymap);

  // Marker trees
  const iconTree1 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  let markerTree1 = L.marker([16.4242, 107.59574], { icon: iconTree1 });
  var popupTree1 = markerTree1
    .bindPopup(
      '<h1> Agriculture Informations </h1> <p>Rice plants:  </p> <p>Shallow crops(corn, peanuts, cassava, potatoes):  </p> <p>Industrial crops: </p> <img src="images/rice1.jpg" alt="" width="200" height="100"/> <img src="images/rice2.jpg" alt="" width="200" height="100"/>'
    )
    .openPopup();
  popupTree1.addTo(mymap);

  const iconTree2 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  let markerTree2 = L.marker([16.502, 107.5426], { icon: iconTree2 });
  var popupTree2 = markerTree2
    .bindPopup(
      '<h1> Agriculture Informations </h1> <p>Rice plants:  </p> <p>Shallow crops(corn, peanuts, cassava, potatoes):  </p> <p>Industrial crops: </p> <img src="images/rice1.jpg" alt="" width="200" height="100"/> <img src="images/rice2.jpg" alt="" width="200" height="100"/>'
    )
    .openPopup();
  popupTree2.addTo(mymap);

  const iconTree3 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  let markerTree3 = L.marker([16.5632, 107.5694], { icon: iconTree3 });
  var popupTree3 = markerTree3
    .bindPopup(
      '<h1> Agriculture Informations </h1> <h2>Suitable natural conditions for Industrial crops include both annuals (flax, potatoes, sunflower, caraway...) and perennials (olive, essential-oil rose, hevea, hops, ginseng...)</h2> <img src="image-atlas/sunflower.jpg" alt="" width="300" height="200"/><img src="image-atlas/rose.jpg" alt="" width="300" height="200"/>'
    )
    .openPopup();
  popupTree3.addTo(mymap);

  const iconTree4 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  let markerTree4 = L.marker([16.4374, 107.6889], { icon: iconTree4 });
  var popupTree4 = markerTree4
    .bindPopup(
      '<h1> Agriculture Informations </h1> <h2>Suitable natural conditions for Shallow crops: (Corn, Broccoli, Spinach, Cabbage, Lettuce, Kale, Chard, Onions...)</h2> <img src="image-atlas/carrot.jpg" alt="" width="300" height="200"/><img src="image-atlas/salad.jpg" alt="" width="300" height="200"/>'
    )
    .openPopup();
  popupTree4.addTo(mymap);

  const iconTree5 = L.icon({
    iconUrl: "img/tree.png",
    iconSize: [38, 65],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  let markerTree5 = L.marker([16.5704, 107.52], { icon: iconTree5 });
  var popupTree5 = markerTree5
    .bindPopup(
      '<h1> Agriculture Informations </h1> <p>Rice plants:  </p> <p>Shallow crops(corn, peanuts, cassava, potatoes):  </p> <p>Industrial crops: </p> <img src="images/rice1.jpg" alt="" width="200" height="100"/> <img src="images/rice2.jpg" alt="" width="200" height="100"/>'
    )
    .openPopup();
  popupTree5.addTo(mymap);
  // ------------

  // The world markers

  //Layer controller
  var baseMaps = {
    OSM: tiles,
    "Todo Map": todoMap,
    "Water color map": watercolor,
    "Esri_World map": Esri_WorldImagery,
  };

  var overlayMaps = {
    Type1: marker1,
    Type2: marker2,
    Type3: marker3,
    // marker4: marker4,
    // marker5: marker5,
    // markerD1: markerD1,
    // markerD2: markerD2,
    // markerTree1: markerTree1,
    // markerTree2: markerTree2,
    // markerTree3: markerTree3,
    // markerTree4: markerTree4,
    // markerTree5: markerTree5,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(mymap);
}
