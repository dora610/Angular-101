export interface User{
    picture:{
        medium: string
    },
    name: {
        title: string,
        first: string,
        last:string,
    },
    email: string,
    location:{
        postcode: number,
        city: string,
        state:string,
    },
    phone: number
    registered:{
        date: Date
    }
}