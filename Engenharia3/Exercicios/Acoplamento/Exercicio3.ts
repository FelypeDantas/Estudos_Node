// Módulo A 
class ProcessadorPagamento {
    processarPagamento(status: boolean): void {
      if (status) {
        console.log("Pagamento processado com sucesso.");
      } else {
        console.log("Falha ao processar pagamento.");
      }
    }
  }
  
  // Módulo B 
  class CarrinhoCompras {
    constructor(private processador: ProcessadorPagamento) {}
  
    finalizarCompra(status: boolean): void {
      this.processador.processarPagamento(status);
    }
  }
  
  // Utilização dos Módulos A e B
  const processador = new ProcessadorPagamento();
  const carrinho = new CarrinhoCompras(processador);
  carrinho.finalizarCompra(true);