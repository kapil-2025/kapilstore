import React from "react";

const categories = [
  {
    id: "surprise",
    icon: "🎀🩷",
    title: "Free Cute Aesthetic Keychains & Toys",
    desc: "Cute Accessories & Surprise Gifts",
  },
  {
    id: "stickers",
    icon: "🌸",
    title: "Free Aesthetic Trending Customized Stickers",
    desc: "Cute, Trending & Customized Stickers for Your Laptop, Phone, Bottle & Journal",
  },
  {
    id: "creative",
    icon: "🍫",
    title: "Free Chocolates",
    desc: "Delicious Chocolate Rewards",
  },
  {
    id: "study",
    icon: "📚",
    title: "Free Stationery Items",
    desc: "Pens, Discount, Notebooks, Files & More",
  },
  {
    id: "tech",
    icon: "📖",
    title: "Hire Someone To Do Your Written Work Free",
    desc: "Assignments, Notes & Practical Work",
  },
  {
    id: "lifestyle",
    icon: "🖨️",
    title: "Free Printing Pages",
    desc: "Free Printing Service Rewards",
  },
];

const CategorySelector = React.memo(function CategorySelector({ onSelect }) {
  return (
    <div className="popupCard">
      <h2>Choose Your Reward Category</h2>

      <p>
        Select your favourite category.
        <br />
        Once selected it cannot be changed.
      </p>

      {categories.map((item) => (
        <div
          key={item.id}
          className="categoryCard"
          onClick={() => onSelect(item.id)}
        >
          <span>{item.icon}</span>

          <h3>{item.title}</h3>

          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
});

export default CategorySelector;