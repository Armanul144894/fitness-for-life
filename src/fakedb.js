const addToDB = (id) => {
  const btn = document.getElementById(id);
  const btnValue = btn.innerText;
  const time = btnValue;
  localStorage.setItem("break-time", JSON.stringify(time));
  return time;
};

const getStoredTime = () => {
  const storedTime = localStorage.getItem("break-time");
  let time = {};
  if (storedTime) {
    time = JSON.parse(storedTime);
  } else {
    time = {};
  }
  return time;
};

export { addToDB, getStoredTime };
