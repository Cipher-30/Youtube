
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./utility/sidebarSlice";
import { useEffect, useState } from "react";
import { suggestionApi } from "./utility/const";


// import appStore from "./utility/appStore"


const Header = () => {

  const [searchQuery, setSearchQuery] = useState([]);
  const [suggesions, setSuggestions] = useState([]);
  const[showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();


  const toggleFunc = () => {
    dispatch(toggleSidebar());
  }

  const searchFunc = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  }

  //  API CALL FOR SUGGESTION
  const getSuggestion = async () => {
    try {
      const data = await fetch(suggestionApi + searchQuery);
      if (!data.ok) {
        throw new Error("something went wrong during fetching",)
      }

      const dataJson = await data.json();
      console.log(dataJson[1]);
      setSuggestions(dataJson[1]);

    }
    catch (error) {
      console.log('I am in catch', error.message);
    }
  }

  console.log("SEARCH = ", searchQuery);


  useEffect(() => {
   
    //DEBOUNCING
    
    const timer = setTimeout(() => {
      //  API CALL SUGGESTION
      console.log("api call");
      getSuggestion();
    }, 500)

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery])









  const handleBlur = () => {
    setTimeout(() => {
      if (!document.activeElement.closest('.suggestions-dropdown')) {
        setShowSuggestion(false);
      }
    }, 500);
  };






  return (
    <header className="fixed top-0 left-0 w-full h-[64px] grid grid-flow-col items-center m-0 py-1 border-b bg-white z-50">

      {/* "fixed h-[64px] grid grid-flow-col m-0 py-1 border-b " */}

      {/* LOGO  */}
      <div className="flex items-center col-span-1 px-2 py-2  " >
        <img className="w-10 h-10 p-2 mx-2 cursor-pointer rounded-full hover:bg-gray-200 transition-all duration-100 ease-in-out" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" onClick={() => toggleFunc()} alt="Menu" />



        <img className="w-28 h-7 ml-2 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="YotubeLogo" />





      </div>



      {/* SEARCH BAR  */}
      <div className="flex relative  justify-center items-center col-span-10">


        <input value={searchQuery}  onChange={(e) => searchFunc(e)}  onFocus={ () => setShowSuggestion(true)} onBlur={() => handleBlur()}  className="w-[50%]  h-12 px-4 py-2 border border-gray-400 rounded-l-full" placeholder="Search" />
        <button className=" h-12 border border-gray-400 px-4 py-2  cursor-pointer rounded-r-full">Search</button>

        {suggesions.length > 0 && showSuggestion === true ? (<div className="absolute top-[64px] left-[22%] w-[50%] border bg-white cursor-pointer suggestions-dropdown">

          <ul>
            {suggesions.map((obj) => {
              return (
                <li key={obj} onClick={() => {setSearchQuery(obj) 
                   setShowSuggestion(false);
                } }  
                className=" border-b  px-2 py-2 hover:bg-gray-200  cursor-pointer">{obj}</li>
              )
            })
            }
          </ul>

        </div>) : (null)}


      </div>


      {/* USER  */}
      <div className="flex justify-end items-center gap-6 col-span-1">
        <img className="w-10 h-10 p-2  cursor-pointer  rounded-full hover:bg-gray-200 transition-all duration-100 ease-in-out"
          src="https://www.svgrepo.com/show/31480/notification-bell.svg"
          alt="Notification"
        />
        <img className="w-10 h-10 p-2  mr-6 cursor-pointer rounded-full hover:bg-gray-200 transition-all duration-100 ease-in-out"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="User"
        />
      </div>


    </header>
  );
}

export default Header;