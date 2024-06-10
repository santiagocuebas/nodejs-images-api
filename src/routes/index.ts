import { Router } from 'express';
import { imageCtrl, homeCtrl } from '../controllers/index.js';
import { Comment, Upload } from '../validators/schemas-validators.js';
import { validate } from '../validators/validate.js';

const router = Router();

router.get('/index', homeCtrl.getIndex);

router.post('/upload', validate(Upload), homeCtrl.postUpload);

router.get('/gallery', homeCtrl.getGallery);

router.get('/gallery/:imageId', imageCtrl.getImageData);

router.post('/:imageId/comment', validate(Comment), imageCtrl.postComment);

router.delete('/:imageId', imageCtrl.deleteImage);

export default router;