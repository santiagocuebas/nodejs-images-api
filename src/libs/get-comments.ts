import { Comment } from '../models/index.js';

export const getComments = async (limit: number, imageId?: string) => {
	const findQuery = imageId ? { imageId } : { };

	return Comment
		.find(findQuery)
		.sort({ createdAt: -1 })
		.limit(limit);
};
