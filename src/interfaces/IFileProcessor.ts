/**
 * Interface for file processor
 * @interface IFileProcessor
 */
export interface IFileProcessor {
    processFile(input: string, output: string): Promise<void>;
}
