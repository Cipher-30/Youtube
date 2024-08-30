
import './App.css';
import Body from './components/Body';
import {Provider} from "react-redux";
import appStore from "./components/utility/appStore"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
// import SideBar from './components/SideBar';



const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <><Body/></>,
      children: [
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path: "/watchId/:id",
          element:  <WatchPage/>
        }
    
      ]
    },
    // {
    //   path: "/watchId/:id",
    //   element:  <><WatchPage/></>
    // }

  ]
)



function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
      <Header/>
       <RouterProvider router={appRouter} ></RouterProvider>
     </Provider>
    </div>
  );
}

export default App;
