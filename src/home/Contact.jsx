// import React, { useState } from "react";
// import "./Contact.css";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [formStatus, setFormStatus] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     countryCode: "+91",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     if (!formData.name || !formData.email || !formData.phone || !formData.message) {
//       setFormStatus("⚠️ Please fill out all required fields.");
//       return false;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setFormStatus("❌ Please enter a valid email address.");
//       return false;
//     }

//     // Phone validation (for India: 10 digits)
//     const phoneRegex = /^[0-9]{10}$/;
//     if (formData.countryCode === "+91" && !phoneRegex.test(formData.phone)) {
//       setFormStatus("📞 Please enter a valid 10-digit Indian number.");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const web3Data = new FormData();
//     web3Data.append("access_key", "2a772a1a-4d89-408a-8ad5-0cad3ab8dd8d");
//     web3Data.append("name", formData.name);
//     web3Data.append("email", formData.email);
//     web3Data.append("mob_num", `${formData.countryCode} ${formData.phone}`);
//     web3Data.append("message", formData.message);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: web3Data,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setFormStatus("✅ Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           countryCode: "+91",
//           phone: "",
//           message: "",
//         });
//       } else {
//         setFormStatus("❌ Something went wrong. Try again!");
//       }
//     } catch (error) {
//       setFormStatus("⚠️ Network error. Please try later.");
//     }

//     setTimeout(() => setFormStatus(""), 4000);
//   };

//   return (
//     <section className="section contact" id="contact1" aria-label="contact">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12 p-6">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="contact-content md:w-1/2"
//         >
//           <p className="section-subtitle">Contact</p>
//           <h2 className="h2 section-title">Get In Touch</h2>
//           <p className="section-text mb-6">
//             Feel free to contact me for Order any Books and Journals.
//           </p>

//           <ul className="contact-list space-y-3 text-gray-700">
//             <li className="flex items-center gap-2">
//               <ion-icon name="location-outline"></ion-icon>
//               <span>Botanical Garden, Noida Sector 44</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <ion-icon name="call-outline"></ion-icon>
//               <a href="tel:+917003263897" className="contact-link">
//                 +91 7003263892
//               </a>
//             </li>
//             <li className="flex items-center gap-2">
//               <ion-icon name="mail-outline"></ion-icon>
//               <a
//                 href="mailto:pandeyujjwal497@gmail.com"
//                 className="contact-link"
//               >
//                 padfbdl497@gmail.com
//               </a>
//             </li>
//             <li className="flex items-center gap-2">
//               <ion-icon name="globe-outline"></ion-icon>
          
//             </li>
//           </ul>
//         </motion.div>

//         {/* Right Side */}
//         <motion.form
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           onSubmit={handleSubmit}
//           className="contact-form md:w-1/2 bg-white shadow-xl rounded-xl p-8 flex flex-col gap-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />

//           <div className="flex gap-2">
//             <select
//               name="countryCode"
//               value={formData.countryCode}
//               onChange={handleChange}
//               className="input-field w-1/4"
//             >
//               <option value="+91">🇮🇳 +91</option>
//               <option value="+1">🇺🇸 +1</option>
//               <option value="+44">🇬🇧 +44</option>
//               <option value="+61">🇦🇺 +61</option>
//               <option value="+81">🇯🇵 +81</option>
//             </select>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Mobile Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="input-field flex-1"
//             />
//           </div>

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="5"
//             className="input-field"
//           ></textarea>

//           <button type="submit" className="submit-btn">
//             <span>Send Message</span>
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </button>

//           {formStatus && (
//             <p className="text-center mt-2 text-sm font-medium text-blue-600">
//               {formStatus}
//             </p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus("⚠️ Please fill out all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("❌ Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (formData.countryCode === "+91" && !phoneRegex.test(formData.phone)) {
      setFormStatus("📞 Please enter a valid 10-digit Indian number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const web3Data = new FormData();
    web3Data.append("access_key", "2a772a1a-4d89-408a-8ad5-0cad3ab8dd8d");
    web3Data.append("name", formData.name);
    web3Data.append("email", formData.email);
    web3Data.append("mob_num", `${formData.countryCode} ${formData.phone}`);
    web3Data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Data,
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          message: "",
        });
      } else setFormStatus("❌ Something went wrong. Try again!");
    } catch {
      setFormStatus("⚠️ Network error. Please try later.");
    }
    setTimeout(() => setFormStatus(""), 4000);
  };

  return (
    <section className="contact-section" id="contact1" aria-label="contact">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-stretch gap-8 p-6">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-left"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-200 mb-6">
            Feel free to contact me for orders or queries related to books and journals.
          </p>

          <ul className="space-y-4 text-gray-100">
            <li className="flex items-center gap-3">
              <ion-icon name="location-outline"></ion-icon>
              <span>Botanical Garden, Noida Sector 44</span>
            </li>
            <li className="flex items-center gap-3">
              <ion-icon name="call-outline"></ion-icon>
              <a href="tel:+917003263897" className="hover:underline">
                +91 7003263892
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ion-icon name="mail-outline"></ion-icon>
              <a href="mailto:pandeyujjwal497@gmail.com" className="hover:underline">
                pandeyujjwal497@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="contact-right"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />

          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="input-field w-1/3"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+81">🇯🇵 +81</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="input-field flex-1"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="input-field"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>

          {formStatus && <p className="form-status">{formStatus}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
