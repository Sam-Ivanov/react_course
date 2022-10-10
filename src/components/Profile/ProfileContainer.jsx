import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 26189;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }



   componentDidUpdate(prevProps) {
      let userId = this.props.router.params.userId
      if (prevProps.router.params.userId !== userId) {
         let userId = 26189
         this.props.getUserProfile(userId);
      }
   }

   render() {

      return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      )
   }
}
//============================================================
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

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status
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