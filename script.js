// console.log("from javascript");
const moveContainer = document.querySelector(".movement");
// console.log(movement);
const btn = document.querySelector(".login");
const showModel = document.querySelector(".showmodel");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");

html = ` <div class="movecon">
<div class="diposite">${2 + 1} Diposite</div>
<div class="date">${6 / 2} days ago</div>
<div class="rupees">${100 + 200}&#8377;</div>

</div>`;

// move.innerHTML = html;

const account1 = {
  owner: "saurabh kumar",
  movement: [1000, -400, 73, -200, 300, 600, 2000, -500, 200],
  intrestrate: 4,
  pin: 1111,
};

const account2 = {
  owner: "himanshu shekhar",
  movement: [1000, 200, 500, 100],
  intrestrate: 4,
  pin: 2222,
};

const account3 = {
  owner: "ankit raj",
  movement: [1000, -300, 600],
  intrestrate: 3.5,
  pin: 3333,
};

const account4 = {
  owner: "saroj kumar",
  movement: [1000, 600, 500, 900, -300],
  intrestrate: 3.5,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// account.forEach(function (account) {
//   console.log(account.owner);
//   console.log(account.movement);
// });

const displayMoverments = function (movementObj) {
  //   const movement = movementObj.movement;
  moveContainer.innerHTML = "";
  movementObj.movement.forEach(function (move, i) {
    const type = move > 0 ? `diposite` : `withdrawal`;

    const html = ` <div class="movecon">
   <div class="${type}">${2 + 1} Diposite</div>
   <div class="date">${6 / 2} days ago</div>
   <div class="rupees">${move}&#8377;</div>`;
    moveContainer.insertAdjacentHTML("afterbegin", html);
  });
};

displayMoverments(account1);
// displayMoverments(account2);

///array chanllenge

// const juliaDog = [3, 5, 2, 12, 7];
// const kateDog = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   //   console.log(dogsJulia);
//   //   dogsJulia.slice("").splice(1, 2);
//   //   console.log(dogsJulia);
//   const correctJulia = dogsJulia.slice("").splice(1, 2);
//   console.log(correctJulia);
//   const joined = correctJulia.concat(kateDog);
//   console.log(joined);

//   joined.forEach(function (age, i) {
//     const type =
//       age > 3
//         ? `Dog number ${i + 1} is an adult,and it is ${age} old`
//         : ` Dog number ${i + 1} is still a puppy🐕`;
//     console.log(type);
//   });
// };

// checkDogs(juliaDog, kateDog);
// rupToUsd = 73;
// const usd = account1.movement.map((mov) => mov / rupToUsd);
// console.log(usd);

// const displayMoverment = function (usd) {
//   //   const movement = movementObj.movement;

//   moveContainer.innerHTML = "";
//   usd.forEach(function (move, i) {
//     const type = move > 0 ? `diposite` : `withdrawal`;

//     const html = ` <div class="movecon">
//    <div class="${type}">${2 + 1} Diposite</div>
//    <div class="date">${6 / 2} days ago</div>
//    <div class="rupees">${move}$</div>`;
//     moveContainer.insertAdjacentHTML("afterbegin", html);
//   });
// };

// displayMoverment(usd);
console.log(showModel);
btn.addEventListener("click", function () {
  showModel.classList.toggle("show");
  overlay.classList.toggle("show");
});

close_modal.addEventListener("click", function () {
  showModel.classList.toggle("show");
  overlay.classList.toggle("show");
});

const userName = function (accounts) {
  accounts.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (nam) {
        return nam[0];
      })
      .join("");
    // console.log(user);
  });
};

userName(accounts);
console.log(accounts);
