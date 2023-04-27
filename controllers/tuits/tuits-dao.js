import tuitsModel from './tuits-model.js';
export const findReviews = () => tuitsModel.find();
export const createReview = (review) => tuitsModel.create(review);
export const deleteReview = (rid) => tuitsModel.deleteOne({_id: rid});
export const updateReview = (rid, review) => tuitsModel.updateOne({_id: rid}, {$set: review})