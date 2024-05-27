import { IParser } from '../interfaces/IParser';
import { IFileContent } from '../interfaces/IFileContent';

/**
 * Class for parsing file content
 * @implements {IParser}
 */
export class Parser implements IParser {
    /**
     * Parses the content of a file
     * @param {string} content - The content of the file
     * @returns {IFileContent[]} - Returns an array of IFileContent objects
     */
    parse(content: string): IFileContent[] {
        return content.split('\n').map((line) => {
            const [message, timestamp] = line.split(' : ');
            return { message, timestamp };
        });
    }

    /**
     * Formats a message into a JSON string
     * @param {IFileContent} message - The message to format
     * @returns {string} - Returns a JSON string
     */
    format(message: IFileContent): string {
        return JSON.stringify({
            ...message,
            type: message.message.length > 8 ? 'long' : 'short',
        });
    }
}
