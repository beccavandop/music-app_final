const mongoose = require('mongoose'),
Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;
const Artist = require('../models/artists');
const Album = require('../models/albums');


// module.exports
// name: String,
// category: String,
// monthly_listeners: Number,
// home_town: String, 
// tour_sched: String, 
// bio: String, 
// fun_fact: String, 
// img_url: String, 
// num_youtube_sub: Number, 
// album_id: [{type: Schema.Types.ObjectId, ref: "Album"}]


const artistsToSeed = [
//   { name: 'Bon Iver',
//     category: 'Folky',
//     monthly_listeners: 4422724,
//     home_town: 'Wisconsin',
//     tour_sched:[{date: 'Sat, Sep 09 • 8:00 pm', location: 'Santa Fe Opera House, Santa Fe', description: 'Noise For Now 2017', url: 'http://www.songkick.com/festivals/1914904-noise-for-now/id/30581614-noise-for-now-2017?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//                 {date: 'Tue, Sep 19 • 7:45 pm', location: 'TivoliVredenburg, Grote Zaal, Utrecht, Netherlands', description: 'Bon Iver with Mikaela Davis', url: 'http://www.songkick.com/concerts/30617269-bon-iver-at-tivolivredenburg-grote-zaal?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'}, 
//                 {date: 'Thu, Sep 21 • 8:00 pm', location: 'Salle Pleyel, Paris', description: 'Bon Iver with Mikaela Davis', url: 'http://www.songkick.com/concerts/30627894-bon-iver-at-salle-pleyel?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//                 {date: 'Mon, Sep 25 • 7:00 pm', location: 'Blackpool Opera House, Blackpool', description: 'Bon Iver', url: 'http://www.awin1.com/cread.php?clickref=entity&clickref2=005b2ec1307a89ff528d19dd86e5dd7ac89ddcf55eadd15f6cddc1&clickref3=74Z6OXl8YhUMZOyPTJ9PNu&awinmid=3589&awinaffid=291909&p=http%3A%2F%2Fwww.ticketmaster.co.uk%2Fevent%2F1F0052DBAA06AA04'}],
//     bio: "Appearing seemingly out of nowhere, Bon Iver's debut album, For Emma, Forever Ago, became one of the landmark albums of the late-2000s indie folk sound. Singer/songwriter Justin Vernon's spare sound and pure vocals caught the attention of people looking for something folky, yet not folksy in any way. Further albums refining and shifting their sound bolstered the band's popularity and widened their fan base, earning them a famous fan (and future collaborator) in Kanye West.",
//     fun_fact: 'Band Members: Matt McCaughan, Justin Vernon and S. Carey',
//     img_url: 'boniver',
//     num_youtube_sub: 244502,
//     album_id: [Schema.Types.ObjectId]
//   },
// {  name: 'Fleet Foxes',
//    category: 'Earthy Indie Folk',
//    monthly_listeners: 2821662,
//    home_town: 'Seattle, Washington.',
//    tour_sched:[{date: 'Thu, Aug 17 • 8:00 pm', location: 'Austin City Limits Live at The Moody Theater, Austin', description: 'Fleet Foxes', url: 'http://www.songkick.com/concerts/29805899-fleet-foxes-at-austin-city-limits-live-at-the-moody-theater?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//                 {date: 'Fri, Aug 18 • 8:00 pm', location:'The Bomb Factory, Dallas', description:'Fleet Foxes', url: "http://www.songkick.com/concerts/29805909-fleet-foxes-at-bomb-factory?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity"},
//                 {date: 'Wed, Sep 13 • 5:30 pm', location:'Malkin Bowl, Vancouver', description:'Fleet Foxes', url: "http://ticketmaster.evyy.net/c/296934/271177/4272?sharedId=entity&subId1=005b2ec1307a89ff528d19dd86e5dd7ac89ddcf55eadd15f6cddc1&subId3=45TY5pJZf6WPmfQnLrFc1p&u=http%3A%2F%2Fwww.ticketmaster.ca%2Fevent%2F11005277CF8FD34F"},
//                 {date: 'Thu, Sep 14 • 8:00 pm', location:'Paramount Theatre, Seattle', description:'Fleet Foxes', url: "https://www1.ticketmaster.com/event/0F00527B1C0BFAF5?irgwc=1&clickid=wTSQ7-1F0wxvW7xQN02obXHbUkmxIMyJQ0Ofwk0&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&utm_medium=affiliate"}],
//    bio: "Emerging in 2008 to widespread acclaim, Seattle's Fleet Foxes fused earthy, harmony-rich indie folk with a sense of lush pop sophistication that called to mind the late-'60s work of the Beach Boys, the Zombies, and Crosby, Stills, & Nash.", 
//    fun_fact: "Band Members:  Robin Pecknold, Skyler Skjelset, Casey Wescott, Christian Wargo, and Nicholas Peterson.",
//    img_url: 'fleetfoxes',
//    num_youtube_sub: 15750,
//    album_id: [Schema.Types.ObjectId]
//   },
//   {  name: 'The National',
//   category: 'Indie Rock',
//   monthly_listeners: 2591990,
//   home_town: 'Cincinnati, Ohio',
//   tour_sched:[{date: 'Sat, Dec 09 • 8:00 pm', location: 'Sony Centre for the Performing Arts, Toronto', description: 'The National', url: 'https://www.ticketmaster.ca/event/100052A8F7A8C313?irgwc=1&clickid=wTSQ7-1F0wxvW7xQN02obXHbUkmxe3QprShjzM0&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&utm_medium=affiliate'},
//               {date: 'Sun, Dec 10 • 8:00 pm', location: 'FirstOntario Concert Hall (Formerly Hamilton Place), Hamilton', description: 'The National', url: 'http://ticketmaster.evyy.net/c/296934/271177/4272?sharedId=entity&subId1=005b2ec1307a89ff528d19dd86e5dd7ac89ddcf55eadd15f6cddc1&subId3=6IMUIQdjOUvQeiahsWVKrt&u=http%3A%2F%2Fwww.ticketmaster.ca%2Fevent%2F100052AA86A51B0C'},
//               {date: 'Sat, Sep 16 • 8:00 pm', location: 'Cork Opera House, Cork', description: 'The National', url: 'http://www.songkick.com/concerts/29957339-national-at-cork-opera-house?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//               {date: 'Sun, Sep 17 • 8:00 pm', location: 'Vicar Street, Dublin', description: 'The National', url: 'http://www.awin1.com/cread.php?clickref=entity&clickref2=005b2ec1307a89ff528d19dd86e5dd7ac89ddcf55eadd15f6cddc1&clickref3=4hb9sJ72oQde3d1zviGopN&awinmid=6643&awinaffid=291909&p=http%3A%2F%2Fwww.ticketmaster.ie%2Fevent%2F180052AAF1DABCA5'}],
//   bio: "The National is an American indie rock band from Cincinnati, Ohio, formed in 1999.Leaving behind their day jobs, the National signed with Beggars Banquet Records and released their third studio album, Alligator (2005), to widespread critical acclaim. The band's fourth and fifth studio albums, Boxer (2007) and High Violet (2010), increased their exposure significantly. In 2013, the band released its sixth studio album, Trouble Will Find Me, which was nominated for Best Alternative Music Album at the 56th Annual Grammy Awards.", 
//   fun_fact: "Band Members: Matt Berninger, Aaron Dessner, Bryce Dessner, Scott Devendorf and Bryan Devendorf.",
//   img_url: 'national',
//   num_youtube_sub: 88774,
//   album_id: [Schema.Types.ObjectId]
//  } 
{  name: 'Arcade Fire',
  category: 'Theatrical Indie Rock',
  monthly_listeners: 4797299,
   home_town: 'Montreal',
  tour_sched:[{date: 'Fri, Nov 03 • 7:30 pm', location: 'Air Canada Centre, Toronto', description: 'Arcade Fire with Broken Social Scene', url: 'https://www.ticketmaster.ca/event/100052BFA21E4D49?irgwc=1&clickid=wTSQ7-1F0wxvW7xQN02obXHbUkm2TIXV2Q6XS80&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&utm_medium=affiliate&bba=1'},
              {date: 'Tue, Sep 05 • 7:30 pm', location: 'Centre Videotron, Québec', description: 'Arcade Fire with Wolf Parade', url: 'http://ticketmaster.evyy.net/c/296934/271177/4272?sharedId=entity&subId1=005b2ec1307a89ff528d19dd86e5dd7ac89ddcf55eadd15f6cddc1&subId3=1hl5mHLhrGyRLKrovgZr91&u=http%3A%2F%2Fwww.ticketmaster.ca%2Fevent%2F100052BFB5DA6C2C'},
               {date: 'Tue, Sep 12 • 7:30 pm', location: 'Madison Square Garden, New York', description: 'Arcade Fire with Preservation Hall JJazz Band', url: 'https://www1.ticketmaster.com/event/3B0052BBFB5112BD?irgwc=1&clickid=wTSQ7-1F0wxvW7xQN02obXHbUkm2TNWZ2Q6XS80&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&utm_medium=affiliate'},
             {date: 'Sat, Sep 16 • 7:30 pm', location: 'Capital One Arena (formerly Verizon Center), Washington', description: 'Arcade Fire', url: 'https://www1.ticketmaster.com/event/150052B9A3F51307?irgwc=1&clickid=wTSQ7-1F0wxvW7xQN02obXHbUkm2TNSF2Q6XS80&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&utm_medium=affiliate'}],
  bio: "They met in 2003, when Chassagne was singing at an art exhibit, and it wasn't long before they knew they wanted to make music together. Other participants fell into their orbit and Arcade Fire was born. Jeremy Gara (drums), Richard Parry (bass), Sarah Neufeld (violin), William Butler (keyboard) and Tim Kingsbury (guitar) all helped form the band's unique sound. Most of the musicians play a variety of instruments on stage, and from the start Arcade Fire was been lauded for its ecstatic shows which often found band members at work in front of provocative video montages.", 
  fun_fact: "Win Butler, Régine Chassagne, Richard Reed Parry, William Butler, Tim Kingsbury, Sarah Neufeld and Jeremy Gara",
  img_url: 'arcade',
   num_youtube_sub: 20379,
   album_id: [Schema.Types.ObjectId]
  } 

]

