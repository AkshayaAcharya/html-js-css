let users = [];
let userId;
// table
const userDataContainer = document.querySelector(".user-data");
const searchInput = document.querySelector(".search-input");

// Modal
const modal = document.querySelector(".modal");
const modalUpdate = document.querySelector(".modal-update");
const modalContainer = document.querySelector(".modal-container");
const closeIcon = document.querySelector(".close-icon");
let deleteBtns;
let updateBtns;

// Modal update fields
const formEles = document.querySelectorAll(".form-ele");
const nameInput = document.querySelector("#name");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const companyInput = document.querySelector("#company");
const websiteInput = document.querySelector("#website");

// //////////////Events/////////////////
// close modal
const closeModal = function () {
  modal.classList.add("display-none");
  // hideFormFields();
  nameInput.value =
    userNameInput.value =
    emailInput.value =
    phoneInput.value =
    addressInput.value =
    companyInput.value =
    websiteInput.value =
      "";
};

const showFormFields = function () {
  formEles.forEach((ele) => {
    ele.classList.remove("display-none");
  });
};
const hideFormFields = function () {
  formEles.forEach((ele) => {
    ele.classList.add("display-none");
  });
};

const filterUser = function (e) {
  const name = e.target.value;
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(name.toLowerCase());
  });
  displayUsers(filteredUsers);
};

// update user data
const updateUserData = function (e) {
  e.preventDefault();
  let user = users.find((user) => user.id === +userId);
  user.name = nameInput.value;
  user.username = userNameInput.value;
  user.email = emailInput.value;
  user.phone = phoneInput.value;
  user.address.city = addressInput.value;
  user.company.name = company.value;
  user.website = websiteInput.value;
  displayUsers(users);
  closeModal();
  // hideFormFields();
};

// Event Listeners
closeIcon.addEventListener("click", closeModal);
modalUpdate.addEventListener("click", updateUserData);
searchInput.addEventListener("input", filterUser);

// fetch user
const requestUser = function () {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    if (!res.ok) throw new Error(`${error},${response.status}`);
    return res.json();
  });
};

const getData = async function () {
  try {
    const res = await requestUser();
    users = [...res];
    displayUsers(users);
  } catch (err) {
    console.log(err);
  }
};

getData();

const displayUsers = function (users) {
  userDataContainer.innerHTML = "";
  users.forEach(
    ({ id, name, username, email, phone, address, company, website }) => {
      const delid = `del${id}`;
      const upid = `up${id}`;
      const html = `
      <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${phone}</td>
      <td>${address.city}</td>
      <td>${company.name}</td>
      <td>${website}</td>
      <td><button class="del" id="${delid}">DELETE</button></td>
      <td><button class="update" id="${upid}">UPDATE</button></td>
      </tr>
      `;
      userDataContainer.innerHTML += html;
      deleteBtns = document.querySelectorAll(".del");
      updateBtns = document.querySelectorAll(".update");
      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", deleteEntry.bind(this)); //select delete entry
      });
      updateBtns.forEach((btn) => {
        btn.addEventListener("click", updateEntry.bind(this)); //select update entry
      });
    }
  );
};

// delete user
const deleteEntry = function (e) {
  const id = e.target.id;
  const deleteUser = id.slice(3);
  const newUsers = users.filter((user) => {
    return user.id != deleteUser;
  });
  users = [...newUsers];
  displayUsers(users);
};

// update user
const updateEntry = function (e) {
  const id = e.target.id;
  const updateUser = id.slice(2);
  let {
    name,
    username,
    email,
    phone,
    address: { city },
    company: { name: companyName },
    website,
  } = users.find((user) => {
    return user.id == updateUser;
  });
  nameInput.value = name;
  userNameInput.value = username;
  emailInput.value = email;
  phoneInput.value = phone;
  addressInput.value = city;
  companyInput.value = companyName;
  websiteInput.value = website;
  userId = updateUser;
  console.log(1);
  modal.classList.remove("display-none");
};
