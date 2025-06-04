import UniButtonArrow from "../atoms/UniButtonArrow";
import IconAeee from "../atoms/IconAeee";

const CtaModule = () => {
  return (
    <div className="cta-section">
      <div className="cta-text">
        <IconAeee />
        <h1>
          Let’s build something <span className="line-hl">meaningful</span>.
        </h1>
        <div className="caption">
          Great ideas start with simple conversations.
        </div>
      </div>
      <UniButtonArrow
        text="Let's talk"
        link="https://calendly.com/matveev-dsgn/30min"
      />
    </div>
  );
};

export default CtaModule;
