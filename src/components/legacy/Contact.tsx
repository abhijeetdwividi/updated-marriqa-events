export default function Contact() {
    return (
        <section id="contact">
            <div className="contact-inner">
                <div className="contact-info reveal-left">
                    <span className="section-label">Get In Touch</span>

                    <h2 className="section-title">
                        Begin Your <em>Luxury</em>
                        <br />
                        Journey
                    </h2>

                    <div className="gold-line"></div>

                    <br />

                    <h3>Contact Information</h3>

                    <div className="contact-detail">
                        <span className="contact-detail-icon">📞</span>
                        <div>
                            <a href="tel:+918252216549">+91 82522 16549</a>
                            <br />
                            <span
                                style={{
                                    fontSize: "0.7rem",
                                    color: "var(--text-muted)",
                                }}
                            >
                                Call or WhatsApp
                            </span>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-icon">✉</span>
                        <div>
                            <a href="mailto:marriqaevents@gmail.com">
                                marriqaevents@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-icon">📸</span>
                        <div>
                            <a
                                href="https://www.instagram.com/marriqaevents"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @marriqaevents
                            </a>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/918252216549?text=Hello%20Marriqa%20Events%2C%20I%20would%20like%20to%20discuss%20my%20event."
                        target="_blank"
                        rel="noreferrer"
                        className="wa-btn"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Us Now
                    </a>

                    <div className="contact-regions">
                        <h4>We Serve</h4>

                        <div className="region-tags">
                            <span className="region-tag">Delhi NCR</span>
                            <span className="region-tag">Rajasthan</span>
                            <span className="region-tag">Uttarakhand</span>
                            <span className="region-tag">Pan India</span>
                        </div>
                    </div>
                </div>

                <div className="reveal-right">
                    <form
                        id="bookingForm"
                        action="https://formspree.io/f/xbdwvelo"
                        method="POST"
                    >
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Event Type *</label>
                                <select
                                    name="event_type"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select event type
                                    </option>
                                    <option>Luxury Wedding</option>
                                    <option>Engagement Ceremony</option>
                                    <option>Birthday Celebration</option>
                                    <option>Corporate Event</option>
                                    <option>Destination Wedding</option>
                                    <option>Luxury Decor Only</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Event Date</label>
                                <input type="date" name="event_date" />
                            </div>

                            <div className="form-group">
                                <label>Approximate Budget</label>
                                <select name="budget" defaultValue="">
                                    <option value="" disabled>
                                        Select budget range
                                    </option>
                                    <option>₹2L – ₹5L</option>
                                    <option>₹5L – ₹10L</option>
                                    <option>₹10L – ₹25L</option>
                                    <option>₹25L – ₹50L</option>
                                    <option>₹50L+</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Event Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="City / Venue"
                                />
                            </div>

                            <div className="form-group">
                                <label>Guest Count</label>
                                <select name="guests" defaultValue="">
                                    <option value="" disabled>
                                        Approximate guests
                                    </option>
                                    <option>Up to 50</option>
                                    <option>50 – 150</option>
                                    <option>150 – 300</option>
                                    <option>300 – 500</option>
                                    <option>500+</option>
                                </select>
                            </div>

                            <div className="form-group full">
                                <label>Tell Us Your Dream</label>
                                <textarea
                                    name="message"
                                    placeholder="Share your vision, inspirations, or any specific requirements..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="btn-primary">
                                Send Enquiry &nbsp;→
                            </button>
                        </div>

                        <div className="form-success" id="formSuccess">
                            ✦ &nbsp; Thank you. We will be in touch within 24
                            hours. &nbsp; ✦
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
