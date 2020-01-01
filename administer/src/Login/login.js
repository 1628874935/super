import React from 'react';
import './login.css';

import {Button,Icon,Tooltip,Input, message} from 'antd'


var loginCss = require('./login.css');
export default class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: window.localStorage.getItem('username'),
            password: window.localStorage.getItem('password')
        }


    }

    changValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
          

        })


    }

    // login=e=>{
    //     if(this.state.name==this.state.username&&this.state.password1==this.state.password){
    //         alert('登陆成功')
    //         window.localStorage.setItem('username',this.state.name)
    //         window.localStorage.setItem('token','11')  

    //         }else{

    //             alert('登陆失败')
    //         }
            
    //     }

        login = e=>{
            //XHR
        var xhr = new XMLHttpRequest()
        var data ={
           
            "adname":this.state.adname,
            "adpassword1":this.state.adpassword1

        }

        //open连接
        xhr.open("post","/user/register")
        //配置响应函数
        xhr.onreadystatechange=function(props){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(this.state.name==this.state.username&&this.state.password1==this.state.password){
                        alert('登陆成功')
                        window.localStorage.setItem('username',this.state.name)
                        window.localStorage.setItem('token','11')  
            
                        }
                    this.props.histroy.push("/homepage")
                    }
                }

            
            else{
                alert('登陆失败')
            }

        }
        //发送数据
        xhr.setRequestHeader('content-type','application/json');

        xhr.send(JSON.stringify(data))

        //fetch

        //axios
        }



    
render(){
                
            let userp ;
            userp  = 
            <div className={loginCss.land23}>
            <div className={loginCss.land24}><Button shape='round' type='primary' onClick={this.login}>
                登录</Button>
                
            </div> 
            <div className={loginCss.land25}><Button shape='round' type='primary'  href='/enrol'>注册</Button></div>
            </div>

            
                if(this.state.name==this.state.username&&this.state.password1==this.state.password){
                    userp =
                    <div className={loginCss.land23}>
                    <div className={loginCss.land24}><Button shape='round' type='primary' onClick={this.login} href='/'>
                        登录</Button>
                        
                    </div> 
                    <div className={loginCss.land25}><Button shape='round' type='primary'  href='/enrol'>注册</Button></div>
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
                        name='adname' value={this.state.adname} onChange={this.changValue}/>
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>密码</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.Password placeholder="不能有特殊字符" 
                        name='adpassword1' value={this.state.adpassword1} onChange={this.changValue}/>
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