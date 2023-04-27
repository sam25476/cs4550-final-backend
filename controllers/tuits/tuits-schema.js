import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   review: String,
                                   stars: Number,
                                   title: String,
                                   userName: String,
                               }, {collection: 'reviews'});
export default schema;