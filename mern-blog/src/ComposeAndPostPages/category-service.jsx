import { myAxios } from "../Compose/helper";

export const loadAllCategories = async () => {
  return await  myAxios.get(`/categories/`).then((respone) => {
    return respone.data;
  });
};