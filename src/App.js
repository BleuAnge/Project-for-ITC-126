import TicketAPI from './TicketAPI';
import Header from './Header';
import MainMenu from './MainMenu';
import ContactScreen from './ContactScreen';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() 
{
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <MainMenu />}>
        </Route>
        <Route path='/ContactScreen' element={
          <ContactScreen/>}>
        </Route>
      </Routes> 
    </Router>
  );
}

export default App;
