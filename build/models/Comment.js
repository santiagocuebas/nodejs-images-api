import { Schema, model, Types } from 'mongoose';
const CommentSchema = new Schema({
    imageId: Types.ObjectId,
    email: String,
    name: String,
    gravatar: String,
    filename: String,
    comment: String,
    createdAt: Date
});
export const Comment = model('Comment', CommentSchema);
