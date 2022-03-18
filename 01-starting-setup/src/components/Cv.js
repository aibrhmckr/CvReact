import PBlock from "./PBlock";
import LbBlockO from "./LbBlockO";
import LbBlockY from "./LbBlockY";
import Contact from "./Contact";

function Cv(props) {
  return (
    <div id="cv-card">
      <PBlock values={props.values} />
      <LbBlockO values={props.values} />
      <LbBlockY values={props.values} />
      <Contact values={props.values} />
    </div>
  );
}
export default Cv;