class Usuario {
    constructor(private nome: string) {}
  
    getNome(): string {
      return this.nome;
    }
  }
  
  class GerenciadorUsuario {
    constructor(private usuario: Usuario) {}
  
    mostrarNomeUsuario(): void {
      console.log(this.usuario.getNome());
    }
  }
  
  // Utilização dos Módulos A e B
  const usuario = new Usuario("Ana");
  const gerenciadorUsuario = new GerenciadorUsuario(usuario);
  gerenciadorUsuario.mostrarNomeUsuario();