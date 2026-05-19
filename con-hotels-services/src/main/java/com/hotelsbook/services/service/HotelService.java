package com.hotelsbook.services.service;

import com.hotelsbook.services.dto.HotelServicesDTO;
import com.hotelsbook.services.model.ServiceResponse;
import com.hotelsbook.services.repository.HotelServiceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

//Nos indida que es un servicio logica de negocio
@Service
public class HotelService {

    private static final Logger logger = LoggerFactory.getLogger(HotelService.class);

    //Se inyecta la interfaz donde llamamos al sp
    @Autowired
    private HotelServiceRepository repository;

    //se crea un metodo para obtener hoteles junto a sus servicios  donde ya se definio el HotelServicesDTO
    //Es público → puede llamarse desde el Controller.
    //Devuelve una lista de HotelServicesDTO.
    //Recibe un String con IDs de hoteles (ej: "1,2,3").
    public List<HotelServicesDTO> getServicesByHotels(String hotelIds) {

        logger.info(hotelIds);

        //llama al metodo para ejcutar el sp y almacenamos la respuesta en una lista de objetos
        //importante este metodo devulve una lista de objetos por eso se declara una lista de objetos
        //Se llama al SP.
        //El resultado es una lista de filas.
        //Cada fila es un Object[].
        //Cada Object[] representa una fila así:
        //hotel_id | hotel_name | service_name | service_id
        List<Object[]> results = repository.getServicesByHotels(hotelIds);

        //aqui se arma una estructura del tipo map del tipo LinkedHashMap nos permite tener un mapa donde la clave
        //va ser de tipo long y el valor va ser la clase HotelServicesDTO
        //Es la estructura de datos que nos permite poder agrupar toda la informacion como yo lo quiero agrupar es
        //decir tener el id, nombre del hotel y una lista con todos los servicios del hotel y toda esta informacion
        //va ser una lista

        //Este mapa sirve para agrupar servicios por hotel.
        //La clave será:
        //hotelId
        //El valor será:
        // HotelServicesDTO
        // ¿Por qué Map y no List?
       // Porque si un hotel aparece varias veces (una vez por cada servicio), el Map evita duplicarlo.
        Map<Long, HotelServicesDTO> hotelServicesMap = new LinkedHashMap<>();

        //Recorre cada fila que devolvió el SP.
        for (Object[] row : results) {

            //Se extraen los datos de cada fila
            //Esto significa:
            /*
            | row[x] | Representa   |
            | ------ | ------------ |
            | row[0] | hotel_id     |
            | row[1] | hotel_name   |
            | row[2] | service_name |
            | row[3] | service_id   |
            * */
            Long hotelId = ((Number) row[0]).longValue();
            String hotelName = (String) row[1];
            String serviceName = (String) row[2];
            Long serviceId = ((Number) row[3]).longValue();

            //Busca si el hotel ya existe en el Map
            //Se creaa un objeto hotelServices luego usamos el MAP que ya se definio antes y el metodo getOrDefault
            //getOrDefault(clave, valorPorDefecto) Significa:
            //"Si existe la clave en el mapa, dame su valor.
            //Si no existe, dame este valor por defecto."
            //osea si no existe el hotel con el hotelId crea uno nuevo objeto HotelServicesDTO
            //si ya existe devuelve ese mismo hotel
            HotelServicesDTO hotelServices = hotelServicesMap.getOrDefault(hotelId,
                    new HotelServicesDTO(hotelId, hotelName, new ArrayList<>()));

            //ahora añadimos los servicios al hotel correspondiente usamos el metodo getServices para actualizar
            //ya que si usamos set lo vamos a remplazar y como al ser una lista se puede usar el metodo add para
            //añadir sus servicios en ese caso no se usa hotelServices.add porque hotelServices no es una lista
            //si no un objeto
            hotelServices.getServices().add(new ServiceResponse(serviceId, serviceName));

            //llenado del map
            hotelServicesMap.put(hotelId, hotelServices);
        }

//        El metodo debe devolver una lista de HotelServicesDTO
//        NO un HotelServicesDTO individual
//        NO un Map

//        Porque el map?
//        Pero ese Map es solo una estructura interna para agrupar.
//        No es el resultado final.
//        Es una herramienta temporal.

//        hotelServicesMap.values() devuelve: Collection<HotelServicesDTO>
//        Y luego lo convertimos en: new ArrayList<>(...)
//        Que es exactamente: List<HotelServicesDTO>

//        Flujo mental correcto
//        1 El metodo promete devolver:
//        List<HotelServicesDTO>

//        2️ Usamos un Map para agrupar datos internamente.
//        3️ Al final extraemos solo los valores del Map.
//        4️ Los convertimos en lista.
//        5️ Devolvemos esa lista.
        return new ArrayList<>(hotelServicesMap.values());
    }
}
