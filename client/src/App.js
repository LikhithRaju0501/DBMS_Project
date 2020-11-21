import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import AboutScreen from './screens/AboutScreen';
import SongScreen from './screens/SongScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import WebseriesScreen from './screens/WebseriesScreen';
import WebseriesDesc from './screens/WebseriesDesc';
import SubscribedScreen from './screens/SubscribedScreen';
import SubscribedContent from './screens/SubscribedContent';
import SubscribeForm from './screens/SubscribeForm';
import SongAdd from './screens/SongAdd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={SignInScreen} />
        <Route path='/Home' exact component={HomeScreen} />
        <Route path='/About' exact component={AboutScreen} />
        <Route path='/Songs' exact component={SongScreen} />
        <Route path='/description' exact component={DescriptionScreen} />
        <Route path='/descriptionSeries' exact component={WebseriesDesc} />
        <Route path='/Webseries' exact component={WebseriesScreen} />
        <Route path='/SongAdd' exact component={SongAdd} />
        <Route path='/MySubbed' exact component={SubscribedScreen} />
        <Route path='/Subscribed' exact component={SubscribedContent} />
        <Route path='/SubPlat' exact component={SubscribeForm} />
        {/* <Route path='/delete' exact component={DeletePage} />  
        <Route path='/tables' exact component={GettingTable} />   */}
      </Router>
    </div>
  );
}

export default App;
