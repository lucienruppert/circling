"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const about_component_1 = require("./components/about/about.component");
const videos_component_1 = require("./components/videos/videos.component");
const events_component_1 = require("./components/events/events.component");
const method_component_1 = require("./components/method/method.component");
const material_module_1 = require("./material.module");
const async_1 = require("@angular/platform-browser/animations/async");
const flex_layout_1 = require("@angular/flex-layout");
const youtube_player_1 = require("@angular/youtube-player");
const show_video_component_1 = require("./components/show-video/show-video.component");
const vision_component_1 = require("./components/vision/vision.component");
const home_component_1 = require("./components/home/home.component");
const services_component_1 = require("./components/services/services.component");
const contact_component_1 = require("./components/contact/contact.component");
const benefits_component_1 = require("./components/benefits/benefits.component");
const MailerLite_service_1 = require("./services/MailerLite.service");
let AppModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                videos_component_1.VideosComponent,
                events_component_1.EventsComponent,
                method_component_1.MethodComponent,
                show_video_component_1.ShowVideoComponent,
                vision_component_1.VisionComponent,
                home_component_1.HomeComponent,
                services_component_1.ServicesComponent,
                contact_component_1.ContactComponent,
                benefits_component_1.BenefitsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                material_module_1.MaterialModules,
                flex_layout_1.FlexLayoutModule,
                youtube_player_1.YouTubePlayerModule,
            ],
            providers: [(0, async_1.provideAnimationsAsync)(), MailerLite_service_1.MailerLiteService],
            bootstrap: [app_component_1.AppComponent],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;