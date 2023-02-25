import React from 'react';
import Myscheduler from '../../Assets/Scheduler.jpg';
import Mynotetaker from '../../Assets/NoteTaker.jpg';
import MyEmployees from '../../Assets/Employees.jpg';
import MysocialNetwork from '../../Assets/socialNetworkAPI.jpg';
import Myecommerce from '../../Assets/ecommerce.jpg';
import Mycodehieroglyphs from '../../Assets/CodeHieroglyphs.jpg';
import { AiFillGithub } from 'react-icons/ai';



function Portfolio() {
    return (
        <div className="portfolioMainContainer">

            <h4>Portfolio</h4>

        <div class="imageholders">
{/* image 1 */}
            <div class ="projectcontainer"><img src= {MyEmployees}/>
            <div class = "projectname"><a href = 'https://github.com/WittyInventor/Employee-Tracker'> Employee Tracker</a><AiFillGithub/></div>
            </div>
{/* image 2 below */}
            <div class ="projectcontainer"><img src= {Myscheduler}/>
            <div class = "projectname"><a href = 'https://github.com/WittyInventor/WorkDayScheduler'> Work Day Scheduler</a><AiFillGithub/></div>
            </div>

             {/* img 3 below */}

            <div class ="projectcontainer"><img src= {Mynotetaker}/>
            <div class = "projectname"><a href = 'https://github.com/WittyInventor/Note-Taker'> Note-Taker</a><AiFillGithub/></div>
            </div>

{/* image 4 below */}
            <div class ="projectcontainer"><img src= {MysocialNetwork}/>
            <div class = "projectname"><a href = 'https://github.com/WittyInventor/SocialNetworkApi'> Social Network Api</a><AiFillGithub/></div>
            </div>

{/* image 5 below */}
            <div class ="projectcontainer"><img src= {Myecommerce}/>
             <div class = "projectname"><a href = 'https://github.com/WittyInventor/E-commerce-Back-End'> E-Commerce Back End</a><AiFillGithub/></div>
            </div>

            {/* image 6 below */}

            <div class ="projectcontainer"><img src= {Mycodehieroglyphs}/>
            <div class = "projectname"><a href = 'https://gist.github.com/WittyInventor/af786938949cf4a2cb79bdd50f8638a0'> Regex Tutorial</a><AiFillGithub/></div>
            </div>







        </div>

            
            
           

          

           
        
        </div>
    );
}

export default Portfolio;

