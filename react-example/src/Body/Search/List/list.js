import React from 'react';
import './list.css'

import Picture10 from  './../../../pictrue/10.jpg'
import Picture11 from './../../../pictrue/11.jpg'
import Picture12 from './../../../pictrue/12.jpg'
import Picture13 from './../../../pictrue/13.jpg'
import Picture14 from './../../../pictrue/14.jpg'
import Picture15 from './../../../pictrue/15.jpg'




var listCss = require('./list.css')
export default class listPage extends React.Component{
    render(){

        return(
            <div className={listCss.list}>
                <a href='/shoppingcart'>
                    <div className={listCss.list1}>
                        <img src={Picture10}></img>
                        Apple/苹果 iPhone XR 苹果XR iphone<br/> xs max 新品手机
                        ￥3418 ￥3487.76 <br/>江苏 南京
                            月销228
                    </div>
                    <div className={listCss.list1}>
                        <img src={Picture11}></img>
                         Apple/苹果 iPhone 6s Plus 4G全网通<br/>手机苹果6sp 7 p xr xs max
                            ￥2799 <br/>山东 济南
                            月销387 包
                    </div>
                    <div className={listCss.list1}>
                        <img src={Picture12}></img>
                        Apple/苹果 iPhone XR4G全网通手机官<br/>方正品国行苹果iPhonexr/x/xs/max
                            <br/>￥4949 ￥4989.01 广东 深圳
                    </div>
                    <div className={listCss.list1}>
                        <img src={Picture13}></img>
                        Apple/苹果 iPhone XR4G全网通手机官<br/>方正品国行苹果iPhonexr/x/xs/max
                            <br/>￥4949 ￥4989.01 广东 深圳
                    </div>
                    <div className={listCss.list1}>
                        <img src={Picture14}></img>
                        Apple/苹果 iPhone XR4G全网通手机官<br/>方正品国行苹果iPhonexr/x/xs/max
                            <br/>￥4949 ￥4989.01 广东 深圳
                    </div>
                    <div className={listCss.list1}>
                        <img src={Picture15}></img>
                             Apple/苹果 苹果7plus iPhone 7 Plus <br/>全网通4G手机苹果6s 8p xs x
                            <br/>￥3478
                    </div>
                    </a>
                
            </div>



        )
    }




}