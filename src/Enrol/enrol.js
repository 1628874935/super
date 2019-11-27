import React from 'react';
import './enrol.css'
import {Button,Icon,Tooltip,Input} from 'antd'
var loginCss = require('./enrol.css');

export default class EnrolPage extends React.Component{

    render(){
        return(
            
        <div className={loginCss.land}>
            <div className={loginCss.land1}>
                <Button icon='github' size='large' >注册</Button>
            </div>    


            <div className={loginCss.land2}>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>手机号</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.TextArea placeholder="11位数字" />
                    </div>
                    
                </div>
                <div  className={loginCss.land21}>
                    <Tooltip placement="topLeft" title="Prompt Text">
                        <Button>设置密码</Button>
                    </Tooltip>
                    <div className={loginCss.land22}>
                    <Input.Password placeholder="不能有特殊字符"/>
                    </div>
                </div>
            </div>

            <div  className={loginCss.land3}>
                           
                        <div className={loginCss.land23}>
                            <a>
                            <Button shape='round' type='primary' href='/login'>
                                注册</Button>
                            </a>
                        </div>
                   
            </div>
            
    
            </div>

        )

    }



}