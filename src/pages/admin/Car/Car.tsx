import React, { useState } from 'react';
import BaseAdmin from '../../../components/admin/BaseAdmin/BaseAdmin';
import CarService from '../../../services/CarService';
import CarTable from './CarTable';
import AddCar from '../AddCar';

const Car = () => {
  return (
    <div className="Car col-10">
      <BaseAdmin service={CarService} Table={CarTable} AddData={AddCar} UpdateData={""} DeleteData={""} />
    </div>
  );
}
export default Car;
