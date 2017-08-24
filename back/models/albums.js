const mongoose = require('mongoose'), 
Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;


const albumSchema = new Schema({
    song: String,
    release_date: String,
    title: String,
    rank: Number,   
    on_billbord: Number,
    // artist_id: [{type: Schema.Types.ObjectId, ref: "Artist"}]
 });


const AlbumModel = mongoose.model('Album', albumSchema);

module.exports = AlbumModel;