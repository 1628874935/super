import React from 'react';
import './enrol.css'
import {Button,Icon,Tooltip,Input,message} from 'antd'
var loginCss = require('./enrol.css');

export default class EnrolPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }


   changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    
   }

        upload = e=>{
            //XHR
        var xhr = new XMLHttpRequest()
        var data ={
            "adpassword":this.state.adpassword,
            "adsex":this.state.adsex,
            "adage":this.state.adage,
            "adname":this.state.name,
            "adphonenumber":this.state.adphonenumber

        }

        //open连接
        xhr.open("post","/user/register")
        //配置响应函数
        xhr.onreadystatechange=function(props){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(result.state==2){
                        
                    message.info("用户名已经存在")
                    }else{
                        
                    message.info("注册成功")
                    this.props.histroy.push("/homepage")
                    }
                }

            }
            else{
                message.info(xhr.status)
            }

        }
        //发送数据
        xhr.setRequestHeader('content-type','application/json');

        xhr.send(JSON.stringify(data))

        //fetch

        //axios
        }


    render(){
        return(
            
        <div className={loginCss.land}>
            <div className={loginCss.land1}>
                <Button icon='github' size='large' >注册</Button>
            </div>    


            <div className={loginCss.land2}>
            <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button >姓名</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.TextArea placeholder="中文汉字" name="adname" value={this.state.adname}  onChange={e=>this.changeValue(e)}/>
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>性别</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.TextArea placeholder="男/女" name="adsex" value={this.state.adsex}  onChange={e=>this.changeValue(e)}/>
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>年龄</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.TextArea placeholder="1——125" name="adage" value={this.state.adage}  onChange={e=>this.changeValue(e)}/>
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>手机号</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.TextArea placeholder="11位数字" name="adphonenumber" value={this.state.adphonenumber}  onChange={e=>this.changeValue(e)}/>
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>设置密码</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.Password placeholder="不能有特殊字符" name="adpassword" value={this.state.adpassword}  onChange={e=>this.changeValue(e)}/>
                    </div>
                </div>
            </div>

            <div  className={loginCss.land3}>
                           
                        <div className={loginCss.land23}>
                            <a>
                            <Button shape='round' type='primary' href='/login' onClick={this.upload}>
                                注册</Button>
                            </a>
                        </div>
                   
            </div>
            
    
            </div>

        )

    }
}