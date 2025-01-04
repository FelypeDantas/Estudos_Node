interface Batedor {
    bater(): void;
  }

  class BatedorGlobo implements Batedor {
    bater() {
      console.log("Com esse batedor eu posso fazer sorvete!");
    }
  }

  class BatedorLeque implements Batedor {
    bater() {
      console.log("Com esse batedor eu posso fazer biscoito!");
    }
  }

  class BatedorGancho implements Batedor {
    bater() {
      console.log("Com esse batedor eu posso fazer pão!");
    }
  }

  class BatedeiraPlanetaria {
    acessorio: Batedor;

    constructor(acessorio: Batedor) {
      this.acessorio = acessorio;
    }

    bater() {
      this.acessorio.bater();
    }
  }

  const ganchoAcessorio = new BatedorGancho();

  const batedeira = new BatedeiraPlanetaria(ganchoAcessorio);
  batedeira.bater(); // Saída: Com esse batedor eu posso fazer pão!