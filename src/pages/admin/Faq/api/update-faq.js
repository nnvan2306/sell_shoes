import axios from "axios";
import { urlFaq } from "~/constants/faq";

export const updateFaq = async (data) => {
    return axios.patch(urlFaq, { ...data });
};
