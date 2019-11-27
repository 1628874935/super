import React from 'react';
import './header.css';
import {link} from 'react-router-dom';
import {Button,Icon} from 'antd'


    




var headercss = require('./header.css');
export default class HeaderPage extends React.Component{
    
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

        login = e=>{
            alert("请先登录")
        }



    render(){

        let userp;
        userp = <Button shape='round' type='primary' href='/login'>
                登录</Button>
       
    
            if(this.state.username!=null){

                userp = 
                <div>
                    <Button type='primary' href='/' shape='round'>
                    {this.state.username}</Button>
                    <Button type='primary' onClick={this.loginout} shape="round">
                        登出</Button>  
                </div>

                }

                let home=<Button shape='round' type='primary' size='large' onClick={this.login}>
                                笑脸系统首页
        
                        </Button>
                  
                  if(this.state.username!=null){

                    home = <Button shape='round' type='primary' size='large' href='/homepage'>
                                笑脸系统首页

                            </Button>
                  
                  }
                    




        return(
            <div>
            <div className={headercss.header1}>
                <div className={headercss.header11}>
                   {home}
                </div>
                <div className={headercss.header11}>
                   <a href='/login'>
                       {userp}
                  </a>
                </div>
            
            </div>
            </div>
        )
 

    }




}