package com.hotelsbook.reviews.service;

import com.hotelsbook.reviews.dto.ReviewDTO;
import com.hotelsbook.reviews.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    // Metodo que recibe una cadena con los ids de hoteles (ej: "1,2,3")
    // y devuelve una lista de objetos ReviewDTO con el promedio de calificación por hotel
    public List<ReviewDTO> getAverageCalifications(String hotelIds){

        // Llamamos al repository que ejecuta el Stored Procedure en la base de datos.
        // El SP devuelve una lista de filas.
        // Cada fila se representa como un arreglo de objetos (Object[]).
        List<Object[]> results = reviewRepository.findAverageCalificationByHotel(hotelIds);

        // Creamos una lista vacía donde almacenaremos los DTO ya transformados
        List<ReviewDTO> response = new ArrayList<>();

        // Recorremos cada fila devuelta por el Stored Procedure
        for (Object[] row : results) {

            // row[0] corresponde al hotel_id (según el SELECT del SP)
            // Se convierte a Number porque puede venir como BigInteger o similar,
            // luego lo transformamos a Long
            Long hotelId = ((Number) row[0]).longValue();

            // row[2] corresponde al average_calification (promedio)
            // Se convierte a Number y luego a Double
            Double average = ((Number) row[2]).doubleValue();

            // Creamos un nuevo objeto ReviewDTO con el id del hotel
            // y el promedio calculado
            ReviewDTO dto = new ReviewDTO(hotelId, average);

            // Agregamos el DTO a la lista de respuesta
            response.add(dto);
        }

        // Devolvemos la lista final con todos los promedios por hotel
        return response;
    }

}
