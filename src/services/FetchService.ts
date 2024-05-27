import { IFetchService } from '../interfaces/IFetchService';
import { mockFetch, fetchFileList } from '../mocks/mockFetch';

/**
 * Class to emulate HTTP requests
 * @implements {IFetchService}
 */
export class FetchService implements IFetchService {
    /**
     * Performs an HTTP request to get the file content
     * @param {string} filePath - Path to the file
     * @param {{ body: string; method: string }} [params] - Request parameters
     * @returns {Promise<string>} - Returns the file content or an empty string
     */
    async fetch(filePath: string, params?: { body: string; method: string }): Promise<string> {
        return mockFetch(filePath, params);
    }

    /**
     * Gets a list of files
     * @returns {Promise<string[]>} - Returns a list of file names
     */
    async fetchFileList(): Promise<string[]> {
        return fetchFileList();
    }
}
