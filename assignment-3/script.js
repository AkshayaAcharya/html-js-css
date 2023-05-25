/*
## Questions → Multiple API Calls.

1. There should be five buttons in your project.
2. Each of them should call a different api and print data in console.
3. APIs can be of your choice.

## Test case →

1. Every button click is calling a real API ( See network section of developer tools for reference )
2. Data Visible in Console

## Answer →



*/

const posts = document.querySelector(".api_btns--btn1");
const albums = document.querySelector(".api_btns--btn2");
const photos = document.querySelector(".api_btns--btn3");
const todos = document.querySelector(".api_btns--btn4");
const users = document.querySelector(".api_btns--btn5");

const fetchData = function (data) {
  return fetch(`https://jsonplaceholder.typicode.com/${data}`).then((res) => {
    if (!res.ok) throw new Error(`${error}, ${res.status}`);
    return res.json();
  });
};

const getData = async function (data) {
  console.log(data);
  try {
    console.log(`Fetching ${data}...`);
    const res = await fetchData(data);
    console.log(res);
    console.log(`Fetching ${data} finished...`);
  } catch (err) {
    console.log(err);
  }
};

posts.addEventListener("click", getData.bind(null, "posts"));
albums.addEventListener("click", getData.bind(null, "albums"));
photos.addEventListener("click", getData.bind(null, "photos"));
todos.addEventListener("click", getData.bind(null, "todos"));
users.addEventListener("click", getData.bind(null, "users"));
