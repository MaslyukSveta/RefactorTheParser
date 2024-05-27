import { IFileContent } from './IFileContent';

/**
 * Interface for parser
 * @interface IParser
 */
export interface IParser {
    parse(content: string): IFileContent[];
    format(message: IFileContent): string;
}
