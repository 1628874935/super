import React, {Component} from 'react';
import './imformation.css'
import { Comment, Icon, Tooltip, Button,Timeline,Menu,Calendar} from 'antd';


const { SubMenu } = Menu;
var imformationCss = require('./imformation.css')

const Action = props => {
  console.log(props)
  return (
    <div>
      <button type='button' onClick={props.editCb}>{props.tr.edit
          ? '保存'
          : '编辑'}</button>
      <button type='button' onClick={props.tr.edit? props.saveCb: Number}>取消</button>
    </div>
  );
};

function onPanelChange(value, mode) {
  console.log(value, mode);
}


export default class ImformationPage extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      headers: {
        name: "商品名称",
        path: "卖家信息",
        action: ""
      },
      trs: [
        {
          name: "定时任务1",
          path: "xxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务2",
          path: "yyyyyyyyyyy",
          action: "",
          edit: false
        }, {
          name: "定时任务3",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务4",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务5",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务6",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务7",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务7",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务7",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务7",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务7",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }, {
          name: "定时任务7",
          path: "yyyyxxxxxxxxxxxxx",
          action: "",
          edit: false
        }
      ]
    };
  }
  onSave(data) {
   
    data.edit = false
    if (data._initName !== undefined) {
      data.name = data._initName
      data.path = data._initPath
      //  data._initName = data._initPath = undefined
      this.forceUpdate()
    }
  }
  onEdit(data) {
  
    var editable = data.edit = !data.edit
    if (editable) {
      data._name = data.name
      data._initName = data.name
      data.name = <input
        defaultValue={data._name}
        onInput={(e) => {
        data._name = e.target.value;
      }}/>
      data._path = data.path
      data._initPath = data.path
      data.path = <input
        defaultValue={data._path}
        onInput={(e) => {
        data._path = e.target.value;
      }}/>
      this.forceUpdate()
    } else {
      data.name = data._name
      data.path = data._path
      this.forceUpdate()
    }

  }




  




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

        state = {
          reverse: false,
        };
      
        handleClick = () => {
          this.setState({ reverse: !this.state.reverse });
        };



  render() {
    var headers = this.state.headers || {};
    var keys = Object.keys(headers);
    console.log(headers);


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
              <div className={imformationCss.imformation26}>
              
              <Timeline pending="Recording..." reverse={this.state.reverse}>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              </Timeline>
              <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
                Toggle Reverse
              </Button>
  
              </div>

              <div className={imformationCss.imformation25}>
              <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>

              </div>

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
                        <Menu.Item key="2" >增加</Menu.Item>
                        <Menu.Item key="3" >删除</Menu.Item>
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
   



      <div className={imformationCss.imformation24}>
      <table>
        <thead>
          <tr>
            {keys.map(key => <th>
              {headers[key]}
            </th>)}
           
          </tr>
        </thead>
        <tbody>
          {this
            .state
            .trs
            .map(function (tr) {
              return (
                
                <tr>
                  {keys
                    .map(function (key, index) {
                      return (
                        <td key={key}>
                          {key === "action"
                            ? <Action
                                tr={tr}
                                saveCb={this
                                .onSave
                                .bind(this, tr)}
                                editCb={this
                                .onEdit
                                .bind(this, tr)}/>
                            : tr[key]
}
                        </td>
                      )
                    }, this)}
                </tr>
              )
            }, this)}
        </tbody>
      </table>
      </div>
      




</div>
    );


          

  }




















     handleClick = e => {
  //       console.log('click ', e);
  //     };
    
  //     state = {
  //       likes: 0,
  //       dislikes: 0,
  //       action: null,
  //     };
    
  //     like = () => {
  //       this.setState({
  //         likes: 1,
  //         dislikes: 0,
  //         action: 'liked',
  //       });
  //     };
    
  //     dislike = () => {
  //       this.setState({
  //         likes: 0,
  //         dislikes: 1,
  //         action: 'disliked',
  //       });
  //     };



  //       number = e=>{
           
            

  //       }

  //     render() {
  //       const { likes, dislikes, action } = this.state;

  //       const actions = [
  //         <span>
  //           <Tooltip title="Like">
  //             <Icon
  //               type="like"
  //               theme={action === 'liked' ? 'filled' : 'outlined'}
  //               onClick={this.like}
  //             />
  //           </Tooltip>
  //           <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
  //         </span>,
  //         <span>
  //           <Tooltip title="Dislike">
  //             <Icon
  //               type="dislike"
  //               theme={action === 'disliked' ? 'filled' : 'outlined'}
  //               onClick={this.dislike}
  //             />
  //           </Tooltip>
  //           <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
  //         </span>,
  //         <span>Reply to</span>,
  //       ];
    
  //       return (
  //       <div className={imformationCss.imformation}>
  //               <div className={imformationCss.imformation1}>
  //               <Menu
  //                   onClick={this.handleClick}
  //                   style={{ width: 256 }}
  //                   defaultSelectedKeys={['1']}
  //                   defaultOpenKeys={['sub1']}
  //                   mode="inline"
  //               >
  //                   <SubMenu
  //                   key="sub1"
  //                   title={
  //                       <span>
  //                       <Icon type="mail" />
  //                       <span>商品信息</span>
  //                       </span>
  //                   }
  //                   >
  //                   <Menu.ItemGroup key="g1" title="已售商品" >
  //                       <Menu.Item key="1" >信息</Menu.Item>
  //                       <Menu.Item key="2" >增加</Menu.Item>
  //                       <Menu.Item key="3" >删除</Menu.Item>
  //                       <Menu.Item key="4">更改</Menu.Item>
  //                   </Menu.ItemGroup>
  //                   <Menu.ItemGroup key="g2" title="库存">
  //                       <Menu.Item key="1" onClick={this.number}>增加</Menu.Item>
  //                       <Menu.Item key="2">删除</Menu.Item>
  //                       <Menu.Item key="3">更改</Menu.Item>
  //                   </Menu.ItemGroup>
  //                   </SubMenu>
                   
  //                   <SubMenu
  //                   key="sub4"
  //                   title={
  //                       <span>
  //                       <Icon type="setting" />
  //                       <span>设置</span>
  //                       </span>
  //                   }
  //                   >
  //                   <Menu.Item key="9">物流</Menu.Item>
  //                   <Menu.Item key="10">会员</Menu.Item>
  //                   <Menu.Item key="11">通知</Menu.Item>
  //                   <Menu.Item key="12">软件更新</Menu.Item>
  //                   </SubMenu>
  //                </Menu>
  //                </div>
  //                <div>

  //                </div>
  //                   <div className={imformationCss.imformation21}>
  //                     <table cellspacing="0"  cellPadding="20px">
  //                     <tr >
  //                       <td className={imformationCss.imformation23}>
  //                         苹果
  //                         </td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                       <td><input></input>
  //                         <Button onClick={this.handleData}>增加</Button></td>
  //                     </tr>
  //                     <tr>
  //                     <td className={imformationCss.imformation23}>苹果</td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     <tr>
  //                     <td className={imformationCss.imformation23}>苹果</td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     <tr>
  //                     <td className={imformationCss.imformation23}>苹果</td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     </table>
  //                   </div>
  //                   <div className={imformationCss.imformation22}>
  //                   <table cellspacing="0" cellPadding="20px">
  //                     <tr >
  //                       <td className={imformationCss.imformation23}>
  //                         苹果
  //                         </td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     <tr>
  //                     <td className={imformationCss.imformation23}>苹果</td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     <tr>
  //                     <td className={imformationCss.imformation23}>苹果</td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     <tr>
  //                     <td className={imformationCss.imformation23}>苹果</td>
  //                       <td className={imformationCss.imformation23}>小明</td>
  //                       <td className={imformationCss.imformation23}>5kg*10kg/元</td>
  //                       <td className={imformationCss.imformation23}>电话：1533334345</td>
  //                     </tr>
  //                     </table>


                       
  //                     </div>
  //                   <div>


                   
  //                </div>
  //       </div>    
  //       );
  //     }

     



}

      
}