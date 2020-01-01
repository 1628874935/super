import React from 'react'
import './shoppingcart.css'
import { Button,Icon,Card,Steps, Radio,Checkbox, Row, Col,message } from 'antd';


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

    changValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
          

        })
    }

    shopping = e=>{
        //XHR
    var xhr = new XMLHttpRequest()
    var data ={
        "name2":this.state.name2,
        "size":this.state.size,
        "price":this.state.price
        

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
                                            <p name="name2" value={this.state.name2}  onChange={e=>this.changeValue(e)}>苹果 xr</p>
                                            <p name="size" value={this.state.size}  onChange={e=>this.changeValue(e)}>128G</p>
                                            <p name="price" value={this.state.price}  onChange={e=>this.changeValue(e)}>价格 5800</p>
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
                    <Button href='/payfor' type='primary' size='large' onClick={this.shopping}
                    className={shoppingCss.shopping31}>结算</Button>

                </div>



            </div>
            

        )
    }
}