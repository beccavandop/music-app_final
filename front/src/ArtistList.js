import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class ArtistList extends Component {
  render() {
    let artistList = this.props.artists;
    console.log(artistList)
    const allArtists = artistList.map((elm, index, array) => {
      return <ArtistMap 
              key= {index}
              id={elm._id}
              title={elm.name}
              />

      
    })
  
    




    return (
      <div className="artist-list">

        <div className="letter-blocks">
        <h1 className="all-artists"> A </h1><h1 className="all-artists"> R </h1><h1 className="all-artists"> T </h1><h1 className="all-artists"> I </h1><h1 className="all-artists"> S </h1><h1 className="all-artists"> T </h1>
        </div>
        <div className="artist-container">
            {allArtists}
        </div>
      </div>
    );
  }
}
class ArtistMap extends Component {
    
        render() { 
      
            return (
              <Link to={`/${this.props.id}`}><div className="artist-homepage">
                <h2 className="artist-name-link">{this.props.title}</h2>
               
                </div>  </Link>
  
    
            )
        }
    }

    // class AlbumMap extends Component {
      
    //       render() { 
        
    // const albumList = this.props.albums.map((elm, index, array) => {
    //   return <h1>{elm.title}</h1>
    // })
    //           return (
    //             <div>
    //              {albumList}
    //             </div>
      
    //           )
    //       }
    //   }


export default ArtistList;