import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

   return <div>
      <Paginator
         totalItemsCount={totalUsersCount}
         pageSize={pageSize}
         currentPage={currentPage}
         onPageChanged={onPageChanged}
      />
      <div>
         {
            users.map(u => <User
               key={u.id}
               user={u}
               followingInProgress={props.followingInProgress}
               unfollow={props.unfollow}
               follow={props.follow}
            />)
         }
      </div>
   </div>
}

export default Users;