import posts from "./tuits.js";
let reviews = posts;

const createReview = (req, res) => {
    const newReview = req.body;
    newReview._id = (new Date()).getTime()+'';
    newReview.stars = 0;
    reviews.push(newReview);
    res.json(newReview);
}
const findReview  = (req, res) => {
    res.json(reviews);
}
const updateReview = (req, res) => {
    const reviewIdToUpdate = req.params.tid;
    const updates = req.body;
    const reviewIndex = reviews.findIndex(
        (r) => r._id === reviewIdToUpdate)
    reviews[reviewIndex] =
        {...reviews[reviewIndex], ...updates};
    res.sendStatus(200);
}

const deleteReview = (req, res) => {
    const reviewIdToDelete = req.params.rid;
    reviews = reviews.filter((r) =>
                             r._id !== reviewIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/reviews', createReview);
    app.get('/api/reviews', findReview);
    app.put('/api/reviews/:rid', updateReview);
    app.delete('/api/reviews/:rid', deleteReview);
}
