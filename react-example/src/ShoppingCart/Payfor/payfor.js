import React from "react"
import './payfor.css'
import { Button,Icon,Card,Modal,Steps,Radio,Input,message} from 'antd';
import Picture24 from './../../pictrue/24.jpg';
const { Step } = Steps;




var payforCss = require('./payfor.css')

export default class PayforPage extends React.Component{
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };



            state = {
                loading: false,
                visible: false,
            };
            
            showModal = () => {
                this.setState({
                visible: true,
                });
            };
            
            handleOk = () => {
                this.setState({ loading: true });
                setTimeout(() => {
                this.setState({ loading: false, visible: false });
                }, 3000);
            };
            
            handleCancel = () => {
                this.setState({ visible: false });
            };



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



            changValue = e=>{
                this.setState({
                    [e.target.name]:e.target.value
                  
        
                })
            }
        
            payfor = e=>{
                //XHR
            var xhr = new XMLHttpRequest()
            var data ={
                "adress1":this.state.adress1,
                "adress2":this.state.adress2,
                "adress3":this.state.adress3
                
        
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
        const { visible, loading } = this.state;


        
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
                <div className={payforCss.payfor1}>
                    <Icon type="smile" theme="twoTone" />
                    笑脸超市
                </div>
                <div className={payforCss.payfor}>
                    {userp}
                </div>
                <div>
                   
                        <Steps current={2} className={payforCss.payfor11}>
                            <Step title="加入购物车" description="This is a part." />
                            <Step title="确认信息" description="This is a part." />
                            <Step title="支付" description="This is a part." />
                            <Step title="完成交易" description="This is a part." />
                        </Steps>
                   
                </div>

                <div >
                    <div className={payforCss.payfor2}>
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <div className={payforCss.payfor21}>
                                <Radio value={1}>
                                    <Card title="我的地址栏" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p name="adress1" value={this.state.adress}  onChange={e=>this.changeValue(e)}>四川省 成都市 金堂县 三星镇</p>
                                        <p name="adress2" value={this.state.adress2}  onChange={e=>this.changeValue(e)}>学府大道8号</p>
                                        <p name="adress3" value={this.state.adress3}  onChange={e=>this.changeValue(e)}>希望学院 13675233786</p>
                                    </Card>
                                </Radio>
                            </div>
                            <div className={payforCss.payfor21}>
                                <Radio value={2}>
                                    <Card title="我的地址栏" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>四川省 成都市 金堂县 三星镇</p>
                                        <p>学府大道10号</p>
                                        <p>成都文理 13675233786</p>
                                    </Card>
                                </Radio>
                            </div>
                            <div className={payforCss.payfor21}>
                                <Radio value={3}>
                                    <Card title="我的地址栏" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>四川省 成都市 金堂县 三星镇</p>
                                        <p>学府大道20号</p>
                                        <p>西南航空 13675233786</p>
                                    </Card>
                                </Radio>
                            </div>
                            </Radio.Group>
                    </div>
                    <div className={payforCss.payfor22}>
                        <Button size='large' href='/myself'>管理地址</Button>

                    </div>
                </div>



                <div className={payforCss.payfor3}>
                        <form>
                            <tr><th>商品信息</th></tr>
                            <tr>商品编号54348432734</tr>
                            <tr>发出地：浙江宁波</tr>
                            <tr>
                                <td>
                                    Apple/苹果 iPhone 6s Plus 4G全网通手机苹果6sp 7 p xr xs max
                                </td>
                                <td> <font color="red" size="large">￥2799 山东 济南
                                    月销387 包</font>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><Button href="/shoppingcart">返回购物车</Button>
                                </td>
                                <td>
                                <Button type="primary" onClick={this.showModal} size='default'>
                                    提交账单
                                </Button>
                                <Modal width='400px'
                                visible={visible}
                                title='支付'
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                    返回
                                    </Button>,
                                    <Button key="submit" type="primary" loading={loading} 
                                    href='/homepage'>
                                        提交
                                                    </Button> ,
                                        ]}>
                                    <div >
                                        <img src={Picture24} width="300px" height="220px"></img>
                                        <br/><br/><font color="red">支付二维码</font>
                                        </div>        
                                    
                                    
                                </Modal>

                                </td>
                                </tr>
                        </form>

                </div>

               

            </div>
        )
    }



}