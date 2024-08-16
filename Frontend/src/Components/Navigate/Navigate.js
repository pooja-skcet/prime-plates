import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import Home from '../Home/Home'
import Package from '../Package/Package'
import CustomOrder from '../CustomOrder/CustomOrder'
import Homepage from '../Home/Homepage'
import NewHome from '../NewHome/NewHome'
import WeekMenu from '../WeekMenu/WeekMenu'
import Admin from '../Admin/Admin'
import MenuItemDetails from '../MenuItem/MenuItemDetails'
import GetStarted from '../GetStarted/GetStarted'
import Contact from '../Contact/Contact'
import AdminLogin from '../Admin/AdminLogin'
import AboutUs from '../AboutUs/AboutUs'
import Order from '../Order/Order'
import SuccessPage from '../Order/SuccessPage'
const Navigate = () =>
    {
        return(
            
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<NewHome/>} />
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/GetStarted' element={<GetStarted/>}/>
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route path="/menu/:id" element={<MenuItemDetails />} />
            <Route path='/Home' element={<NewHome/>}/>
            <Route path='/WeekMenu' element={<WeekMenu/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/AdminLogin' element={<AdminLogin/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/Order' element={<Order/>}/>
            <Route path="/success" element={<SuccessPage />} />
            
            <Route path='/Package' element={<Package/>}/>
            <Route path='/CustomOrder' element={<CustomOrder/>}/>
           
        
            </Routes>
            </BrowserRouter>
            
        )
    }
    export default Navigate;