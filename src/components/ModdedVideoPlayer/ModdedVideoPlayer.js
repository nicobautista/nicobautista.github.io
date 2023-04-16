import React from "react";
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import Control from "../Control/Control";
import "./ModdedVideoPlayer.css";

class ModdedVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      muted: false,
      volume: 0.5,
      played: 0,
      seeking: false,
      Buffer: true,
      count: 0,
    };
    this.playPauseHandler = this.playPauseHandler.bind(this);
    this.progressHandler = this.progressHandler.bind(this);
    this.seekHandler = this.seekHandler.bind(this);
    this.seekMouseUpHandler = this.seekMouseUpHandler.bind(this);
    this.volumeChangeHandler = this.volumeChangeHandler.bind(this);
    this.volumeSeekUpHandler = this.volumeSeekUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.muteHandler = this.muteHandler.bind(this);
    this.videoPlayerRef = React.createRef(null);
    this.controlRef = React.createRef(null);
  }

  pauseVideo() {
    this.setState({ playing: false });
  }

  mouseMoveHandler() {
    this.controlRef.current.style.visibility = "visible";
    this.setState({ count: 0 });
  }

  volumeChangeHandler(e, value) {
    const newVolume = parseFloat(value) / 100;
    this.setState({ volume: newVolume });
    this.setState({ muted: Number(newVolume) === 0 });
  }

  volumeSeekUpHandler(e, value) {
    const newVolume = parseFloat(value) / 100;
    this.setState({ volume: newVolume });
    this.setState({ muted: newVolume === 0 });
  }

  playPauseHandler() {
    this.setState({ playing: !this.state.playing });
  }

  progressHandler(progress_state) {
    if (parseInt(this.state.count) > 1) {
      this.controlRef.current.style.visibility = "hidden";
    } else if (this.controlRef.current.style.visibility === "visible") {
      this.setState({ count: this.state.count + 1 });
    }
    if (!this.state.seeking) {
      this.setState({ played: progress_state.played });
    }
  }

  seekHandler(e, value) {
    this.setState({ played: parseFloat(value) / 100 });
  }

  seekMouseUpHandler(e, value) {
    this.setState({ seeking: false });
    this.videoPlayerRef.current.seekTo(value / 100);
  }

  muteHandler() {
    this.setState({ muted: !this.state.muted });
  }

  render() {
    return (
      <div className="video_container">
        <Container className="material_video_container">
          <div className="player__wrapper" onMouseOver={this.mouseMoveHandler}>
            <ReactPlayer
              ref={this.videoPlayerRef}
              className="player"
              url={require(`../../assests/images/${this.props.elementSrc}`)}
              width="100%"
              height="auto"
              playing={this.state.playing}
              muted={this.state.muted}
              volume={this.state.volume}
              onProgress={this.progressHandler}
            />
            <Control
              theme={this.props.theme}
              controlRef={this.controlRef}
              mute={this.state.muted}
              playing={this.state.playing}
              played={this.state.played}
              volume={this.state.volume}
              onMute={this.muteHandler}
              onPlayPause={this.playPauseHandler}
              onSeek={this.seekHandler}
              onSeekMouseUp={this.seekMouseUpHandler}
              onVolumeChangeHandler={this.volumeChangeHandler}
              onVolumeSeekUp={this.volumeSeekUpHandler}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default ModdedVideoPlayer;
