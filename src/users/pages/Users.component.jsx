import React from 'react';
import UsersList from '../components/UsersList.component';

const User = () => {
        const USERS = [
          { id: "u1", 
          name: "Vibhas Sharma", 
          image: "https://i.ibb.co/R70vBrQ/men.png",
          places: 1 },  
        ];  

    return(
        <UsersList items={USERS}/>
    );
};

export default User;

// Deligate the rendering of the list to user list component
// Now the UsersList requires an items prop