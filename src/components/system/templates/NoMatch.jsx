import { Title } from "react-head";
import FixedFooter from "../molecules/FixedFooter";
import IconAeee from "../atoms/IconAeee";

const NoMatch = () => {
  return (
    <>
      <Title>Page not found | Aleksei Matveev's Portfolio</Title>
      <div className="not-found">
        <IconAeee />
        <h1>Hmm, I swear this page was here a second ago...</h1>
      </div>
      <FixedFooter />
    </>
  );
};

export default NoMatch;
