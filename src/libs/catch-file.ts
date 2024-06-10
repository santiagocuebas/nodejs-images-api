import { v2 as cloudinary } from 'cloudinary';
import DatauriParser from 'datauri/parser.js';
import { randomId } from './index.js';
import { AvailableExts } from '../dictionary.js';

const parser = new DatauriParser();

export const uploadFile = async (file: Express.Multer.File | undefined) => {
	const fileString = file
		? parser.format(AvailableExts[file.mimetype], file.buffer).content
		: undefined;

	if (file === undefined || fileString === undefined) throw undefined;

	const id = await randomId();
	const data = await cloudinary
		.uploader
		.upload(fileString, { public_id: id, folder: 'node-images/' });

	return { id, filename: data.secure_url, ext: AvailableExts[file.mimetype] };
};

export const deleteFile = async (fileURL: string) => {
	await cloudinary
		.uploader
		.destroy('node-images/' + fileURL)
		.catch(() => {
			console.error('An error occurred while trying to delete the image');
		});
};
