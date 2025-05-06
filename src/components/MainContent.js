import React from 'react';
import './MainContent.css';

function MainContent() {         
    return (
        <main className="main-content">

      <div className="main">   
<div className="hero-basic">
  <div className="text-content-title">
    <div style={{color:"#4d4d4d"}} className='title'  >
    Frontend
    </div>
    <div className="title">
      KCW
      <br />
      PORTFOLIO
    </div>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path d="M12 22M12 22L6 16M12 22L18 16" stroke="#b5b5b5" stroke-width="2" fill="none" className='color-animation'/>
</svg>
</div>   
            <section className='aboutMe'>

           
      <img src="https://i.ibb.co/JwjsYPTY/fotor-20250506143351.png" alt="" className='face'/>
                <div className='me'>
                <h1>강찬우</h1>
                <h2>1998.08.17</h2>


                <p>신입 프론트 엔드 개발자 강찬우 입니다.<br/>계속 성장하는 개발자가 되고 싶습니다.</p>
                </div>
            </section>
            <section>
                <h2>career</h2>
                <p>Feel free to add more sections as needed.</p>
            </section>
        </main>
    );
};

export default MainContent;
