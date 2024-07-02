import { createContext, useContext , useState} from 'react';

const MyContext = createContext();

export const InitialState = () => {
  const contextValue = useContext(MyContext);
  if (!contextValue) {
    throw new Error("useLatestActive must be used within a MyContextProvider");
  }
  return contextValue
};

export const MyContextProvider = ({ children }) => {
  const [latestActive, setLatestActive] = useState(true);
  const [showTag , setShowTag] = useState(false)
  const [search , setSearch] = useState('')
  const [postId , setPostId] = useState('')
  const [profile , setProfile] = useState(false)
  const contextValue  = {
    latestActive, setLatestActive , showTag , setShowTag
    ,search,setSearch , postId , setPostId , profile , setProfile}

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
