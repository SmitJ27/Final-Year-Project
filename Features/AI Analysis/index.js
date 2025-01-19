import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">AI Analysis</div>
        {/* Navigation links removed */}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Unlock Your Learning Potential with AI</h1>
          <p style={{ fontWeight: "bold" }}>
            Leverage AI-driven insights to discover your strengths and focus areas.
          </p>
          <a href="QuizApp/index.html" className="btn-primary">
            Start Your Analysis
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="features-cards">
          <a href="QuizApp/index.html" className="card">
            <h3>Interactive Quiz</h3>
            <p>Select your area of interest and take an AI-generated quiz.</p>
          </a>
          <a href="AI-Analysis/Resources/index.html" className="card">
            <h3>Personalized Resources</h3>
            <p>Get recommended study materials based on your strengths.</p>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About AI Analysis</h2>
        <p style={{ fontWeight: "bold" }}>
          AI Analysis helps you understand your learning style and focuses on the areas where you need to improve.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p style={{ fontWeight: "bold" }}>
          &copy; 2025 AI Analysis. All Rights Reserved.
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
