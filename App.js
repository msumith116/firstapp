import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Loginpage from './webathon/Loginpage';
import RootLayout from './webathon/RootLayout';
import Home from './webathon/Home';
import Cprint from './webathon/Cprint';
import Carpool from './webathon/Carpool';
function App() {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<RootLayout/>,
            children:[
                {
                    path:"/",
                    element:<Loginpage/>
                },
                {
                    path:"/Home",
                    element:<Home/>
                },
                {
                    path:"/Cprint",
                    element:<Cprint/>
                },
                {
                    path:"/Carpool",
                    element:<Carpool/>
                },
            ]
        }

    ])
  return (
    <div className='parent'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App