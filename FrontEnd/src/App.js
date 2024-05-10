//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Base/Home'
import NavigationBar from './componets/Base/NavigationBar'
import Create from './componets/crud/Create'
import ContactForm from './comp/Contact'
import ReadAll from './componets/crud/ReadAll'
import DetailItem from './componets/crud/DetailItem'
import Update from './componets/crud/Update'; 
import { UserContextProvider } from './componets/Auth/UserContext';
import Register from './componets/Auth/Register'
import LogIn from './componets/Auth/LogIn'
import FooterBar from './componets/Base/FooterBar';
import Page404 from './componets/Page404';
//import PlanYourTrip from './componets/Base/PlanYourTrip';
import Contact from './comp/Contact'


function App() {
  return (
    <>
    <UserContextProvider>

      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create/" element={<Create />} />
        <Route path="ContactForm/" element={<ContactForm />} />
        <Route path='ReadAll/' element={<ReadAll />}/>
        <Route path='readOne/:id' element={<DetailItem />}/>
        <Route path='update/:id' element={<Update />}/>
        <Route path="/register" element={<Register />} />
        <Route path='Contact' element={<Contact />} />
        <Route path="/login" element={<LogIn />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
      
      
      <FooterBar/>

      </UserContextProvider>
    </>
  );
}
export default App