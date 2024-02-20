import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // 1 constructor(...args) {
  //   super(...args);
  //   this.isLarge = false;
  // }
  // 2 isLarge = false (variável de instância);

  @tracked isLarge = false;
  // Esta anotação diz ao Ember para monitorar esta variável em busca de atualizações,
  // o Ember renderizará automaticamente todos os modelos que dependam de seu valor.

  @action toggleSize() {
    // método toggleSize que muda this.isLargepara o oposto de seu estado atual, @action indica ao ember que pretendemos usar este método em nosso modelo
    this.isLarge = !this.isLarge;
  }
}
