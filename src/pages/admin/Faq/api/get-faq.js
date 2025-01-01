import axios from "axios";
import { urlFaq } from "~/constants/faq";

export const getFaqs = async () => {
    return axios.get(urlFaq);
};
