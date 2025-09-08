"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("../src/app.module");
const swagger_config_1 = require("../src/common/configs/swagger.config");
const all_exceptions_filter_1 = require("../src/common/filters/all-exceptions.filter");
const cors_config_1 = require("../src/common/configs/cors.config");
let app;
async function createApp() {
    if (!app) {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
            whitelist: false,
            forbidNonWhitelisted: false,
        }));
        app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
        (0, swagger_config_1.setupSwagger)(app);
        app.enableCors(cors_config_1.corsConfig);
        await app.init();
    }
    return app;
}
async function handler(req, res) {
    const app = await createApp();
    const expressApp = app.getHttpAdapter().getInstance();
    return expressApp(req, res);
}
//# sourceMappingURL=index.js.map