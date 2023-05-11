import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
    return (
        <footer>

            <div>
               <a href="https://www.linkedin.com/in/annemariesheridan/">
               <AiFillLinkedin/>
               </a>
               <a href='mailto:atsheridan38@gmail.com'>
                <AiOutlineMail/>
                </a>
               <a href="https://github.com/WittyInventor">
               <AiFillGithub />
               </a>

            </div>

            <div>
                <img/>
            </div>

            <div>
                <img/>
            </div>

        </footer>
    );
}

export default Footer;

