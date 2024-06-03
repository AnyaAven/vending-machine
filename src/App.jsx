import './App.css';
import RoutesList from "./RoutesList.jsx";
import { BrowserRouter } from 'react-router-dom';
import Snack from './Snack.jsx';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

const snacks = [
  {
    key: "hichew",
    title: "Hi-Chew",
    imgUrl: "https://stagestopcandy.com/cdn/shop/files/hi_chew_bulk.webp?v=1684164227"
  },
  {
    key: "pocky",
    title: "Pocky!",
    imgUrl: "https://i.ebayimg.com/images/g/6bgAAOSw1EZijNbQ/s-l1200.webp"
  },
  {
    key: "nori",
    title: "Nori!!!",
    imgUrl: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/8/1/81q2BcF0crL._SL1500_.jpg"
  },
];

function App() {
  return (<div className='App'>
    <h1>App!</h1>
    <BrowserRouter>
      <RoutesList routes={snacks}/>
    </BrowserRouter>

  </div>)
};

export default App;
