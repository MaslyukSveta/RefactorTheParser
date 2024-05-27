import { ILogger } from '../interfaces/ILogger';

/**
 * Class for logging messages to the console
 * @implements {ILogger}
 */
export class Logger implements ILogger {
    /**
     * Logs a message to the console
     * @param {string} message - The message to log
     */
    log(message: string): void {
        console.log(message);
    }
}
