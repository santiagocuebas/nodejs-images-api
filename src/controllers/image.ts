import type { Direction } from '../global.js';
import { createComment, deleteFile, getComments } from '../libs/index.js';
import { Image, Comment } from '../models/index.js';

export const getImageData: Direction = async (req, res) => {
	try {
		// Find and update image
		const image = await Image
			.findOneAndUpdate({ uniqueId: req.params.id }, { $inc: { views: 1 } });
	
		if (image === null) throw undefined;
	
		image.views++;
	
		const comments = await getComments(Infinity, image.id);
		
		return res.json({ image, comments });
	} catch {
		return res.status(401).json(null);
	}
};

export const postComment: Direction = async (req, res) => {
	try {
		const image = await Image.findOne({ uniqueId: req.params.id });
	
		if (image === null) throw undefined;

		const comment = await createComment(image, req.body);

		return res.json({ comment });
	} catch {
		return res.status(401).json(null);
	}
};

export const deleteImage: Direction = async (req, res) => {
	try {
		const image = await Image.findOne({ uniqueId: req.params.id });
	
		if (image === null) throw undefined;

		await deleteFile(image.uniqueId + image.ext);
		await Comment.deleteMany({ imageId: image._id });
		await image.deleteOne();

		return res.json(true);
	} catch {
		return res.status(401).json(false);
	}
};
