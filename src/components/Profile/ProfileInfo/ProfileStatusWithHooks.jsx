import React, { useEffect, useState } from "react";
import s from '../ProfileInfo/ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);
   // let editMode = stateWithSetState[0];
   // let setEditMode = stateWithSetState[1];

   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);

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
      // <div>
      <>
         {
            !editMode &&
            // <div>
            <span style={{ color: 'white' }} onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            // </div>
         }
         {
            editMode &&
            // <div>
            <input className={s.statusInput}
               autoFocus={true}
               onChange={onStatusChange}
               onBlur={deactivateEditMode}
               value={status} />
            // </div>
         }
      </>
      // </div>
   )
}

export default ProfileStatusWithHooks;