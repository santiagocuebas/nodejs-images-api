import fs from 'fs/promises';
import { resolve } from 'path';
import { randomId } from './index.js';
import { AvailableExts } from '../dictionary.js';

export const uploadFile = async (file: Express.Multer.File | undefined) => {
	if (file === undefined) throw undefined;

	const id = await randomId();
	const ext = AvailableExts[file.mimetype];
	const filename = 'uploads/' + id + ext;
	await fs.appendFile(resolve(filename), file.buffer);

	return { id, filename, ext };
};

export const deleteFile = async (fileURL: string) => {
	const path = resolve(fileURL);

	await fs
		.unlink(path)
		.catch(err => console.error(err));
};
