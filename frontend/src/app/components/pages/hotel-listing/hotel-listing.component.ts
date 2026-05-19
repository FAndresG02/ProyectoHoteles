import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-listing',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './hotel-listing.component.html',
  styleUrl: './hotel-listing.component.scss'
})
export class HotelListingComponent {

  // Recibimos la lista de hoteles como un input desde el componente padre (HomeComponent)
  @Input() hotels: any[] = []; 

}
