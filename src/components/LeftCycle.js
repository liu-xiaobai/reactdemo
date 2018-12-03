/**
 * React生命周期函数
 * 定义：组件加载之前、组件加载完成、以及组件更新数据、组件销毁触发的一系列方法。
 * 
 * 组件加载时候触发的函数
 * constructor 、componentWillMount、 render 、componentDidMount
 * 组件数据更新时候触发的函数
 * shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
 * 在父组件里改变props值的时候触发的函数
 * componentWillReceiveProps
 * 组件销毁时候触发的组件
 * componentWillUnmount
 */
import React,{Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        console.log('01构造函数');
        super(props);
        this.state = { 
            title:'生命周期函数'
         };
    }
    //组件将要加载时触发的生命周期函数
    componentWillMount(){
        console.log('02组件将要加载');
    }
    //组件加载完成触发的生命周期函数
    componentDidMount(){
        console.log('04组件加载完成');
    }

    //是否要更新数据，return true才执行更新操作
    shouldComponentUpdate(nextProps,nextState){
        console.log('01是否要更新数据');
        console.log('props改变后的值',nextProps);
        console.log('state改变后的值',nextState);
        return true;
    }
    //数据将要被更新
    componentWillUpdate(){
        console.log('02将要更新数据');
    }
    //数据更新完成
    componentDidUpdate(){
        console.log('04数据更新完成');
    }
    //父子组件传值，父组件改变了props的值触发的方法
    componentWillReceiveProps(){
        console.log('props的值改变了');
    }
    //组件被销毁时触发的方法
    componentWillUnmount(){
        console.log('组件被销毁了');
    }

    setData=()=>{
        this.setState({
            title:'这是更新后的标题'
        });
    }

    //数据加载中
    render() {
        console.log('03加载数据');
        return (
            <div>
                <h2>标题：{this.state.title}</h2>
                <h2>名字：我是父级组件传过来的名字--{this.props.name}</h2>
                <br /><br />
                <button onClick={this.setData}>更新title</button>
            </div>
        );
    }
}

export default LifeCycle;