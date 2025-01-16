// Módulo A
class Calculadora {
    private resultado: number = 0;
  
    somar(a: number, b: number): void {
      this.resultado = a + b;
    }
  
    obterResultado(): number {
      return this.resultado;
    }
  }
  
  // Módulo B
  class Logger {
    private calculadora: Calculadora;
  
    constructor(calculadora: Calculadora) {
      this.calculadora = calculadora;
    }
  
    registrarLog(): void {
      console.log(`Resultado da operação: ${this.calculadora.obterResultado()}`);
    }
  }
  
  // Utilização dos Módulos A e B
  const calculadora = new Calculadora();
  calculadora.somar(2, 3);
  const logger = new Logger(calculadora);
  logger.registrarLog();