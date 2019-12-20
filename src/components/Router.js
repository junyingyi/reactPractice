import React from 'react';
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import Hello from "../Hello"







class Test extends React.Component {

    render() {
        return (
            <div>
                测试一下路由
             </div>
        )
    }
}

class Test1 extends React.Component {

    render() {
        return (
            <div>
                测试一下路由1
            </div>
        )
    }
}

class Test2 extends React.Component {

    render() {
        return (
            <div>
                测试一下路由2
            </div>
        )
    }
}






class Rts extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <Route>
                        <Link to="/">Hello</Link>
                        <br />
                        <Link to="/test">Home</Link>
                        <br />
                        <Link to="/test1">About</Link>
                        <br />
                        <Link to="/test2">Product</Link>
                        <br />
                         <Switch>
                         <Route path="/" exact component={Hello}></Route>
                        <Route path="/test" component={Test}></Route>
                        <Route path="/test1" component={Test1}></Route>
                        <Route path="/test2" component={Test2}></Route>
                         </Switch>
                        
                    </Route>
                </Router>
            </div>
        )
    }

}

export default Rts
