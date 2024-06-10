import { getImages, getComments, getStats, uploadFile, createImage } from '../libs/index.js';
export const getIndex = async (_req, res) => {
    try {
        // Find images and others
        const recentImages = await getImages({ createdAt: -1 }, 3);
        const viewedImages = await getImages({ views: -1 }, 3);
        const recentComments = await getComments(5);
        const stats = await getStats();
        return res.json({ recentImages, viewedImages, recentComments, stats });
    }
    catch (error) {
        return res.status(401).json({
            recentImages: [],
            viewedImages: [],
            recentComments: [],
            stats: {}
        });
    }
};
export const postUpload = async (req, res) => {
    try {
        const file = await uploadFile(req.file);
        const image = await createImage(req.body, file);
        return res.json({ url: image.id });
    }
    catch {
        return res.status(401).json({
            error: { message: 'Someting went wrong while processing your request' }
        });
    }
};
export const getGallery = async (_req, res) => {
    // Find images
    const images = await getImages({ createdAt: -1 })
        .catch(() => []);
    return res.json({ images });
};
