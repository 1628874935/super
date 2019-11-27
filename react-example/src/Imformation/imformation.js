import React from 'react'
import './imformation.css'
import { Comment, Icon, Tooltip, Avatar,Menu,Card,Spin} from 'antd';
import moment from 'moment';
import Picture17 from './../pictrue/17.jpg'

const { SubMenu } = Menu;
var imformationCss = require('./imformation.css')


export default class ImformationPage extends React.Component{
    handleClick = e => {
        console.log('click ', e);
      };
    
      state = {
        likes: 0,
        dislikes: 0,
        action: null,
      };
    
      like = () => {
        this.setState({
          likes: 1,
          dislikes: 0,
          action: 'liked',
        });
      };
    
      dislike = () => {
        this.setState({
          likes: 0,
          dislikes: 1,
          action: 'disliked',
        });
      };



      render() {
        const { likes, dislikes, action } = this.state;

        const actions = [
          <span>
            <Tooltip title="Like">
              <Icon
                type="like"
                theme={action === 'liked' ? 'filled' : 'outlined'}
                onClick={this.like}
              />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
          </span>,
          <span>
            <Tooltip title="Dislike">
              <Icon
                type="dislike"
                theme={action === 'disliked' ? 'filled' : 'outlined'}
                onClick={this.dislike}
              />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
          </span>,
          <span>Reply to</span>,
        ];
    
        return (
        <div className={imformationCss.imformation}>
                <div className={imformationCss.imformation1}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="mail" />
                        <span>我的消息</span>
                        </span>
                    }
                    >
                    <Menu.ItemGroup key="g1" title="服务消息">
                        <Menu.Item key="1">客服</Menu.Item>
                        <Menu.Item key="2">软件</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="我的消息">
                        <Menu.Item key="3">客服</Menu.Item>
                        <Menu.Item key="4">私信</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="appstore" />
                        <span>互动消息</span>
                        </span>
                    }
                    >
                    <Menu.Item key="5">评论</Menu.Item>
                    <Menu.Item key="6">提到我</Menu.Item>
                    <SubMenu key="sub3" title="互动提醒">
                        <Menu.Item key="7">商品</Menu.Item>
                        <Menu.Item key="8">评价</Menu.Item>
                    </SubMenu>
                    </SubMenu>
                    <SubMenu
                    key="sub4"
                    title={
                        <span>
                        <Icon type="setting" />
                        <span>设置</span>
                        </span>
                    }
                    >
                    <Menu.Item key="9">物流</Menu.Item>
                    <Menu.Item key="10">会员</Menu.Item>
                    <Menu.Item key="11">通知</Menu.Item>
                    <Menu.Item key="12">软件更新</Menu.Item>
                    </SubMenu>
                 </Menu>
                 </div>
                 <div>




                 </div>
                    <div>
                      <img src={Picture17}></img>
                    </div>
                    <div className={imformationCss.imformation2}>
                      <div className={imformationCss.imformation21}>
                        <Card title="收到的评论" extra={<a href="#">More</a>} style={{ width: 368 }}>
                            <p>个人评论 <Spin /></p>
                            <p>其他买家评论 <Spin /></p>
                            <p>朋友圈评论 <Spin /></p>
                        </Card>
                        </div>


                          <div className={imformationCss.imformation21}>
                            <Comment
                            actions={actions}
                            author={<a>Han Solo</a>}
                            avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                            }
                            content={
                            <p>
                                We supply a series of <br/>design principles,practical patterns and <br/>high quality design
                                resources (Sketch and Axure),<br/> to help people creat their product prototypes beautifully<br/>
                                and efficiently,do you know what I mean.
                            </p>
                            }
                            datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                            }/>
                          </div>
                      </div>
                    <div>


                   
                 </div>
        </div>    
        );
      }

}

      

    


