import axios from "axios";

const directoryUrl = "https://randomuser.me/api/?results=100";

export default {
    fetchRandomEmployees: function() {
        return axios.get(directoryUrl);
    }
}