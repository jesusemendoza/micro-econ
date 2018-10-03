import React, { Component } from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
  } from 'react-vis';

  import './_ppf.scss'

class PPF extends Component {
    constructor(props){
      super(props)
      this.state = {
        label1: 'Potatoes(oz)',
        label1M1: 0,
        label1M2: -0.25,
        label1X1 : 0,
        label1Y1 : 8,
        label1X2 : 32,
        label1Y2 : 0,
        label2: 'Meat(oz)',
        label2M1: -2,
        label2M2: -0.5,
        label2X1 : 0,
        label2Y1 : 24,
        label2X2 : 48,
        label2Y2 : 0,
      }
    }
    calculateSlope = (x1,y1,x2,y2) => {
        const m1 = ((x2-x1)/(y2-y1))
        const m2 = ((y2-y1)/(x2-x1))
        return {m1, m2}
    }
    setSlopes = () => {
      const {
          label1X1,
          label1Y1,
          label1X2,
          label1Y2,
          label2X1,
          label2Y1,
          label2X2,
          label2Y2,
        } = this.state
      let label1Slopes = this.calculateSlope(label1X1,label1Y1,label1X2,label1Y2)
      let label2Slopes = this.calculateSlope(label2X1,label2Y1,label2X2,label2Y2)
      console.log(label1Slopes, label2Slopes)
      this.setState({
        label1M1: label1Slopes.m1,
        label1M2: label1Slopes.m2,
        label2M1: label2Slopes.m1,
        label2M2: label2Slopes.m2,
      })
    }
    onChange = (e) => {
      const {id, value} = e.target;
      console.log(e.target)
      this.setState({ [id] : value})
    }
    componentWillMount() {
      this.setSlopes();
    }
    render() {
      let { 
        label1,
        label1M1,
        label1M2,
        label1X1,
        label1Y1,
        label1X2,
        label1Y2,
        label2,
        label2M1,
        label2M2,
        label2X1,
        label2Y1,
        label2X2,
        label2Y2,
      } = this.state;

      return (
        <div className="ppf-container">
          <div className="graph-container">
            <XYPlot
            margin={{top: 10, right: 10, left: 40, bottom: 40}}
            width={500}
            height={500}
            >
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis orientation="bottom" title={label1} />
            <YAxis orientation="left" title={label2} />
            <LineSeries
              data={[
                {x: label1X1, y: label1Y1},
                {x: label1X2, y: label1Y2},
              ]}
            />
            <LineSeries
              data={[
                {x: 0, y: 24},
                {x: 48, y: 0},
              ]}
            />
          </XYPlot>
          </div>
          <div className="selector-container">
              <div className="selector-title"><p>PPF</p></div>
              <div className="selector-inner-container">
                <div className="selector-column-container">
                    <div className="selector-column">
                      <p>X-Axis Label:</p>  
                      <input
                        id="label1"
                        value={label1}
                        onChange={(e) => this.onChange(e)}
                      ></input>
                    </div>
                    <div className="selector-column">
                      <p>Initial Point:</p>
                      <div className="four-row-column">  
                        <p>X:</p>
                        <input id="label1X1" onChange={e => this.onChange(e)} value={label1X1}></input>
                        <p>Y:</p>
                        <input id="label1Y1" onChange={e => this.onChange(e)} value={label1Y1}></input>
                      </div>  
                    </div>
                    <div className="selector-column">
                      <p>Second Point:</p>
                      <div className="four-row-column">  
                      <p>X:</p>
                      <input id="label1X2" onChange={e => this.onChange(e)} value={label1X2}></input>
                      <p>Y:</p>
                      <input id="label1Y2" onChange={e => this.onChange(e)} value={label1Y2}></input>
                      </div>  
                    </div>
                    <div className="selector-column">
                      <p>Slope:</p>
                      <div className="two-row-column">  
                        <p>{`${label1} to ${label2}`}</p><p>{label1M1}</p>
                      </div>
                      <div className="two-row-column">  
                        <p>{`${label2} to ${label1}`}</p><p>{label1M2}</p>
                      </div>    
                    </div>
                    <div className="selector-column">
                      <div className="two-row-column">  
                        <p>Comparative Advantage</p><p>Potatoes</p>
                      </div>
                    </div>
                </div>
                <div className="selector-column-container">
                    <div className="selector-column">
                      <p>Y-Axis Label:</p>  
                      <input
                        id="label2"
                        value={label2}
                        onChange={(e) => this.onChange(e)}
                      ></input>
                    </div>
                    <div className="selector-column">
                      <p>Initial Point:</p>
                      <div className="four-row-column">  
                        <p>X:</p>
                        <input id="label2X1" onChange={e => this.onChange(e)} value={label2X1}></input>
                        <p>Y:</p>
                        <input id="label2Y1" onChange={e => this.onChange(e)} value={label2Y1}></input>
                      </div>  
                    </div>
                    <div className="selector-column">
                      <p>Second Point:</p>
                      <div className="four-row-column">  
                      <p>X:</p>
                      <input id="label2X2" onChange={e => this.onChange(e)} value={label2X2}></input>
                      <p>Y:</p>
                      <input id="label2Y2" onChange={e => this.onChange(e)} value={label2Y2}></input>
                      </div>  
                    </div>
                    <div className="selector-column">
                      <p>Slope:</p>
                      <div className="two-row-column">  
                        <p>{`${label1} to ${label2}`}</p><p>{label2M1}</p>
                      </div>
                      <div className="two-row-column">  
                        <p>{`${label2} to ${label1}`}</p><p>{label2M2}</p>
                      </div>    
                    </div>
                    <div className="selector-column">
                      <div className="two-row-column">  
                        <p>Comparative Advantage</p><p>Potatoes</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="selector-title">
              <button onClick={()=> this.setSlopes()} >Calculate Slopes</button>
              </div>
          </div>
        </div>
      );
    }
  }
  
  export default PPF;