var PagamentoCheque = /** @class */ (function () {
    function PagamentoCheque(valor) {
        this.valor = valor;
    }
    PagamentoCheque.prototype.pagar = function () {
        console.log("O pagamento de ".concat(this.valor, " ser\u00E1 feito por cheque."));
    };
    return PagamentoCheque;
}());
var PagamentoDinheiro = /** @class */ (function () {
    function PagamentoDinheiro(valor) {
        this.valor = valor;
    }
    PagamentoDinheiro.prototype.pagar = function () {
        console.log("O pagamento de ".concat(this.valor, " ser\u00E1 feito por dinheiro."));
    };
    return PagamentoDinheiro;
}());
var PagamentoPorPix = /** @class */ (function () {
    function PagamentoPorPix(valor) {
        this.valor = valor;
    }
    PagamentoPorPix.prototype.pagar = function () {
        console.log("O pagamento de ".concat(this.valor, " ser\u00E1 feito por pix."));
    };
    return PagamentoPorPix;
}());
var pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();
var pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();
var pagamentoTransferencia = new PagamentoPorPix(300);
pagamentoTransferencia.pagar();
