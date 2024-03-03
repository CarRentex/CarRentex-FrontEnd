import React, { useState } from "react";
import { GetAllCarResponse } from "../../../models/Car/Response/GetAllCarResponse";
import "./CarTable.css";

const ITEMS_PER_PAGE = 10;

const CarTable = ({ data }: { data: GetAllCarResponse[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kilometre</th>
            <th>Yıl</th>
            <th>Günlük Fiyat</th>
            <th>Min. Findeks</th>
            <th>Plaka</th>
            <th>Vites Türü</th>
            <th>Yakıt Türü</th>
            <th>Kategori</th>
            <th>Yolcu Kapasitesi</th>
            <th>Resim Yolu</th>
            <th>Model</th>
            <th>Renk</th>
            <th>Aktif</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((car: GetAllCarResponse , index) => (
            <tr key={car.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{car.id}</td>
              <td>{car.kilometer}</td>
              <td>{car.year}</td>
              <td>{car.dailyPrice}</td>
              <td>{car.minFindeksRate}</td>
              <td>{car.plate}</td>
              <td>{car.gearType}</td>
              <td>{car.fuelType}</td>
              <td>{car.category}</td>
              <td>{car.passengerCapacity}</td>
              <td>{car.imagePath}</td>
              <td>{car.model?.name}</td>
              <td>{car.color?.name}</td>
              <td>{car.active ? "Aktif" : "Pasif"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handleChangePage(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarTable;
