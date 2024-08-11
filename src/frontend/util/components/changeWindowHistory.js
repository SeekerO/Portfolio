function changeWindowHistory(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  window.history.pushState(null, "/", id);
}

export default changeWindowHistory;
