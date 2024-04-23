//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Base/Home'
import NavigationBar from './componets/Base/NavigationBar'
import Create from './componets/crud/Create'
import ContactForm from './comp/ContactForm'
import ReadAll from './componets/crud/ReadAll'
import DetailItem from './componets/crud/DetailItem'
import Update from './componets/crud/Update';
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create/" element={<Create />} />
        <Route path="ContactForm/" element={<ContactForm />} />
        <Route path='ReadAll/' element={<ReadAll />}/>
        <Route path='readOne/:id' element={<DetailItem />}/>
        <Route path='update/:id' element={<Update />}/>
      </Routes>
    </>
  );
}
export default App