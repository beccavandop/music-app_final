const mongoose = require('mongoose'), 
Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;


const artistSchema = new Schema({
   name: String,
   category: String,
   monthly_listeners: Number,
   home_town: String, 
   tour_sched: [{date: String, location: String, description: String, url: String}], 
   bio: String, 
   fun_fact: String, 
   img_url: String, 
   num_youtube_sub: Number, 
   album_id: [{type: Schema.Types.ObjectId, ref: "Album"}]
});

const ArtistModel = mongoose.model('Artist', artistSchema);

module.exports = ArtistModel;