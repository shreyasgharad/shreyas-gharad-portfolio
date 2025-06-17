
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import teamData from '../content/team.json';

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-white py-20">
        <div className="container">
          <h1 className="section-title">Meet Our Team</h1>
          <p className="section-subtitle">
            The talented individuals behind TippleWorks, dedicated to driving growth and innovation for our clients.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div 
                key={member.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
