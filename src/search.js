import React from "react";
import ReactDOM from 'react-dom/client';  // 注意这里
import './search.css';
import logo from './images/logo.jpg'

class Search extends React.Component{
    render(){
        return <div className="search-text">Seasfarch Text<img src={logo}></img></div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));  // 创建根节点
root.render(<Search />);  // 渲染组件
