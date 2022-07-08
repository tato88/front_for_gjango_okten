import {axiosService} from "./axios.service";

import {urls} from "../constants";

const auto_parksService = {
    getAll: () => axiosService.get(urls.auto_parks)
}

export {
    auto_parksService
}