import React, { useState } from "react";
//import './Home.css';  Add styling for modal and content
import Footer from "./Footer";
function Home() {
  const [showMenu, setShowMenu] = useState(false); // state to toggle menu visibility

  // More sample menu items (You can modify this with actual data from your API)
  const menuItems = [
    
    { name: "Margherita Pizza", description: "A classic pizza with fresh mozzarella, tomato, and basil.", price: "$14.99" },
    { name: "Caesar Salad", description: "Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing.", price: "$7.99" },
    { name: "Penne Arrabbiata", description: "Pasta with spicy tomato sauce, garlic, and red chili flakes.", price: "$11.99" },
    { name: "Lasagna", description: "Layered pasta with meat sauce, ricotta, and mozzarella cheese.", price: "$16.99" },
    
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <div className="Home">
      <div className="home-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Fresh. Flavorful. Family-Owned.</p>
        <button className="cta-button" onClick={toggleMenu}>
          View Menu
        </button>
      </div>

      {/* Menu Modal */}
      {showMenu && (
        <div className="menu-modal">
          <div className="menu-modal-content">
            <h2>Our Menu</h2>
            <button className="close-button" onClick={toggleMenu}>X</button>
            <ul className="menu-list">
              {menuItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Home;
