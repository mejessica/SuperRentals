//usando o ember data *

import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store; // fornece os métodos finde findAll para carregar registros.

    async model(params) {
        return this.store.findRecord('rental', params.rental_id);//busca na api
  }
}
//model recebe um argumento params pois precisamos buscar nosso dado no api/rentals/${id}.json enspoint e nao na api. atraves do atributo param em /api/rentals/${params.rental_id}.json

/*o findRecord método pega um tipo de modelo ( rental no nosso caso) 
e um ID de modelo (para nós, que seria params.rental_id da URL) como 
argumentos e busca um único registro do armazenamento*/