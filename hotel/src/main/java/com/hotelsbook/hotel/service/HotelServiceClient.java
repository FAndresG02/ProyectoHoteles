package com.hotelsbook.hotel.service;

import com.hotelsbook.hotel.dto.HotelServiceDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

// Indica que esta clase es un componente de servicio gestionado por Spring.
// Spring la detecta automáticamente y la puede inyectar en otras clases.
@Service
public class HotelServiceClient {

    // Cliente HTTP que nos permite hacer peticiones a otros microservicios
    private final RestTemplate restTemplate;

    // Toma el valor desde application.properties:
    // microservice.services.url=http://services:8081/api/hotels/services
    // Spring inyecta ese valor aquí automáticamente.
    @Value("${microservice.services.url}")
    private String servicesUrl;

    // Constructor donde Spring inyecta el RestTemplate
    // (Debe existir un @Bean RestTemplate en alguna clase de configuración)
    public HotelServiceClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    /**
     * Metodo que llama al microservicio de "services"
     * para obtener los servicios asociados a varios hoteles.
     *
     * @param hotelIds Lista de IDs de hoteles
     * @return Lista de servicios (HotelServiceDTO)
     */
    public List<HotelServiceDTO> getHotelServices(List<Long> hotelIds) {

        // -------------------------------
        // 1️⃣ Convertir lista a texto separado por comas
        // Ejemplo:
        // Si hotelIds = [1, 2, 3]
        // hotelIdsParam = "1,2,3"
        // -------------------------------
        String hotelIdsParam = "";

        for (int i = 0; i < hotelIds.size(); i++) {
            hotelIdsParam += hotelIds.get(i);

            // Agregamos coma solo si no es el último elemento
            if (i < hotelIds.size() - 1) {
                hotelIdsParam += ",";
            }
        }

        // -------------------------------
        // 2️⃣ Construir la URL final
        // Si servicesUrl = http://services:8081/api/hotels/services
        // La URL final será:
        // http://services:8081/api/hotels/services/1,2,3
        // -------------------------------
        String url = servicesUrl + "/" + hotelIdsParam;

        // -------------------------------
        // 3️⃣ Realizar petición HTTP GET al microservicio
        //
        // exchange() permite:
        // - Especificar metodo HTTP (GET)
        // - Enviar headers (aquí null porque no enviamos nada)
        // - Especificar el tipo de respuesta esperada
        //
        // ParameterizedTypeReference se usa porque estamos esperando
        // una lista de objetos (List<HotelServiceDTO>)
        // -------------------------------
        ResponseEntity<List<HotelServiceDTO>> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<HotelServiceDTO>>() {}
                );

        // -------------------------------
        // 4️⃣ Devolver el cuerpo de la respuesta
        // Es decir, la lista de servicios que respondio el microservicio
        // -------------------------------
        return response.getBody();
    }
}
