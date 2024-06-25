import { body } from 'express-validator';
import { isUndefinedImage, isValidExtension, isValidImageSize } from './custom-validators.js';
export const Upload = [
    body('image', 'Enter a valid image archive')
        .custom(isUndefinedImage).bail()
        .custom(isValidExtension).bail()
        .custom(isValidImageSize),
    body('title', 'Enter a valid title')
        .isString().bail()
        .isLength({ min: 3, max: 60 }).withMessage('The title must contain between 3 and 60 characters'),
    body('description', 'Enter a valid description')
        .isString().bail()
        .isLength({ max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];
export const Comment = [
    body('name', 'Enter a valid name')
        .isString().bail()
        .isLength({ min: 3, max: 40 }).withMessage('The name must contain between 3 and 40 characters'),
    body('email', 'Enter a valid email')
        .isEmail().bail()
        .isLength({ max: 60 }).withMessage('Have exceeded the max number of characters allowed'),
    body('comment', 'Enter a valid comment')
        .exists({ values: 'falsy' }).bail()
        .isString().bail()
        .isLength({ max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];
