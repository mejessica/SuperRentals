//usado para buscar dados para todos os modelos em nosso aplicativo

import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter { //herdar todas as funcionaldiades JSON:API padrão
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
