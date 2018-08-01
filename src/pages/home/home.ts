import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var L
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoidmh1aHd3YXZobyIsImEiOiJjamp5YXJ1Nzgwa3V5M3BtbWp1dDZiOHdhIn0.06yTt6iZnZgR5wejmpfuKg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoidmh1aHd3YXZobyIsImEiOiJjamp5YXJ1Nzgwa3V5M3BtbWp1dDZiOHdhIn0.06yTt6iZnZgR5wejmpfuKg'
}).addTo(mymap);


var marker = L.marker([51.5, -0.09]).addTo(mymap);


var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);


var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);


mymap.on('click', this.onMapClick);
  }
  
   onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

}
