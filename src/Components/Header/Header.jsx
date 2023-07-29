
import Cart from '../Cart.jsx/Cart';
import classes from './Header.module.css';

const Header = ()=> {
  return <div className={classes.header}>
    <h2>CandyStore</h2>
    <Cart/>
  </div>
}

export default Header;