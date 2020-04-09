import React, { useEffect } from "react";
import { UserIndex } from "../components/user/UserIndex";
import { UserIndexAnt } from "../components/user/UserIndexAnt";
import { User } from "../models/user";
import { UserForm } from "../components/user/UserForm";

// Ant design Imports
import { UserFormAnt } from "../components/user/UserFormAnt";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models/state";
import { bindActionCreators } from "redux";
import { indexUsersAction, createUserAction, deleteUserAction, updateUserAction } from "../features/userFeature";


export const UsersContainer: React.FC = () => {

  
  const users = useSelector<State, User[]>(state => state.users);
  const dispatch = useDispatch();
  const actions = bindActionCreators({indexUsersAction, createUserAction, deleteUserAction, updateUserAction}, dispatch);


  useEffect(() => {
    // request
    actions.indexUsersAction();
  }, []);

  
  return (
    <div className="UsersContainer">
      <UserFormAnt saveUser={actions.createUserAction}  />      
     {/*  <UserForm saveUser={createUser} />  */}
       {/*  <UserIndex  
          users={users}  
          updateAction={actions.updateUser} 
          deleteAction={actions.deleteUser}/> */}  
       <UserIndexAnt 
          users={users}  
          updateAction={actions.updateUserAction} 
          deleteAction={actions.deleteUserAction} />
    </div>
  );
}

export default UsersContainer;
