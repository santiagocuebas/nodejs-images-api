import { Comment } from '../models/index.js';
export const getComments = async (limit, imageId) => {
    return Comment
        .find({ imageId })
        .sort({ createdAt: -1 })
        .limit(limit);
};
