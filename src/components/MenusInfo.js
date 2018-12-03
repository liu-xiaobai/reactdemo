import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class MenusInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{
                img_url:'1111.jpg'
            },
            domain:'http://a.itying.com/'
         };
    }
    //加载菜单
    loadSingle=(id)=>{
        var url = this.state.domain + 'api/productcontent?id='+id;
        Axios.get(url)
        .then((response)=>{
            console.log(response);
            this.setState({
                data:response.data.result[0]
            })
        })
        .catch(function(response){
            console.log(response);
        })
    }
    componentWillMount=()=>{
        var id = this.props.match.params.id;
        this.loadSingle(id);
    }
    render() {
        return (
            <div>
                <Link to='/menus'>返回</Link>
                <div className='menus-info'>
                    <img src={`${this.state.domain}${this.state.data.img_url}`}></img>
                    <h3>{this.state.data.title}</h3>
                    {/* 关于react解析html的方式 */}
                    <div dangerouslySetInnerHTML={{__html:this.state.data.content}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default MenusInfo;