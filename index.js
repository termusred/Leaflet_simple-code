/** @format */

var map = L.map("map", {
  center: [39.73, -104.99],
  zoom: 10,
  layers: [osm, cities],
});

var baseMaps = {
  OpenStreetMap: osm,
  "OpenStreetMap.HOT": osmHOT,
  Yandex: yandex,
};

var overlayMaps = {
  Cities: cities,
  Shops: shopsContainer,
  school: schoolsCon,
  Kinoteatorlar: TeatorCon,
  Palikninikalar: DamnCon,

};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
var baseMaps = {
  OpenStreetMap: osm,
  "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT,
};

layerControl.addOverlay(parks, "Parks");
