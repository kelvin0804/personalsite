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

  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    workSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero">
      <div ref={titleRef} className="hero-content">
        <h1 className="fade-in">Hello, I'm WK</h1>
        <p className="subtitle fade-in">Designer & Developer</p>
        <button onClick={scrollToWork} className="cta-button">View My Work</button>
      </div>
    </header>
  );
};

export default Hero; 