import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('rental');
  }
}

/* findAll método toma o tipo de modelo como argumento
 e busca todos os registros desse tipo no armazenamento.*/


//sem ember data
// async model() {
//   return {
//     title: 'Grand Old Mansion',
//     owner: 'Veruca Salt',
//     city: 'San Francisco',
//     location: {
//       lat: 37.7749,
//       lng: -122.4194,
//     },
//     category: 'Estate',
//     type: 'Standalone',
//     bedrooms: 15,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
//     description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
//   };