"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = exports.PaymentType = void 0;
var PaymentType;
(function (PaymentType) {
    PaymentType["CASH"] = "DINHEIRO";
    PaymentType["CREDIT_CARD"] = "CART\u00C3O DE CR\u00C9DITO";
    PaymentType["DEBIT_CARD"] = "CART\u00C3O DE D\u00C9BITO";
    PaymentType["PIX"] = "PIX";
    PaymentType["OTHER"] = "OUTROS";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDENTE";
    OrderStatus["COMPLETED"] = "COMPLETADO";
    OrderStatus["CANCELED"] = "CANCELADO";
    OrderStatus["REFUNDED"] = "ESTORNADO";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
//# sourceMappingURL=order.enum.js.map