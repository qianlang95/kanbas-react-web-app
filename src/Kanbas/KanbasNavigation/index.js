import { Link, useLocation } from "react-router-dom";
import { BiDesktop, BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { BiShare } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox : <BiEnvelope className="wd-icon" />,
    History :<BsClock className="wd-icon" />,
    Studio : <BiDesktop className="wd-icon" />,
    Commons: <BiShare className="wd-icon" />,
    Help : < BiQuestionMark className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
       {/* <img src="../Images/great.jpg" class="" alt="..." /> */}
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;

