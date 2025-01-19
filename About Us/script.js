import React from 'react';
import ReactDOM from "react-dom/client";
import './styles.css';

// Import images
import Smit from './Smit.jpg';
import Om from './Om.jpg';
import Piyush from './Piyush.jpg';
import Snehal from './Snehal.jpg';

const teamMembers = [
  {
    id: 'smit',
    name: 'Smit Joshi',
    role: 'Lead Developer',
    image: Smit,
    description: 'Smit is the Lead Developer at LearnSmart. He specializes in both Front-end & back-end. He has led numerous successful projects. Passionate about coding, he is the backbone of our team.',
  },
  {
    id: 'om',
    name: 'Om Murhekar',
    role: 'Front-end Developer',
    image: Om,
    description: 'Om is our talented Front-end Developer. He ensures our website is visually stunning and user-friendly, creating seamless designs for all devices.',
  },
  {
    id: 'piyush',
    name: 'Piyush Shinde',
    role: 'UI/UX Designer',
    image: Piyush,
    description: 'Piyush is our UI/UX Designer, crafting exceptional experiences for our users. His creativity drives the innovation of our interfaces.',
  },
  {
    id: 'snehal',
    name: 'Snehal Yadav',
    role: 'Backend Engineer',
    image: Snehal,
    description: 'Snehal is a skilled Backend Engineer, ensuring the integrity and performance of our systems. She excels at building robust infrastructures.',
  },
];

const AboutUs = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="#">LearnSmart</a>
        </div>
        <a href="../index.html">
          <button className="glow-button">Home</button>
        </a>
      </nav>

      <section className="about-us">
        <h1 className="section-title">Meet Our Team</h1>
        <div className="cards-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="card" data-member={member.id}>
              <div className="card-photo">
                <img src={member.image} alt={`${member.name}'s photo`} />
              </div>
              <div className="card-content">
                <h2>{member.name}</h2>
                <p style={{ fontWeight: 'bold' }}>{member.role}</p>
                <button
                  className="read-more"
                  onClick={(e) => {
                    const card = e.target.closest('.card');
                    card.classList.toggle('active');
                  }}
                >
                  Read More
                </button>
              </div>
              <div className="card-detail">
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 LearnSmart. All Rights Reserved.</p>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutUs/>);

export default AboutUs;