import React from 'react';
import Routers from '../routers/routers';
import Header from '../header/header';
import Footer from '../footer/footer';
 
function Layout() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}
 
export default Layout;