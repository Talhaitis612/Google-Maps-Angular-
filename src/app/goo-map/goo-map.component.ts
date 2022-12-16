import { GoogleMap } from '@angular/google-maps';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-goo-map',
  templateUrl: './goo-map.component.html',
  styleUrls: ['./goo-map.component.css'],
})
export class GooMapComponent implements OnInit, AfterViewInit {
  markerOptions: google.maps.MarkerOptions = {
    draggable: true,
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  };
  markerPositions!: google.maps.LatLngLiteral;
  radius = 40;

  zoom = 4;
  circleOptions = {
    strokeColor: '#9c39ed',
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: '#b76cf5',
    fillOpacity: 0.25,
  };

  // apiLoaded: Observable<boolean>;

  @ViewChild('search')
  searchElementRef!: any;
  @ViewChild(GoogleMap)
  map!: GoogleMap;

  latitude!: any;
  longitude!: any;

  center: any;
  infoWindow = new google.maps.InfoWindow();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          console.log('Current Location', position);
          this.markerPositions = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(this.markerPositions);
        }
      );

      this.zoom = 18;

      // Watch the location
      const watchId = navigator.geolocation.watchPosition((position) => {
        console.log('Watching Location :', watchId);
        // Show a map centered at latitude / longitude.
      });
    }
  }

  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    // this.map.controls[google.maps.ControlPosition.].push(
    //   this.searchElementRef.nativeElement
    // );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
        this.markerPositions = this.center;
        this.zoom = 15;
      });
    });
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = event.latLng!.toJSON();
    // this.markerPositions.push(event.latLng!.toJSON());
    console.log('Marker Positions', this.markerPositions);
  }

  circleDragged($event: any) {
    console.log('Circle Dragged', $event);
  }
}
