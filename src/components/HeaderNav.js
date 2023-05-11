import React from 'react';

function HeaderNav({ currentPage, handlePageChange
}) {
  return (
    <header>


      <div className='navcontainer'> <ul className="nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() =>
            handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Home

          {/* //* nav-link's job is to distinguish the active links from the non active one */}
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      
    </ul></div>
      <div className='placeholder4Layout'></div>
    </header>
  

    
  );
}

export default HeaderNav;



