import { useEffect, useState } from "react";
import { getAll } from "../service/requests";

const pageSize = "20";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState("1");

  const getAllAnimes = async () => {
    getAll({
      path: "animes",
      params: { page: currentPage },
    });
  };

  useEffect(() => {
    getAllAnimes();
  }, []);

  return (
    <div>
      <h1>ola</h1>
    </div>
  );
};
