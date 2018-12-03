import React from 'react';
import '../assets/css/index.css';
import photo from '../assets/images/timg.jpeg';
import { timingSafeEqual } from 'crypto';


class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'图片的绑定以及数据循环方式',
            list1:["循环方式11111","循环方式222222","循环方式333333"],
            list2:[<h2>第一个h2</h2>,<h2>第二个h2</h2>,<h2>第三个h2</h2>],
            list3:[
                {title:'你好吗'},
                {title:'我很好'}
            ]
        }
    }
    render(){
        let listResult = this.state.list1.map(function(val,key){
            return(
                <li key={key}>{val}</li>
            )
        });
        return(
            <div className='news'>
                <h2>{this.state.title}</h2>
                <label>本地图片的定义方式一：</label>
                <img src={photo} />
                <br />
                <label>本地图片的定义方式二：</label>
                <img src={require('../assets/images/timg.jpeg')} />
                <br />
                <label>网络图片的定义方式：</label>
                <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543651712638&di=3b03b618635953785bd4642e2ad41919&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Da5074a1041fbfbedc8543e3c10999d43%2Faa64034f78f0f736506b972e0055b319ebc4130c.jpg' />
                <hr />
                {this.state.list2}
                <ul>
                    {listResult}
                </ul>
                <ul>
                    {
                        this.state.list3.map(function(val,key){
                            return (
                                <li key={key}>{val.title}</li>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }

}
export default News;