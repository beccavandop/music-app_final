import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';


class ArtistDetails extends Component {
  constructor() {
    super();

    this.state = ({
    
      artistDetail: []

    })
  }
  
  render() {

   
    let foundArtist = this.props.artists.find((artist) => {
     return artist._id === this.props.params.id
    });
      if( foundArtist === undefined){
      return <p> loading </p>
    }

    const albumDetails = foundArtist.album_id.map((elm, index, array) => { 
      // console.log('fucking  array', elm)   
       return <AlbumMap 
                      img={elm.song}
                       billboard ={elm.on_billbord}
                       title={elm.title}
                       release={elm.release_date}
                       trackName ={elm.title}
                       play={this.props.play}
                      songs={<SongMap tracks={elm.tracks}
                                     play= {this.props.play}
                                     song = {elm.song} />}
                     
      />
      } )
      const tourDetails = foundArtist.tour_sched.map((elm, index, array) => { 
        // console.log('NEW array', elm)   
         return <TourMap description = {elm.description}
                         date = {elm.date}
                         location ={elm.location}
                          url ={elm.url} 
                         />
    
  
      } )
  
    return (
      <div className="App">
        <div className="artist-title">
          <h1 className="rotate">{foundArtist.name} </h1> 
          </div>
          <img className="header" src={`${foundArtist.img_url}.jpg`}  />
          {/* <div className="splosh-holder"><img className="splosh" src="graphic.svg"  /></div> */}
          <div className="bio-wrapper"><span className="intro"><h2 className="bio"> BIO </h2> <img src="arrow.svg" /></span>
          <p className="bio-paragraph"> {foundArtist.bio} </p></div>

          <div className="artist-info">
         <div className="category"> <div className="wave"><img src="sound.svg" /></div><h2 className="sound"> Sound</h2><h2> {foundArtist.category}</h2> </div>
          <div className="team"><img src="meet-team.svg" /><h2 className="meet"> Meet the Team </h2> <p> {foundArtist.fun_fact} </p></div>
          <div className="town"><div className="map"><img src="map.svg" /></div><h2 className="origins">Origins </h2><h2> {foundArtist.home_town}</h2></div>
          </div>

          <div className="info-arrow"> <img src="info-arrow.svg"/></div>
          <div className="spotify"><h4 className="data"> <span className="vertical-spot"> Spotify <br /> </span>Monthly Listeners <br /><span className="monthly-listeners">{foundArtist.monthly_listeners}</span></h4></div>
          
          <div className="youtube"><h4 className="data2"><span className="vertical-you">Youtube <br /></span> Monthly Subscribers<br /> <span className="monthly-listeners">{foundArtist.num_youtube_sub} </span></h4></div>
          <div className="info-arrow"> <img src="info-arrow-backwards.svg"/></div>
          <h3 className="tour"> Tour Schedule </h3>
         
          <div>{tourDetails}</div>
          <h2 className="albums"> DISCOGRAPHY </h2>
                  {albumDetails}
               
                
      </div>
    );
  }
}


class AlbumMap extends Component {
  
      render() { 
    
          return (
              <div>
                <h2 className="album-title"> {this.props.title} </h2>
                <div className="album-cover"><img src={`${this.props.img}.jpg`} alt="" /></div>
            
                <h3> {this.props.release} </h3>
                <p>{this.props.song} </p>
                <p>{this.props.date} </p>
                <p> Number of weeks on Billboard 200 List: {this.props.billboard} </p>
                <h4> TRACKS:{this.props.songs} </h4>
              </div>  

  
          )
      }
  }


  class SongMap extends Component {
    
        render() { 
          const trackList = this.props.tracks.map((elm, index, array) => {
           
            return  <ul>
                  <button onClick={() => this.props.play(this.props.tracks[index].source, this.props.tracks[index].title, this.props.tracks[index].artist,  this.props.tracks, index, this.props.song )}>Play</button>
                    <li>{elm.title} </li>
                    </ul> 
     
            });
      
            return (
                <div>
                    {trackList}
               </div>
  
    
            )
        }
    }

    class TourMap extends Component {
      
          render() {
        
              return (
                  <div className="tour-holder">
                 <a href={this.props.url} target="_blank"> <span className="who">WHO </span> {this.props.description}</a>

                  <p> <span className="when"> WHEN </span>{this.props.date} </p>
                  <p> <span className="what"> WHAT </span>{this.props.location} </p>
            
                 </div>
    
      
              )
          }
      }



export default ArtistDetails;