import { Link } from "react-router-dom";
import StatsChart from "../components/StatsChart";
import "../styles/pages/stats-page.css";
function StatsPage() {
  return (
    <>
      <Link className="btn btn--primary btn--margin-bottom" to="/">
        Menu Principal
      </Link>
      <StatsChart />
    </>
  )
}
export default StatsPage;
