import { Link } from "react-router-dom";
import StatsChart from "../components/StatsChart";
import { Button } from "@mui/material";
import "../styles/pages/stats-page.css";
function StatsPage() {
  return (
    <>
      <Link className="text--primary" to="/">
        <Button sx={{ 'margin-bottom': '2%', 'background-color': 'darkorchid' }} variant="contained" disableElevation>
          Menu Principal
        </Button>
      </Link>
      <StatsChart />
    </>
  )
}
export default StatsPage;
