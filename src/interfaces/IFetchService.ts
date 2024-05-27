/**
 * Interface for HTTP request service
 * @interface IFetchService
 */
export interface IFetchService {
    fetch(filePath: string, params?: { body: string; method: string }): Promise<string>;
    fetchFileList(): Promise<string[]>;
}
