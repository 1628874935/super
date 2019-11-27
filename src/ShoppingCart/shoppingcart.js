import React from 'react'
import './shoppingcart.css'
import { Button,Icon,Card,Steps, Radio,Checkbox, Row, Col } from 'antd';


var shoppingCss = require('./shoppingcart.css')
const { Step } = Steps;


function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
export default class ShoppingPage extends React.Component{
    
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
        
        return(
            <div className={shoppingCss.shopping}>
                

                <div className={shoppingCss.payfor1}>
                    <Icon   type="smile" theme="twoTone" />
                    笑脸超市
                </div>
                <div className={shoppingCss.shopping5}>

                    {userp}
                </div>
                <div>
                        <Steps current={1} className={shoppingCss.payfor11}>
                            <Step title="加入购物车" description="This is a part." />
                            <Step title="确认信息" description="This is a part." />
                            <Step title="支付" description="This is a part." />
                            <Step title="完成交易" description="This is a part." />
                        </Steps>
                </div>
                
                <div className={shoppingCss.shopping2}>
                <Radio.Group defaultValue="a" buttonStyle="solid" size='large'>
                    <Radio.Button value="a" className={shoppingCss.shopping21}>全部商品</Radio.Button>
                    <Radio.Button value="b" className={shoppingCss.shopping21}>收藏商品 0</Radio.Button>
                    <Radio.Button value="c" className={shoppingCss.shopping21}>降价商品 0</Radio.Button>
                    <Radio.Button value="d" className={shoppingCss.shopping21}>库存紧张 0</Radio.Button>
                </Radio.Group>


                </div>

                <div className={shoppingCss.payfor2}>
                    
                        <Checkbox.Group style={{ width: '81%' }} onChange={onChange}>
                                <Row>
                                <Col span={8}>
                                    <Checkbox value="A">
                                       
                                    <div className={shoppingCss.payfor21}>
                                
                                        <Card title="加入购物车的物品" extra={<a href="#">More</a>} style={{ width: 400 }}>
                                            <p>苹果 xr</p>
                                            <p>128G</p>
                                            <p>价格 5800</p>
                                        </Card>
                                
                                    </div>

                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B">
                                    <div className={shoppingCss.payfor21}>
                                
                                        <Card title="加入购物车的物品" extra={<a href="#">More</a>} style={{ width: 400 }}>
                                            <p>苹果 8</p>
                                            <p>64G</p>
                                            <p>价格 4800</p>
                                        </Card>
                                
                                    </div>

                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C">
                                    <div className={shoppingCss.payfor21}>
                                
                                        <Card title="加入购物车的物品" extra={<a href="#">More</a>} style={{ width: 400 }}>
                                            <p>苹果 X</p>
                                            <p>64G</p>
                                            <p>价格 5000</p>
                                        </Card>
                                
                                    </div>
                                    
                                    </Checkbox>
                                </Col>
                                
                                </Row>
                        </Checkbox.Group>
                        
                    </div>



                <div className={shoppingCss.shopping3}>
                    <Button href='/payfor' type='primary' size='large'
                    className={shoppingCss.shopping31}>结算</Button>

                </div>



            </div>
            

        )
    }
}