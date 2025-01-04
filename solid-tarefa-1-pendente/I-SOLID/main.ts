interface ChefPratoPrincipal {
    fazerPratoPrincipal(): string;
  }

  interface ChefSobremesa {
    fazerSobremesa(): string;
  }

  class ChefMestreCozinha implements ChefPratoPrincipal, ChefSobremesa {
    fazerPratoPrincipal(): string {
      return "Salmão grelhado ao molho de limão siciliano com risoto de ervas frescas";
    }

    fazerSobremesa(): string {
      return "Tiramisù de frutas vermelhas com calda de framboesa";
    }
  }

  class ChefApenasDoces implements ChefSobremesa {
    fazerSobremesa(): string {
      return "Taça de morangos com chantilly e crocante de amêndoas";
    }
  }