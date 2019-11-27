import React from 'react';
import './foot.css'
import {Button,Icon} from 'antd'

var footPage = require('./foot.css');
export default class Chance extends React.Component{
render(){
    return(
        <div>
            <Button className={footPage.footPage1} shape='round' type='primary'>
                主页<br/>
                <Icon type="like" theme="twoTone" /></Button>
            <a href='/shoppingcart'>
                <Button className={footPage.footPage1} shape='round' type='primary'>
                购物车<br/>
                <Icon type="smile" theme="twoTone" /></Button>
            </a>
            <Button className={footPage.footPage1} shape='round' type='primary' href='/imformation'>
                消息<br/>
                <Icon type="message" theme="twoTone" /></Button>
            
        </div>
    )
}

}