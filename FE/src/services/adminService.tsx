import axios from "axios";

const adminService = {
    login(loginBody: any) {
        return axios.post(`/admin/login`, loginBody)
    },

};

export default adminService;
