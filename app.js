console.log('Worced');

// синяя - 1 -15_000 : 50
// серебрянная - 15_001 - 150_000 : 70
// золотая - 150_001 : 100

// найти итоговое кол-во бонусов, с конкретной покупки
const perviousPerchasses = 160000;
const currentPurchase = 4000;

let bounusesPerOneThousand;
if (perviousPerchasses <= 15000) {
    bounusesPerOneThousand = 50;
} else {
    if (perviousPerchasses <= 150000) {
       bounusesPerOneThousand = 70;
} else {
    bounusesPerOneThousand = 100;
}}

console.log(bounusesPerOneThousand);