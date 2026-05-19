import { Component } from '@angular/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import { HotelListingComponent } from '../hotel-listing/hotel-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsService } from '../../../services/hotels.service';
import { Hotel } from '../../../interface/hotel';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DpDatePickerModule,
    ReactiveFormsModule,
    HotelListingComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };

  // Variables para almacenar las fechas seleccionadas y la ciudad
  hotels: Hotel[] = [];
  hotelForm: FormGroup;

  // Método para buscar hoteles disponibles
  constructor(private hotelService: HotelsService, // Inyectamos el servicio de hoteles para poder utilizarlo en este componente
              private fb: FormBuilder // Inyectamos el FormBuilder para crear el formulario reactivo 
  ) { 

    // Inicializamos el formulario con los campos necesarios para la búsqueda de hoteles
    this.hotelForm = this.fb.group({
      startDate: [''],
      endDate: [''],
      cityName: ['']
    });
  }

  loadHotels(): void{

    // Obtener los valores del formulario
    const { startDate, endDate, cityName } = this.hotelForm.value;

    // Llamar al servicio para obtener los hoteles disponibles
    this.hotelService.getHotels(startDate, endDate, cityName).subscribe(
      (data: any) => {
        this.hotels = data; // Asignar la respuesta a la variable hotels
        console.log('Hoteles disponibles:', this.hotels);

      },
      (error) => {
        // Manejar errores en caso de que la solicitud falle
        console.error('Error al cargar hoteles:', error);
      }
    );
  }

}
