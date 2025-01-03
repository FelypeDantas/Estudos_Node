// Módulo A
class Pedido {
    constructor(private id: number, private descricao: string, private valor: number) {}
  
    getId(): number {
      return this.id;
    }
  }
  
  // Módulo B
  class GerenciadorPedido {
    constructor(private pedido: Pedido) {}
  
    mostrarIdPedido(): void {
      console.log(this.pedido.getId());
    }
  }
  
  // Utilização dos Módulos A e B
  const pedido = new Pedido(1, "Produto A", 100);
  const gerenciadorPedido = new GerenciadorPedido(pedido);
  gerenciadorPedido.mostrarIdPedido();