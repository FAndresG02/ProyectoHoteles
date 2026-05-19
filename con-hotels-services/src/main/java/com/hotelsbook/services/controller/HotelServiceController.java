package com.hotelsbook.services.controller;

import com.hotelsbook.services.dto.HotelServicesDTO;
import com.hotelsbook.services.service.HotelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.hotelsbook.services.response.ErrorResponse;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
//nos indica que esta clase controladora de tipo rest la cual va a poder servir peticiones http cuando el cliente
//consuma nustro microservicio
@RestController
//permite estableces una url general para todos los metodos que se van a declarar
@RequestMapping("/api/hotels")
public class HotelServiceController {

    private static final Logger logger = LoggerFactory.getLogger(HotelServiceController.class);

    //inyeccion del servicio
    @Autowired
    private HotelService hotelService;

    //url especifica del metodo /api/hotels/services/{1,2,3}
    @GetMapping("/services/{hotelIds}")
    //clase que permite manejar ya sea la respuesta misma del microservicio y tambien nos permite manejar los estados
    //http para responderle al cliente

    //la clase ResponseEntity puedo manejar los estados http 200 son para indicar que hubo una respuesta exitosa del
    //servidor, 400 cuando hay un erro que no se encuentra un recurso y los 500 indica errores internos del servidor
    //tambien puede manejar los genericos que son los signos mayor y menor se les puede indicar el tipo de retorno que
    //va a devolver el microservicio

    //<?>ayuda a devolver una salida cuando sea un proceso exitoso y otra salida cuando hay un error

    //@PathVariable("hotelIds") String hotelIds
//    @PathVariable le dice a Spring:
//    “Toma un valor que viene en la URL y asígnalo a este parámetro y conviertelo en string”.
    public ResponseEntity<?> getHotelServices(@PathVariable("hotelIds") String hotelIds) {

        try {

            logger.info(hotelIds);

            List<HotelServicesDTO> response = hotelService.getServicesByHotels(hotelIds);

            if (response.isEmpty()) {
                return new ResponseEntity<>(new ErrorResponse(404, "No se encontraron registros"), HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch ( Exception e ) {
            logger.error("error in getHotelService", e);
            ErrorResponse error = new ErrorResponse(500, "Error interno del servidor");
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
