'use client'

import { createContext, useState } from "react";

export const FriendContext = createContext()
const FriendContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    const handleCall = (selectFriend)=> {
    console.log('btn clicked', selectFriend);
  }

    return (
        <FriendContext.Provider value={{timeline, setTimeline}}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendContextProvider;