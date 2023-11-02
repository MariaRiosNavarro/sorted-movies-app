import { useState } from "react";

const ScrollTo = ({ top }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (scroll) {
      if (top) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
      setScroll(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id={`scrollTo${top ? "Top" : "Bottom"}`}
        className="hidden"
        onChange={() => setScroll(!scroll)}
        checked={scroll}
      />

      <label
        htmlFor={`scrollTo${top ? "Top" : "Bottom"}`}
        className={`fixed p-4 bottom-4 ${
          top ? "right-4" : "left-4"
        } opacity-30 text-2xl w-12 h-12 rounded-full text-center cursor-pointer hover:opacity-100 bg-secondary border-4 border-primary btn-secondary flex items-center justify-center z-10`}
        onClick={handleScroll}
      >
        {top ? "⬆" : "⬇"}
      </label>
    </div>
  );
};

export default ScrollTo;
