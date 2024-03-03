import { Col } from "reactstrap";
import CarStatsChart from "../../../components/admin/CarStatsChart/CarStatsChart";
import MileChart from "../../../components/admin/MileChart/MileChart";
import RecommendCarCard from "../../../components/admin/RecommendCard/RecommendCard";
import SingleCard from "../../../components/admin/SingleCard/SingleCard";
import { useEffect, useState } from "react";
import CarService from "../../../services/CarService";
import { GetAllCarResponse } from "../../../models/Car/Response/GetAllCarResponse";
import "./Dashboard.css";
import UserService from "../../../services/UserService";


  
  const Dashboard = () => {
    const [totalUser, setTotalUser] = useState();
    const [totalClients, setTotalClients] = useState();
    const [totalDistance, setTotalDistance] = useState();
    const [totalCars, setTotalCars] = useState<GetAllCarResponse[]>([]);

    useEffect(() => {
      const fetchCarData = async () => {
        try {
          const response = await CarService.getTotalCars();
          setTotalCars(response.data);
        } catch (error) {
          console.error("Error fetching car data:", error);
        }
      };
      fetchCarData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    useEffect(() => {
      const fetchTotalTrips = async () => {
        try {
          const response = await UserService.getTotalUsers();
          setTotalUser(response.data);
        } catch (error) {
          console.error("Error fetching total trips:", error);
        }
      };
      fetchTotalTrips();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carObj = (title: any, totalNumber: any, icon: any) => ({
      title: title,
      totalNumber: totalNumber,
      icon: icon,
    });
    console.log(totalUser);
    return (
      <Col xs={12} sm={10} className="dashboard col-10 pt-5 sm:col-12">
        <div className="">
          <div className="dashboard__cards">
          <SingleCard item={carObj("Araçlarım", totalCars , "ri-police-car-line")} />
          <SingleCard item={carObj("Kullanıcılarım", totalUser, "ri-user-line")} />
          <SingleCard item={carObj("Toplam Mesafe", totalDistance, "ri-road-map-line")} />
          <SingleCard item={carObj("Toplam Rezervasyon", totalClients, "ri-map-pin-line")} />
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
            {/* {recommendCarsData.map((item) => (
              <RecommendCarCard item={item} key={item.id} />
            ))} */}
              {/* <RecommendCarCard item={item} key={item.id} /> */}

          </div>
        </div>
      </Col>
    );
  };
  
  export default Dashboard;