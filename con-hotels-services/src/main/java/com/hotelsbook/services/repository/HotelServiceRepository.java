package com.hotelsbook.services.repository;

import com.hotelsbook.services.entity.HotelServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

//Aqui uso la clase de HotelServiceEntity ya que es ahi donde se defino el uso del sp
@Repository
public interface HotelServiceRepository extends JpaRepository<HotelServiceEntity, Long> {

    //esta linea hace una consulta sql llamando al sp y nativeQuery = true es Esto es SQL nativo, no JPQL
    //Por eso puedes usar: CALL, procedures, sintaxis propia de MySQL
    @Query(value = "CALL GetServicesByHotels(:hotelIds)", nativeQuery = true)

    //Define un metodo que recibe una lista de IDs de hoteles (hotelIds) y devuelve una lista de filas, donde cada fila es un arreglo de objetos.
    /*
    // 🔹 List<Object[]>
// Representa una lista de resultados, donde cada resultado es una fila (Object[]).
// Cada Object[] corresponde a una fila del SELECT.
// Ejemplo:
// Object[] fila = {
//    hotelId,
//    hotelName,
//    serviceName,
//    serviceId
// };
//El orden de los elementos depende del SELECT definido en el procedure.


// 🔹 getServicesByHotels
// Metodo para obtener los servicios de los hoteles.
// Es simplemente el nombre del metodo, utilizado por Spring para enlazar la query.


// 🔹 @Param("hotelIds")
// Este parámetro Java se inyecta en la query con el nombre :hotelIds.
// Sirve como puente entre:
//   String hotelIds
// y
//   CALL GetServicesByHotels(:hotelIds)


// 🔹 String hotelIds
// Recibe los IDs de los hoteles como un texto.
// Ejemplo de valor real:
// "1,3,5"
    */
    List<Object[]> getServicesByHotels(@Param("hotelIds") String hotelIds);
}
