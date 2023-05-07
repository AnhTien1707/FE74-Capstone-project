import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {createBrowserHistory} from 'history'
import Router from "./router";
import RegisterBg from "./pages/RegisterBg"
import Booking from './pages/BookingTicket/Booking';
export const history = createBrowserHistory()
function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
      </Router>
    </BrowserRouter>
  );
}

export default App;
