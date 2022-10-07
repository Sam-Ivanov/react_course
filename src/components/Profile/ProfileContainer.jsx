import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 26189;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(res => {
            this.props.setUserProfile(res.data)
         });
   }
   componentDidUpdate(prevProps) {
      let userId = this.props.router.params.userId
      if (prevProps.router.params.userId !== userId) {
        let userId = 26189
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
          .then(response => {
            this.props.setUserProfile(response.data);
          });
      }
    }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}
//============================================================
let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer)); // v6

// export default connect(mapStateToProps, {
//    setUserProfile
// })(ProfileContainer);