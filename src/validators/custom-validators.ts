import type { CustomValidator } from 'express-validator';
import { AvailableExts } from '../dictionary.js';

const mimetypes: string[] = Object.keys(AvailableExts);

export const isUndefinedImage: CustomValidator = (_value, { req }) => {
	return req.file !== undefined && req.file.buffer instanceof Buffer;
};

export const isValidExtension: CustomValidator = (_value, { req }) => {
	return mimetypes.includes(req.file.mimetype);
};

export const isValidImageSize: CustomValidator = (_value, { req }) => {
	return req.file.size < 2e7;
};
