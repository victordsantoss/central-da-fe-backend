"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCategory = exports.EventStatus = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["FREE"] = "Gratuito";
    EventType["PAID"] = "Pago";
})(EventType || (exports.EventType = EventType = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus["ACTIVE"] = "Ativo";
    EventStatus["INACTIVE"] = "Inativo";
    EventStatus["CANCELLED"] = "Cancelado";
    EventStatus["COMPLETED"] = "Completo";
})(EventStatus || (exports.EventStatus = EventStatus = {}));
var EventCategory;
(function (EventCategory) {
    EventCategory["EVENT"] = "Evento";
    EventCategory["MEETING"] = "Reuni\u00E3o";
    EventCategory["CONFERENCE"] = "Confer\u00EAncia";
    EventCategory["WORKSHOP"] = "Semin\u00E1rio";
    EventCategory["CONGRESS"] = "Congresso";
})(EventCategory || (exports.EventCategory = EventCategory = {}));
//# sourceMappingURL=event.enum.js.map