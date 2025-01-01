import axios from "axios";
import baseUrl from "~/utils/baseUrl";

export const getProducts = async () => {
    const url = `${baseUrl}/api/products/getAllProducts`;
    return axios.get(url);
};
