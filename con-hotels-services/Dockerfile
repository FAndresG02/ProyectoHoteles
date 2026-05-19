#inicia con la imagen base que contiene Java runtime
FROM eclipse-temurin:17-jdk-jammy as build

# se agregar el jar del microservicio al contenedor
COPY target/con-hotels-services-0.0.1-SNAPSHOT.jar con-hotels-services-0.0.1-SNAPSHOT.jar

#se ejecuta el microservicio
ENTRYPOINT ["java","-jar","/con-hotels-services-0.0.1-SNAPSHOT.jar"]