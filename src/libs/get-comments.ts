import { Comment } from '../models/index.js';

export const getComments = async (limit: number, imageId?: string) => {
	return Comment
		.find({ imageId })
		.sort({ createdAt: -1 })
		.limit(limit);
};
