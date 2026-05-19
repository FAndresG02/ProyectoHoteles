package com.hotelsbook.reviews.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ReviewEntity {

    @Id
    private Long reviewId;
    private String reviewName;
    private  Double averageCalification;

    public ReviewEntity(Long reviewId, String reviewName, Double averageCalification) {
        this.reviewId = reviewId;
        this.reviewName = reviewName;
        this.averageCalification = averageCalification;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public String getReviewName() {
        return reviewName;
    }

    public void setReviewName(String reviewName) {
        this.reviewName = reviewName;
    }

    public Double getAverageCalification() {
        return averageCalification;
    }

    public void setAverageCalification(Double averageCalification) {
        this.averageCalification = averageCalification;
    }
}
