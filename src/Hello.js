import React from 'react';
import logo from './logo.svg';
import Scecond from "./components/Scecond"
import './App.css';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { selector } from 'postcss-selector-parser';
import { Router, Route, Link } from "react-router-dom"
//函数式组件
// function Hello() {
//     return (
//       <div className="pname">hello word</div>
//     )
// }
//类组件
// class Hello extends React.Component{
//     render(){
//         return <div className="pname">hello word</div>
//     }
// }



//组合组件
function Word(props) {
    return <div className={props.color}>hello,{props.name}</div>
}



//函数式时间计数
// function Time(props) {
//     return (
//         <div className="time">现在是:{props.data.toLocaleTimeString()}</div>
//     )
// }

//类式时间计数
class Time extends React.Component {
    static color = "黑色"
    constructor() {
        super()
        this.color1 = "白色"
    }
    render() {
        return (
            <div className="time">
                现在是:{this.props.data.toLocaleTimeString()}
                <p>我是{this.color1}</p>
                <p>我是{Time.color}</p>
            </div>
        )
    }
    componentDidMount() {
        console.log("dom加载完啦")
    }
    componentWillUnmount() {
        console.log("要离开咯")
    }
}

//使用map渲染多个组件   列表渲染组件
class Modes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const list = [1, 2, 3, 4, 5]
        const divList = list.map((item) => <div key={item}>{item}</div>)
        return (
            divList
        )
    }
}

//受控组件
class Inputs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name1: "王五",
            name2: "赵六",
            selects: "lime"
        }
    }
    onchanges(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            // console.log(this.state.name)
        })
    }
    selectChange(event) {
        this.setState({
            selects: event.target.value
        }, () => {
            console.log(this.state.selects)
        })
    }
    render() {
        return (
            <>
                <input name="name1" value={this.state.name1} onChange={this.onchanges.bind(this)} />
                <input name="name2" value={this.state.name2} onChange={this.onchanges.bind(this)} />
                <select value={this.state.selects} onChange={this.selectChange.bind(this)}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </>
        )
    }
}


//非受控组件
class Ipuutf extends React.Component {
    constructor(props) {
        super(props)
        this.names = ""
    }
    render() {
        return (
            <input ref={(input) => this.input = input} />
        )
    }
}


//refs&dom
class Refss extends React.Component {
    constructor() {
        super()
        this.inputs = React.createRef();
    }
    componentDidMount() {
        // 页面dom加载完毕就执行获取焦点
        this.inputs.current.focus()
        // console.log(this.inputs.current)
    }
    render() {
        return (
            <input ref={this.inputs} />
        )
    }
}


//包含关系
function Bord(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
function Father() {
    return (
        <Bord>
            <div>hellow word</div>
        </Bord>
    )
}

//组合关系
function Bords(props) {
    return (
        <div>
            {props.cli}
            {props.children}
        </div>
    )
}
function Fathers() {
    return (
        <Bords cli={"hello"}>
            <div>hellow word wo de xin xin </div>
        </Bords>
    )
}


//   父组件
class Hello extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 1
        };
        this.superNmae = "张三"
    }

    //生命周期钩子




    helloBtn = (data) => {
        //子组件传过来的值
        console.log(data) //这里是  2
        this.setState({
            index: data
        }, () => {
            //回调函数
            console.log("传值成功我是回调函数", this.state.index)
        })
    }

    render() {
        return (
            <div>
                <Word color="color1" name="word1" />
                <Word color="color2" name="word2" />
                <Word color="color3" name="word3" />
                <Time data={new Date()} />
                <Scecond index={this.state.index} pth={this.helloBtn} />
                <div>我是子组件传过来的值{this.state.index}</div>
                {/* 列表组件 */}
                <Modes />
                {/* 受控组件 */}
                <Inputs />
                <Ipuutf />
                {/* 包含关系组件 props.children 直接输出全部的子项 */}
                <Father />
                <Fathers />
                {/* refs&dom */}
                <Refss />

            </div>
        )
    }
}










export default Hello;