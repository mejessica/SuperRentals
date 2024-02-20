import { service } from '@ember/service';
import Component from '@glimmer/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  @service router; //injeta o serviço de roteador no componente, disponibilizando-o para nós como arquivo this.router

  get currentURL() {
    //objeto global do navegador
    return new URL(this.router.currentURL, window.location.origin); // informa a URL da página atual.
  }

  get shareURL() {
    //url da api
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL); // obter o URL da página atual e adicioná-lo automaticamente ao URL do Twitter Intent

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}

/*O serviço do roteador possui uma currentURLpropriedade que fornece o URL "lógico" atual visto pelo roteador do Ember 
Por exemplo, quando você clica em um <LinkTo>componente, ele solicitará ao roteador que execute uma transição de rota . 
Normalmente, o roteador é configurado para atualizar a barra de endereços do navegador sempre que faz a transição para 
uma nova rota. Dessa forma, seus usuários poderão usar o botão Voltar do navegador e a funcionalidade de favoritos como 
qualquer outra página da web.*/

/*Aqui, adicionamos a @service router; declaração à nossa classe de componente. Isso injeta o serviço de roteador no componente, 
disponibilizando-o para nós como arquivo this.router. O serviço do roteador possui uma currentURLpropriedade que fornece o 
URL "lógico" atual visto pelo roteador do Ember. */
