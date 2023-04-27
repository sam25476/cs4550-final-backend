import * as tuitsDao from './tuits-dao.js'

const createReview = async (req, res) => {
    const newReview = req.body;
    const insertedReview = await tuitsDao.createReview(newReview);
    res.json(insertedReview);
}
const findReview  = async (req, res) => {
    const reviews = await tuitsDao.findReviews()
    res.json(reviews);
}
const updateReview = async (req, res) => {
    const reviewIdToUpdate = req.params.rid;
    const updates = req.body;
    const status = await tuitsDao.updateReview(reviewIdToUpdate, updates);
    res.json(status);
}

const deleteReview = async (req, res) => {
    const reviewIdToDelete = req.params.rid;
    const status = await tuitsDao.deleteReview(reviewIdToDelete);
    res.json(status);
}


export default (app) => {
    app.post('/api/reviews', createReview);
    app.get('/api/reviews', findReview);
    app.put('/api/reviews/:rid', updateReview);
    app.delete('/api/reviews/:rid', deleteReview);
}
