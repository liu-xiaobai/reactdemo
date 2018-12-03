import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个头部组件',
            title:''
         };
    }
    sendData=()=>{
        alert('我是子组件的run方法');
    }
    getParentMsg=()=>{
        //获取传递过来的整个父级对象里的msg
        alert(this.props.soft.state.msg);
    }
    //获取传递整个父级对象中的方法
    getParentFun=()=>{
        this.props.soft.parentTips();
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <h2>{this.props.title}</h2>
                <h2>{this.props.defaultName}</h2>
                <br />
                <button onClick={this.props.run}>获取父组件的run方法</button>
                <br /><br />
                <button onClick={this.getParentMsg}>获取整个父级组件</button>
                <br /><br />
                <button onClick={this.getParentFun}>获取整个父级组件中的parentTips方法</button>
                <br /><br />
                <button onClick={this.props.soft.getChildData.bind(this,'啦啦啦')}>子组件给父组件传值</button>
            </div>
        );
    }
}
//默认传递参数值   如果父组件调动子组件不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Header.defaultProps={
    title:'标题',
    defaultName:'留小白',
    age:29
}
//定义父组件给子组件传值的类型
Header.propTypes = {
    age:PropTypes.number
}

export default Header;