"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battlefield = void 0;
var Stage_1 = require("./Stage");
var Battlefield = /** @class */ (function (_super) {
    __extends(Battlefield, _super);
    function Battlefield() {
        var _this = _super.call(this) || this;
        _this.width = 100;
        _this.height = 200;
        _this.platforms = [
            new Stage_1.Platform({ x: -25, y: 27.2 }, 25),
            new Stage_1.Platform({ x: 0, y: 54.4 }, 25),
        ];
        return _this;
    }
    return Battlefield;
}(Stage_1.Stage));
exports.Battlefield = Battlefield;
