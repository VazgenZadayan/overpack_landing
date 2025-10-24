import React, { useMemo, useRef, useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import LogoWithText from "../../../public/LogoWithText.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import {
    FaTruck,
    FaUserShield,
    FaCreditCard,
    FaBolt,
    FaBoxes,
    FaTimes,
    FaBell,
} from "react-icons/fa";
import gsap from "gsap";
import Image from "next/image";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import AppStoreBadge from "@/components/AppStoreBadge";
import config from "@/config/env";

interface HeroProps {
    dictionary: any;
}

const Hero: React.FC<HeroProps> = ({ dictionary }) => {
    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'google' | 'apple'>('google');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [showApiError, setShowApiError] = useState(false);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const googlePlayBtnRef = useRef<HTMLDivElement>(null);
    const appStoreBtnRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const featuresTrackRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            element.focus(); // Фокус для скринридеров
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent, sectionId: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            scrollToSection(sectionId);
        }
    };

    const handleStoreClick = (type: 'google' | 'apple') => {
        setModalType(type);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEmail('');
        setSubmitStatus('idle');
        setIsSubmitting(false);
        setShowApiError(false);
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.trim()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    contact: email.trim()
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                closeModal();
                setShowApiError(true);
                
                setTimeout(() => {
                    setShowApiError(false);
                }, 5000);
            }
            
        } catch (error) {
            closeModal();
            setShowApiError(true);
            
            setTimeout(() => {
                setShowApiError(false);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleModalKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const featuresRepeatCount = 3;

    const RenderFeatures = useMemo(() => {
        const icons = [
            <FaTruck size={24} color="#fff" key="truck" />,
            <FaUserShield size={24} color="#fff" key="shield" />,
            <FaCreditCard size={24} color="#fff" key="card" />,
            <FaBolt size={24} color="#fff" key="bolt" />,
            <FaBoxes size={24} color="#fff" key="boxes" />,
        ];
        return Array.from({ length: featuresRepeatCount }).flatMap((_, i) =>
            dictionary.hero.features.map((text: string, j: number) => (
                <div 
                    className={styles["features__block"]} 
                    key={i + "-" + j}
                    role="listitem"
                    aria-label={text}
                >
                    {icons[j]}
                    <span className={styles["features__text"]}>{text}</span>
                </div>
            ))
        );
    }, [featuresRepeatCount, dictionary]);

    useEffect(() => {
        // Анимация заголовка
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }
        // Анимация подзаголовков
        if (subtitleRefs.current.length) {
            gsap.fromTo(
                subtitleRefs.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    delay: 0.3,
                    ease: "power2.out",
                }
            );
        }
        // Анимация кнопок
        if (googlePlayBtnRef.current) {
            gsap.fromTo(
                googlePlayBtnRef.current,
                { x: -40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.7,
                    ease: "power2.out",
                }
            );
        }
        if (appStoreBtnRef.current) {
            gsap.fromTo(
                appStoreBtnRef.current,
                { x: 40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.85,
                    ease: "power2.out",
                }
            );
        }
        // Анимация header (выплывает сверху)
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: -60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.2,
                    ease: "power2.out",
                }
            );
        }
        // Анимация features__block
        if (featuresTrackRef.current) {
            const blocks = gsap.utils.toArray<HTMLElement>(
                featuresTrackRef.current.querySelectorAll(
                    `.${styles["features__block"]}`
                )
            );
            gsap.fromTo(
                blocks,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    delay: 1.1,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    // Анимация модального окна
    useEffect(() => {
        if (showModal && modalRef.current) {
            const modalButtons = modalRef.current.querySelectorAll(`.${styles["modal-button"]}`);
            
            gsap.fromTo(
                modalButtons,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: "power2.out",
                }
            );
        }
    }, [showModal]);

    return (
        <section className={styles["main-banner"]} id="main" role="banner" aria-label="Main banner">
            <header className={styles["hero-header"]} ref={headerRef}>
                <Link href="/" className={styles["hero-logo"]} aria-label="Overpack - Home">
                    <Image src={LogoWithText} alt="Overpack Logo" width={120} height={60} />
                </Link>
                <nav className={styles["hero-nav"]} role="navigation" aria-label="Main navigation">
                    <button
                        onClick={() => scrollToSection("main")}
                        onKeyDown={(e) => handleKeyDown(e, "main")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/" ? styles["active"] : ""
                        }`}
                        aria-label={`Go to ${dictionary.hero.nav.main} section`}
                        tabIndex={0}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.main}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("advantages")}
                        onKeyDown={(e) => handleKeyDown(e, "advantages")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/advantages" ? styles["active"] : ""
                        }`}
                        aria-label={`Go to ${dictionary.hero.nav.advantages} section`}
                        tabIndex={0}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.advantages}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("business")}
                        onKeyDown={(e) => handleKeyDown(e, "business")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/business" ? styles["active"] : ""
                        }`}
                        aria-label={`Go to ${dictionary.hero.nav.business} section`}
                        tabIndex={0}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.business}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        onKeyDown={(e) => handleKeyDown(e, "about")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/about" ? styles["active"] : ""
                        }`}
                        aria-label={`Go to ${dictionary.hero.nav.about} section`}
                        tabIndex={0}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.about}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("partners")}
                        onKeyDown={(e) => handleKeyDown(e, "partners")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/partners" ? styles["active"] : ""
                        }`}
                        aria-label={`Go to ${dictionary.hero.nav.partners} section`}
                        tabIndex={0}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.partners}
                        </span>
                    </button>
                    <div className={styles["hero-lang"]}>
                        <LanguageSwitcher />
                    </div>
                </nav>
            </header>

            <h1 className={styles["main-banner__title"]} ref={titleRef}>
                {dictionary.hero.main}
            </h1>

            <p
                className={`${styles["main-banner__subtitle"]} ${styles["main-banner__subtitle--dark"]}`}
                ref={(el) => {
                    subtitleRefs.current[0] = el;
                }}
            >
                {dictionary.hero.subtitle1}
                <br />

                <span
                    className={styles["main-banner__subtitle--pink"]}
                    ref={(el) => {
                        subtitleRefs.current[1] = el;
                    }}
                >
                    {dictionary.hero.subtitle2}
                </span>
                <br />
                {dictionary.hero.subtitle3}
            </p>

            <div className={styles["appstore-buttons"]} role="group" aria-label="Download app">
                <button
                    className={styles["store-badge"]}
                    aria-label="Download Overpack app from Apple App Store"
                    onClick={() => handleStoreClick('apple')}
                    onKeyDown={(e) => e.key === 'Enter' && handleStoreClick('apple')}
                >
                    <AppStoreBadge />
                </button>
                <button
                    className={styles["store-badge"]}
                    aria-label="Download Overpack app from Google Play Store"
                    onClick={() => handleStoreClick('google')}
                    onKeyDown={(e) => e.key === 'Enter' && handleStoreClick('google')}
                >
                    <GooglePlayBadge />
                </button>
            </div>
            <div className={styles["features"]} role="region" aria-label="Features">
                <div
                    className={styles["features__track"]}
                    ref={featuresTrackRef}
                    aria-live="polite"
                >
                    {RenderFeatures}
                </div>
            </div>

                         {showModal && (
                 <div className={styles["modal-overlay"]} onClick={closeModal} onKeyDown={handleModalKeyDown} role="dialog" aria-modal="true" aria-label="App release notification">
                     <div className={styles["modal-content"]} ref={modalRef} onClick={(e) => e.stopPropagation()} onKeyDown={handleModalKeyDown}>
                        <button className={styles["modal-close-btn"]} onClick={closeModal} onKeyDown={handleModalKeyDown} aria-label="Close notification">
                            <FaTimes />
                        </button>
                        <div className={styles["modal-icon"]}>
                            <FaBell />
                        </div>
                        <h2 className={styles["modal-title"]}>{dictionary.hero.modal.title}</h2>
                        <p className={styles["modal-message"]}>{dictionary.hero.modal.message}</p>
                        
                        {submitStatus === 'success' ? (
                            <div className={styles["modal-success"]}>
                                <p className={styles["modal-success-text"]}>{dictionary.hero.modal.success || "Thank you! We'll notify you when the app is released."}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleEmailSubmit} className={styles["modal-form"]}>
                                <div className={styles["modal-input-group"]}>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={dictionary.hero.modal.placeholder || "Enter your email or phone number"}
                                        className={`${styles["modal-input"]} ${submitStatus === 'error' ? styles["modal-input--error"] : ''}`}
                                        disabled={isSubmitting}
                                        aria-label="Email or phone number"
                                    />
                                    {submitStatus === 'error' && (
                                        <p className={styles["modal-error"]}>
                                            {dictionary.hero.modal.error || "Please enter a valid email or phone number"}
                                        </p>
                                    )}
                                </div>
                                <div className={styles["modal-buttons"]}>
                                    <button 
                                        type="submit" 
                                        className={styles["modal-button"]} 
                                        disabled={isSubmitting || !email.trim()}
                                        onKeyDown={handleModalKeyDown}
                                    >
                                        {isSubmitting ? (dictionary.hero.modal.submitting || "Submitting...") : (dictionary.hero.modal.submit || "Notify me")}
                                    </button>
                                </div>
                            </form>
                         )}
                    </div>
                </div>
            )}

            {showApiError && (
                <div className={styles["api-error-overlay"]} onClick={() => setShowApiError(false)}>
                    <div className={styles["api-error-content"]} onClick={(e) => e.stopPropagation()}>
                        <button 
                            className={styles["api-error-close"]} 
                            onClick={() => setShowApiError(false)}
                            aria-label="Close error message"
                        >
                            <FaTimes />
                        </button>
                        <div className={styles["api-error-icon"]}>
                            <FaBell />
                        </div>
                        <h3 className={styles["api-error-title"]}>
                            {dictionary.hero.modal.apiErrorTitle || "Something went wrong"}
                        </h3>
                        <p className={styles["api-error-message"]}>
                            {dictionary.hero.modal.apiErrorMessage || "Please contact us directly for notifications about the app release."}
                        </p>
                        <a 
                            href={`tel:${config.CONTACT_PHONE}`} 
                            className={styles["api-error-call-button"]}
                        >
                            {dictionary.hero.modal.callButton || "Call us"}
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
