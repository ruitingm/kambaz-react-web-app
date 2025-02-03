import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

export default function ReactIcons() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4">
      <h3>React Icons Sampler</h3>
      <div className="d-flex">
        <VscAccount className="fs-3 text"></VscAccount>
        <AiOutlineDashboard className="fs-3 text"></AiOutlineDashboard>
        <FaBookBible className="fs-3 text"></FaBookBible>
        <FaCalendar className="fs-3 text"></FaCalendar>
        <FaEnvelopeOpenText className="fs-3 text"></FaEnvelopeOpenText>
        <FaRegClock className="fs-3 text"></FaRegClock>
      </div>
    </div>
  );
}
