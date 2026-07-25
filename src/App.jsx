import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";



function App() {

  /* ===========================
        STATES
  ============================ */

  const [code, setCode] = useState("");

  const [showCategory, setShowCategory] = useState(false);
 
  const [showResult, setShowResult] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const [error, setError] = useState("");

  const [giftCategory, setGiftCategory] = useState("");

  const [stars, setStars] = useState("");
  
  const [gift, setGift] = useState("");

  /* ===========================
      USER DETAILS
  ============================ */

  const [name, setName] = useState("");


  /* ===========================
        ERRORS
  ============================ */

  const [nameError, setNameError] = useState("");
  

  /* ===========================
        CARD REF
  ============================ */

  const cardRef = useRef(null);

  /* ===========================
      SEND REQUEST
  ============================ */

  async function sendRequest(category) {

    try {

      const response = await fetch(
        "https://kapilstore-backend-2.onrender.com/api/game/play",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            name,

          code,

            giftCategory: category

          })

        }
      );

      return await response.json();

    }

    catch (error) {

      alert("Unable to connect with server.");

      return null;

    }

  }

  /* ===========================
      CARD EFFECT
  ============================ */

  function handleMove(e) {

    const card = cardRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - .5) * 15;

    const rotateX = ((rect.height / 2 - y) / rect.height) * 15;

    card.style.transform =

      `perspective(1200px)

       rotateX(${rotateX}deg)

       rotateY(${rotateY}deg)

       scale(1.02)`;

  }

  function resetCard() {

    cardRef.current.style.transform =

      "perspective(1200px) rotateX(0) rotateY(0) scale(1)";

  }

  /* ===========================
      CONFETTI
  ============================ */

  function celebrate() {

    confetti({

      particleCount: 220,

      spread: 180,

      startVelocity: 60,

      scalar: 1.3,

      origin: {

        x: .5,

        y: .45

      }

    });

  }

  /* ===========================
      LOADING
  ============================ */

  async function showLoadingAnimation() {

    setLoading(true);

    setLoadingText("🔍 Verifying Coupon...");

    await new Promise(resolve => setTimeout(resolve,1000));

    setLoadingText("🎯 Matching Reward...");

    await new Promise(resolve => setTimeout(resolve,1000));

    setLoadingText("🎁 Preparing Surprise...");

    await new Promise(resolve => setTimeout(resolve,1000));

    setLoadingText("🏆 Almost Ready...");

    await new Promise(resolve => setTimeout(resolve,700));

  }
  async function playGame(category) {

  setGiftCategory(category);

  setShowCategory(false);

  setShowResult(false);

  await showLoadingAnimation();

  const data = await sendRequest(category);

  setLoading(false);

  if (!data) return;


if (data.success) {

  setStars(data.stars);

  setGift(data.gift);

  celebrate();

  setShowResult(true);

} else {

  alert(data.message);

}
}

  return (<div className="container">

<div
className="card"
ref={cardRef}
onMouseMove={handleMove}
onMouseLeave={resetCard}
>

<h1 className="logo">
 Kapil Store
</h1>

<p className="subtitle">
PREMIUM REWARD ZONE
</p>

<h2>
Enter Your Coupon Code
</h2>

<p className="infoText">
Enter your unique 4-character coupon code to unlock your reward.
</p>

<input
className="inputBox"
type="text"
maxLength={4}
value={code}
placeholder="Eg. AB12"
onChange={(e)=>{

setCode(
e.target.value.toUpperCase()
);

}}
/>

<input
className="inputBox"
type="text"
placeholder="Enter Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

{error &&

<p className="error">

{error}

</p>

}
<p className="infoText">

Want to explore all the exciting gifts you can win?

<br /><br />

<a
href="https://instagram.com/KapilStore.in"
target="_blank"
rel="noreferrer"
style={{
color:"#25D366",
textDecoration:"none",
fontWeight:"700"
}}
>
📸 Instagram: @KapilStore.in
</a>

</p>
<button
className="btn"
onClick={()=>{

if(code.trim().length!==4){

setError(
"Please enter a valid 4-character coupon."
);

return;

}

if(name.trim()===""){

setError(
"Please enter your name."
);

return;

}

setError("");

setShowCategory(true);
}}
>

Continue

</button>

{
showCategory && (

<div className="popupCard">

<h2>

Choose Your Reward Category

</h2>

<p>

Select your favourite category.

Once selected it cannot be changed.

</p>

<div
className="categoryCard"
onClick={() => playGame("surprise")}
>

<span>🎀🩷 </span>

<h3>

Free Cute Aesthetic Keychains & Toys

</h3>

<p>

Cute Accessories & Surprise Gifts

</p>

</div>

<div
className="categoryCard"
onClick={() => playGame("stickers")}
>

<span>🌸</span>

<h3>

Free Aesthetic Trending Customized Stickers

</h3>

<p>

Cute, Trending & Customized Stickers for Your Laptop, Phone, Bottle & Journal

</p>

</div>


<div
className="categoryCard"
onClick={() => playGame("creative")}
>

<span>🍫</span>

<h3>
Free Chocolates


</h3>

<p>

Delicious Chocolate Rewards

</p>

</div>
<div
className="categoryCard"
onClick={() => playGame("study")}
>

<span>📚</span>

<h3>

Free Stationery Items

</h3>

<p>

Pens, Discount, Notebooks, Files & More

</p>

</div>

<div
className="categoryCard"
onClick={() => playGame("tech")}
>

<span>📖</span>

<h3>

Hire Someone To Do Your Written Work Free

</h3>

<p>

Assignments, Notes & Practical Work

</p>

</div>

<div
className="categoryCard"
onClick={() => playGame("lifestyle")}
>

<span>🖨️</span>

<h3>

Free Printing Pages

</h3>

<p>

Free Printing Service Rewards

</p>

</div>


</div>

)

}

{/* ===========================
      LOADING
=========================== */}

{
loading && (

<div className="loadingBox">

<div className="loader"></div>

<h2>{loadingText}</h2>

</div>

)
}

{/* ===========================
      RESULT
=========================== */}

{
showResult && (

<div className="resultCard">

<h1>
🎊 Congratulations!
</h1>

<h2 className="starsText">
{stars}
</h2>

<div className="categoryBadge">

{
giftCategory==="study" &&
"📝 Free Stationery Items"
}

{
giftCategory==="tech" &&
"✍ Hire Someone To Do Your Written Work"
}

{
giftCategory==="creative" &&
"🍫 Free Chocolates"
}

{
giftCategory==="lifestyle" &&
"🖨 Free Printing Pages"
}

{
giftCategory==="surprise" &&
"🎀 Free Cute Aesthetic Keychains & Toys"
}

{
giftCategory==="stickers" &&
"🌸 Free Aesthetic Trending Customized Stickers"
}

</div>


<p>

🎉 Your reward is ready!

📲 Contact us on WhatsApp or Instagram to claim it.
</p>



<h2>

 Your Reward

</h2>

<h3 className="giftName">

{gift}

</h3>

<p className="giftInfo">

📸 Want to see your reward?

Visit our Instagram page for the product image.

<br /><br />

<a
href="https://instagram.com/KapilStore.in"
target="_blank"
rel="noreferrer"
style={{
color:"#25D366",
textDecoration:"none",
fontWeight:"700"
}}
>
📸 Instagram: @KapilStore.in
</a>

</p>

<div className="notice">

<h4>

📌 Important Notice

</h4>

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

)

}

</div>

</div>



);

}

export default App;

    
