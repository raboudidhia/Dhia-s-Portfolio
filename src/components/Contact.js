import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css"; 
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "+216",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      first_name: formData.prenom,
      last_name: formData.nom,
      phone_number: formData.phone,
      email_address: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_6xrsnzq",
        "template_1hkuv0y",
        templateParams,
        "nbR1FXXHMA6ZplXEv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            nom: "",
            prenom: "",
            email: "",
            phone: "+216",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        <div className="contact-left">
          <h2>Contact me</h2>
          <p>If you have any questions, feel free to contact me.</p>
          <div className="contact-details">
            <div>
              <i>Phone :  </i> +216 21051189
            </div>
            <div>
              <i >Email : </i> dhiaraboudi1@gmail.com
            </div>
            <div>
              <i >Address :</i> Manar , Tunisia
              
            </div>
          </div>
          <ul className="home-about-social-links">
                        <li className="social-icons">
                          <a
                            href="https://github.com/raboudidhia"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        
                        <li className="social-icons">
                          <a
                            href="https://www.linkedin.com/in/dhia-raboudi-90686a2b5/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
          </ul>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">NOM</label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">PRÉNOM</label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">NUMÉRO DE TÉLÉPHONE</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}