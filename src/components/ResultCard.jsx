import React from "react";

const categoryNames = {
  study: "📝 Free Stationery Items",
  tech: "✍ Hire Someone To Do Your Written Work",
  creative: "🍫 Free Chocolates",
  lifestyle: "🖨 Free Printing Pages",
  surprise: "🎀 Free Cute Aesthetic Keychains & Toys",
  stickers: "🌸 Free Aesthetic Trending Customized Stickers",
};

const ResultCard = React.memo(function ResultCard({
  stars,
  gift,
  giftCategory,
}) {
  return (
    <div className="resultCard">

      <h1>🎊 Congratulations!</h1>

      <h2 className="starsText">{stars}</h2>

      <div className="categoryBadge">
        {categoryNames[giftCategory]}
      </div>

      <p>
        🎉 Your reward is ready!
        <br />
        📲 Contact us on WhatsApp or Instagram to claim it.
      </p>

      <h2>Your Reward</h2>

      <h3 className="giftName">{gift}</h3>

      <p className="giftInfo">
        📸 Want to see your reward?
        <br />
        Visit our Instagram page for the product image.
        <br /><br />

        <a
          href="https://instagram.com/KapilStore.in"
          target="_blank"
          rel="noreferrer"
        >
          📸 Instagram: @KapilStore.in
        </a>
      </p>

      <div className="notice">

        <h4>📌 Important Notice</h4>

        <p>
          Please keep your original coupon card safe.
          It is mandatory while claiming your reward.
        </p>

        <a
          href="https://wa.me/917982670413"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            💬 Claim Reward on WhatsApp
          </button>
        </a>

      </div>

    </div>
  );
});

export default ResultCard;