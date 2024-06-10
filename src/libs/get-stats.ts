import { getComments, getImages } from './index.js';

export const getStats = async () => {
	const images = await getImages({ createdAt: -1 }, Infinity);
	const comments = await getComments(Infinity);

	const totalImages: number = images.length;
	const totalComments: number = comments.length;
	let totalViews = 0;

	for (const image of images) {
		totalViews += image.views;
	}

	return { totalImages, totalComments, totalViews };
};