//   { name: 'Bahamas',
//     category: 'Singer/Song-Writer',
//     monthly_listeners: 1559677,
//     home_town: 'Toronto',
//     tour_sched:[{date: 'Sat, Aug 26 • 6:45 pm', location: 'Amphitheatre, Jackson-Triggs Niagara Estate Winery, Niagara-on-the-Lake', description: 'Bahamas', url: 'http://www.songkick.com/concerts/29815699-bahamas-at-amphitheatre-jacksontriggs-niagara-estate-winery?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//                 {date: 'Sat, Sep 02 • 8:00 pm', location: 'Live on the Green, Nashville', description: 'Bahamas', url: 'http://www.songkick.com/concerts/31032724-bahamas-at-live-on-the-green?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//                 {date: 'Wed, Sep 13 • 8:00 pm', location: 'Great Lawn at Lansdowne Park, Ottawa', description: 'Cityfolk Festival 2017', url: 'http://www.songkick.com/festivals/63966-cityfolk/id/30184264-cityfolk-festival-2017?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'},
//                 {date: 'Wed, Sep 27 • 8:00 pm', location: 'Veterans United Home Loans Amphitheater, Virginia Beach', description: 'Bahamas', url: 'http://www.songkick.com/concerts/30758669-bahamas-at-veterans-united-home-loans-amphitheater?utm_source=8123&utm_medium=partner&utm_content=2169b4ec0cb4bb8182202f22ed424c35&utm_campaign=entity'}], 
//     bio: '',
//     fun_fact: '',
//     img_url: 'bahamas',
//     num_youtube_sub: 16525,
//     album_id: [{}]
//   },

module.exports = () => {
  Artist.find({}, (err, artists) => {
    if (err) {
      console.log("here: " + err)
    } else {
      if (artists.length === 0) {
        Artist.collection.insert(artistsToSeed, (err, artists) => {
          console.log(artists)
        })
      }
    }
  })
}