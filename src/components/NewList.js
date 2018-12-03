import React,{Component} from 'react';
import { Link } from "react-router-dom";

class NewList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {nid:1,title:'我是第一条新闻'},
                {nid:2,title:'我是第二条新闻'},
                {nid:3,title:'我是第三条新闻'},
                {nid:4,title:'我是第四条新闻'}
            ]
         };
    }
    render() {
        return (
            <div>
                <h2>
                    我是新闻列表组件
                    <ul>
                        {
                            this.state.list.map((value,key)=>{
                                return(
                                    <li key={key}>
                                    {/* 采用es6模板引擎方式拼接url 第一种：通过路由传递参数*/}
                                    {/* <Link to={`/newinfo/${value.nid}`}>{value.title}</Link> */}

                                    {/* 第二种：通过get方式传递参数 */}
                                    <Link to={`/newinfo?nid=${value.nid}`}>{value.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </h2>
            </div>
        );
    }
}

export default NewList;