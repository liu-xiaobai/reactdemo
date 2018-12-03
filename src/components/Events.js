import React from 'react';


class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'这是一个事件demo页',
            userName:'留小白',
            message:'一个消息信息',
            value:'初始值',
            keyCode:0
        }
        this.getUserName = this.getUserName.bind(this);
    }
    getMessage(){
        alert(this.state.message);
    }
    getUserName(){
        alert(this.state.userName);
    }
    getTitle=()=>{
        alert(this.state.title);
    }
    setTitle=()=>{
        this.setState({
            title:'这是一个事件demo页 被改变之后'
        });
    }
    setName(name){
        this.setState({
            userName:name
        })
    }
    getEvent=(e)=>{
        console.log(e);
        console.log(e.target);
        alert(e.target.getAttribute('tag'));
    }
    inputChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    getInputData=()=>{
        alert(this.state.value);
    }
    //通过ref获取节点的值
    inputRefChange=(e)=>{
        this.setState({
            value:this.refs.inputbox.value
        })
    }
    inputKeyUp=(e)=>{
        var code = e.keyCode;
        //console.log(e.keyCode);
        this.setState({
            keyCode:code
        })
        if(code == 13){
            alert("你刚敲击的是回车");
        }
    }
    changeValue=()=>{
        this.setState({
            value:'这是被改变的值'
        })
    }
    render(){
        return(
            <div>
                <div className='content-left'>
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.userName}</h3>
                    <button onClick={this.getMessage.bind(this)}>click事件触发第一种方式</button>
                    <br /><br /><br />
                    <button onClick={this.getUserName}>click事件触发第二种方式</button>
                    <br /><br /><br />
                    <button onClick={this.getTitle}>click事件触发第三种方式</button>
                    <br /><br /><br />
                    <button onClick={this.setTitle}>改变title文字</button>
                    <br /><br /><br />
                    <button onClick={this.setName.bind(this,'hello 小白')}>改变userName</button>
                </div>
                <div className='content-right'>
                    <h2>事件对象</h2>
                    <button tag='我是自定义属性' onClick={this.getEvent}>事件对象</button>

                    <h2>form表单事件</h2>
                    <input onChange={this.inputChange} />
                    <button onClick={this.getInputData}>获取input的值</button>
                    <br /><br /><br />
                    <input ref='inputbox' onChange={this.inputRefChange} />
                    <button onClick={this.getInputData}>获取input的值</button>
                    <h2>键盘事件</h2>
                    <input onKeyUp={this.inputKeyUp} />
                    <label>你当前敲击的键盘编号为：{this.state.keyCode}</label>
                    <br/>
                    <h2>双向数据绑定</h2>
                    <input value={this.state.value} onChange={this.inputChange} /><br/>
                    <label>{this.state.value}</label><br/>
                    <button onClick={this.changeValue}>改变input的值</button>
                </div>
            </div>
        )

    }

}
export default Events;