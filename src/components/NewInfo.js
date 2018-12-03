import React,{Component} from 'react';
import Url from 'url';

class NewInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    //生命周期函数  组件加载完成获取传递参数
    componentDidMount(){
        //第一种：通过路由传递参数
        //console.log(this.props.match.params);

        //第二种：通过get方式传递参数
        console.log(this.props.location);
        console.log(Url.parse(this.props.location.search,true));
        var prams = Url.parse(this.props.location.search,true).query;
    }
    render() {
        return (
            <div>
                我是新闻详情组件
            </div>
        );
    }
}

export default NewInfo;