import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import './Contact.css';

const PORTRAIT_SRC = `${import.meta.env.BASE_URL}images/profile/contact-portrait.png`;
const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;

const initialValues = {
  name: '',
  email: '',
  interest: '',
  message: '',
};

const interestOptions = [
  'Web Development',
  'Mobile Application Development',
  'UI/UX Design',
  'Database Management',
  'Cybersecurity',
  'Collaboration',
  'Other',
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.interest) {
    errors.interest = 'Please select an area of interest.';
  }

  const messageLength = values.message.trim().length;
  if (messageLength === 0) {
    errors.message = 'Please enter a message.';
  } else if (messageLength < MIN_MESSAGE_LENGTH) {
    errors.message = `Please use at least ${MIN_MESSAGE_LENGTH} characters.`;
  } else if (messageLength > MAX_MESSAGE_LENGTH) {
    errors.message = `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState('');

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setFeedback('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFeedback('');

    if (Object.keys(nextErrors).length > 0) return;

    setFeedback(
      'Your message was not sent: no form service is configured. Please use the email link above.',
    );
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <header className="contact-heading">
        <h2 id="contact-title" className="contact-title">
          <span className="contact-title-accent" aria-hidden="true" />
          CONTACT
        </h2>
        <p className="contact-caption">
          Have a project or collaboration in mind? Let’s talk.
        </p>
      </header>

      <figure className="contact-portrait">
        <img
          src={PORTRAIT_SRC}
          alt="John Aldrich C. Payawal"
          width="768"
          height="1022"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="contact-details">
        <div className="contact-detail">
          <MapPin className="contact-detail-icon" size={17} strokeWidth={1.5} aria-hidden="true" />
          <div className="contact-detail-copy">
            <span className="contact-detail-label">Location</span>
            <p className="contact-detail-value">{profile.location}</p>
          </div>
        </div>
        <div className="contact-detail">
          <Mail className="contact-detail-icon" size={17} strokeWidth={1.5} aria-hidden="true" />
          <div className="contact-detail-copy">
            <span className="contact-detail-label">Email</span>
            <a className="contact-detail-value contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-fields">
          <div className="contact-field">
            <label className="contact-visually-hidden" htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              required
              maxLength={100}
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && <span id="contact-name-error" className="contact-field-error">{errors.name}</span>}
          </div>

          <div className="contact-field">
            <label className="contact-visually-hidden" htmlFor="contact-email">Your Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              maxLength={254}
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && <span id="contact-email-error" className="contact-field-error">{errors.email}</span>}
          </div>

          <div className="contact-field contact-field-wide">
            <label className="contact-visually-hidden" htmlFor="contact-interest">
              What Are You Interested In?
            </label>
            <select
              id="contact-interest"
              name="interest"
              required
              value={values.interest}
              onChange={handleChange}
              className={values.interest ? 'has-value' : ''}
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={errors.interest ? 'contact-interest-error' : undefined}
            >
              <option value="" disabled>What Are You Interested In?</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.interest && (
              <span id="contact-interest-error" className="contact-field-error">{errors.interest}</span>
            )}
          </div>

          <div className="contact-field contact-field-wide">
            <label className="contact-visually-hidden" htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              required
              minLength={MIN_MESSAGE_LENGTH}
              maxLength={MAX_MESSAGE_LENGTH}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <span id="contact-message-error" className="contact-field-error">{errors.message}</span>
            )}
          </div>
        </div>

        <button className="contact-submit" type="submit">Send Message</button>
        {feedback && <p className="contact-feedback" role="alert">{feedback}</p>}
      </form>
    </section>
  );
}
