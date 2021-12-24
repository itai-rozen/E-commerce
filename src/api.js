const INSTRUMENTS = [
    {
        id: 0,
        name: 'guitar',
        description: 'sababa shel guitara',
        imgUrl: '',
        price: 120,
        amount: 1
    },
]
const CLOTHES = [
    {
        id: 0,
        name: '',
        description: '',
        imgUrl: '',
        price: null,
        amount: 1
    },
]
const NATURE_EQUIPMENT = [
    {
        id: 0,
        name: '',
        description: '',
        imgUrl: '',
        price: null,
        amount: 1
    },
]
const CARS = [
    {
        id: 0,
        name: '',
        description: '',
        imgUrl: '',
        price: null,
        amount: 1
    },
]

export default class productsApi {
    static getInstruments(){
        return INSTRUMENTS
    }
    static getCars(){
        return CARS
    }
    static getClothes(){
        return CLOTHES
    }
    static getNatureEquip(){
        return NATURE_EQUIPMENT
    }
}