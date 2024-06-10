import { Image } from '../models/index.js';

export const randomId = async () => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';

	for (let i = 0; i < 8; i++) {
		id += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	const image = await Image.find({ uniqueId: id });

	if (!image) randomId();

	return id;
};
