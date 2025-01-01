import axios from "axios";
import baseUrl from "~/utils/baseUrl";

export const getProduct = async (id) => {
    const url = `${baseUrl}/api/products/getProductById/${id}`;
    return axios.get(url);
};
