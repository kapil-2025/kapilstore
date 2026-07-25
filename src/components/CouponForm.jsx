import React from "react";

const CouponForm = React.memo(function CouponForm({
  code,
  setCode,
  name,
  setName,
  error,
  onContinue,
}) {
  return (
    <>
      <h2>Enter Your Coupon Code</h2>

      <p className="infoText">
        Enter your unique 4-character coupon code to unlock your reward.
      </p>

      <input
        className="inputBox"
        type="text"
        maxLength={4}
        value={code}
        placeholder="Eg. AB12"
        onChange={(e) => setCode(e.target.value.toUpperCase())}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <p className="infoText">
        Want to explore all the exciting gifts you can win?
        <br />
        <br />
        <a
          href="https://instagram.com/KapilStore.in"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#25D366",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          📸 Instagram: @KapilStore.in
        </a>
      </p>

      <button className="btn" onClick={onContinue}>
        Continue
      </button>
    </>
  );
});

export default CouponForm;