"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
/**
 * Class for parsing file content
 * @implements {IParser}
 */
var Parser = /** @class */ (function () {
    function Parser() {
    }
    /**
     * Parses the content of a file
     * @param {string} content - The content of the file
     * @returns {IFileContent[]} - Returns an array of IFileContent objects
     */
    Parser.prototype.parse = function (content) {
        return content.split('\n').map(function (line) {
            var _a = line.split(' : '), message = _a[0], timestamp = _a[1];
            return { message: message, timestamp: timestamp };
        });
    };
    /**
     * Formats a message into a JSON string
     * @param {IFileContent} message - The message to format
     * @returns {string} - Returns a JSON string
     */
    Parser.prototype.format = function (message) {
        return JSON.stringify(__assign(__assign({}, message), { type: message.message.length > 8 ? 'long' : 'short' }));
    };
    return Parser;
}());
exports.Parser = Parser;
