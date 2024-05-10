// Krijimi i nje funksioni i cili lejon kalimin dhe menaxhimin e informacioneve te user-it
// createContext - librari e react qe lejon kalim e informacionit ne komponente te ndryshme
import React, { createContext, useState } from "react";
// Krijimi e nje context ("funksioni per menaxhim e te dhenave te user-it")
export const UserContext = createContext({});
// children luajne rolin e props.
// Te gjitha info mund ti perdorin komponente
// UserContextProvider therritet tek APP.js
export const UserContextProvider = ({ children }) => {
// get do te mbaje gjendjen dhe set do te beje ndryshimet
const [userInfo, setUserInfo] = useState({});
return (
<UserContext.Provider value={{ userInfo, setUserInfo }}>
{children}
</UserContext.Provider>
);
};
