import { Col } from "reactstrap";
import CarStatsChart from "../../../components/admin/CarStatsChart/CarStatsChart";
import MileChart from "../../../components/admin/MileChart/MileChart";
import RecommendCarCard from "../../../components/admin/RecommendCard/RecommendCard";
import SingleCard from "../../../components/admin/SingleCard/SingleCard";
import recommendCarsData from "../../../components/admin/Test4";
import "./Dashboard.css";

const carObj = {
    title: "Total Cars",
    totalNumber: 750,
    icon: "ri-police-car-line",
  };
  
  const tripObj = {
    title: "Daily Trips",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
  };
  
  const clientObj = {
    title: "Clients Annually",
    totalNumber: "85k",
    icon: "ri-user-line",
  };
  
  const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 2167,
    icon: "ri-timer-flash-line",
  };
  
  const Dashboard = () => {
    return (
      <Col xs={12} sm={10} className="dashboard col-10 pt-5 sm:col-12">
        <div className="dashboard__wrapper">
          <div className="dashboard__cards">
            <SingleCard item={carObj} />
            <SingleCard item={tripObj} />
            <SingleCard item={clientObj} />
            <SingleCard item={distanceObj} />
          </div>
  
          <div className="statics">
        <div className="stats stats--mile-chart"> 
          <h3 className="stats__title"><strong>AY/YIL SATIŞ GRAFİĞİ</strong></h3>
          <MileChart />
        </div>
        <div className="stats stats--car-stats-chart"> 
          <h3 className="stats__title">HAFTALIK SATIŞ GRAFİĞİ</h3>
          <CarStatsChart/>
        </div>
      </div>
  
          <div className="recommend__cars-wrapper">
            {recommendCarsData.map((item) => (
              <RecommendCarCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Col>
    );
  };
  
  export default Dashboard;