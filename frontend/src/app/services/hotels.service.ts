import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Con esto indicamos que esta clase va a ser un servicio y que se va a poder inyectar en otros componentes o servicios de la aplicación. El providedIn: 'root
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  // URL base del backend para obtener los hoteles disponibles
  private apiUrl = 'http://localhost:8084/api/hotels/available';

  // Inyectamos el HttpClient para poder realizar solicitudes HTTP al backend
  constructor(private http: HttpClient) { }

  //  Método para obtener los hoteles disponibles según las fechas y la ciudad
  getHotels(startDate: string, endDate: string, cityName: String) {
    // Construir la URL con los parámetros de consulta
    const url = `${this.apiUrl}?startDate=${startDate}&endDate=${endDate}&cityName=${cityName}`;
    return this.http.get(url);
  }


}
