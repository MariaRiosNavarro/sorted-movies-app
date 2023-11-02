const Star = ({ rate }) => {
  const stars = [];

  for (let i = 1; i <= 10; i++) {
    if (i <= rate) {
      stars.push(
        <img
          className="w-10 h-10"
          key={i}
          src="/stars/full.png"
          alt={`Full Star ${i}`}
        />
      );
    } else {
      stars.push(
        <img
          className="w-10 h-10"
          key={i}
          src="/stars/empty.png"
          alt={`Empty Star ${i}`}
        />
      );
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 w-6/7 items-center justify-cente md:w-1/2">
        {stars}
      </div>
    </>
  );
};

export default Star;
