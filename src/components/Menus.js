/*菜单列表 */

import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[],
            domain:'http://a.itying.com/'
        };
    }
    //加载菜单
    loadMenus=()=>{
        var url = this.state.domain + 'api/productlist';
        Axios.get(url)
        .then((response)=>{
            //console.log(response);
            this.setState({
                list:response.data.result
            })
        })
        .catch(function(response){
            console.log(response);
        })
    }
    componentDidMount=()=>{
        this.loadMenus();
    }
    render() {
        return (
            <div>
            <header className='menus-title'>
                菜单
            </header>
            {
                this.state.list.map((value,key)=>{
                    return(
                        <div key={key} className='menus-content'>  
                            <p>{value.title}</p>
                            <ul>
                                {
                                    value.list.map((val,k)=>{
                                        return(
                                            <li key={k}>
                                            <Link to={`/menusinfo/${val._id}`}>
                                                
                                                    <img src={`${this.state.domain}${val.img_url}`} />
                                                    <span>{val.title}</span>
                                                    <span className='price'>{val.price}元</span>
                                                
                                            </Link>
                                            </li>
                                        )
                                    })
                                    
                                }
                            </ul>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}

export default Menus;