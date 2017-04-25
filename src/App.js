import React, { Component } from 'react';
import * as bodymovin       from '../assets/bodymovin';
import Parity               from '../assets/enroute.json';
import Parity2              from '../assets/parity.json';
import Abundance            from '../assets/Abundance.json';
import Grow                 from '../assets/grow.json';
import './App.css';

const leftPosition = ["15px", "60px", "115px"];
let   positionSize = [{width: "37.5px", height: '37.5px'}, {width: "25px", height: '25px'}, {width: "25px", height: '25px'}]
let   position = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      sendState: "Send",
      styleAnimText: null,
      styleBottom: null,
      styleTop: null,
      styleBlob1: null,
      styleBlob2: null,
      styleBlob3: null
    };
  }

  componentDidMount() {
    const self = this;
    let animation2 = this.refs.animation2;
    let animation3 = this.refs.animation3;
    let animation4 = this.refs.animation4;

    setTimeout(() => {
      self.pAnim = bodymovin.loadAnimation({
        container: animation2, // the dom element
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Parity2 // the animation data
      });

      self.pAnim = bodymovin.loadAnimation({
        container: animation3, // the dom element
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: Abundance // the animation data
      });
    }, 400);
    setTimeout(() => {
      self.pAnim = bodymovin.loadAnimation({
        container: animation4, // the dom element
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: Grow // the animation data
      });
    }, 700);
    setTimeout(() => {
      this.setState({
        styleAnimText: {
          opacity: "1",
          transform: "translateY(0rem)"
        }
      });
    }, 2500);
  }

  _onSend = () => {
    const self = this;
    const { onClick } = this.props;

    if (onClick) { onClick(); }

    this._setAnim();

    self.setState({
      styleBottom: {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        color: "#424242",
        pointerEvents: "none",
        cursor: "default"
      },
      styleTop: {
        height: "7rem",
        top: "-7rem",
        borderBottom: "1px",
        borderWidth: "1px"
      },
      styleBlob1: {
        animation: "blob-one cubic-bezier(0.570, 0.215, 0.175, 1.300) 2s infinite"
      },
      styleBlob2: {
        animation: "blob-two cubic-bezier(0.570, 0.215, 0.175, 1.300) 2s infinite"
      },
      styleBlob3: {
        animation: "blob-three cubic-bezier(0.570, 0.215, 0.175, 1.300) 2s infinite"
      },
    });

    setTimeout(() => {
      self.setState({
        styleBottom: {
          pointerEvents: "none",
          cursor: "default"
        },
        sendState: "Sucess",
        styleTop: null,
        styleBlob1: null,
        styleBlob2: null,
        styleBlob3: null
      });
      let animation = this.refs.animation;
      animation.innerHTML = '';
    }, 8000);
  }

  _setAnim() {
    let animation = this.refs.animation;

    this.anim = bodymovin.loadAnimation({
      container: animation, // the dom element
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: Parity // the animation data
    });
    setTimeout(() => {
      this.anim.play();
    }, 700);
  }

  /* counters */

  rightClick = () => {
    if (position >= 2) {
      return;
    } else {
      position++;
      positionSize = positionSize.map((pos, i) => {
        if (i === position) {
          return {width: "37.5px", height: '37.5px'};
        } else {
          return {width: "25px", height: '25px'};
        }
      });
    }
    this.setState({
      step1: positionSize[0],
      step2: positionSize[1],
      step3: positionSize[2],
      ballMotion: {
        left: leftPosition[position]
      }
    });
  }
  leftClick = () => {
    if (position <= 0) {
      return;
    } else {
      position--;
      positionSize = positionSize.map((pos, i) => {
        if (i === position) {
          return {width: "37.5px", height: '37.5px'};
        } else {
          return {width: "25px", height: '25px'};
        }
      });
    }
    this.setState({
      step1: positionSize[0],
      step2: positionSize[1],
      step3: positionSize[2],
      ballMotion: {
        left: leftPosition[position]
      }
    });
  }

  render() {
    const {
      sendState,
      styleAnimText,
      styleBottom,
      styleTop,
      styleBlob1,
      styleBlob2,
      styleBlob3,
      step1,
      step2,
      step3,
      ballMotion
    } = this.state;

    return (
      <div className="App">

        <div className="header">
        </div>

        <div className="set-1">
          <div id="animation3">
            <div className="anim-loader-3" ref="animation3" />
          </div>
          <div id="animation4">
            <div className="anim-loader-4" ref="animation4" />
          </div>
          <div style={styleAnimText} id="animation-text">
            <p>
              <h3 className="inline">W</h3>ith facebook's api, as your friends join in the parity wallet, your connections grow automatically. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </div>
        </div>

        <div className="typography"><h3>Typography</h3></div>

        <div className="headers-font">
          <div className="heads">
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
          </div>
          <div className="para">
            <p className="inline"><h3 className="inline">W</h3>hile the <b>golden ratio (1:1.618)</b> is often a good method of creating ratios, the rate of increase is too rapid for font-sizing. However, there is another organic structure we can turn to that still resonates with the user experience. I'm speaking of the <b>Modular scale</b>. If you've ever studied music theory, this will make sense to you. Wavelengths of each sequential note in a scale changes at a specific rate. The <i>Perfect Fourth (1:1.333)</i> is a good example of a progression that yields smaller, more realistic intervals.</p>
            <p><h3 className="inline">L</h3>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </div>

        <div className="med-loader">Send Button</div>
        <div className="send-success">
          <div className="container">
            <div id="top" style={styleTop} >
              <div id="animation" ref="animation" />
            </div>
            <div className="animate-container">
              <div id="blob-1" style={styleBlob1} />
              <div id="blob-2" style={styleBlob2} />
              <div id="blob-3" style={styleBlob3} />
              <div id="bottom" style={styleBottom} onClick={this._onSend}>
                {sendState}
              </div>
            </div>
          </div>
        </div>

        <div className="step-progress">
          <div className="ball-motion" style={ballMotion} />
          <div className="balls-container">
            <div className="ball" id="step-1" style={step1} />
          </div>
          <div className="balls-container">
            <div className="ball" id="step-2" style={step2} />
          </div>
          <div className="balls-container">
            <div className="ball" id="step-3" style={step3} />
          </div>
        </div>

        <div>
          <div className="step-progress">
            <div className="balls-container">
              <div className="ball-content">1</div>
            </div>
            <div className="balls-container">
              <div className="ball-content">2</div>
            </div>
            <div className="balls-container">
              <div className="ball-content">3</div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <div className="button" onClick={this.leftClick}>Previous</div>
          <div className="button" onClick={this.rightClick}>Next</div>
        </div>

        <div className="med-anim">
          <div className="med-loader">medium sized loading screen</div>
          <div id="animation2">
            <div className="anim-loader" ref="animation2" />
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -12" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default App;
