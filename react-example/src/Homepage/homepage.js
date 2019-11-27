import React from 'react';
import Things from './../Body/body';
import Chance from './../Foot/foot';
import './homepage.css'

import {Button} from 'antd';

import ImformationPage from '../Imformation/imformation';




var HomePageCss = require ('./homepage.css');
export default class HomePage extends React.Component{


    constructor(props){
        super(props);
        this.state={
            username: window.localStorage.getItem('username')

        }
    }


    loginout = e=>{
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('token')
        this.setState({
            username : null
            
        })

    }

    render(){

        let userp;
        userp=<Button type='primary' size='large'
                >{this.state.username}</Button>

        if(this.state.username!=null){

            userp = 
                <h>
                <Button type='primary'  shape='round'>
                {this.state.username}</Button>
                <Button type='primary' onClick={this.loginout} shape="round" href='/'>
                登出</Button> 
                </h>
            

            }
            else{
                userp = 
               
                <Button type='primary' onClick={this.loginout} shape="round" href='/'>
                登录</Button> 
            
                
            }
        return(
            <div>
                
              
               
                    <div className={HomePageCss.homepage21}>
                        
                        <h>笑脸超市&ensp; &ensp; 
                        
                        
                            {userp}
                        
                        </h>
                        
                    </div>
                    
                           
                   
           
                
                <div>
                    
                        <div className={HomePageCss.HomePage3}>
                            <Chance/>
                        </div>
                        <div>
                    
                       
                       
                        </div>
                    
                </div>
                <div className={HomePageCss.HomePage3}>
                <Things/>
                </div>
              



            </div>


        )



    }




}