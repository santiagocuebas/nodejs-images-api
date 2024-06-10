import { AvailableExts } from '../dictionary.js';
const mimetypes = Object.keys(AvailableExts);
export const isUndefinedImage = (_value, { req }) => {
    return req.file !== undefined && req.file.buffer instanceof Buffer;
};
export const isValidExtension = (_value, { req }) => {
    return mimetypes.includes(req.file.mimetype);
};
export const isValidImageSize = (_value, { req }) => {
    return req.file.size < 2e7;
};
