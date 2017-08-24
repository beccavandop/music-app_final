const mongoose = require('mongoose'),
Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;
const Artist = require('../models/artists');
const Album = require('../models/albums');


// module.exports
// song: String,
// release_date: String,
// title: String,
// rank: Number, 
// tour_sched: String,  
// copies_sold_us: Number, 
// copies_sold_uk: Number, 
// artist_id: {type: Schema.Types.ObjectId, ref: "Artist"}


const albumsToSeed = [
 {   song: 'arcade-everything',
     release_date: '2017',
     title: 'Everything Now', 
     rank: 5, 
     on_billboard: 3,
     tracks: [{
              source: 'everything',
             title: "Everything Now",
             artist: 'Arcade Fire',
        },
        {
             source: 'put-your-money',
             title: "Put Your Money on Me",
             artist: 'Arcade Fire',
           },
      {
            source: 'chemistry',
            title: 'Chemistry',
            artist: 'Arcade Fire',
                     },
                     {
            source: 'electric-blue',
            title: 'Electric Blue',
            artist: 'Arcade Fire',
                               }]
    },
  { song: 'arcade-reflektor',
    release_date: '2013',
    title: 'Reflektor', 
    rank: 2, 
    on_billboard: 20, 
      tracks: [{
       source: 'reflektor',
       title: "Reflektor",
       artist: 'Arcade Fire',
  },
   {
       source: 'porno',
        title: "Porno",
       artist: 'Arcade Fire',
      },
 {
      source: 'afterlife',
      title: 'Afterlife',
      artist: 'Arcade Fire',
               }] 
 },
 {  song: 'arcade-suburbs',
    release_date: '2010',
   title: 'The Suburbs', 
   rank: 1, 
    on_billboard: 52,
    tracks: [{
         source: 'rococo',
       title: "Rococo",
        artist: 'Arcade Fire',
   },
   {
        source: 'empty-room',
       title: "Empty Room",
        artist: 'Arcade Fire',
      },
 {
      source: 'half-light',
       title: 'Half Light I',
      artist: 'Arcade Fire',
                },
    {
      source: 'wasted-hours',
      title: 'Wasted Hours',
       artist: 'Arcade Fire',
     }]
 }, 
// {   song: 'fleet-helplessness',
//     release_date: '2011',
//     title: 'Helplessness Blues', 
//     rank: 2, 
//     on_billboard: 23,
//     tracks: [{
//             source: 'someone-youd-admire',
//             title: "Someone You'd Admire",
//             artist: 'Fleet Foxes',
//               },
//            {
//             source: 'montezuma',
//             title: "Montezuma",
//             artist: 'Fleet Foxes',
//            },
//            {
//             source: 'helplessness-blues',
//             title: 'Helplessness Blues',
//             artist: 'Fleet Foxes',
//            }]
// },
// {   song: 'fleet-crack',
// release_date: '2017',
// title: 'Crack-Up', 
// rank: 3, 
// on_billboard: 3,
// tracks: [{
//       source: 'cassadies',
//       title: "-Naiada, Cassadies",
//       artist: 'Fleet Foxes',
//         },
//      {
//       source: 'if-you-need-to',
//       title: "If You Need To, Keep Time on me",
//       artist: 'Fleet Foxes',
//      },
//      {
//       source: 'crack-up',
//       title: 'Crack-Up',
//       artist: 'Fleet Foxes',
//      }]
// } ,
// {   song: 'fleet-fleet',
// release_date: '2009',
// title: 'Fleet Foxes', 
// rank: 1, 
// on_billboard: 43,
// tracks: [{
//     source: 'ragged-wood',
//     title: "Ragged Wood",
//     artist: 'Fleet Foxes',
//       },
//    {
//     source: 'doesnt-know-why',
//     title: "He Doesn't Know Why",
//     artist: 'Fleet Foxes',
//    },
//    {
//     source: 'meadowlarks',
//     title: 'Meadowlarks',
//     artist: 'Fleet Foxes',
//    }]
//   },
// {   song: 'national-trouble-test',
// release_date: '2013',
// title: 'Trouble Will Find Me', 
// rank: 1, 
// on_billboard: 25,
// tracks: [{
//   source: 'heaven-faced',
//   title: "Heavenfaced",
//   artist: 'The National',
//     },
//  {
//   source: 'pink-rabbit',
//   title: 'Pink Rabbit',
//   artist: 'The National',
//  },
//  {
//   source: 'graceless',
//   title: 'Graceless',
//   artist: 'The National',
//  }]
// },
// {   song: 'national-high-test',
// release_date: '2010',
// title: 'High Violet', 
// rank: 2, 
// on_billboard: 21,
// tracks: [{
//     source: 'anyones-ghost',
//     title: "Anyone's Ghost",
//     artist: 'The National',
//       },
//    {
//     source: 'england',
//     title: 'England',
//     artist: 'The National',
//    },
//    {
//     source: 'runaway',
//     title: 'Runaway',
//     artist: 'The National',
//    }]
// }, 
// {   song: 'national-boxer',
// release_date: '2007',
// title: 'Boxer', 
// rank: 3, 
// on_billboard: 6,
// tracks: [{
//   source: 'fake-empire',
//   title: 'Fake Empire',
//   artist: 'The National',
//     },
//  {
//   source: 'green-gloves',
//   title: 'Green Gloves',
//   artist: 'The National',
//     },
//     {
//    source: 'guest-room',
//    title: 'Guest Room',
//   artist: 'The National',
//         }, 
//         {
//    source: 'racing',
//    title: 'Racing Like A Pro',
//    artist: 'The National',
//             }]
// }      
] 

module.exports = () => {
    Album.find({}, (err, albums) => {
      if (err) {
        console.log("here: " + err)
      } else {
        if (albums.length === 9) {
          Album.collection.insert(albumsToSeed, (err, albums) => {
            console.log(albums)
          })
        }
      }
    })
  }