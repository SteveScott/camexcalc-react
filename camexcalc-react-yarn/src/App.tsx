import React {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSlider from 'react-slider';

function App() {
  const [fStop, setFStop] = useState(4);
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
                <ReactSlider
                  className="slider"
                  thumbClassName="thumb"
                  trackClassName="track"
                  min={0}
                  max={12}
                  step={1}
                  value={fStop}
                  onChange={(value) => setFStop(value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3 col-sm-2 col-md-4">Shutter Speed</div>
              <div className="hidden-xs col-sm-2 col-md-2">
                <label id="ShutterSpeedDisplay">1:125</label>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-6">
                <input
                  id="ShutterSpeed"
                  data-slider-id="ShutterSpeed"
                  asp-for="ShutterSpeed"
                  type="text"
                  data-slider-handle="custom"
                  data-slider-min="0"
                  data-slider-max="20"
                  data-slider-step="1"
                  data-slider-value="0"
                  className="slider"
                />
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-xs-3 col-sm-2 col-md-4">ISO</div>
              <div className="hidden-xs col-sm-2 col-md-2">
                <label id="IsoDisplay">100</label>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-6">
                <input
                  id="Iso"
                  data-slider-id="Iso"
                  asp-for="Iso"
                  type="text"
                  data-slider-handle="custom"
                  data-slider-min="0"
                  data-slider-max="7"
                  data-slider-step="1"
                  data-slider-value="2"
                  className="slider"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 CalculationDiv">
            <div className="row">
              <div className="col-xs-4">Flash Guide Number (&#64 ISO 100)</div>
              <div className="col-xs-2 ">
                <input
                  className="NumberDisplay"
                  id="GN"
                  value="0"
                  type="number"
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
}

export default App;
