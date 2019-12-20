import React from "react"


// 组件名首字母大写
//组件中必须导入react
/**
 * constructor 如果你实现了构造器，new创建对象的时候就会执行一次
 * class中只要是继承了constructor函数中第一句必须要调用super()方法
 * jsx中的模型数据就是写在constructor函数中
 * 
 * 事件处理和this问题
 * react this指向通过箭头函数来绑定 或者bind来修改指向
 * this只能获取实力话的对象
 * 修改模型数据需要使用setstate()来修改参数
 * 
 * react 父组件传值给子组件只能用不能修改
 * react 子组件传值给父组件 通过父组件传一个callback回调函数给子组件 子组件调用父组件传过来的回调函数将参数通过调用函数的形参给父组件
 */


//子组件
class Scecond extends React.Component {
    static names = "张三"
    constructor(props) {
        super(props)

        this.index = null
        this.maps = ["张三", "李四", "王五"]
    }

    btn() {
        this.index = this.props.index
        //修改该组件的值
        this.setState({
            index: this.index++
        }, () => {
            console.log(this.index)
            this.props.pth(this.index)
        })
        //  this.props.pth()

    }

    render() {
        if (this.index === 2) {
            return (
                <div>
                    <button onClick={this.btn.bind(this)}>点我触发事件</button>
                    {this.maps.map((items) =>
                        <div key={items}>{items}</div>
                    )
                    }
                </div>

            )
        } else {
            return (
                <div>
                    <button onClick={this.btn.bind(this)}>点我触发事件啦啦啦</button>
                    {/* react静态属性 通过类名.来调用 */}
                    <div>{Scecond.names}</div>
                    {/* react实力化属性  通过this.来调用  接收父组件传过来的index */}
                    <div>{this.props.index}</div>
                </div>
            )
        }

    }
}


export default Scecond