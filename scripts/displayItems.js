// console.table(shopItem);
const shop = document.querySelector(".shop");
const items = document.querySelectorAll(".items");
const itemsImg = document.querySelectorAll(".items-img");
const title = document.querySelectorAll(".title");
// const costSold = document.querySelectorAll(".title");
const sold = document.querySelectorAll(".cost");
const section = document.querySelector("#section");
displayItems();

function displayItems() {
  let shopItems = JSON.parse(localStorage.getItem("shopItem")) || [];
  // console.table(shopItem);
  let text = ``;
  let btext = ``;
  let flag = 0;
  for (let i = 0; i < shopItems.length; i++) {
    text += `
            <div class="items">
                <img class="item-img" src="${shopItems[i].src}" alt="">
                <div>
                    <h5 class="title">${shopItems[i].title}</h5>
                    <span class="cost-sold">
                        <p class="cost">₫${shopItems[i].cost}</p>
                        <p class="sold">Đã bán ${shopItems[i].sold}</p>
                    </span>
                </div>
            </div>
            `;
    flag++;
    if (flag === 5) {
      btext += `
              <div class="shop">
              ${text}
              </div>
              `;
      text = ``;
      console.table(btext);
      console.log(text);
      flag = 0;
    }
  }
  // console.log(btext);
  section.innerHTML = `
  ${btext}
  `;
  console.log(text);
}
