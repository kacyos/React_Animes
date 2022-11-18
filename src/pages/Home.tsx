import { useEffect, useState } from "react";
import { getAll } from "../service/requests";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState("1");

  const getAllAnimes = async () => {
  await  getAll({
      path: "anime",
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
