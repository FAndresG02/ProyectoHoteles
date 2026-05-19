package com.hotelsbook.hotel.service;

import com.hotelsbook.hotel.dto.HotelAvailableDTO;
import com.hotelsbook.hotel.dto.HotelReviewDTO;
import com.hotelsbook.hotel.dto.HotelServiceDTO;
import com.hotelsbook.hotel.dto.ServiceDTO;
import com.hotelsbook.hotel.entity.HotelAvailable;
import com.hotelsbook.hotel.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class HotelService {

    //llama al sp del GetAvailableHotelsByCity
    @Autowired
    private HotelRepository hotelRepository;

    //Inyecta los datos del http://services:8081/api/hotels/services
    @Autowired
    private HotelServiceClient hotelServiceClient;

    //Inyecta los datos del http://reviews:8082/api/hotels/reviews
    @Autowired
    private HotelReviewClient hotelReviewClient;

    @Value("${server.url}")
    private String serverUrl;

    public List<HotelAvailableDTO> getAvailableHotelsWithServicesAndReviews(Date startDate, Date endDate, Integer cityId) {
        // Paso 1: Obtener hoteles disponibles
        List<HotelAvailable> availableHotels = hotelRepository.findAvailableHotelsByCity(startDate, endDate, cityId);

        if  (availableHotels.isEmpty()) {
            List<HotelAvailableDTO> dto = new ArrayList<>();
            return new ArrayList<>(dto);
        } else {
            // Paso 2: Obtener los IDs de los hoteles
            // Crear una lista vacía para guardar los IDs
            List<Long> hotelIds = new ArrayList<>();

            // Recorrer cada hotel disponible
            for (HotelAvailable hotel : availableHotels) {
                // Obtener el ID del hotel y agregarlo a la lista
                hotelIds.add(hotel.getId());
            }

            // Paso 3: Consumir el microservicio de servicios de hotel
            List<HotelServiceDTO> hotelServices = hotelServiceClient.getHotelServices(hotelIds);

            // Paso 4: Consumir el microservicio de reviews de hotel
            List<HotelReviewDTO> hotelReviews = hotelReviewClient.getHotelReviews(hotelIds);

            // Paso 5: Combinar los resultados de servicios y reviews
            // Crear el mapa vacío Mapa de servicios por hotel
            Map<Long, List<ServiceDTO>> servicesByHotelId = new HashMap<>();
            // Recorrer la lista de servicios
            for (HotelServiceDTO serviceDTO : hotelServices) {
                // Obtener el ID del hotel
                Long hotelId = serviceDTO.getHotelId();
                // Obtener la lista de servicios de ese hotel
                List<ServiceDTO> services = serviceDTO.getServices();
                // Guardar en el mapa
                servicesByHotelId.put(hotelId, services);
            }

            // Crear el mapa vacío Mapa de promedio de reviews por hotel
            Map<Long, Double> reviewsByHotelId = new HashMap<>();
            // Recorrer la lista de reviews
            for (HotelReviewDTO reviewDTO : hotelReviews) {
                // Obtener el ID del hotel
                Long hotelId = reviewDTO.getHotelId();
                // Obtener el promedio de calificación
                Double average = reviewDTO.getAverageCalification();
                // Guardar en el mapa
                reviewsByHotelId.put(hotelId, average);
            }

            // Paso 6: Agrupar y mapear los resultados
            // Crear lista para guardar el resultado final
            List<HotelAvailableDTO> result = new ArrayList<>();

            // Recorrer cada hotel disponible
            for (HotelAvailable hotel : availableHotels) {

                String imageUrl = serverUrl + "/images/" + hotel.getPicture();
                hotel.setPicture(imageUrl);

                System.out.println(imageUrl);

                // Crear el DTO usando el hotel
                HotelAvailableDTO dto = new HotelAvailableDTO(hotel);
                // Obtener los servicios del mapa
                // Si no existen, devolver lista vacía
                List<ServiceDTO> services =
                        servicesByHotelId.getOrDefault(hotel.getId(), new ArrayList<>());
                dto.setServices(services);
                // Obtener promedio de calificación
                // Si no existe, devolver null
                Double average =
                        reviewsByHotelId.getOrDefault(hotel.getId(), null);
                dto.setAverageCalification(average);
                // Agregar el DTO a la lista final
                result.add(dto);
            }

            System.out.println(result);
            // Devolver la lista completa
            return result;
        }
    }

}
