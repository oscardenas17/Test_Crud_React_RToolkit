import htttpCommons from "./htttp-commons";

const getAll = () => {
  return htttpCommons.get("/tutorials");
};

const get = (id) => {
  return htttpCommons.get(`/tutorials/${id}`);
};

const create = (data) => {
  return htttpCommons.post("/tutorials", data);
};

const update = (id, data) => {
  return htttpCommons.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
  return htttpCommons.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return htttpCommons.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return htttpCommons.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
