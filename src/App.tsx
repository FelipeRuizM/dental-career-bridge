import { useEffect, useState } from 'react'
import logoImg from './assets/logo.png'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import './App.css'

const heroFeatures = [
  {
    title: 'Clarity',
    desc: 'Understand how the system works.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3v1h6v-1c0-.9.3-1.7 1-2.3A7 7 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    title: 'Direction',
    desc: 'Know what employers expect from you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Confidence',
    desc: 'Prepare for real opportunities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Progress',
    desc: 'Build your path step by step.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18" />
        <rect x="5" y="14" width="3" height="6" />
        <rect x="10.5" y="10" width="3" height="10" />
        <rect x="16" y="6" width="3" height="14" />
        <path d="m6 10 5-4 4 3 5-5" />
        <path d="M16 4h4v4" />
      </svg>
    ),
  },
]

const programItems = [
  {
    title: 'Understand how dental clinics actually function in North America',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M3 21h18" />
        <path d="M9 21v-6h6v6" />
        <path d="M8 11h2M14 11h2M8 14h2M14 14h2" />
      </svg>
    ),
  },
  {
    title: 'Recognize what employers are truly looking for',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c.6-3 3-5 6-5s5.4 2 6 5" />
        <path d="M14 20c.4-2 1.7-3.6 3.5-4.2" />
      </svg>
    ),
  },
  {
    title: 'Approach working interviews with more confidence',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12Z" />
        <path d="M9 12h.01M12 12h.01M15 12h.01" />
      </svg>
    ),
  },
  {
    title: 'Avoid common mistakes that delay your progress',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.3 3.7 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Start building your path with direction instead of guesswork',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h4v-5H3z" />
        <path d="M9 20h4V11H9z" />
        <path d="M15 20h4V6h-4z" />
      </svg>
    ),
  },
  {
    title: 'Adapt to the professional and cultural environment with more clarity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
]

const forYou = [
  'You are an internationally trained dentist',
  'You are planning to move or already living in the USA or Canada',
  'You are ready to create new opportunities',
  'You are open to starting strategically and building your path step by step',
  'You want clarity, not guesswork',
]

const notForYou = [
  'You are looking for a direct licensing or certification pathway',
  'You expect immediate results without adapting to a new system',
  'You are not open to starting from a different position as part of your transition',
]

type LogoProps = { variant?: 'light' | 'dark' }
const Logo = ({ variant = 'light' }: LogoProps) => (
  <a
    href="#top"
    className={`logo ${variant === 'dark' ? 'logo-dark' : ''}`}
    aria-label="Your Dental Career Bridge"
  >
    <img src={logoImg} alt="" className="logo-img" />
    <span className="logo-wordmark">Your Dental Career Bridge</span>
  </a>
)

const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/A12345678X'

const NAV_LINKS = [
  { label: 'Program Overview', href: '#program-overview' },
  { label: "What You'll Learn", href: '#what-youll-learn' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'FAQ', href: '#faq' },
]

const modalOffers = [
  'Strategic direction',
  'Real-world insights',
  'Practical preparation',
  'Greater clarity before entering the job market',
]

const modalNotes = [
  'It does not replace licensing processes',
  'It does not provide immigration or work authorization',
  'It does not guarantee a job or employment',
]

const trustBadges = [
  {
    title: '100% Secure Payment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h3" />
      </svg>
    ),
  },
  {
    title: 'Your Information Is Protected',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
      </svg>
    ),
  },
  {
    title: 'Access After Enrollment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
        <path d="M3 4v16" />
      </svg>
    ),
  },
  {
    title: 'Available for a Limited Period',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
]

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

type EnrollmentModalProps = {
  open: boolean
  onClose: () => void
}

