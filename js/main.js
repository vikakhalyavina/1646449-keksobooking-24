import { author, offer, locations } from './main.js';

const offers = [author(), offer(), locations()];
const createaAdv = () => ({
  author: author(),
  offer: offer(),
  location: locations(),
});

for (let item = 0; item <= 10; item++) {
  offers.push(createaAdv());
}

//const similarOffers = Array.from({ length: 10 }, createaAdv);

//console.log(offers);
