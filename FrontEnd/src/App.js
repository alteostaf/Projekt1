//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Base/Home'
import NavigationBar from './componets/Base/NavigationBar'
import Create from './componets/crud/Create'
import ContactForm from './comp/ContactForm'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create/" element={<Create />} />
        <Route path="ContactForm/" element={<ContactForm />} />
      </Routes>
    </>
  );
}
export default App