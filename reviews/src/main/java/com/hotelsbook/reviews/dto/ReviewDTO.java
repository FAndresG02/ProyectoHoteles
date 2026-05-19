package com.hotelsbook.reviews.dto;

public class ReviewDTO {

    //en este caso ignoramos el nombre del hotel ya ahora no nos sirve para el sistema
    //ya que en este caso el nombre del hotel se usa en el microservicio que gestiona los hoteles
    private Long hotelId;
    private Double averageCalification;

    public ReviewDTO(Long hotelId, Double averageCalification) {
        this.hotelId = hotelId;
        this.averageCalification = averageCalification;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    public Double getAverageCalification() {
        return averageCalification;
    }

    public void setAverageCalification(Double averageCalification) {
        this.averageCalification = averageCalification;
    }
}
