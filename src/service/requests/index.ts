import { api } from "../api";

interface IGetAllProps {
  path: string;
  params: {
    page: string;
    size: string | 20;
    search?: string;
    genres?: string;
    sortBy?: string;
    sortOrder?: string;
  };
}

export const getAll = async ({ path, params }: IGetAllProps) => {
  console.log(params);
  //const { data: response } = await api.get(path);
  //return response.data;
};
