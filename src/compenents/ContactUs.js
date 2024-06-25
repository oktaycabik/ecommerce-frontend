import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us">
      <h2>İletişim</h2>
      <form>
        <input type="text" placeholder="Adınız" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mesajınız"></textarea>
        <button type="submit">Gönder</button>
      </form>
      <div className="contact-info">
        <p>Adres: Hukuk Bürosu Adresi</p>
        <p>Telefon: +90 123 456 7890</p>
        <p>Email: info@hukukburosu.com</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12666.01248373791!2d-122.08424968452684!3d37.42206564067739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e2a3f2e12b%3A0x935ef0e2c3f33e4e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638324599508!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
