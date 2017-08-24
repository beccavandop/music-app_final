import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Link} from 'react-router';


class App extends Component {
  constructor() {
    super();

    this.state = ({
      songIndex: 0,
      artist: [],
      playStatus : false,
      songName : '',
      songArray: [], 
      albumImage: '',
      songTitle: '',
      songArtist: ''

    })
    this.playSong = this.playSong.bind(this);
    this.play = this.play.bind(this);
   this.counterUp = this.counterUp.bind(this);
   this.counterDown = this.counterDown.bind(this);
 
  }
  
  componentWillMount(){
    axios.get('http://localhost:8080/')
    .then(res =>{
      this.setState({
        artist: res.data
      })

       })
    .catch(err =>{
      console.log(err)
    })

  }

  play(name, title, artist, songArray, index, img) {
    
      this.setState({
        songIndex: index,
        songName: name,
        playStatus : true,
        songArray : songArray,
        albumImage: img,
        songTitle: title,
        songArtist: artist
  
      })
    console.log("my album img", this.state.songTitle)
    }
  
     counterUp() {
       if(this.state.songIndex === (this.state.songArray.length -1)){
         this.setState({
          playStatus : true,
           songIndex: 0,
          songName : this.state.songArray[0].source,
          songTitle: this.state.songArray[0].title
         })
       }
        else {
     this.setState({
      playStatus : true,
      songIndex: this.state.songIndex + 1,
      songName : this.state.songArray[(this.state.songIndex + 1)].source,
      songTitle: this.state.songArray[(this.state.songIndex + 1)].title
     });
   }
    }
   ;
  
   counterDown() {
     
     if(this.state.songIndex === 0){
       this.setState({
        playStatus : true,
        songIndex: this.state.songArray.length -1,
        songName : this.state.songArray[(this.state.songArray.length -1)].source,
        songTitle: this.state.songArray[(this.state.songArray.length -1)].title,
       } ) 
        
     }
      else {
     this.setState({
      playStatus : true,
      songIndex: this.state.songIndex - 1,
      songName : this.state.songArray[(this.state.songIndex - 1)].source,
      songTitle: this.state.songArray[(this.state.songIndex - 1)].title
     })
   }
    
  }
  
   playSong() {
  
  var myAudio = document.getElementById("myAudio");
  
    if (myAudio.paused) {
      myAudio.play();
      this.setState({
        playStatus : true
      })
    } else {
      myAudio.pause();
      this.setState({
        playStatus : false
      })
    }
   }
  
   
  render() {
 
    var trackName = this.state.songName;

    return (
      <div className="app animate" id="animate-area">
         <div className="audio-visualizer">
         <canvas id="canvas"></canvas> 
         <Link style={ this.state.playStatus ? { color:'black'} : {color: 'white'} }  to='/'><h1 className="music-title-link">ш​‌​‌ύs​‌Їc</h1></Link></div>
      
            <Player songName={this.state.songName} 
                title={this.state.songName}
                counterDown={this.counterDown}
                counterUp={this.counterUp}
                playSong={this.playSong}
                playStatus={this.state.playStatus}
                artist={[this.state.currentSongId].artist}
                songArray={this.state.songArray}
                img={this.state.albumImage}
                title={this.state.songTitle}
                artist={this.state.songArtist}
                songArray = {this.state.songArray}
                playStatus ={this.state. playStatus}
                /> 
        {React.cloneElement(this.props.children, { play: this.play, artists: this.state.artist })}
      </div>
    );
  }
}

class Player extends Component {
  
  componentDidMount() {
    var audio = this.refs.myAudio;
    // audio.src = "./wash.mp3"
    console.log("audio",  audio)
    audio.crossOrigin = "anonymous";
      var context = new AudioContext();
   
      var src = context.createMediaElementSource(audio);
      
      
      audio.onplay = function() {
        var files = audio.src;
        var analyser = context.createAnalyser();
    console.log(src)
        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = 200;
        var ctx = canvas.getContext("2d");
        
        src.connect(analyser);
        analyser.connect(context.destination);
    
        analyser.fftSize = 256;
    
        var bufferLength = analyser.frequencyBinCount;
        // console.log(bufferLength);
    
        var dataArray = new Uint8Array(bufferLength);
    
        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;
    
        var barWidth = (WIDTH / bufferLength) * 1.88;
        var barHeight;
        var x = 0;
    
        function renderFrame() {
          requestAnimationFrame(renderFrame);
  
          x = 0;
    
          analyser.getByteFrequencyData(dataArray);
    
          ctx.fillStyle = "#000";
          ctx.fillRect(0, 0, WIDTH, HEIGHT);
    
          for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            
            var r = barHeight + (25 * (i/bufferLength));
            var g = 250 * (i/bufferLength);
            var b = 50;
            // console.log(r,g,b)
    
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    
            x += barWidth + 1;
          }
        }
        audio.play();
        renderFrame();
      };
    }

render(){
  return (
    <div style={ this.props.songArray.length === 0 ? { display: 'none'} : {display: 'block'}}className="music-nav">
      <div className="circle-holder"> <img src="player-circle.svg" /> </div>
   <div className="now-playing">   <img src={`${this.props.img}.jpg`}  /> </div>
   <div className="current-song"> <p className="current">PLAYING CURRENT</p> <p> <strong>{this.props.title}</strong> <br /> {this.props.artist}</p></div>
   <button disabled={this.props.songArray.length === 0 ? true : false  } className="nav-left" onClick={this.props.counterDown}><img src="http://www.rx7.com/store/shopsite-images/en-CA/css/images/triangle-left.svg" /></button>
   <button  disabled={this.props.songArray.length === 0 ? true : false  } className="play" onClick={this.props.playSong}><img src="http://www.rx7.com/store/shopsite-images/en-CA/css/images/triangle-right.svg" /></button> 
   <button  disabled={this.props.songArray.length === 0 ? true : false  } className="nav-right" onClick={this.props.counterUp}><img src="http://www.rx7.com/store/shopsite-images/en-CA/css/images/triangle-right.svg" /></button>
     
    
   
        <audio autoplay={this.props. playStatus} ref="myAudio" id="myAudio" autoPlay src={`${this.props.songName}.mp3`} type="audio/mpeg" >
          </audio>
        <br/>   
    </div>
  )
}
}

export default App;

