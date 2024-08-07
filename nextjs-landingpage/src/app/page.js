"use client";  

import { useEffect } from 'react';
import './globals.css';

export default function Home() {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = '/carousel.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#section1">Overview</a>
          <a href="#section2">Mission</a>
          <a href="#section3">Goal</a>
          <a href="#section4">Team</a>
          <a href="#section5">Contact</a>
        </nav>
      </header>

      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="/img1.jpg" alt="Image 1" width="500" height="300" />
            <div className="content">
              <div className="author">MAPLE AI</div>
              <div className="title">MARINE + AI</div>
              <div className="topic">SHIP ROUTING</div>
              <div className="des">
                <strong>Optimize route and predict the fuel consumption from our model. </strong>
              </div>
              <div className="buttons">
                <button><a href="#section1">DETAIL</a></button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img2.jpg" alt="Image 2" width="500" height="300" />
            <div className="content">
              <div className="author">MAPLE AI</div>
              <div className="title">MARINE + AI</div>
              <div className="topic">OCEAN RESEARCH</div>
              <div className="des">
                <strong>Explore deep sea with our autonomous vehicle & image analysis. </strong>
              </div>
              <div className="buttons">
                <button><a href="#section1">DETAIL</a></button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img3.jpg" alt="Image 3" width="500" height="300" />
            <div className="content">
              <div className="author">MAPLE AI</div>
              <div className="title">MARINE + AI</div>
              <div className="topic">OCEAN SAFETY</div>
              <div className="des">
                <strong>Enhanced ocean weather forecasting using our dataset.</strong>
              </div>
              <div className="buttons">
                <button><a href="#section1">DETAIL</a></button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img4.jpg" alt="Image 4" width="500" height="300" />
            <div className="content">
              <div className="author">MAPLE AI</div>
              <div className="title">MARINE + AI</div>
              <div className="topic">RENEWABLE ENERGY</div>
              <div className="des">
                <strong>More sustainable future with our greener energy solution.</strong>
              </div>
              <div className="buttons">
                <button><a href="#section1">DETAIL</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src="/img1.jpg" alt="Thumbnail 1" width="100" height="60" />
            <div className="content">
              <div className="title">
                Name Slider
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img2.jpg" alt="Thumbnail 2" width="100" height="60" />
            <div className="content">
              <div className="title">
                Name Slider
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img3.jpg" alt="Thumbnail 3" width="100" height="60" />
            <div className="content">
              <div className="title">
                Name Slider
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img4.jpg" alt="Thumbnail 4" width="100" height="60" />
            <div className="content">
              <div className="title">
                Name Slider
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>

        <div className="time"></div>
      </div>
      <div id="section1" className="overview">
        <div className="overview_image">
          <img src="/overview.jpg" alt="Overview" width="500" height="300" />
        </div>
        <div className="overview_desc">
          <h2>Overview</h2>
          <p>The Sustainable Development Goals, also known as Global Goals, are a set of 17 integrated and interrelated goals to end poverty, protect the planet, and ensure that humanity enjoys peace and prosperity by 2030.<br />
            Reporting on the SDGs is important in communicating to stakeholders the company's commitment to contributing to the Global Goals.</p>
        </div>
      </div>
      <div id="section2" className="mission">
        <div className="mission_desc">
          <h2>Our Mission</h2>
          <h4>Make your employees feel welcome and valued with a carefully crafted opening message. Mention your vision for the company. And finally, remind each person how important they are to the bigger group.</h4>
          <h3 style={{ color: 'dodgerblue' }}>Maple AI CEO Marie Llyde</h3>
        </div>
        <div className="mission_image">
          <img src="/ceo.jpg" alt="CEO" width="500" height="300" />
        </div>
      </div>
      <div id="section3" className="goal">
        <div className="goal_desc">
          <h2>Our Goal</h2>
          <h4>There are 17 SDGs and 169 targets in total. While they are all important and interrelated, some will be more relevant to your business than others. This section can identify the specific SDGs and targets your organization is prioritizing, and demonstrate how they align with your own business strategy and goals.</h4>
        </div>
        <div className="goal_image">
          <img src="/footer.jpg" alt="Footer" width="500" height="300" />
        </div>
      </div>
      <div id="section4" className="team">
        <div className="team_desc">
          <h2>Our Team</h2>
          <h4>Most reports conclude with a page acknowledging the contributions of the people who worked tirelessly on the projects mentioned within. Below, list down the names of those committed to these projects, such as:</h4>
        </div>
        <div className="team_image">
          <img src="/team.jpg" alt="Team" width="500" height="300" />
        </div>
      </div>
      <div id="section5" className="contact">
        <div className="contact_image">
          <img src="/contact.jpg" alt="Contact" width="500" height="300" />
        </div>
        <div className="contact_desc">
          <div>
            <h2>Contact</h2>
            <h4>+123-456-7890</h4>
            <h4>info@mapleai.com</h4>
            <h4>123 Main St. Halifax Nova Scotia B2J 4N2</h4>
          </div>
          <div>
            <img src="/sns.png" alt="SNS" width="100" height="60" />
          </div>
        </div>
      </div>
      <div className="footer">
        <h5>© Copyright 2024, MAPLE AI. All Rights Reserved.</h5>
      </div>
    </>
  );
}
