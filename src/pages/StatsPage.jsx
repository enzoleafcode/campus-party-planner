import { Link } from "react-router-dom";
import StatsChart from "../components/StatsChart";

function StatsPage() {
  return (
    <>
      <Link to="/">Menu Principal</Link>
      <StatsChart />
    </>
  )
}
export default StatsPage;
