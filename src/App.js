import React from 'react';
import { Provider } from 'react-redux';
import {store,sagaMiddleware} from './store';
// import createSagaMiddleware from "redux-saga";
import './App.css';
import Content from "./content.jsx";
import GoogleSignIn from  "./Components/GsignIn";
import {Cart} from './Components/Cart';
import Sagas from "./Sagas";

// const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(Sagas);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn:false,
      totalVote:0
    };
  }

  totalVoteFn = val =>{
    this.setState({
      totalVote:val
    });
  };

  userLoggedIn = val => {
    this.setState({
      loggedIn:val
    });
  };
  
  render()
  {
      const contentArray = [1,2,3,4,5];
      const { loggedIn,totalVote } = this.state;
      return (
        <Provider store={store}>
        
          <div className="App">
            {loggedIn || <GoogleSignIn userLoggedIn={this.userLoggedIn} />}
            <Cart count={totalVote}/>
            <header className="App-header">
              {
                contentArray.map((el,index) => (
                  <Content key={el} index={index} totalVoteFn={this.totalVoteFn}/>
                ))
              }
              {/* Total votes: {totalVote} */}
            </header>
          </div>
          
        </Provider>
      );
  }
};

export default App;
