import React from 'react';

import '../assets/css/index.css';
import Storage from '../model/storage';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: '学习英语',
                    check: false
                },
                {
                    title: '学习粤语',
                    check: true
                },
                {
                    title: '学习sql',
                    check: false
                },
                {
                    title: '学习react',
                    check: true
                }
            ]
        };
    }
    //生命周期函数，页面加载就会触发
    componentDidMount(){
        //获取缓存数据
        var todoList = Storage.get('todolist');
        if(todoList){
            this.setState({
                list:todoList
            });
        }
    }


    //添加数据
    addData = (e) => {
        //回车添加数据
        if (e.keyCode == 13) {
            var til = this.refs.todoTitle.value;
            var list = this.state.list;
            var item = { title: til, check: false };
            list.push(item);
            this.refs.todoTitle.value = '';
            this.setState({
                list: list
            });
            //list缓存到本地
            Storage.set('todolist',list);
        }
    }
    removeData = (key) => {
        var list = this.state.list;
        list.splice(key, 1);
        this.setState({
            list: list
        });
        //list缓存到本地
        Storage.set('todolist',list);
    }
    changeData = (key) => {
        var list = this.state.list;
        list[key].check = !list[key].check;
        this.setState({
            list: list
        });
        //list缓存到本地
        Storage.set('todolist',list);
    }
    render() {
        var waitData = this.state.list.map((val, key) => {
            if (!val.check) {
                return (
                    <li key={key}>
                        <input type='checkbox' checked={val.check} onChange={this.changeData.bind(this, key)} />
                        {val.title}<button onClick={this.removeData.bind(this, key)}>刪除</button>
                    </li>
                )
            }
        });
        // 注意this的指向问题
        var doneData = this.state.list.map((val, key) => {
            if (val.check) {
                return (
                    <li key={key}>
                        <input type='checkbox' checked={val.check} onChange={this.changeData.bind(this, key)} />
                        {val.title}<button onClick={this.removeData.bind(this, key)}>刪除</button>
                    </li>
                )
            }
        });
        return (
            <div>
                <header className='todo-title'>TodoList:
                <input ref="todoTitle" onKeyUp={this.addData} />
                </header>
                <h2>代办事项</h2>
                <ul>
                    {waitData}
                </ul>
                <h2>已完成事项</h2>
                <ul>
                    {doneData}
                </ul>
            </div>
        );
    }
}

export default TodoList;