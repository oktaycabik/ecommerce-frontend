import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <h2>Hakkımızda</h2>
      <div className="team">
        <div className="member">
          <img src="founding-partner.jpg" alt="Founding Partner" />
          <h3>Ortak İsmi</h3>
          <p>Kısa Biyografi</p>
        </div>
        {/* Diğer üyeler için benzer bloklar */}
      </div>
      <div className="expertise">
        <h3>Uzmanlık Alanlarımız</h3>
        <p>Başarılarımız ve uzmanlık alanlarımız.</p>
      </div>
    </section>
  );
};

export default AboutUs;
