import React from 'react';
import './search.css'
import {Input,Button} from 'antd'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import listPage from './List/list';

var searchCss = require('./search.css')


const { Search } = Input;
export default class SearchPage extends React.Component{

    render(){


        return(
            <div>
                <div className={searchCss.search1}>
                    <div>
                        <Input placeholder="输入商品名称" size='large' className={searchCss.search12}/>
                         <Button type='primary' icon='search' href='/list'
                            className={searchCss.search11} size='large'></Button>
                    </div>
                </div>
                <div>
                    <BrowserRouter>
                    
                        <Route exact path='/list' component={listPage}></Route>
                        
                    
                    </BrowserRouter>


                </div>
            </div>


        )
    }




}