import Tags from "../atoms/Tags.jsx";
import Keys from "../atoms/Keys.jsx";
import IconScroll from "../atoms/IconScroll.jsx";
import CardControls from "../atoms/CardControls.jsx";

const HeroModule = () => {
  return (
    <div className="hero-section">
      <h1>
        Let’s <span className="line-hl">get to know</span> each other.
      </h1>
      <div className="flex-row">
        <div></div>
        <div className="flex-column">
          <div className="card-view">
            <img
              loading="lazy"
              alt="image"
              width="816px"
              height="816px"
              src="/images/hero/short.png"
            ></img>
          </div>
          <div className="card-text">
            <p className="text-title">
              <span className="text-hl">I pay attention</span> to analytics,
              user requests, and feedback – they help me notice patterns, find
              insights, and stay focused on real user needs.
            </p>
          </div>
        </div>
        <div className="flex-column">
          <div className="card-text">
            <p className="text-title">
              <span className="text-hl">
                I’m Alex. I design functional products
              </span>{" "}
              step by step – even when things get complex. My process helps me
              avoid mistakes and notice details that others might miss.
            </p>
            <Tags />
          </div>
          <div className="card-keys">
            <p>8+ years of experience in</p>
            <Keys />
            <div className="card-keys-info">
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 20H0V19.9785C5.99125 19.6895 11.3222 16.0494 13.7637 10.5605L14.2363 9.43945C16.782 3.71641 22.469 0 28.7705 0H30V20Z"
                  fill="white"
                />
              </svg>
              <p>click it</p>
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20H30V19.9785C24.0088 19.6895 18.6778 16.0494 16.2363 10.5605L15.7637 9.43945C13.218 3.71641 7.53099 0 1.22949 0H0V20Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-column">
          <CardControls />
          <div className="card-text">
            <p className="text-title">
              <span className="text-hl">I enjoy quiet evenings</span> with music
              or games, but nothing compares to the feeling of being out in
              nature, walking high in the mountains.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="caption">
        <IconScroll />
        Scroll down to see the selected works
      </div>
    </div>
  );
};

export default HeroModule;
