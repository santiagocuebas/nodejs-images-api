import { Image } from '../models/index.js';
export const getImages = async (order, limit = Infinity) => {
    return Image
        .find()
        .sort(order)
        .limit(limit);
};
