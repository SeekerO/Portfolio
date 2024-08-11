function changeWindowHistory(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

export default changeWindowHistory;
