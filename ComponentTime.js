import React, { Component } from 'react'
//import './App.css';
 export class ComponentTime extends Component {
    constructor(){
        super()
        this.state={
           time:10,
           count:0
        }
    }
    componentDidMount(){
      document.title='Click-Me Game';
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time>0){
        this.setState({
      time:this.state.time-1
    });
    }

}
  render() {
    return (
      <div>
        
        <h1 Style="margin-top:30px">Click the animal picture as many times as you can in {this.state.time} wacky seconds!</h1>
        <img src='https://a.ltrbxd.com/resized/sm/upload/tk/8z/fn/pl/superman-1200-1200-675-675-crop-000000.jpg?v=baa1ed8433' height="500px" width="500px" onClick={()=>{
      
        if(this.state.time>0){
           this.setState({count:this.state.count+1})
        }
      }}/>
         {/* height="300px" width="300px" */}
         <br/>
        <h1>Score:{this.state.count}</h1>
        <br/>
        {this.state.time===0 &&
           <p id="enough">Enough!I can't beaten by you</p>
        }
        <button onClick={()=>{this.setState({time:10,count:0})}}>Restart</button>
      </div>
    )
  }
}
export default ComponentTime