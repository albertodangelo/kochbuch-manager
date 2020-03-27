import React, {useState} from 'react';
import { UserIndex } from '../components/user/UserIndex';
import { User } from '../models/user';
import { Gender } from '../models/gender';
import { UserForm } from '../components/user/UserForm';



export const UsersContainer: React.FC = () => {

  /** 
   * users
   */
  const defaultUsers: User[] = [
    {
        id: 0,
        forname: "Chuck",
        surname: "Norris",
        birthday: new Date().getTime(),
        email: "chuck@norris.com",
        gender: Gender.MALE
    },
    {
        id: 1,
        forname: "Scarlett",
        surname: "Johanson",
        birthday: new Date().getTime(),
        email: "scarlett@johanson.com",
        gender: Gender.FEMALE
    }
  ];
  const [users, setUsers] = useState<User[]>(defaultUsers);


  const createUser = (user: User) => {
    console.log(user)
    const newUser = { ...user, id: new Date().getTime()};
    const newUsers = [...users, newUser];
    setUsers(newUsers)
  }


  const deleteUser = (userId: number) => {
    const newUser = users.filter(u => u.id !== userId);
    setUsers(newUser);
  }
  
  const updateUser = (user: User) => {
    const newUsers = users.map(u => (u.id === user.id ? user : u));
    setUsers(newUsers);
  };

 
  

 

  return (
    <div className="UsersContainer">
      <UserForm saveUser={createUser} /> 
       <UserIndex users={users}  updateAction={updateUser} deleteAction={deleteUser} />
    </div>
  );
}

export default UsersContainer;
