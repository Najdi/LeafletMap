import { Component } from '@angular/core';
import * as L from "leaflet";
import  "leaflet-draw";







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Last';

  ngAfterViewInit(): void {

    var map = L.map('map').setView([48.8704487, 2.3727312],9);

    var bounds = L.latLngBounds([[ 49.0475, 2.3036], [ 49.201, 2.2535]]);
L.rectangle(bounds).addTo(map);
map.fitBounds(bounds);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);





var littleton = L.marker([48.86896, 2.37679]).bindPopup('LidL').addTo(map),
    denver    = L.marker([48.862, 2.3442]).bindPopup('Restaurant La goulette .').addTo(map),
    aurora    = L.marker([48.8555, 2.3241]).bindPopup('Ma Maison').addTo(map),
    golden    = L.marker([48.8719, 2.275]).bindPopup('Monoprix').addTo(map);




     var drawnItems = new L.FeatureGroup();
     map.addLayer(drawnItems);

     var drawControl = new L.Control.Draw({
         edit: {
             featureGroup: drawnItems
         }
     }) 
     map.addControl(drawControl);

     


 


  }
}
