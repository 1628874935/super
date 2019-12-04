import React from 'react'
import './imformation.css'
import { Comment, Icon, Tooltip, Avatar,Menu,Card,Spin} from 'antd';



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



        number = e=>{
           
            

        }

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
                        <span>商品信息</span>
                        </span>
                    }
                    >
                    <Menu.ItemGroup key="g1" title="已售商品" >
                        <Menu.Item key="1" >信息</Menu.Item>
                        <Menu.Item key="2" onClick={this.number}>增加</Menu.Item>
                        <Menu.Item key="3">删除</Menu.Item>
                        <Menu.Item key="4">更改</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="库存">
                        <Menu.Item key="1" onClick={this.number}>增加</Menu.Item>
                        <Menu.Item key="2">删除</Menu.Item>
                        <Menu.Item key="3">更改</Menu.Item>
                    </Menu.ItemGroup>
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
                    <div className={imformationCss.imformation21}>
                      <table cellspacing="0">
                      <tr>
                        <td aligin="center">苹果</td>
                        <td>小明</td>
                        <td>5kg*10kg/元</td>
                        <td>电话：1533334345</td>
                      </tr>
                      <tr>
                      <td>苹果</td>
                        <td>小明</td>
                        <td>5kg*10kg/元</td>
                        <td>电话：1533334345</td>
                      </tr>
                      <tr>
                      <td>苹果</td>
                        <td>小明</td>
                        <td>5kg*10kg/元</td>
                        <td>电话：1533334345</td>
                      </tr>
                      <tr>
                      <td>苹果</td>
                        <td>小明</td>
                        <td>5kg*10kg/元</td>
                        <td>电话：1533334345</td>
                      </tr>
                      </table>
                    </div>
                    <div className={imformationCss.imformation22}>
                     


                       
                      </div>
                    <div>


                   
                 </div>
        </div>    
        );
      }

}

      

    


