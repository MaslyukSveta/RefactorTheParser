"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * Class for logging messages to the console
 * @implements {ILogger}
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    /**
     * Logs a message to the console
     * @param {string} message - The message to log
     */
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    return Logger;
}());
exports.Logger = Logger;
