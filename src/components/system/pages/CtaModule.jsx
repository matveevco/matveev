import UniButtonArrow from "../atoms/UniButtonArrow";
import IconAeee from "../atoms/IconAeee";

const CtaModule = () => {
  return (
    <div className="cta-section">
      <div className="cta-text">
        <IconAeee />
        <h1>
          Let's build it <span className="line-hl">right</span>.
        </h1>
        <div className="caption">
          <span>Excited to discuss how I can help you succeed.</span>
          <span>Quality and clear communication are my priorities.</span>
        </div>
      </div>
      <UniButtonArrow
        text="Schedule a Call"
        link="https://calendly.com/aeee/30min"
      />
    </div>
  );
};

export default CtaModule;
