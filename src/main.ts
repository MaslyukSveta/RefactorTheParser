import { FetchService } from './services/FetchService';
import { Logger } from './services/Logger';
import { Parser } from './parsers/Parser';
import { FileProcessor } from './processors/FileProcessor';
import { IFileProcessor } from './interfaces/IFileProcessor';

/**
 * Main function to process all files
 * @returns {Promise<void>}
 */
export const main = async () => {
    const fetchService = new FetchService();
    const files = await fetchService.fetchFileList();
    const parser = new Parser();
    const logger = new Logger();
    const fileProcessor: IFileProcessor = new FileProcessor(parser, fetchService, logger);

    const tasks = files.map((input) => {
        const output = `out_${input}`;
        return fileProcessor.processFile(input, output);
    });

    await Promise.all(tasks);
};
