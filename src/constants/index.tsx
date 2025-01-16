const API_ROUTE = "https://wayi.league-funny.com/api";
const DEFAULT_FORMDATA = {
  name: "",
  description: "",
  is_completed: false,
  created_at: "",
  updated_at: "",
  id: -1,
};
const TASK_STATUS = {
  All: "all",
  Completed: "completed",
  UnCompleted: "un_completed",
};

export { API_ROUTE, DEFAULT_FORMDATA, TASK_STATUS };
