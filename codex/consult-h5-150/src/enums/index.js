"use strict";
exports.__esModule = true;
exports.Gender = void 0;
var abc = 123;
// 解决：使用枚举类型定义
var Gender;
(function (Gender) {
    Gender[Gender["Gril"] = 0] = "Gril";
    Gender[Gender["Boy"] = 1] = "Boy";
})(Gender = exports.Gender || (exports.Gender = {}));
console.log(Gender.Boy, abc);
