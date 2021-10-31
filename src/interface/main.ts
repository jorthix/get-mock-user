export interface User {
    gender: string,
    name: Name,
    location: Location,
    email: string,
    login: Login,
    dob: Dob,
    registered: Registered,
    phone: string,
    cell: string,
    id: Id,
    picture: Picture,
    nat: string
};

export interface Name {
    title: string,
    first: string,
    last: string
};

export interface Location {
    street: { number: number, name: string },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: { latitude: string, longitude: string },
    timezone: { offset: string, description: string }
};

export interface Login {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
};

export interface Dob {
    date: string,
    age: number
}

export interface Registered {
    date: string,
    age: number
}

export interface Id {
    name: string,
    value: string
}

export interface Picture {
    large: string,
    medium: string,
    thumbnail: string
}
