import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero">
      <div ref={titleRef} className="hero-content">
        <h1 className="fade-in">Hello, I'm [Your Name]</h1>
        <p className="subtitle fade-in">Designer & Developer</p>
        <button className="cta-button">View My Work</button>
      </div>
    </header>
  );
};

export default Hero; 