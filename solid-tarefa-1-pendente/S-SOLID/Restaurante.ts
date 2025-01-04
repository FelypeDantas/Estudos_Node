import ChefConfeitaria from "./ChefConfeitaria";
import ChefCozinha from "./ChefCozinha";
import Cumin from "./Cumin";
import Faxineira from "./Faxineira";
import Garcom from "./Garcom";
import Recepcionista from "./Recepcionista";

export default class Restaurante {

  private garcom: Garcom;
  private cozinheiro: ChefCozinha; 
  private faxineira: Faxineira;
  private recepcionista:Recepcionista;
  private chefConfeitaria: ChefConfeitaria;
  private cumin: Cumin;

  constructor() {
    this.garcom = new Garcom();
    this.cozinheiro = new ChefCozinha();
    this.faxineira = new Faxineira();
    this.recepcionista = new Recepcionista();
    this.chefConfeitaria = new ChefConfeitaria();
    this.cumin = new Cumin();
  }

  iniciar() {
    this.recepcionista.organizarMesas();
    this.cozinheiro.cozinharPratoPrincipal();
    this.garcom.anotarPedido();
    this.faxineira.limpar();
    this.chefConfeitaria.prepararSobremesa();
    this.cumin.servirBebidas();
  }
}