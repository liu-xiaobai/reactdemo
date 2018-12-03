/**
 * React获取服务器api数据
 * 第一种：axios
 * 1、安装axios    npm install axios --save / cnpm install axios --save 注释：--save 表示引入文件会写入package.json中，他人在其他地方打开你的项目时自动引入包
 * 2、在哪里使用直接引入  import Axios from 'axios'
 * 3、看官方文档    https://www.npmjs.com/package/axios
 * 第二种：fetch-jsonp
 * 1、安装fetch-jsonp    npm install fetch-jsonp --save / cnpm install fetch-jsonp 
 * 2、在哪里使用直接引入  import fetchJsonp from 'fetch-jsonp'
 * 3、看官方文档    https://www.npmjs.com/package/fetch-jsonp
 * 也可用其他方法  或者自己封装请求方法
 */
import React, { Component } from 'react';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

class ApiRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            listJsonp: []
        };
    }
    getData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
            .then((response) => {
                //注意this的指向
                this.setState({
                    list: response.data.result
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getJsonpData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)
            .then(function (response) {
                return response.json()
            }).then((json)=> {
                console.log(json);
                //注意this的指向
                this.setState({
                    listJsonp: json.result
                })
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    render() {
        var jsonList = this.state.list.map((value, key) => {
            return (
                <li key={key}>{value.title}</li>
            )
        });
        var jsonpList = this.state.listJsonp.map((value, key) => {
            return (
                <li key={key}>{value.title}</li>
            )
        });
        return (
            <div>
                <div className='content-left'>
                    <h2>Axios 获取服务器数据</h2>
                    <button onClick={this.getData}>获取数据</button>
                    <ul>
                        {jsonList}
                    </ul>
                </div>
                <div className='content-right'>
                    <h2>FetchJsonp 获取服务器数据</h2>
                    <button onClick={this.getJsonpData}>获取数据</button>
                    <ul>
                        {jsonpList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ApiRequest;