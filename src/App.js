import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import {Header} from "./components/Header/header";
import {RightMenu} from "./components/Body/RightMenu";
import {SocialMedia} from "./components/SocialMedia/SocialMedia";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {Automatization} from "./components/Automatization/Automatization";
import {Electronic} from "./components/Electronic/Electronic";
import {Automatic} from "./components/Automatic/Automatic";
import {Modernization} from "./components/Modernization/Modernization";
import {Web} from "./components/Web/Web";
import {Model} from "./components/model/Model";

function App() {
  return (
    <div className="body">
      <div>
        <Header/>
      </div>
        <div className='main'>
          <div className={'mainContainer'}>
            <div className='mainLeft'>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contacts' component={Contacts}/>
                <Route path='/automatization' component={Automatization}/>
                <Route path='/electronic' component={Electronic}/>
                <Route path='/automatic' component={Automatic}/>
                <Route path='/modernization' component={Modernization}/>
                <Route path='/web' component={Web}/>
                <Route path='/model' component={Model}/>
              </Switch>
            </div>
            <div className='mainRight'>
              <RightMenu/>
              <SocialMedia/>
            </div>
          </div>
          <Footer/>
        </div>

    </div>
  );
}

export default App;
