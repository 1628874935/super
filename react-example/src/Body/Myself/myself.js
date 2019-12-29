import React from 'react';
import './myself.css'
import { Menu, Icon,Calendar, Drawer, Radio, Button, Col, Row, Input, Card, DatePicker,Carousel, message} from 'antd';
import Picture20 from './../../pictrue/20.jpg'
import Picture21 from './../../pictrue/21.jpg'
import Picture22 from './../../pictrue/22.jpg'
import Picture23 from './../../pictrue/23.jpg'

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

var myselfCss = require('./myself.css')
const { Meta } = Card;

const { SubMenu } = Menu;

export default class myselfPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: window.localStorage.getItem('username')
         
        }
    }


   changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    
   }





    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

     
  


    loginout = e=>{
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('token')
        this.setState({
            username : null
            
        })

    }

    upload = e=>{
            //XHR
        var xhr = new XMLHttpRequest()
        var data ={
            "adress":this.state.adress,
            "postman":this.state.postman,
            "name":this.state.name,
            "phonenumber":this.state.phonenumber

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

        
        
        
        return(
            <div>
               
                <div className={myselfCss.payfor1}>
                    <Icon   type="smile" theme="twoTone" />
                    笑脸超市
                </div>
                <div className={myselfCss.myself}>
                    {userp}
                </div>
                
               <div className={myselfCss.myself1}>
               <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="mail">
                    <Icon type="user" />
                            我的淘宝
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                    <Icon type="appstore" />
                            首页
                    </Menu.Item>
                    <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                                账户设置
                        </span>
                    }
                    >
                    <Menu.ItemGroup title="个人资料">
                        <Menu.Item key="setting:1">收货地址</Menu.Item>
                        <Menu.Item key="setting:2">修改头像名称</Menu.Item>
                        <Menu.Item key="setting:3">消息提醒设置</Menu.Item>
                        <Menu.Item key="setting:4">支付宝号绑定</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                    <a href="/imformation" >
                        消息
                    </a>
                </Menu.Item>
                </Menu>

               </div>

               <div className={myselfCss.myself22}>
                        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </div>
               </div>
               
               <div className={myselfCss.myself2}>
                      <div>
                          <Button type='primary' className={myselfCss.myself21}> 当前配送：中国大陆</Button>
                      </div>
                      <div>
                          <Button>地址信息：</Button>
                          <Input placeholder="地址信息" size='large' name="adress" value={this.state.adress}  onChange={e=>this.changeValue(e)}/>
                      </div>
                      <div>
                          <Button>邮政编码：</Button>
                          <Input placeholder="邮政编码" size='large' name="postman" value={this.state.postman}  onChange={e=>this.changeValue(e)}/>
                      </div>
                      <div>
                          <Button>收货人姓名：</Button>
                          <Input placeholder="收货人姓名" size='large' name="name" value={this.state.name }  onChange={e=>this.changeValue(e)}/>
                      </div>
                      <div>
                          <Button>手机号：</Button>
                          <Input placeholder="手机号" size='large' name="phonenumber" value={this.state.phonenumber}  onChange={e=>this.changeValue(e)}/>
                      </div>
                        <div className={myselfCss.myself23}>
                            <Radio>设为默认地址</Radio>
                        </div>
                        
                </div>

                <div className={myselfCss.myself3}>
                <Button type='primary' size='large' onClick={this.upload}>保存</Button>
                </div>


                <div className={myselfCss.myself4}>
                    <div>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
                    <div>
                    <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Picture21} />}
                            >
                            <Meta title="Cup  beat" description="www.instagram.com" />
                        </Card>

                    </div>
                </div>



            </div>
            
            )
    
    
    }





}