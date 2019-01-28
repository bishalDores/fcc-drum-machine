import React, { Component } from 'react';
import Drumpad from './Drumpad';
import './App.css';

const data = [
    { id: 'Heater-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { id: 'Heater-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { id: 'Heater-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { id: 'Heater-4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { id: 'Clap', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { id: 'Open HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { id: 'Kick-n\'-Hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { id: 'Closed HH', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'  },
]

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:'Kit Name'
        }
    }
    handleDisplay = (display) =>{
        this.setState({display});
    }
    render() {
        return (
            <div id={'drum-machine'}>
                <div className={'main'}>
                <div id={'display'}>{this.state.display}</div>
                <div className={'drum-pads'}>
                {data.map((drum) => {
                    return(
                        <Drumpad
                            key={drum.id}
                            id={drum.id}
                            letter={drum.letter}
                            src={drum.src}
                            handleDisplay={this.handleDisplay}
                        />
                    )

                })}
                </div>
                </div>
            </div>
        );
    }
}

export default App;
