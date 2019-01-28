import React, { Component } from 'react';


class Drumpad extends Component{


    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
        window.focus();

    }

    handleKeyDown = (e)=>{
        if( e.keyCode === this.props.letter.charCodeAt()){
             this.audio.play();
             this.audio.currentTime = 0;
             this.props.handleDisplay(this.props.id);
            document.getElementById(`${this.props.id}`).classList.add('playing');
        }
    }

    handleKeyUp = (e)=>{
        if( e.keyCode === this.props.letter.charCodeAt()){
            document.getElementById(`${this.props.id}`).classList.remove('playing');
        }
    }

    handleClick = () =>{
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
        document.getElementById(`${this.props.id}`).classList.add('playing');
    }
    clickRelease = () =>{
        document.getElementById(`${this.props.id}`).classList.remove('playing');
    }

    render(){

        return(
            <div className={'drum-pad'} id={this.props.id} onMouseDown={this.handleClick} onMouseUp={this.clickRelease}>
                <p>{this.props.letter}</p>
                <audio
                    ref={ref=>this.audio = ref}
                    className={'clip'}
                    src={this.props.src}
                    id={this.props.letter}>
                </audio>
            </div>
        )
    }
}
export default Drumpad;