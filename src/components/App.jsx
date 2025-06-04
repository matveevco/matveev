import HeroModule from "./system/pages/HeroModule";
import GridModule from "./system/pages/GridModule";
import TextModule from "./system/pages/TextModule";
import AchieveModule from "./system/pages/AchieveModule";
import CtaModule from "./system/pages/CtaModule";
import FixedFooter from "./system/molecules/FixedFooter";

const App = () => {
  return (
    <>
      <HeroModule />
      <GridModule />
      <TextModule />
      <AchieveModule />
      <CtaModule />
      <FixedFooter />
    </>
  );
};

export default App;
