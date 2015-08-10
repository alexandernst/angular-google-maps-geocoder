# angular-google-maps-geocoder

Angular typeahead Google Maps Geocoder

## How do I add this to my project?

You can download `angular-google-maps-geocoder` by:

* Using bower and running `bower install angular-google-maps-geocoder`
* Using npm and running `npm install angular-google-maps-geocoder`
* Downloading it manually from this repo

## How to use angular-google-maps-geocoder

This module exposes a simple directive with the following attributes:

* `placeid` - Will set the value of the input to the formatted address of the passed Google Maps place ID
* `output` - The variable that will contain the selected value
* `min-length` - Minimal number of characters before typeahead kicks-in
* `wait-ms` - Minimal wait time after last character typed before typeahead kicks-in

## Demo

[Plnkr demo](http://plnkr.co/edit/YkLpKrfIGW8drO5wyM3M?p=preview)

```
<div
    angular-google-maps-geocoder placeid="{{ my_place_id }}"
    output="out"
    placeholder="Placeholder goes here..."
    min-length="5"
    wait-ms="500"
></div>
```
