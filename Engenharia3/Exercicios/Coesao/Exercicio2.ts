// Exemplo de Coesão Sequencial
class ProcessoPedido {
    processarPedido(pedido: Pedido): void {
      this.validarPedido(pedido);
      this.atualizarEstoque(pedido);
      this.enviarConfirmacao(pedido);
    }
  
    validarPedido(pedido: Pedido): void {
      // Lógica de validação do pedido
    }
  
    atualizarEstoque(pedido: Pedido): void {
      // Lógica de atualização do estoque
    }
  
    enviarConfirmacao(pedido: Pedido): void {
      // Lógica de envio de confirmação
    }
  }