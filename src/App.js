import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">GHUMO_DUNIYA</div>
        <ul>
          <li>Explore</li>
          <li>Destinations</li>
          <li>About</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>ADVENTURE AWAITS</h1>
        <p>Experience the world like never before.</p>
      </section>

      <div className="destinations">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Travel" />
          <div className="card-content">
            <h3>Bali, Indonesia</h3>
            <p>Tropical paradise awaits your arrival.</p>
          </div>
        </div>
        {/* Add more cards here */}
      </div>
    </div>
  );
}

export default App;