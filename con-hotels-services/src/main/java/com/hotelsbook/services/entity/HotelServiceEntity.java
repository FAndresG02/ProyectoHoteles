package com.hotelsbook.services.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//Aqui se base en el sp que se difinio en la bd GetServicesByHotels
@Entity
public class HotelServiceEntity {

//Estos datos son producidos por el sp ya que aqui no uso las tablas de la bd directamente
/*
DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE GetAverageCalificationByHotel(
    IN hotel_ids VARCHAR(255)
)
BEGIN
    SET @sql = CONCAT(
        'SELECT
            h.id AS hotel_id,
            h.name AS hotel_name,
            AVG(r.calification) AS average_calification
         FROM hotel h
         JOIN hotel_has_review hhr ON h.id = hhr.hotel_id
         JOIN review r ON hhr.review_id = r.id
         WHERE h.id IN (', hotel_ids, ')
         GROUP BY h.id, h.name'
    );

    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;*/

/*Esto se lee asi:
Selecciona el id del hotel, el nombre del hotel, el id del servicio y el nombre del servicio.

Desde la tabla hotel (alias h),
uniéndola con la tabla intermedia service_has_hotel (alias shh) usando el id del hotel,
y luego con la tabla service (alias s) usando el id del servicio.

Filtra solo los hoteles cuyo id esté dentro de la lista hotelIds.

Ordena el resultado primero por hotel y luego por nombre del servicio.
*/

    @Id
    private Long hotelId;
    private String hotelName;
    private Long serviceId;
    private String serviceName;

    public HotelServiceEntity() {
    }

    public HotelServiceEntity(Long hotelId, String hotelName, Long serviceId, String serviceName) {
        super();
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.serviceId = serviceId;
        this.serviceName = serviceName;
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

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }
}
