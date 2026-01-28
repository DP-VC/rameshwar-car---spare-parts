import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
    // Google Maps Embed URL for "Rameshwar Car & Spare Parts" or the provided address
    // Since exact place ID is unknown, I'll use a search query embed with the address provided.
    const addressQuery = "Paras Market, Sumeru Mandir Road, Surendranagar, Gujarat";
    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123!2d72.123!3d22.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(addressQuery)}!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`;

    return (
        <div className="bg-gray-50">
            <section className="bg-brand-blue py-16 text-center text-white">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg text-blue-200">Get in touch for enquiries, quotes, and expert advice.</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Contact Information */}
                    <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Phone size={120} className="text-brand-red" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Visit Our Store</h3>
                                    <p className="text-gray-600 mt-1 leading-relaxed">
                                        Shop No. 3, Paras Market, Jin Compound,<br /> Near Jam Travellers, Opp. Reliance Mall,<br /> Bus Station Road, Surendranagar, Gujarat, India

                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-100 p-3 rounded-full text-brand-red">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600 mt-1">
                                        <a href="tel:+919876543210" className="hover:text-brand-red underline">+91 7870763333</a>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9am - 8pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">WhatsApp</h3>
                                    <p className="text-gray-600 mt-1">
                                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 underline">Chat with us on WhatsApp</a>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Fast response for parts enquiry</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <h3 className="font-bold text-gray-800 mb-4">Opening Hours</h3>
                            <div className="flex items-center text-gray-600 space-x-2">
                                <Clock size={18} className="text-gray-400" />
                                <span>Monday - Saturday: 9:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex items-center text-gray-600 space-x-2 mt-2">
                                <Clock size={18} className="text-gray-400" />
                                <span>Sunday: Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 md:h-auto min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.673537995996!2d71.6411122!3d22.7226968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395940e0501f2c2f%3A0x6556c7f3bffdae89!2sRameshwar%20Car%20%26%20Spare%20Parts!5e1!3m2!1sen!2sin!4v1769499747988!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* 
                      Note: The embed URL above is a generic mock because "Surendranagar, Gujarat" might not resolve purely to the text.
                      In production, the client should provide the exact Google Maps embed code or Place ID.
                   */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
