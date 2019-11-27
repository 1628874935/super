import React from "react"
import './payfor.css'
import { Button,Icon,Card,Modal,Steps,Radio,Input} from 'antd';
import Picture18 from './../../pictrue/18.jpg'
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
                                        <p>四川省 成都市 金堂县 三星镇</p>
                                        <p>学府大道8号</p>
                                        <p>希望学院 13675233786</p>
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
                        <img src={Picture18}></img>

                </div>

                <div className={payforCss.payfor4}>
                    <Button type="primary" onClick={this.showModal} size='large'>
                        提交账单
                    </Button>
                    <Modal width='400px'
                    visible={visible}
                    title='支付'
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                        Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} 
                         href='/homepage'>
                            Submit
                            </Button> ,
                            ]}>
                        <p><Input placeholder="支付宝账号"></Input></p>        
                        <p><Input.Password placeholder="六位支付密码" /></p>
                        
                        </Modal>    
                </div>

            </div>
        )
    }



}