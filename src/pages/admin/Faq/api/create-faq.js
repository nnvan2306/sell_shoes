import axios from "axios";
import { urlFaq } from "~/constants/faq";

export const createFaq = async (data) => {
    return axios.post(urlFaq, { ...data });
};
