import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  latitude: number | undefined;
  longitude: number | undefined;

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.latitude;
      }, positionError => {
        console.log('Erreur lors de la recup de la position : ', positionError )
      });
    }else {
      console.log('La géolocalisation n\'est pas prise en charge par ce navigateur.') ;
    }
  }


}
