//responsáveis ​​por converter os dados retornados pelo servidor em um formato que o Ember Data possa entender

import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {}