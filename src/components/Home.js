import React from 'react';
import '../assets/css/Home.css'


class Home extends React.Component{

    constructor(props){
        super(props);

        this.state={
            title:'基础组件创建以及class、for、style定义',
            msg:'我是一个home组件',
            color:'red',
            style:{
                color:'red',
                fontSize:'24px'
            }
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <br />
                <h2 className={this.state.color}>class的定义</h2>
                <br />
                <label htmlFor='checkRadio'>for的定义差别</label>
                <input id='checkRadio' type='radio' />
                <br/>
                <h2 style={this.state.style}>style的不同定义</h2>
            </div>
        )
    }

}
export default Home;