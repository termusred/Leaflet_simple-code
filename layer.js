/** @format */

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png");

var osmHOT = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
);

const yandex = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
);
