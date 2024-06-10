import type { IImage } from '../global.js';
import { Schema, model } from 'mongoose';

const ImageSchema = new Schema<IImage>({
	uniqueId: { type: String, required: true, allowNull: false },
	title: { type: String, required: true, allowNull: false },
	description: String,
	filename: String,
	ext: String,
	views: { type: Number, default: 0 },
	createdAt: Date
});

export const Image = model<IImage>('Image', ImageSchema);
