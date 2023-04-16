import React from "react";
import { withStyles, Slider } from "@material-ui/core";
import {
  PauseRounded,
  PlayArrowRounded,
  VolumeUpRounded,
  VolumeOffRounded,
} from "@material-ui/icons";
import "./Control.css";

const PrettoSlider = withStyles({
  root: {
    height: "20px",
    color: "#586069",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#5C9DFF",
    border: "2px solid currentColor",
    marginTop: -3,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
    width: "100%",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

export default function Control(props) {
  return (
    <div className="control_Container" ref={props.controlRef}>
      <div className="top_container"></div>
      <div className="mid__container">
        <div className="icon__btn" onClick={props.onPlayPause}>
          {props.playing ? (
            <PauseRounded
              fontSize="large"
              style={{ transform: "scale(3.5)" }}
            />
          ) : (
            <PlayArrowRounded
              fontSize="large"
              style={{ transform: "scale(3.5)" }}
            />
          )}{" "}
        </div>
      </div>
      <div className="bottom__container">
        <div className="slider__container">
          <PrettoSlider
            min={0}
            max={100}
            value={props.played * 100}
            onChange={props.onSeek}
            onChangeCommitted={props.onSeekMouseUp}
          />
        </div>
        <div className="control__box">
          <div className="inner__controls">
            <div className="icon__btn" onClick={props.onPlayPause}>
              {props.playing ? (
                <PauseRounded fontSize="large" />
              ) : (
                <PlayArrowRounded fontSize="large" />
              )}{" "}
            </div>
            <div className="icon__btn" onClick={props.onMute}>
              {props.mute ? (
                <VolumeOffRounded fontSize="large" />
              ) : (
                <VolumeUpRounded fontSize="large" />
              )}
            </div>

            <Slider
              value={props.volume * 100}
              onChange={props.onVolumeChangeHandler}
              onChangeCommitted={props.onVolumeSeekUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
