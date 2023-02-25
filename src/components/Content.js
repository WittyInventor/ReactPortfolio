import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import Footer from './Footer';

import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Content() {
  const [currentPage, setCurrentPage] = useState('About');
  //   useState means what page in this case we are using in that exact moment. if we change the useState variable, it will render all of the components.
  // render means to calculate and run the Content function information thats showing in the component in the function. Let's say we change the ('About') to Resume example, then it would render. 




  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render. So everytime this renders/runs then it will return down in the code below. If it changes, then it wil render again.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <About />;
  };

  const handlePageChange = (page) => {
   console.log(page)
    setCurrentPage(page);
  }
  return (
    <div className='bodycontainer'>
      {/* We are sending the currentPage to the component headerPage.Then handlePageChange is being triggered by the Header component. We have to send it because the Header is like the navigation bar for the user. */}
      <HeaderNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* here handlePageChange means that the headerNav is being clicked on and then it's changing from the current page variable.
      

      Here we are calling the renderPage method which will return a component  */}
      <div className='routercontainer'>{renderPage()}</div>
      
      <Footer></Footer>
    </div>
  );
}
