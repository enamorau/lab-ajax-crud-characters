class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axios = axios.create({
      baseUrl: this.BASE_URL
    }
    )
  }


  getFullList () {
    return axios.get("http://localhost:8000/characters")
  }

  getOneRegister () {
    this.axios.get("/characters/:id")
  }

  createOneRegister () {
    this.axios.post("/localhost:8000/characters/:id")
  }

  updateOneRegister () {
    this.axios.patch("/localhost:8000/characters/:id")
  }

  deleteOneRegister () {
    this.axios.delete("/localhost:8000/characters/:id")
  }
}
