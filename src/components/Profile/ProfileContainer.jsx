import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserProfile, getProfileStatus, updateProfileStatus, savePhoto } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   
   refreshProfile(){
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = this.props.authorisedUserId
         if (!userId) {
            this.props.history.push('/login')
         }
      }
      this.props.getUserProfile(userId)
      this.props.getProfileStatus(userId)
   }
   componentDidMount() {
      this.refreshProfile()
   }
   componentDidUpdate(prevProps, prevState){
      if(this.props.router.params.userId !== prevProps.router.params.userId) {this.refreshProfile()}
   }

   render() {
      return <Profile {...this.props}
         profile={this.props.profile}
         status={this.props.status}
         updateProfileStatus={this.props.updateProfileStatus}
         isOwner={!this.props.router.params.userId}
         savePhoto={this.props.savePhoto} 
         />
         
   }
}

let mapStateToProps = (state) => {
   return ({
      profile: state.profilePage.profile,
      status: state.profilePage.profileStatus,
      authorisedUserId: state.auth.userId,
      isAuth: state.auth.isAuth
   })
}
function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}


export default compose(
   connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus, savePhoto }),
   withRouter,
   withAuthRedirect
)(ProfileContainer)