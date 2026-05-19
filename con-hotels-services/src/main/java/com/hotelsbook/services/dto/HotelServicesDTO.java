package com.hotelsbook.services.dto;

import com.hotelsbook.services.model.ServiceResponse;
import java.util.List;

// DTO (Data Transfer Object) es un patrón de diseño cuyo objetivo es
// transportar datos entre distintas capas de la aplicación
// (por ejemplo: Controller → Service → Repository)
// o entre el backend y el cliente (API REST).

// Los DTO se utilizan cuando:
// - Recibimos información desde el cliente y necesitamos encapsularla.
// - Queremos enviar una respuesta al cliente sin exponer directamente
//   las entidades de la base de datos.
// - Necesitamos devolver solo ciertos campos específicos
//   (por ejemplo, 3 campos de 10 que existen en una tabla).

// En este caso, este DTO devuelve únicamente:
// - hotelId
// - hotelName
// - la lista de servicios asociados al hotel
//   representados por la clase ServiceResponse.
public class HotelServicesDTO {

    private Long hotelId;
    private String hotelName;
    //La variable services contiene muchos ServiceResponse
    private List<ServiceResponse> services;

    public HotelServicesDTO(Long hotelId, String hotelName, List<ServiceResponse> services) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.services = services;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public List<ServiceResponse> getServices() {
        return services;
    }

    public void setServices(List<ServiceResponse> services) {
        this.services = services;
    }
}
