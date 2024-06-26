import { Schema, model, Types } from 'mongoose';
import { IComment } from '../global.js';

const CommentSchema = new Schema<IComment>({
	imageId: Types.ObjectId,
	email: String,
	name: String,
	gravatar: String,
	filename: String,
	comment: String,
	createdAt: Date
});

export const Comment = model<IComment>('Comment', CommentSchema);
