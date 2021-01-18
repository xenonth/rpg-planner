import axios from "axios";

export default {
    randomSettlement: function() {
        return axios.get("api/random-town")
    }

    getSettlements: function () {
        return axios.get("/api/settlements");
    },
    // Gets the post with the given id
    getSettlementId: function(id) {
        return axios.get(`/api/posts/${id}`);
    },

  // Deletes the post with the given id
    deleteSettlement: function(id) {
        return axios.delete(`/api/posts/${id}`);
    },
  // Saves a post to the database
    saveSettlement: function(postSettlement) {
        return axios.post("/api/posts", postSettlement);
    }
};
