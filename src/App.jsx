import React, { Suspense, lazy, Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './redux/store';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initialiseApp } from './redux/app/reducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);

class App extends Component {
  componentDidMount() {
    this.props.initialiseApp();
  }
  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar store={store} />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/" element={<Navigate to={'/profile'} />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route
              path="/dialogs/*"
              element={
                <Suspense
                  fallback={
                    <div>
                      <Preloader />
                    </div>
                  }
                >
                  <DialogsContainer />
                </Suspense>
              }
            />
            <Route path="/users/" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>404 Page not found!</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
});
export default connect(mapStateToProps, { initialiseApp })(App);
