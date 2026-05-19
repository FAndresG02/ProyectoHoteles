export interface Hotel {

    id: number;
    name: string;
    description: string;
    picture: string;
    price: number;
    cityName: string;
    street: string;
    number: string;
    averageCalification: number;
    services: Array<{serviceId: number, serviceName: string}>;
}