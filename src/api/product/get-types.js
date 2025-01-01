import axios from "axios";
import baseUrl from "~/utils/baseUrl";

export const getProductTypes = async () => {
    const url = `${baseUrl}/api/productType/getAllProductType`;
    return axios.get(url);
};
