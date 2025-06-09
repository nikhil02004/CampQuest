const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');


const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '68412c0129f63b2f16ca872e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore voluptatibus sunt repellat qui itaque vitae sapiente, soluta pariatur delectus excepturi vero accusamus vel est optio? Harum totam at neque.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dvcj9k1dj/image/upload/v1749275789/YelpCamp/zwuhil6whuvd9jx3grx5.jpg',
                    filename: 'YelpCamp/zwuhil6whuvd9jx3grx5'
                },
                {
                    url: 'https://res.cloudinary.com/dvcj9k1dj/image/upload/v1749275808/YelpCamp/kfqz3jtvpc0wja9d9sti.jpg',
                    filename: 'YelpCamp/kfqz3jtvpc0wja9d9sti'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})

