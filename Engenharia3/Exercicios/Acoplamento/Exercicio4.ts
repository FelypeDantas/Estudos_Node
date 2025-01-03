// Módulo A
class Log {
    registrarMensagem(mensagem: string): void {
      console.log(`[LOG] ${mensagem}`);
    }
  }
  
  // Módulo B
  class ServicoAutenticacao {
    constructor(private log: Log) {}
  
    autenticarUsuario(): void {
      // Lógica de autenticação
      this.log.registrarMensagem("Usuário autenticado com sucesso.");
    }
  }
  
  // Utilização dos Módulos A e B
  const log = new Log();
  const servicoAutenticacao = new ServicoAutenticacao(log);
  servicoAutenticacao.autenticarUsuario();