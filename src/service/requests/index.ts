import { api } from "../api";

interface IGetAllProps {
  path: string;
  params?: {
    page?: string;
    size?: string;
    search?: string;
    genres?: string;
    sortBy?: string;
    sortOrder?: string;
  };
}

export const getAll = async ({ path, params }: IGetAllProps) => {
  const defaultParams = {
    ...params,
    page: params?.page || "1",
    size: params?.size || "20",
  };

  const { data: response } = await api.get(path, { params: defaultParams });
  return response;
};
