import React, { useState } from "react";
import "./menucss.css";

const menuData = {
  Starters: [
    {
      name: "Smoked Paneer Tikka",
      desc: "Chargrilled cottage cheese with spices",
      price: 249,
      oldPrice: 299,
      image: "/pannertikkaimg.webp"
    },
    {
      name: "Chilli Chicken",
      desc: "Spicy chicken bites with tangy sauce",
      price: 299,
      oldPrice: 349,
      image: "/chillichickenimg.webp"
    },
    {
        name:"Chicken Lollipop",
        desc:"Crispy chicken lollipops with tangy sauce",
        price: 279,
        oldPrice: 329,
        image: "/chickenlollipopimg.webp"
    },
  ],
  Mains: [
    {
      name: "Butter Chicken Deluxe",
      desc: "Creamy tomato gravy with tender chicken",
      price: 399,
      oldPrice: 449,
      image: "/butterchickenimg.webp"
    },
    {
      name: "Hyderabadi Biryani",
      desc: "Aromatic basmati rice with rich spices",
      price: 349,
      oldPrice: 399,
      image: "/hydbiryaniimg.webp"
    },
    {
        name:"Paneer Biryani",
        desc:"Fragrant rice with spiced paneer cubes",
        price: 329,
        oldPrice: 379,
        image: "/paneerbiryaniimg.webp"
    }
  ],
  Drinks: [
    {
      name: "Berry Blast Mojito",
      desc: "Fresh mint with berry infusion",
      price: 149,
      oldPrice: 199,
      image: "/berrymojitoimg.webp"
    },
    {
      name: "Classic Cold Coffee",
      desc: "Smooth and refreshing coffee blend",
      price: 129,
      oldPrice: 159,
      image: "/coldcoffeeimg.webp"
    },
    {
        name:"Blue Lagoon Mocktail",
        desc:"Citrusy and vibrant blue mocktail",
        price: 159,
        oldPrice: 209,
        image: "/bluelagoonimg.webp"
    }
  ],
  Desserts: [
    {
      name: "Chocolate Lava Cake",
      desc: "Warm cake with molten chocolate center",
      price: 199,
      oldPrice: 249,
      image: "/chocolatelavaimg.webp"
    },
    {
        name:"Apricot Delight",
        desc:"Sweet apricot compote with vanilla ice cream",
        price: 179,
        oldPrice: 229,
        image: "/apricotimg.webp"
    },

    {
      name: "Gulab Jamun Delight",
      desc: "Soft dumplings in sugar syrup",
      price: 149,
      oldPrice: 179,
      image: "/gulabjamunimg.webp"
    }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Mains");

  return (
    <section className="menu" id="menu">
      <h1>Our Menu</h1>

      {/* Tabs */}
      <div className="menu-tabs">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={activeTab === category ? "active" : ""}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="menu-grid">
        {menuData[activeTab].map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name}/>

            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <div className="price-row">
                <span className="old-price">₹{item.oldPrice}</span>
                <span className="price">₹{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;