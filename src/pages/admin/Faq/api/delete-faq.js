import axios from "axios";
import { urlFaq } from "~/constants/faq";

export const deleteFaq = async (id) => {
    const url = `${urlFaq}/${id}`;
    return axios.delete(url);
};
