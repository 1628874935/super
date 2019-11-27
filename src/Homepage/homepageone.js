import React from 'react';
import './homepage.css'
import HeaderPage from './../Header/header'

var HomePageCss = require('./homepage.css');

export default class HomePageone extends React.Component{
    render(){
        return(
                  <div className={HomePageCss.homepageone}>
                        <p>
                                欢迎使用笑脸超市  
                        </p>
                        <HeaderPage/>
                    </div>  

    )


    }

}