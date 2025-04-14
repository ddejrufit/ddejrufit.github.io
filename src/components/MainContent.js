import React from 'react';
import './MainContent.css';

function MainContent() {         
    return (
        <main className="main-content">
            <h1>Welcome to the Main Content</h1>
            <p>This is where the main content of your application will go.</p>
            <section>
                <h2>Section Title</h2>
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