import React from 'react';
import './login.css';

import {Button,Icon,Tooltip,Input, message} from 'antd'


var loginCss = require('./login.css');
export default class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            password:'',
            username:''

            
            
        }


    }

    changValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
          

        })


    }

    login=e=>{
        if(this.state.username=='12345'&&this.state.password=='12345'){
            alert('登陆成功')
            window.localStorage.setItem('username','笑脸一号')
            window.localStorage.setItem('token','11')  

            }else{

                alert('登陆失败')
            }
            
        }

    
render(){
                
            let userp ;
            userp  = 
            <div className={loginCss.land23}>
            <div className={loginCss.land24}><Button shape='round' type='primary' onClick={this.login}>
                登录</Button>
                
            </div> 
            <div className={loginCss.land25}><Button shape='round' type='primary'  >注册</Button></div>
            </div>

            
                if(this.state.username==12345&&this.state.password==12345){
                    userp =
                    <div className={loginCss.land23}>
                    <div className={loginCss.land24}><Button shape='round' type='primary' onClick={this.login} href='/'>
                        登录</Button>
                        
                    </div> 
                    <div className={loginCss.land25}><Button shape='round' type='primary'  >注册</Button></div>
                    </div>
                }
   

    return(
        <div className={loginCss.land}>
            <div className={loginCss.land1}>
                <Button icon='github' size='large' >登录</Button>
            </div>    


            <div className={loginCss.land2}>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>账户</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.TextArea placeholder="11位数字"  
                        name='username' value={this.state.username} onChange={this.changValue}/>
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>密码</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.Password placeholder="不能有特殊字符" 
                        name='password' value={this.state.password} onChange={this.changValue}/>
                    </div>
                </div>
            </div>

            <div  className={loginCss.land3}>
                       {userp}
                   
            </div>
            
        </div>

    )

    }

}