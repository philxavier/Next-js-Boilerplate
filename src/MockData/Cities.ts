import { faker } from '@faker-js/faker';

const cities: string[] = [];

for (var i = 0; i <= 30; i++) {
  cities.push(faker.address.city());
}

export { cities };
