import React, { useState } from "react";
// import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);
   // let editMode = stateWithSetState[0];
   // let setEditMode = stateWithSetState[1];

   const activateEditMode = () => {
      setEditMode(true);
   }

   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div>
         {
            !editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
         }
         {
            editMode &&
            <div>
               <input
                  autoFocus={true}
                  onChange={onStatusChange}
                  onBlur={deactivateEditMode}
                  value={status} />
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;