import type { TypeOrder } from '../global.js';
import { Image } from '../models/index.js';

export const getImages = async (order: TypeOrder, limit = Infinity) => {
	return Image
		.find()
		.sort(order)
		.limit(limit);
};
