import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import HomePage from './Homepage/homepage'
import LoginPage from './Login/login'
import HomePageone from './Homepage/homepageone'
import ImformationPage from './Imformation/imformation';
import myselfPage from './Body/Myself/myself';
import SearchPage from "./Body/Search/search"
import ShoppingPage from './ShoppingCart/shoppingcart';
import EnrolPage from './Enrol/enrol'
import PayforPage from './ShoppingCart/Payfor/payfor';




var indexCss = require('./index.css');

 class Indexpage extends React.Component{
    render(){
        return(
            
            
            <div>
                    
                

                 <BrowserRouter>

                        <Switch>
                        <Route exact path='/' component={HomePageone}></Route>
                        <Route exact path='/homepage' component={HomePage}></Route>
                        <Route exact path='/login' component={LoginPage}></Route>
                        <Route exact path='/enrol' component={EnrolPage}></Route>
                        <Route exact path='/shoppingcart' component={ShoppingPage}></Route>
                        <Route exact path='/payfor' component={PayforPage}></Route>
                        <Route exact path='/imformation' component={ImformationPage}></Route>
                        <Route exact path='/myself' component={myselfPage}></Route>
                        <Route exact patn='/search' component={SearchPage}></Route>
                        
                        <Redirect path='/' component={HomePageone}></Redirect>
                        
                        </Switch>
                        
                        
                       
                 </BrowserRouter> 







            </div>

        )


    }



}



ReactDOM.render(<Indexpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
