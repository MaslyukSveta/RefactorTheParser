import { mockResponses } from './mockResponses';

/**
 * Mock function to emulate HTTP requests
 * @param {string} filePath - Path to the file
 * @param {{ body: string; method: string }} [params] - Request parameters
 * @returns {Promise<string>} - Returns the file content or an empty string
 */
export const mockFetch = async (
    filePath: string,
    params?: { body: string; method: string }
): Promise<string> => {
    if (params?.method === "POST") return "";
    return mockResponses[filePath] ?? "";
};

/**
 * Mock function to get a list of files
 * @returns {Promise<string[]>} - Returns a list of file names
 */
export const fetchFileList = async (): Promise<string[]> => {
    return Object.keys(mockResponses);
};
