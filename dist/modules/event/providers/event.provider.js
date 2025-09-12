"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventProviders = void 0;
const event_repository_1 = require("../repositories/event.repository");
const list_service_1 = require("../services/event/list/list.service");
const get_service_1 = require("../services/event/get/get.service");
const register_service_1 = require("../services/event/register/register.service");
const subscription_service_1 = require("../services/event/subscription/subscription.service");
exports.eventProviders = [
    {
        provide: 'IListEventsService',
        useClass: list_service_1.EventService,
    },
    {
        provide: 'IGetEventService',
        useClass: get_service_1.GetEventService,
    },
    {
        provide: 'IRegisterEventService',
        useClass: register_service_1.RegisterEventService,
    },
    {
        provide: 'ISubscriptionService',
        useClass: subscription_service_1.SubscriptionService,
    },
    {
        provide: 'IEventRepository',
        useClass: event_repository_1.EventRepository,
    },
];
//# sourceMappingURL=event.provider.js.map