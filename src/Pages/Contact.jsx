import React, { useContext, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../Context/MainContext';


const ContactUs = () => {
    const { toast } = useContext(Context);
    const [errors, setErrors] = useState({});

    const validateForm = (contactUs) => {
        let newErrors = {};
        if (!/^[6789]\d{9}$/.test(contactUs.phone)) {
            newErrors.phone = "Phone number must start with 9, 8, 7, or 6 and be 10 digits long.";
        }
        if (!contactUs.name) {
            newErrors.name = "Name is required.";
        }
        if (!contactUs.email) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactUs.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        return newErrors;
    };

    const getContactUsData = (event) => {
        event.preventDefault();
        const contactUs = {
            name: event.target.name.value.trim(),
            email: event.target.email.value.trim(),
            phone: event.target.phone.value.trim(),
            text: event.target.textarea.value.trim()
        };

        const validationErrors = validateForm(contactUs);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const db = getDatabase();
        const userId = uuidv4();
        set(ref(db, 'contactUs/' + userId), contactUs)
            .then(() => {
                toast.success("Thank you! Your message has been received. We’ll get back to you soon!");
                event.target.reset();
                setErrors({});
            })
            .catch((error) => {
                toast.error("Something went wrong! Please try again.");
                console.error(error);
            });
    };

    return (
        <div className="max-w-7xl mx-auto p-6 md:p-12 bg-gray-50">
            <div className="relative h-64 md:h-96 lg:h-[400px] w-full bg-cover bg-center" 
                style={{ backgroundImage: "url('/images/contact-us-banner.jpg')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                {/* <h2 className="absolute inset-0 flex items-center justify-left text-2xl md:text-4xl font-bold text-white">
                    Get in Touch
                </h2> */}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-20">
                <div className="bg-white shadow-xl rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
                    <form className="space-y-5" onSubmit={getContactUsData}>
                        <div>
                            <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-xl" name="name" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-xl" name="email" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <input type="tel" placeholder="Your Mobile" className="w-full p-4 border rounded-xl" name="phone" />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <textarea placeholder="Your Message" className="w-full p-4 border rounded-xl h-36" name="textarea"></textarea>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-xl hover:opacity-90 transition font-semibold">Submit</button>
                    </form>
                </div>
                <div className="bg-gray-100 shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                    <img src="public/images/contact-us-banner.jpg" alt="Office" className="rounded-xl shadow-md mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                    <p className="flex items-center gap-3 mb-3 text-gray-700"><FaMapMarkerAlt className="text-blue-600" /> Kailash Chand Harish Kumar Shoe's Merchant Sadar Bazar</p>
                    <p className="flex items-center gap-3 mb-3 text-gray-700"><FaPhone className="text-blue-600" /> +91 8619187353 , 7023082475</p>
                    <p className="flex items-center gap-3 mb-3 text-gray-700"><FaEnvelope className="text-blue-600" /> paayonshoes@gmail.com</p>
                    <p className="text-gray-700 mt-4">Working Hours: Mon - Sun (8:00 AM - 9:00 PM)</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;