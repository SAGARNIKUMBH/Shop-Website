console.log("Shop Websites");
const calcualte = document.getElementById("calculate");
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
  const item2 = {
    name: "T-shrit",
    price: 4,
    tax: 12,
    Qty: itemQty,
  };

  function cal_total(item) {
    let total = item.price * item.Qty;
    const tax = item.tax / 100;
    const totaltaxamt = total * tax;
    console.log(totaltaxamt);
    total = totaltaxamt + total;
    return total;
  }
  const item1total = cal_total(item1);
  const item2total = cal_total(item2);
  const grand_total = item1total + item2total;
  document.getElementById("grandtotal").value = grand_total.toFixed();

  console.log(grand_total);
});
