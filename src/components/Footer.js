import React from 'react';
import './Footer.css'; 

function Footer() {         
    return(
        <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/about">About Me</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </footer>
);
    
}

export default Footer;