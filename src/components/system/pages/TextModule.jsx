import ScrollReveal from "../molecules/ScrollReveal";

const TextModule = () => {
  return (
    <div className="about-section">
      <div className="about-text gc-37">
        <ScrollReveal
          baseOpacity={0.36}
          enableBlur={false}
          baseRotation={0}
          blurStrength={0}
        >
          I’ve been into design since I was 16 – it all started as a hobby. Over
          time, curiosity turned into passion, and passion into skills that I
          now use to build products for millions of people around the world. My
          journey includes freelance, consulting, startups, and larger
          companies, across different industries, tech stacks, cultures, and
          challenges.
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0.36}
          enableBlur={false}
          baseRotation={0}
          blurStrength={0}
        >
          This past year, I’ve been developing several products as a Founder &
          Design Engineer, learning more about operations, development,
          marketing, and research. Before that, I was creating innovative AR
          experiences for fashion retail at ZERO10, working on both B2C and B2B
          directions as part of the core team. Earlier, I was experimenting with
          AI-powered photo and video editors at Prisma Labs, and contributed to
          both growth and core product teams.
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0.36}
          enableBlur={false}
          baseRotation={0}
          blurStrength={0}
        >
          I’m fascinated by the power of combining aesthetics and functionality.
          My design language reflects both consistency and innovation.
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TextModule;
