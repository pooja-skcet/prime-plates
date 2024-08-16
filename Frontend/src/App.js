import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin/Signin';
import CustomOrder from './Components/CustomOrder/CustomOrder';
import { UserProvider } from './Components/UserContext';
function App() {
  return (
    <UserProvider>
    <Signin />
    <CustomOrder />
   
    {/* Other components */}
</UserProvider>
  );
}

export default App;
