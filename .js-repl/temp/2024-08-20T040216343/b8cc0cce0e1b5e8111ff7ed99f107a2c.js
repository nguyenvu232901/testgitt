 try {_cv_stuvxyz.init();
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,void 0,void 0,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"style.js":[function(require,module,exports,__filename='c:\\Users\\ADMIN\\source\\repos\\web_ca_nhan\\src\\components\\HeaderComponent\\style.js',__dirname='c:\\Users\\ADMIN\\source\\repos\\web_ca_nhan\\src\\components\\HeaderComponent') {
var cov_l71jy39xf = function () {var path = "style.js";var hash = "701120cf9aa8b4434ec3c97cb9a4150ea6aef906";var global = new Function("return this")();var gcv = "_cv_stuvxyz";var coverageData = { path: "style.js", statementMap: { "0": { start: { line: 4, column: 29 }, end: { line: 8, column: 1 } }, "1": { start: { line: 10, column: 33 }, end: { line: 15, column: 1 } }, "2": { start: { line: 16, column: 36 }, end: { line: 22, column: 1 } }, "3": { start: { line: 24, column: 38 }, end: { line: 27, column: 1 } } }, fnMap: {}, branchMap: {}, s: { "0": 0, "1": 0, "2": 0, "3": 0 }, f: {}, b: {}, _coverageSchema: "c76cac2ccba130ce0cb921f3e5036fb67d1acdc9", hash: "701120cf9aa8b4434ec3c97cb9a4150ea6aef906", inc(type, id, index) {index !== undefined ? this[type][id][index]++ : this[type][id]++;_cv_stuvxyz.cov(type, id, index, "style.js");} };var coverage = global[gcv] || (global[gcv] = {});if (coverage.data[path] && coverage.data[path].hash === hash) {return coverage.data[path];}return coverage.data[path] = coverageData;}();Object.defineProperty(exports, "__esModule", { value: true });exports.WrapperTextHeaderSmall = exports.WrapperHeaderAccount = exports.WrapperTextHeader = exports.WrapperHeader = void 0;var _antd = require("antd");
var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const WrapperHeader = (cov_l71jy39xf.inc("s", 0), (0, _styledComponents.default)(_antd.Row)`
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    align-items: center;    
`);exports.WrapperHeader = WrapperHeader;

const WrapperTextHeader = (cov_l71jy39xf.inc("s", 1), _styledComponents.default.span`
    fonr-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left
`);exports.WrapperTextHeader = WrapperTextHeader;
const WrapperHeaderAccount = (cov_l71jy39xf.inc("s", 2), _styledComponents.default.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 12px
`);exports.WrapperHeaderAccount = WrapperHeaderAccount;

const WrapperTextHeaderSmall = (cov_l71jy39xf.inc("s", 3), _styledComponents.default.span`
    font-size: 12px;
    color: #fff;
`);exports.WrapperTextHeaderSmall = WrapperTextHeaderSmall;
},{}],"../ButtonInputSearch/ButtonInputSearch.jsx":[function(require,module,exports,__filename='c:\\Users\\ADMIN\\source\\repos\\web_ca_nhan\\src\\components\\ButtonInputSearch\\ButtonInputSearch.jsx',__dirname='c:\\Users\\ADMIN\\source\\repos\\web_ca_nhan\\src\\components\\HeaderComponent') {
var cov_evg6sygx9 = function () {var path = "../ButtonInputSearch/ButtonInputSearch.jsx";var hash = "2cc11bb8e6dfeee05327d37a96ca68e8550cf277";var global = new Function("return this")();var gcv = "_cv_stuvxyz";var coverageData = { path: "../ButtonInputSearch/ButtonInputSearch.jsx", statementMap: { "0": { start: { line: 5, column: 26 }, end: { line: 13, column: 1 } }, "1": { start: { line: 6, column: 43 }, end: { line: 6, column: 48 } }, "2": { start: { line: 7, column: 4 }, end: { line: 12, column: 6 } } }, fnMap: { "0": { name: "(anonymous_0)", decl: { start: { line: 5, column: 26 }, end: { line: 5, column: 27 } }, loc: { start: { line: 5, column: 37 }, end: { line: 13, column: 1 } }, line: 5 } }, branchMap: {}, s: { "0": 0, "1": 0, "2": 0 }, f: { "0": 0 }, b: {}, _coverageSchema: "c76cac2ccba130ce0cb921f3e5036fb67d1acdc9", hash: "2cc11bb8e6dfeee05327d37a96ca68e8550cf277", inc(type, id, index) {index !== undefined ? this[type][id][index]++ : this[type][id]++;_cv_stuvxyz.cov(type, id, index, "../ButtonInputSearch/ButtonInputSearch.jsx");} };var coverage = global[gcv] || (global[gcv] = {});if (coverage.data[path] && coverage.data[path].hash === hash) {return coverage.data[path];}return coverage.data[path] = coverageData;}();Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _icons = require("@ant-design/icons");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}cov_evg6sygx9.inc("s", 0);

const ButtonInputSearch = props => {cov_evg6sygx9.inc("f", 0);
  const { size, placeholder, textButton } = (cov_evg6sygx9.inc("s", 1), props);cov_evg6sygx9.inc("s", 2);
  return (
    _react.default.createElement("div", { style: { display: 'flex', gap: '1px' } },
    _react.default.createElement(_antd.Input, { size: size, placeholder: placeholder, bordered: false, style: { backgroundColor: '#fff' } }),
    _react.default.createElement(_antd.Button, { size: size, icon: _react.default.createElement(_icons.SearchOutlined, null), bordered: false }, textButton)));


};var _default =

ButtonInputSearch;exports.default = _default;
},{}],"HeaderComponent.jsx":[function(require,module,exports,__filename='c:\\Users\\ADMIN\\source\\repos\\web_ca_nhan\\src\\components\\HeaderComponent\\HeaderComponent.jsx',__dirname='c:\\Users\\ADMIN\\source\\repos\\web_ca_nhan\\src\\components\\HeaderComponent') {
var cov_youu5h13j = function () {var path = "HeaderComponent.jsx";var hash = "1d249ec9f96fe2559a99cbd10176e10d3532a4a2";var global = new Function("return this")();var gcv = "_cv_stuvxyz";var coverageData = { path: "HeaderComponent.jsx", statementMap: { "0": { start: { line: 8, column: 24 }, end: { line: 41, column: 1 } }, "1": { start: { line: 9, column: 4 }, end: { line: 40, column: 5 } } }, fnMap: { "0": { name: "(anonymous_0)", decl: { start: { line: 8, column: 24 }, end: { line: 8, column: 25 } }, loc: { start: { line: 8, column: 30 }, end: { line: 41, column: 1 } }, line: 8 } }, branchMap: {}, s: { "0": 0, "1": 0 }, f: { "0": 0 }, b: {}, _coverageSchema: "c76cac2ccba130ce0cb921f3e5036fb67d1acdc9", hash: "1d249ec9f96fe2559a99cbd10176e10d3532a4a2", inc(type, id, index) {index !== undefined ? this[type][id][index]++ : this[type][id]++;_cv_stuvxyz.cov(type, id, index, "HeaderComponent.jsx");} };var coverage = global[gcv] || (global[gcv] = {});if (coverage.data[path] && coverage.data[path].hash === hash) {return coverage.data[path];}return coverage.data[path] = coverageData;}();Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _search = _interopRequireDefault(require("antd/es/transfer/search"));
var _icons = require("@ant-design/icons");
var _colorPicker = require("antd/es/color-picker");
var _ButtonInputSearch = _interopRequireDefault(require("../ButtonInputSearch/ButtonInputSearch"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}cov_youu5h13j.inc("s", 0);
const HeaderComponent = () => {cov_youu5h13j.inc("f", 0);cov_youu5h13j.inc("s", 1);
  return (
    _react.default.createElement(_style.WrapperHeader, { gutter: 16 },
    _react.default.createElement(_antd.Col, { span: 6 },
    _react.default.createElement(_style.WrapperTextHeader, null, "CODE")),

    _react.default.createElement(_antd.Col, { span: 12 },
    _react.default.createElement(_ButtonInputSearch.default, {
      size: "large",
      textButton: "T\xECm ki\u1EBFm",
      placeholder: "input search text"
      // onSearch={onSearch}
      , enterButton: true })),

    _react.default.createElement(_antd.Col, { span: 6, style: { display: 'flex', gap: '20px', alignItems: 'center' } },
    _react.default.createElement(_style.WrapperHeaderAccount, null,
    _react.default.createElement(_icons.UserOutlined, { style: { fontSize: '30px' } }),
    _react.default.createElement("div", null,
    _react.default.createElement(_style.WrapperTextHeaderSmall, null, "\u0110\u0103ng nh\u1EADp/\u0110\u0103ng k\xFD"),
    _react.default.createElement("div", null,
    _react.default.createElement(_style.WrapperTextHeaderSmall, null, "T\xE0i kho\u1EA3n"),
    _react.default.createElement(_icons.CaretDownOutlined, null)))),




    _react.default.createElement("div", null,
    _react.default.createElement(_icons.ShoppingCartOutlined, { style: { fontSize: '30px', color: '#fff' } }),
    _react.default.createElement("span", { style: { color: '#fff' } }, "Gi\u1ECF h\xE0ng")))));




};var _default =

HeaderComponent;exports.default = _default;
_cv_stuvxyz.end();},{"./style":"style.js","../ButtonInputSearch/ButtonInputSearch":"../ButtonInputSearch/ButtonInputSearch.jsx"}]},{},["HeaderComponent.jsx"], null);
} catch (err) {_cv_stuvxyz.error(err);_cv_stuvxyz.end();}