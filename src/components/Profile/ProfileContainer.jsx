import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { compose } from "redux";
import withRouter from "../../withRouter";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
   refreshProfile() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         // if(!userId){
         //    this.props.router.navigate('/login')
         // }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);

   }
   componentDidMount() {
      this.refreshProfile();
      // let userId = this.props.router.params.userId;
      // if (!userId) {
      //    userId = this.props.authorizedUserId;
      //    // if(!userId){
      //    //    this.props.router.navigate('/login')
      //    // }
      // }
      // this.props.getUserProfile(userId);
      // this.props.getStatus(userId);
   }



   componentDidUpdate(prevProps) {
      if (this.props.router.params.userId != prevProps.router.params.userId) {
         this.refreshProfile();
      }
   //    let userId = this.props.router.params.userId
   //    if (prevProps.router.params.userId !== userId) {
   //       let userId = this.props.authorizedUserId
   //       this.props.getUserProfile(userId);
   //    }
   }

   render() {

      return (
         <Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus} />
      )
   }
}
//============================================================
// function withRouter(Component) {
//    function ComponentWithRouterProp(props) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//          <Component
//             {...props}
//             router={{ location, navigate, params }}
//          />
//       );
//    }
//    return ComponentWithRouterProp;
// }

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
})


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent)); // v6

// export default connect(mapStateToProps, {
//    setUserProfile
// })(ProfileContainer);

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
   withAuthRedirect
)(ProfileContainer)