import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';

function scale (x: number) {
  return 2 ** x;
}

function App() {
  const isoValues = [3, 7, 12, 25, 50, 100, 200, 400, 800, 1600, 3200];
  const isoMarks = isoValues.map((value) => ({value, label: value.toString()}));
  const fstopVlaues = [ 1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32, 45, 64];
  const fstopMarks = fstopVlaues.map((value) => ({value, label:value.toString()}));
  const shutterSpeedValues = [1/200, 1/1000, 1/500, 1/250, 1/125, 1/60, 1/30, 1/15, 1/8, 1/4, 1/2, 1, 2, 4, 8, 15, 30];
  const shutterSpeedMarks = [
    {value: 1/200, label: '1/200'},
    {value: 1/1000, label: '1/1000'},
    {value: 1/500, label: '1/500'},
    {value: 1/250, label: '1/250'},
    {value: 1/125, label: '1/125'},
    {value: 1/60, label: '1/60'},
    {value: 1/30, label: '1/30'},
    {value: 1/15, label: '1/15'},
    {value: 1/8, label: '1/8'},
    {value: 1/4, label: '1/4'},
    {value: 1/2, label: '1/2'},
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 4, label: '4'},
    {value: 8, label: '8'},
    {value: 15, label: '15'},
    {value: 30, label: '30'},
  ]

  const [fStop, setFStop] = useState(16);
  const [iso, setIso] = useState(100);
  const [shutterSpeed, setShutterSpeed] = useState(1/125);
  const [gn, setGn] = useState(0);

  const handleFStopChange = (event: Event, newValue: number | number[]) => {
    setFStop(newValue as number);
  };
  const handleIsoChange = (event: Event, newValue: number | number[]) => {
    setIso(newValue as number);
  };
  const handleShutterSpeedChange = (event: Event, newValue: number | number[]) => {
    setShutterSpeed(newValue as number);
  };
  const handleGnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGn(Number(event.target.value));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        //Fstop, shutter speed, iso, GN, EV
        <div className="row">
          <div className="col-sm-12 CalculationDiv">
            <div className="row">
              <div className="col-xs-3 col-sm-2 col-md-4">Aperture</div>
              <div className="hidden-xs col-sm-2 col-md-2">
                <label id="FStopDisplay">F{fStop}</label>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-6">
                <Slider
                  className="slider"
                  id="FStop"
                  min={fstopVlaues[0]}
                  max={fstopVlaues[fstopVlaues.length - 1]}
                  step={null}
                  value={fStop}
                  onChange={handleFStopChange}
                  scale = {scale}
                  marks={fstopMarks}
                  aria-labelledby='non-linear-slider'
                  valueLabelDisplay='off'
                  //onChange={(value: Number) => setFStop(value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3 col-sm-2 col-md-4">Shutter Speed</div>
              <div className="hidden-xs col-sm-2 col-md-2">
                <label id="ShutterSpeedDisplay">{shutterSpeed}</label>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-6">
                <Slider
                  className="slider"
                  id="ShutterSpeed"
                  min={shutterSpeedValues[0]}
                  max={shutterSpeedValues[shutterSpeedValues.length - 1]}
                  step={null}
                  value={shutterSpeed}
                  scale = {scale}
                  onChange={handleShutterSpeedChange}
                  valueLabelDisplay='off'
                  marks={shutterSpeedMarks}
                  aria-labelledby='non-linear-slider'
                />
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-xs-3 col-sm-2 col-md-4">ISO</div>
              <div className="hidden-xs col-sm-2 col-md-2">
                <label id="IsoDisplay">{iso}</label>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-6">
                <Slider
                  className="slider"
                  id="Iso"
                  min = {isoValues[0]}
                  max = {isoValues[isoValues.length - 1]}
                  step={null}
                  value={iso}
                  scale = {scale}
                  onChange={handleIsoChange}
                  valueLabelDisplay='off'
                  marks={isoMarks}
                  aria-labelledby="non-linear-slider"

                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 CalculationDiv">
            <div className="row">
              <div className="col-xs-4">Flash Guide Number (&#64 ISO 100)</div>
              <div className="col-xs-2 ">
                <TextField
                  className="NumberDisplay"
                  id="GN"
                  value={gn}
                  type="number"
                  onChange={handleGnChange}
                />
              </div>
              <div className="col-xs-3">
                <label className="NumberDisplay" id="GNDisplayMeters">
                  none
                </label>
              </div>
              <div className="col-xs-3">
                <label className="NumberDisplay" id="GNDisplayFeet">
                  none
                </label>
              </div>
            </div>
            <div className="row">
              <div className="hidden-xs col-sm-2 col-md-2">Exposure Value</div>
              <div className="hidden-xs col-sm-2 col-md-2"></div>
              <div className="col-xs-12 col-sm-8 col-md-8 ExposureDiv">
                <label id="ev">0</label>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
};

export default App;
