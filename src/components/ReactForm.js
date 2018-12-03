import React from 'react';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citys: ['北京', '上海', '深圳', '广州'],
            userinfo: {
                name: '',
                sex: 1,
                city: '',
                hobby: [
                    { title: '吃饭', check: false },
                    { title: '睡觉', check: true },
                    { title: '打豆豆', check: true }
                ]
            }

        };
    }
    handelName = (e) => {
        var ifo = this.state.userinfo;
        ifo.name = e.target.value;
        this.setState({
            userinfo: ifo
        })
    }
    handelSex = (e) => {
        var ifo = this.state.userinfo;
        ifo.sex = e.target.value
        this.setState({
            userinfo: ifo
        })
    }
    handelCity = (e) => {
        var ifo = this.state.userinfo;
        ifo.city = e.target.value
        this.setState({
            userinfo: ifo
        })
    }
    handelHobby = (key) => {
        var ifo = this.state.userinfo;
        var hobby = ifo.hobby;
        hobby[key].check = !hobby[key].check;

        this.setState({
            userinfo: ifo
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userinfo.name, this.state.userinfo.sex, this.state.userinfo.city, this.state.userinfo.hobby);
    }

    render() {
        let cityList = this.state.citys.map(function (val, key) {
            return <option key={key}>{val}</option>
        });
        let hobbyList = this.state.userinfo.hobby.map((val, key) => {
            return (
                <span key={key}>
                    <input type='checkbox' checked={val.check} onChange={this.handelHobby.bind(this, key)} />{val.title}
                </span>
            )
        });
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <h2>Form表单提交</h2>
                    用户名：<input type='text' value={this.state.name} onChange={this.handelName} /><br /><br />
                    性  别：<input type='radio' value='1' checked={this.state.userinfo.sex == 1} onChange={this.handelSex} />男 &nbsp;&nbsp;
                        <input type='radio' value='2' checked={this.state.userinfo.sex == 2} onChange={this.handelSex} />女<br /><br />
                    居住城市：<select value={this.state.userinfo.city} onChange={this.handelCity}>
                        {cityList}
                    </select><br /><br />
                    爱好：{hobbyList}<br /><br />
                    <input type='submit' defaultValue='提交' />
                </form>
            </div>
        );
    }
}

export default ReactForm;