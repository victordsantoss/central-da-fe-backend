"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_config_1 = require("./common/configs/swagger.config");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const cors_config_1 = require("./common/configs/cors.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
    console.log('Api is running');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map