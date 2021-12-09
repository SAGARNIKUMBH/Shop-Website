console.log("Shop Websites");

const calcualte = document.getElementById("calculate");

let itemArray = [];

calcualte.addEventListener("click", (e) => {
  e.preventDefault();

  let itemname = document.getElementById("name").value;
  console.log(itemname);
  let itemprice = document.getElementById("price").value;
  let itemtax = document.getElementById("tax").value;
  let itemQty = document.getElementById("Qty").value;
  let Toatl = document.getElementById("grandtotal").value;

  const item1 = {
    name: itemname,
    price: itemprice,
    tax: itemtax,
    Qty: itemQty,
  };
  // const item2 = {
  //   name: "T-shrit",
  //   price: 4,
  //   tax: 12,
  //   Qty: itemQty,
  // };

  const item1total = cal_total(item1);

  // const item2total = cal_total(item2);
  const grand_total = item1total;

  const itemArrayObject = {
    name: itemname,
    price: itemprice,
    tax: itemtax,
    Qty: itemQty,
    itemTotal: item1total,
  };

  itemArray.push(itemArrayObject);
  let tableBody = document.getElementById("tableBody");

  let uistring = `
                <tr>
                    
                    <td>${itemArrayObject.name}</td>
                    <td>${itemArrayObject.Qty}</td>
                    <td>${itemArrayObject.price}</td>
                    <td>${itemArrayObject.tax}</td>
                    <td>${itemArrayObject.itemTotal}</td>

                 </tr> `;
  tableBody.innerHTML += uistring;
  let sum = 0;
  for (let i = 0; i < itemArray.length; i++) {
    // console.log(itemArray[i].itemTotal);
    sum = sum + itemArray[i].itemTotal;
  }

  console.log("grandtotal", sum);
  console.log(itemArray);

  console.log(grand_total);
  document.getElementById("grandtotal").value = sum.toFixed();
});

function cal_total(item) {
  let total = item.price * item.Qty;
  const tax = item.tax / 100;
  const totaltaxamt = total * tax;
  console.log(totaltaxamt);
  total = totaltaxamt + total;
  return total;
}

let display = new display();
display.add(grand_total);
display.clear();
display.show(calcualte);
