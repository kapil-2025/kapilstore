function Sparkles() {

  const stars = Array.from({ length: 35 });

  return (
    <>
      {stars.map((_, index) => (
        <span
          key={index}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          ✨
        </span>
      ))}
    </>
  );

}

export default Sparkles;