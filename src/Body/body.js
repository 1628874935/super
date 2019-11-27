import React from 'react';
import './body.css';
import { Button,Icon,Card,Carousel, Drawer} from 'antd';
import Picture6 from './../pictrue/6.jpg'
import Picture7 from './../pictrue/7.jpg'
import Picture8 from './../pictrue/8.jpg'
import Picture9 from './../pictrue/9.jpg'
import Picture16 from './../pictrue/16.jpg'
import Search from 'antd/lib/transfer/search';
import SearchPage from './Search/search';

const { Meta } = Card;
var bodyCss = require('./body.css');
export default class Things extends React.Component {
        state = { visible: false };

        showDrawer = () => {
        this.setState({
            visible: true,
        });
        };
    
        onClose = () => {
        this.setState({
            visible: false,
        });
        };

        

    render(){
        return(
            <div className={bodyCss.bodyPage}>
                <div >
                 <div className={bodyCss.bodyPage11}>
                    <Carousel autoplay>
                        <div>
                            <h3>
                                <img src={Picture6}></img>
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <img src={Picture7}></img>
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <img src={Picture8}></img>
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <img src={Picture9}></img>
                            </h3>
                        </div>
                        
                    </Carousel>
                   
                </div>
                <div className={bodyCss.bodyPage12}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="夏日专场" bordered={false} style={{ width: 400 }}>
                        <p>特卖 婴奈儿夏日空调服专场全场2折起</p>
                        <p>热卖 百元进口家居好物</p>
                        <p>活动 健身透气速干运动裤 领20元无门槛券</p>
                        <p>活动 天猫超市 1元商品限时每天抢！</p>
                    </Card>
                    </div>
                </div>
                <div className={bodyCss.bodyPage11}>
                    <Card title="消息热点" bordered={false} style={{ width: 700 }}>
                    <p>今日热门推荐 墙角美学，简约北欧风挂画 租房必备实用好物</p>
                    <p>休闲一角 给你惬意生活 梅雨季节，伞来保护你 梅雨季节，伞来保护你</p>
                    <p>
                        9.9疯抢字母T小百货 数码配件20封顶
                        连衣裙蕾丝衫小包50好货
                        男T恤polo衫休闲裤服饰特卖
                    </p>
                    <p>
                        新品女装男装大牌内衣鞋包配饰
                        女鞋男鞋
                        热卖包包母婴生活婴用清洁用品
                        面膜数码运动手机冷风扇冰箱
                    </p>
                    <p>春雨绵绵，你的皮肤要打把伞 水光肌你也可以有</p>
                    </Card>
                </div>
                <div className={bodyCss.bodyPage12}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="今日女装" bordered={false} style={{ width: 400 }}>
                        <p>今日热门推荐 最美人间4月天 必备花仙子包</p>
                        <p>今春最美碎花裙 换季时节，百搭短外套必IN</p>
                        <p>时尚棒球帽，不洗头也美美哒</p>
                        <p>温暖的你需要一件温暖的风衣</p>
                    </Card>
                    </div>
                </div>
                <div className={bodyCss.bodyPage23}>
                <Card
                    hoverablestyle={{ width: 200 }}cover={<img alt="example" 
                    src={Picture16} />} >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    <p></p>
                </Card>


                </div>
                </div>

                <div className={bodyCss.bodyPage22}>
                    <div>
                        <Button type="primary" onClick={this.showDrawer}
                        className={bodyCss.bodyPage1}>
                            个人中心<br/> <Icon type="heart" theme="twoTone" />
                        </Button>
                        <Drawer
                        title="我的账号"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <p>生日：1999-2-31</p>
                        <p>性别：男</p>
                        <p>电子邮件：zxvmxz@qq.1236845132.co'm</p>
                        <p>
                            <Button href='/myself'>点击查看更多信息</Button>
                        </p>
                        </Drawer>



                
                    </div>
                    <div>
                        


                        <Button className={bodyCss.bodyPage1} type='primary' href='/search'>搜索
                         <Icon type="right-circle" theme="twoTone" /></Button>
                        
                    </div>
                </div>


            </div>
        )

         }
   
    }