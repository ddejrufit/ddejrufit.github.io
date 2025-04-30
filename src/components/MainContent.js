import React from 'react';
import './MainContent.css';

function MainContent() {         
    return (
        <main className="main-content">

            
<div class="hero-basic">
  <div class="text-content-title">
    <div style={{color:"#4d4d4d"}} className='title'  >
    Frontend
    </div>
    <div class="title">
      KCW
      <br />
      PORTFOLIO
    </div>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
  <path d="M12 22M12 22L6 16M12 22L18 16" stroke="#b5b5b5" stroke-width="2" fill="none" className='color-animation'/>
</svg>

            <section>

                <h2>사진</h2> 
                <h2>강찬우</h2>
                <h2>1998.08.17</h2>


                <p>Here you can add more detailed information about your topic.</p>
            </section>
            <section>
                <h2>Another Section</h2>
                <p>Feel free to add more sections as needed.</p>
            </section>
        </main>
    );
};

export default MainContent;