const EnrollmentModal = ({ open, onClose }: EnrollmentModalProps) => {
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <div className="modal-left">
          <h2 className="modal-title">Before You Continue</h2>
          <p className="modal-subtitle">Let's make sure this program is the right fit for you.</p>
          <p className="modal-desc">
            This is a preparation and guidance experience designed to help internationally trained
            dentists better understand the North American dental environment and approach
            opportunities more strategically.
          </p>

          <div className="modal-note">
            <p className="modal-note-label">Please note:</p>
            <ul>
              {modalNotes.map((n) => (
                <li key={n}>
                  <XIcon />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="modal-offers-label">What This Program Offers:</p>
          <div className="modal-offers">
            {modalOffers.map((o) => (
              <div className="modal-offer" key={o}>
                <CheckIcon />
                <span>{o}</span>
              </div>
            ))}
          </div>

          <label className="modal-agree">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I understand and wish to continue.</span>
          </label>

          <a
            className={`modal-cta ${agreed ? '' : 'modal-cta-disabled'}`}
            href={agreed ? HOTMART_CHECKOUT_URL : undefined}
            target={agreed ? '_blank' : undefined}
            rel={agreed ? 'noopener noreferrer' : undefined}
            aria-disabled={!agreed}
            onClick={(e) => {
              if (!agreed) e.preventDefault()
            }}
          >
            <LockIcon />
            <span>Proceed to Secure Checkout</span>
            <ArrowRight />
          </a>
          <p className="modal-secure">
            <LockIcon /> Secure checkout powered by Hotmart
          </p>
        </div>

        <div className="modal-right">
          <div className="modal-image">
            <img
              src={image3}
              alt="Dentist reviewing program"
            />
          </div>
          <div className="modal-notice">
            <div className="modal-notice-icon" aria-hidden>
              <svg viewBox="0 0 32 32" fill="none" stroke="#0f7d73" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4 6 8v9c0 6 4.5 11 10 12 5.5-1 10-6 10-12V8l-10-4Z" />
                <path d="M16 12v6" />
                <path d="M16 21h.01" />
              </svg>
            </div>
            <div className="modal-notice-body">
              <h3>Important Notice</h3>
              <p>
                This program is a preparation and guidance experience designed for internationally
                trained dentists.
              </p>
              <p>
                <strong>
                  It does not replace licensing processes and does not provide authorization to
                  work in Canada or the United States, nor does it include immigration or visa
                  support.
                </strong>
              </p>
            </div>
          </div>
          <div className="modal-badges">
            {trustBadges.map((b) => (
              <div className="modal-badge" key={b.title}>
                <div className="modal-badge-icon">{b.icon}</div>
                <p>{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const StarRow = () => (
  <div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="#f1c33d" stroke="#f1c33d" strokeWidth="1" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 10 17 15 18.5 22 12 18.5 5.5 22 7 15 2 10 9 9" />
      </svg>
    ))}
  </div>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const CheckIcon = () => (
  <svg className="bullet-check" viewBox="0 0 24 24" fill="#149a8e">
    <circle cx="12" cy="12" r="10" />
    <path d="m7.5 12.2 3 3 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const XIcon = () => (
  <svg className="bullet-x" viewBox="0 0 24 24" fill="#d65a4f">
    <circle cx="12" cy="12" r="10" />
    <path d="m8 8 8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

function App() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const openEnroll = () => setEnrollOpen(true)
  const closeEnroll = () => setEnrollOpen(false)

  return (
    <div className="page" id="top">
      <header className="site-header">
        <Logo />
        <nav className="nav">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Your Dental
            <br />
            Career Bridge
            <br />
            <span className="accent">to USA and Canada</span>
          </h1>
          <p className="hero-desc">
            A strategic program designed to help internationally trained dentists transition into
            the North American dental field with clarity, confidence, and real-world understanding.
          </p>

          <div className="hero-features">
            {heroFeatures.map((f) => (
              <div className="hero-feature" key={f.title}>
                <div className="hero-feature-icon">{f.icon}</div>
                <div className="hero-feature-title">{f.title}</div>
                <div className="hero-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>

          <button className="btn-primary" onClick={openEnroll}>
            Continue to Enrollment <ArrowRight />
          </button>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img
              src={image1}
              alt="Dental professional in clinic"
            />
          </div>
          <div className="testimonial">
            <StarRow />
            <p className="testimonial-quote">
              "This program gave me the clarity and confidence I needed to finally take the first
              step."
            </p>
            <p className="testimonial-author">— Dr. A., Brazil</p>
          </div>
        </div>
      </section>

      <section className="challenge-section" id="program-overview">
        <div className="challenge-grid">
          <div className="challenge-card">
            <div className="challenge-photo">
              <img
                src={image2}
                alt="Dentist studying"
              />
            </div>
            <div className="challenge-content">
              <h2>The Challenge</h2>
              <p>
                Many internationally trained dentists arrive in North America full of potential —
                but without a clear roadmap.
              </p>
              <p>Not because they are not capable. But because the system is different.</p>
              <p>
                And without understanding how it works, even highly qualified professionals can
                feel stuck, uncertain, and overlooked.
              </p>
            </div>
          </div>

          <div className="perspective-card">
            <div className="perspective-icon" aria-hidden>
              <svg viewBox="0 0 32 32" fill="none" stroke="#0f7d73" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 22 22 5l5 5L10 27Z" />
                <path d="m18 9 5 5" />
                <path d="m4 24 4 4" />
                <circle cx="6" cy="26" r="1.5" />
              </svg>
            </div>
            <h2>A New Perspective</h2>
            <p>This is where strategy changes everything.</p>
            <p>
              Transitioning into a new country is not just about knowledge — it's about
              understanding how to position yourself inside a new system.
            </p>
            <p>
              When you understand how clinics operate, what they expect, and how to approach
              opportunities... everything becomes clearer.
            </p>
          </div>
        </div>
      </section>

      <section className="program-section" id="what-youll-learn">
        <h2 className="program-heading">
          <span className="dot">•</span> Program Overview <span className="dot">•</span>
        </h2>
        <p className="program-sub">Your Dental Career Bridge to USA and Canada helps you:</p>
        <div className="program-grid">
          {programItems.map((item) => (
            <div className="program-item" key={item.title}>
              <div className="program-icon">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="callout" id="faq">
        <div className="callout-icon" aria-hidden>
          <svg viewBox="0 0 32 32" fill="none" stroke="#0b2545" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4 6 8v9c0 6 4.5 11 10 12 5.5-1 10-6 10-12V8l-10-4Z" />
            <path d="m11 16 3.5 3.5L22 12" />
          </svg>
        </div>
        <div className="callout-body">
          <h3>Important to Understand</h3>
          <div className="callout-grid">
            <p>
              This program is designed as a preparation and strategic guidance experience. It does
              not replace official licensing processes or provide immigration or work authorization.
            </p>
            <p>
              Instead, it focuses on something many professionals overlook:
              <br />
              <strong>
                understanding how to navigate the system effectively and position yourself for
                opportunities.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className="audience" id="who-its-for">
        <div className="audience-card audience-yes">
          <div className="audience-head">
            <div className="audience-avatar audience-avatar-yes" aria-hidden>
              <svg viewBox="0 0 24 24" fill="#fff">
                <circle cx="12" cy="9" r="4" />
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
              </svg>
            </div>
            <h3>This Program Is For You If:</h3>
          </div>
          <ul>
            {forYou.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="audience-card audience-no">
          <div className="audience-head">
            <div className="audience-avatar audience-avatar-no" aria-hidden>
              <svg viewBox="0 0 24 24" fill="#fff">
                <circle cx="12" cy="9" r="4" />
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
              </svg>
            </div>
            <h3>This Program May Not Be Right For You If:</h3>
          </div>
          <ul>
            {notForYou.map((item) => (
              <li key={item}>
                <XIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="footer-cta">
        <div className="footer-brand">
          <Logo variant="dark" />
        </div>
        <div className="footer-text">
          <h3>Your experience has value.</h3>
          <p>With the right strategy, it can open new doors.</p>
        </div>
        <div className="footer-action">
          <button className="btn-primary" onClick={openEnroll}>
            Continue to Enrollment <ArrowRight />
          </button>
          <p className="footer-note">Take the first step toward your new future.</p>
        </div>
      </section>

      <EnrollmentModal open={enrollOpen} onClose={closeEnroll} />
    </div>
  )
}

export default App
