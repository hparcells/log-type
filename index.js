"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.server = server;
exports.game = game;
exports.error = error;
exports.warn = warn;
exports.debug = debug;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function log(prefix, color, message) {
  console.log("".concat(_chalk["default"][color](prefix), " ").concat(message));
}

function server(message) {
  log('[SERVER]', 'blue', message);
}

function game(message) {
  log('[GAME]', 'green', message);
}

function error(message) {
  log('[ERROR]', 'red', message);
}

function warn(message) {
  log('[WARNING]', 'yellow', message);
}

function debug(message) {
  log('[DEBUG]', 'magenta', message);
}
