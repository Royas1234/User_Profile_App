import React, { useState } from 'react'
import {UserData} from "../data/userProfile-data"


const UserProfile = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleInput =(event) =>{
        const value = event.target.value;
        console.log(value)
        setSearchValue(value);
    }

const SearchResult = UserData.filter(user =>{
    return user.title.toLowerCase().includes(searchValue.toLowerCase()) || user.firstName.toLowerCase().includes(searchValue.toLowerCase()) || user.lastName.toLowerCase().includes(searchValue.toLowerCase())|| user.id.toLowerCase().includes(searchValue.toLowerCase)


})

const UserList = SearchResult.map((user, key )=> {
    let UserName =` ${user.title}. ${user.firstName} ${user.lastName}`;
    return <div key ={user.id} className='user-wraper' value={searchValue}>
        <div>
            <img src={user.picture} alt ={ user.firstName} className='user-img'/>
        </div>
            <div className='name-id-wrapper'>
                <p   className= "id-pargh">{user.id}</p>
                <p className='name-pargh'>{UserName}</p>
            </div>
    </div>

})

 return (
    <div className='profile-input' >
                   <input type='text' placeholder='Search your name...'   value ={searchValue} onInput={handleInput}  />
                   <div className='profile'>
                        {UserList}
                   </div>
    </div>
  )
}

export default UserProfile;