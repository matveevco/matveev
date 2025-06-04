import { Helmet } from "react-helmet";
import FixedFooter from "../molecules/FixedFooter";
import IconAeee from "../atoms/IconAeee";

const NoMatch = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | Aleksei Matveev's Portfolio</title>
      </Helmet>
      <div className="not-found">
        <IconAeee />
        <h1>Hmm, I swear this page was here a second ago...</h1>
      </div>
      <FixedFooter />
    </>
  );
};

export default NoMatch;
