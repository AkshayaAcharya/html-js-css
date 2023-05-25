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

const fetchPosts = function () {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (!res.ok) throw new Error(`${error}, ${res.status}`);
    return res.json();
  });
};

const getPosts = async function () {
  try {
    console.log("Fetching posts...");
    const res = await fetchPosts();
    console.log(res);
    console.log("Fetching posts finished...");
  } catch (err) {
    console.log(err);
  }
};
const fetchAlbums = function () {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((res) => {
    if (!res.ok) throw new Error(`${error}, ${res.status}`);
    return res.json();
  });
};

const getAlbums = async function () {
  try {
    console.log("Fetching albums...");
    const res = await fetchPosts();
    console.log(res);
    console.log("Fetching albums finished...");
  } catch (err) {
    console.log(err);
  }
};
const fetchPhotos = function () {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
    if (!res.ok) throw new Error(`${error}, ${res.status}`);
    return res.json();
  });
};

const getPhotos = async function () {
  try {
    console.log("Fetching photos...");
    const res = await fetchPosts();
    console.log(res);
    console.log("Fetching photos finished...");
  } catch (err) {
    console.log(err);
  }
};
const fetchTodos = function () {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    if (!res.ok) throw new Error(`${error}, ${res.status}`);
    return res.json();
  });
};

const getTodos = async function () {
  try {
    console.log("Fetching todos...");
    const res = await fetchPosts();
    console.log(res);
    console.log("Fetching todos finished...");
  } catch (err) {
    console.log(err);
  }
};
const fetchUsers = function () {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    if (!res.ok) throw new Error(`${error}, ${res.status}`);
    return res.json();
  });
};

const getUsers = async function () {
  try {
    console.log("Fetching users...");
    const res = await fetchPosts();
    console.log(res);
    console.log("Fetching users finished...");
  } catch (err) {
    console.log(err);
  }
};

posts.addEventListener("click", getPosts);
albums.addEventListener("click", getAlbums);
photos.addEventListener("click", getPhotos);
todos.addEventListener("click", getTodos);
users.addEventListener("click", getUsers);
