import { IFileProcessor } from '../interfaces/IFileProcessor';
import { IParser } from '../interfaces/IParser';
import { IFetchService } from '../interfaces/IFetchService';
import { ILogger } from '../interfaces/ILogger';
import { IFileContent } from '../interfaces/IFileContent';

/**
 * Class for processing files
 * @implements {IFileProcessor}
 */
export class FileProcessor implements IFileProcessor {
    constructor(
        private parser: IParser,
        private fetchService: IFetchService,
        private logger: ILogger
    ) {}

    /**
     * Processes the content of a file
     * @param {string} input - The name of the input file
     * @param {string} output - The name of the output file
     * @returns {Promise<void>}
     */
    async processFile(input: string, output: string): Promise<void> {
        try {
            const content = await this.fetchService.fetch(input);
            const messages = this.parser.parse(content);
            const tasks = messages.map((msg) => this.processMessage(msg, output));

            await Promise.all(tasks);
        } catch (error) {
            this.logger.log(`Error processing file ${input}: ${error}`);
        }
    }

    /**
     * Processes a single message from the file
     * @param {IFileContent} message - The content of the message
     * @param {string} output - The name of the output file
     * @returns {Promise<void>}
     */
    private async processMessage(message: IFileContent, output: string): Promise<void> {
        try {
            await this.randomDelay();
            await this.fetchService.fetch(output, {
                body: this.parser.format(message),
                method: 'POST',
            });
            this.logger.log(
                `Saved message - ${message.message} to ${output} as ${
                    message.message.length > 8 ? 'long' : 'short'
                }`
            );
        } catch (error) {
            this.logger.log(`Error processing message "${message.message}": ${error}`);
        }
    }

    /**
     * Waits for a random amount of time (up to 5 seconds)
     * @returns {Promise<void>}
     */
    private randomDelay(): Promise<void> {
        return new Promise<void>((resolve) => setTimeout(resolve, Math.random() * 5000));
    }
}
