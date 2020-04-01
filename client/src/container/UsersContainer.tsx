import React from "react";
import { UserIndex } from "../components/user/UserIndex";
import { UserIndexAnt } from "../components/user/UserIndexAnt";
import { User } from "../models/user";
import { UserForm } from "../components/user/UserForm";
import { UserFormAnt } from "../components/user/UserFormAnt";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models/state";
import { bindActionCreators } from "redux";
import { createUser, deleteUser, updateUser } from "../features/userFeature";

export const UsersContainer: React.FC = () => {
  const users = useSelector<State, User[]>(state => state.users);
  const dispatch = useDispatch();
  const actions = bindActionCreators({createUser, deleteUser, updateUser}, dispatch);

  return (
    <div className="UsersContainer">
      <UserFormAnt saveUser={actions.createUser}  />      
     {/*  <UserForm saveUser={createUser} />  */}
       {/*  <UserIndex  
          users={users}  
          updateAction={actions.updateUser} 
          deleteAction={actions.deleteUser}/> */}  
       <UserIndexAnt 
          users={users}  
          updateAction={actions.updateUser} 
          deleteAction={actions.deleteUser} />
    </div>
  );
}

export default UsersContainer;
