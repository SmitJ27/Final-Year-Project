import React , { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";


const App = () => {
  return (

    <div>
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">LearnSmart</div>
        <nav>
          <a href="Login Page/index.html" className="cta-button">
            Login
          </a>
          <a href="Contact Us/index.html" className="cta-button">
            Contact Us
          </a>
          <a href="About Us/index.html" className="cta-button">
            About Us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Personalized Learning Paths with AI</h1>
          <p style={{ fontWeight: "bold" }}>
            Empower your learning with AI-driven recommendations and real-time
            progress tracking!
          </p>
          <a href="To-Do-List/index.html" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="features-cards">
          <a href="Features/AI Analysis/index.html" className="card">
            <h3>AI Analysis</h3>
            <p>Understand your strengths, weaknesses, and learning style.</p>
          </a>
          <a href="Features/Resource Recommendation/index.html" className="card">
            <h3>Resource Recommendations</h3>
            <p>Get curated articles, videos, and quizzes based on your needs.</p>
          </a>
          <a href="Features/Progress Tracking/index.html" className="card">
            <h3>Progress Tracking</h3>
            <p>Monitor your learning journey in real-time.</p>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About LearnSmart</h2>
        <p style={{ fontWeight: "bold" }}>
          LearnSmart is an AI-powered platform that creates personalized
          learning paths for students, helping them achieve their educational
          goals efficiently.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p style={{ fontWeight: "bold" }}>
          &copy; 2025 LearnSmart. All Rights Reserved.
        </p>
        <nav>
          {/* Footer links can be added here if needed */}
        </nav>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

