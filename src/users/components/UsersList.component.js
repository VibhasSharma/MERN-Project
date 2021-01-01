import React from 'react';
import './UsersList.css';
import UserItem from './UserItem.component';
import Card from '../../shared/components/UIElements/Card.component'

const UsersList = (props) => {
    if(props.items.length === 0){ // This expression here means we have no users yet, center is the className defined in index.css
        return(
            <div classname='center'>  
                <Card>
                    <h2>No Users found.</h2>
                </Card>
            </div>
        );
    }

    return(
        <ul className="users-list"> 
            {props.items.map(user => {
                return (
                  <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                  />
                );
            })}
        </ul>
    );
};

export default UsersList;

// In UsersList component we're outputting our item(s)