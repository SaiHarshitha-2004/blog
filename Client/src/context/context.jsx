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
  const [page, setPage] = useState(1);
  const [search , setSearch] = useState('latest')
  const [profile , setProfile] = useState(false)
  const [user , setUser] = useState("Please Login") ;
  const [email , setEmail] = useState("" ) ;
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const contextValue  = {

    search,setSearch ,
    profile , setProfile ,
    page, setPage ,
    user , setUser , 
    email , setEmail ,
    isLoggedIn , setIsLoggedIn


  }


  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
