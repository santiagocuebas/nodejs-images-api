import type { IImage, IKeys } from '../global.js';
import { Md5 } from 'ts-md5';
import { Image, Comment } from '../models/index.js';

export const createImage = async (body: IKeys<string>, file: IKeys<string>) => {
	return new Image({
		uniqueId: file.id,
		ext: file.ext,
		title: body.title,
		description: body.description,
		filename: file.filename,
		createdAt: new Date()
	}).save();
};

export const createComment = async (image: IImage, body: IKeys<string>) => {
	return new Comment({
		imageId: image.id,
		name: body.name,
		email: body.email,
		comment: body.comment, 
		filename: image.filename, 
		gravatar: Md5.hashStr(body.email),
		createdAt: new Date()
	}).save();
};
