// @ts-ignore
import { Navbar as Nav} from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
const NavBar = () => {
    const props = {
        items: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'History',
            link: '/history'
          },
          {
            text: 'Buy',
            link: '/buy'
          },
      
        ],
        logo: {
          text: 'Awesome Wallet'
        },
        style: {
          barStyles: {
            background: '#444'
          },
          sidebarStyles: {
            background: '#222',
            buttonColor: 'white'
          }
        }
      }

  return <Nav {...props} />;
};


export default NavBar;