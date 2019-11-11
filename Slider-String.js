import React from 'react';

const valuesArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

class SliderString extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value1: 0,
            value2: valuesArray.length-1,
            start: 0,
            end: valuesArray.length-1
        }
    }

    updateMin = (e) => {
        if (Number(e.target.value) >= this.state.value2) {
            let maxVal = this.state.value2;
            let newVal = Number(maxVal - 1);
            this.setState({ value1: newVal }, () => { })
            return;
        }
        else {
            this.setState({ value1: e.target.value }, () => { })
        }
    }

    updateMax = (e) => {
        if (Number(e.target.value) <= this.state.value1) {
            let minVal = this.state.value1;
            let newVal = 1 + Number(minVal);
            this.setState({ value2: newVal }, ()=>{})
            return;
        }
        else {
            this.setState({ value2: e.target.value }, ()=>{})

        }
    }

    render() {
        return (
            <div>
                <div className="slider">
                    <input onInput={this.updateMin} value={this.state.value1} min={this.state.start} max={this.state.end} step="1" type="range" />
                    <input value={this.state.value2} onInput={this.updateMax} min={this.state.start} max={this.state.end} step="1" type="range" />
                </div>
                <div className="label-container">
                    <span className="slider-label">{valuesArray[this.state.value1]}</span>
                    -
                    <span className="slider-label">{valuesArray[this.state.value2]}</span>
                </div>
            </div>
        );
    }
}

export default SliderString
