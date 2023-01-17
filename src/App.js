
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import props from 'prop-types';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.friendsBar}/>  
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='*' element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
