import React from 'react';

import Navbar from "../components/Navbars/ExamplesNavbar";
import Header from "../components/Headers/ProfilePageHeader";
import Footer from "../components/Footers/DefaultFooter";

import routes from '../routes';

const Main = ({ component: Component }) => (
  <>    
      <div className="wrapper">
        <Header />
        <div className="section">
            <Navbar routes={routes} />
            <Component />
        </div>
        <Footer />
      </div>  
  </>
);

export default Main;