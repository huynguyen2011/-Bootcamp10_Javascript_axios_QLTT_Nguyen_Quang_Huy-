function QuanLyServices() {
  this.getListInforApi = function () {
    return axios({
      url: "https://60c36a2c2df2cb00178ab1db.mockapi.io/api/information",
      method: "GET",
    });
  };
  this.addInforApi = function (infor) {
    return axios({
      url: "https://60c36a2c2df2cb00178ab1db.mockapi.io/api/information",
      method: "POST",
      data: infor,
    });
  };
  this.deleteInforApi = function (id) {
    return axios({
      url: `https://60c36a2c2df2cb00178ab1db.mockapi.io/api/information/${id}`,
      method: "DELETE",
    });
  };
  this.getInforByApi = function (id) {
    return axios({
      url: `https://60c36a2c2df2cb00178ab1db.mockapi.io/api/information/${id}`,
      method: "GET",
    });
  };
  this.updateInforApi = function (infor) {
    return axios({
      url: `https://60c36a2c2df2cb00178ab1db.mockapi.io/api/information/${infor.id}`,
      method: "PUT",
      data: infor,
    });
  };
}
