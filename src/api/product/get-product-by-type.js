import axios from "axios";
import baseUrl from "~/utils/baseUrl";

export const getListProductByType = async (type) => {
    const url = `${baseUrl}/api/products/getProductsByType`;
    return axios.post(url, {
        productType: type,
    });
};
