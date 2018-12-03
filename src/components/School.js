import React from 'react';
import Header from './Header';

class School extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg:'这是一个学校组件',
            title:'学校页面'
        };
    }
    run=()=>{
        alert('我是父组件的run方法');
    }
    getChildData=(data)=>{
        alert('这是子组件传过来的值：'+data);
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} run={this.run} soft={this}/>
                {this.state.msg}
            </div>
        );
    }
}

export default School;