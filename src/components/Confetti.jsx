function Confetti() {

  const confetti = Array.from({ length: 70 });

  return (
    <>
      {confetti.map((_, index) => (
        <span
          key={index}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${5 + Math.random() * 4}s`
          }}
        >
          🎊
        </span>
      ))}
    </>
  );

}

export default Confetti;