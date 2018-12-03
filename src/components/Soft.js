/* 
父组件给子组件传值
1、在调用子组件的时候定义一个属性 例：<Header title=‘资料页面’ />
2、子组件里面 this.props.title 获取


父组件主动获取子组件数据
1、子组件定义ref值，父组件调用子组件的ref值 <Header  ref='header' />
2、通过this.refs.header 获取整个子组件实例 （dom(组件)加载完成以后获取）
*/

import React from 'react';
import Header from './Header';



class Soft extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是资料页组件',
            title : '资料页面',
            age:29
         };
    }
    run=()=>{
        alert('我是父组件的run方法');
    }

    
    parentTips=()=>{
        alert('我是父级组卷里的parentTips方法');
    }
    
    getChildData=(data)=>{
        alert('这是子组件传过来的值：'+data);
    }
    getChildByRef=()=>{
        //子组件定义ref
        //父组件 this.refs.子组件的ref
        alert(this.refs.header.state.msg);
    }
    getChildRun=()=>{
        this.refs.header.sendData();
    }
    render() {
        return (
            <div>
                <Header ref='header' title={this.state.title} run={this.run} soft={this} age={this.state.age} />
                <hr />
                {this.state.msg}
                <br /><br />
                <button onClick={this.getChildByRef}>调用子组件的数据</button>
                <br /><br />
                <button onClick={this.getChildRun}>调用header组件的run方法</button>
            </div>
        );
    }
}

export default Soft;