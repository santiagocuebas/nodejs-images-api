import { Request, Response, NextFunction } from 'express';
import { Types, Document, FlattenMaps } from 'mongoose';

export type Direction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type TypeOrder = string | {
  [key: string]: SortOrder | {
      $meta: unknown;
  };
} | [string, SortOrder][] | null | undefined;

export type ImageDocument = Document<unknown, object, IImage> & IImage & {
  _id: Types.ObjectId
};

export type ImageFlat = FlattenMaps<IImage> & { _id: Types.ObjectId };

export type CommentDocument = Document<unknown, object, IComment> & IComment & {
  _id: Types.ObjectId
};

export interface IImage {
  id: string;
  uniqueId: string;
  ext: string;
  title: string;
	description: string;
	filename: string;
	views: number;
	createdAt: Date;
}

export interface IComment {
  imageId: Types.ObjectId;
	email: string;
	name: string;
	gravatar: string;
	filename: string;
	comment: string;
	createdAt: Date;
}

export interface IStats {
	totalImages: number;
  totalComments: number;
  totalViews: number;
}

export interface IKeys<T> {
  [index: string]: T;
}
