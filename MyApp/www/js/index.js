/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log("navigator.geolocation works well");
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


// leaflet map

var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([45.771804, 4.863433]).addTo(map).bindPopup("<b>Com on Jam!</b><br>A guitarist is here.").openPopup();
marker._icon.classList.add("huechange");
var marker = L.marker([45.77093524067551, 4.874627953425062]).addTo(map).bindPopup("<b>Com on Jam!</b><br>A guitarist is here.").openPopup();
marker._icon.classList.add("huechange");
var circle = L.circle([45.767167, 4.856512], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);
circle.bindPopup("Lot of Pub good for concert.");
var circle = L.circle([45.760079, 4.819749], {
    color: 'yellow',
    fillColor: '#efd807',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);
circle.bindPopup("A big dream to play here.");

//locate
map.locate({ setView: true, maxZoom: 16 });

function onLocationFound(e) {

    L.marker(e.latlng).addTo(map)
        .bindPopup("Vous etes ici").openPopup();
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

navigator.geolocation.getCurrentPosition(geolocationSuccess,
    [geolocationError],
    [geolocationOptions]);

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function (position) {
    alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);


