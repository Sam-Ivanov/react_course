import { connect } from 'react-redux';
import { follow, requestUsers, setCurrentPage, toggleIsFollowingProgress, unfollow } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
// import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { getUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';
class UsersContainer extends React.Component {
   componentDidMount() {
      const { currentPage, pageSize } = this.props;
      this.props.requestUsers(currentPage, pageSize);
   }

   onPageChanged = (pageNumber) => {
      const { pageSize } = this.props;
      this.props.setCurrentPage(pageNumber);
      this.props.requestUsers(pageNumber, pageSize);
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}
//==================================================================================
// let mapStateToProps = (state) => {
//    return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress
//    }
// };

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      // users: getUsersSuperSelector(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
};

export default compose(
   connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers }),
   // withAuthRedirect
)(UsersContainer)

