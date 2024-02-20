import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  // cada imovel sera representado por uma instancia(registro)
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
//@attr decorador para declarar os atributos de um imóvel alugado. Esses atributos
//correspondem diretamente aos attributes dados que esperamos que o servidor forneça em suas respostas
