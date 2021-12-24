const getRandomInt = (min,max) => {
   return Math.floor(Math.random() * (max - min +1)) + min
}
const INSTRUMENTS = [
    {
        id: 0,
        name: 'Guitar',
        description: 'sababa shel guitara.',
        imgUrl: '/images/instruments/1.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 1,
        name: 'Oud',
        description: 'The one aladdin played.',
        imgUrl: '/images/instruments/2.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 2,
        name: 'Guitar #2',
        description: 'achla guitara.',
        imgUrl: '/images/instruments/3.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 3,
        name: 'Flute',
        description: 'or maybe clarinet.',
        imgUrl: '/images/instruments/4.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 4,
        name: 'Tambourine',
        description: 'make every party less good.',
        imgUrl: '/images/instruments/5.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 5,
        name: 'Triangle',
        description: 'the most musical geometric shape.',
        imgUrl: '/images/instruments/6.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 6,
        name: 'mutant trumpet',
        description: 'snakeish.',
        imgUrl: '/images/instruments/7.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 7,
        name: 'Marracash',
        description: 'instrument so nice you play it twice.',
        imgUrl: '/images/instruments/8.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 8,
        name: 'Loot',
        description: 'Angel\'s guitar.',
        imgUrl: '/images/instruments/9.png',
        price: getRandomInt(100,1000),
        amount: 1
    },
    {
        id: 9,
        name: 'Wing piano',
        description: 'fit every room.',
        imgUrl: '/images/instruments/10.png',
        price: getRandomInt(100,1000),
        amount: 1
    }

]
const CLOTHES = [
    {
        id: 10,
        name: 'Suit',
        description: 'will make you feel really unemployed.',
        imgUrl: '/images/clothes/1.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 11,
        name: 'Another suit',
        description: 'now with pants!',
        imgUrl: '/images/clothes/2.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 12,
        name: 'Suit #3',
        description: 'but blue-ish.',
        imgUrl: '/images/clothes/3.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 13,
        name: 'Dress',
        description: 'cinderella died in it.',
        imgUrl: '/images/clothes/4.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 14,
        name: 'Dress #2',
        description: 'hanger not included.',
        imgUrl: '/images/clothes/5.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 15,
        name: 'Dress #3',
        description: 'impress you friends at Yom Kippur.',
        imgUrl: '/images/clothes/6.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 16,
        name: 'buttoned Shirt',
        description: 'buttons are fun.',
        imgUrl: '/images/clothes/7.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 17,
        name: 'T-shirt',
        description: 'dont wear it next to angry bulls.',
        imgUrl: '/images/clothes/8.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 18,
        name: 'Turtle neck',
        description: 'if you want to offend some turtles.',
        imgUrl: '/images/clothes/9.png',
        price: getRandomInt(50,300),
        amount: 1
    },
    {
        id: 19,
        name: 'Fur coat',
        description: 'kill some dalmatians with style.',
        imgUrl: '/images/clothes/1.png/images/clothes/10.png',
        price: getRandomInt(50,300),
        amount: 1
    }
]
const NATURE_EQUIPMENT = [
    {
        id: 20,
        name: 'Tent',
        description: 'body-condom.',
        imgUrl: '/images/nature-equip/1.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 21,
        name: 'Tent #2',
        description: 'triangular body-condom.',
        imgUrl: '/images/nature-equip/2.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 22,
        name: 'Shlooker',
        description: 'miki miki miki miki.',
        imgUrl: '/images/nature-equip/3.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 23,
        name: 'Olar',
        description: 'you\'re gonna use only the fork, fatty.',
        imgUrl: '/images/nature-equip/4.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 24,
        name: 'Backpack',
        description: 'may also be used on stomach.',
        imgUrl: '/images/nature-equip/5.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 25,
        name: 'Field mug',
        description: 'put some whiskey and tell your kids its coffee.',
        imgUrl: '/images/nature-equip/6.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 26,
        name: 'Finjan',
        description: 'take it off the fire one second before its overflown.',
        imgUrl: '/images/nature-equip/7.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 27,
        name: 'Mattress',
        description: 'ground is for suckers.',
        imgUrl: '/images/nature-equip/8.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 28,
        name: 'Flashlight',
        description: 'interogate your kids with style.',
        imgUrl: '/images/nature-equip/9.png',
        price: getRandomInt(100,700),
        amount: 1
    },
    {
        id: 29,
        name: 'Bear repellant',
        description: 'scare the bears away with an actual bear.',
        imgUrl: '/images/nature-equip/10.png',
        price: getRandomInt(100,700),
        amount: 1
    },
]
const CARS = [
    {
        id: 30,
        name: 'Audi',
        description: '4 circles of intensity.',
        imgUrl: '/images/cars/1.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 31,
        name: 'Jeep',
        description: 'for those difficult mounds in Givatayim.',
        imgUrl: '/images/cars/2.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 32,
        name: 'Toyota',
        description: 'the most stolen car for 2021.',
        imgUrl: '/images/cars/3.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 33,
        name: 'Hyundai',
        description: 'couldnt afford a toyota, huh?',
        imgUrl: '/images/cars/4.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 34,
        name: 'Scrooge Mcduck mobile',
        description: 'a really old reansformer.',
        imgUrl: '/images/cars/5.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 35,
        name: 'OldMobile',
        description: 'pollute the air with style.',
        imgUrl: '/images/cars/6.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 36,
        name: 'The car from "cars"',
        description: 'fell asleep during the movie. guessing its a fast car.',
        imgUrl: '/images/cars/7.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 37,
        name: 'Mercedes',
        description: 'come with high speed effects.',
        imgUrl: '/images/cars/8.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 38,
        name: 'BMW',
        description: 'first hand from a doctor.',
        imgUrl: '/images/cars/9.png',
        price: getRandomInt(20000,100000),
        amount: 1
    },
    {
        id: 39,
        name: 'BMW #2',
        description: 'Mit\'hayev babdika.',
        imgUrl: '/images/cars/10.png',
        price: getRandomInt(20000,100000),
        amount: 1
    }
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