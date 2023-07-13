let data;

$.ajax({
  type: "GET",
  url: "http://127.0.0.1:8000/api/v1/order",
  dataType: "json",
  success: function (data) {
    data = data;
    renderHTML(data);
    console.log(data);

    let orderList = data.data.orders;
    console.log(orderList);
    orderList.forEach((item, index) => {});
  },
});

/*
const button = document.querySelector('.modal');
  const btnOpenPopup = document.getElementById('add-btn');
  const btnClosePopup = document.getElementById("close-btn");

  btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  btnClosePopup.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

*/

//
// const openModalBtn = document.querySelectorAll(".ordernumber-btn");
// const openModalCard = document.getElementById("card-item");

// // 모달창 열기
// openModalBtn.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // 스크롤바 제거
// });

// openModalCard.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // 스크롤바 제거
// });

//조리완료 버튼 클릭하면 넘어가기
$(document).on("click", ".cooked-btn", function () {
  var parentDiv = $(this).closest(".ordermenu-list"); // 클릭한 버튼의 부모 div 요소 선택
  var newParent = $(".cookingfinish-board"); // 이동할 새로운 부모 요소 선택

  parentDiv.appendTo(newParent); // 부모 div 요소를 새로운 부모 요소의 마지막 자식으로 이동시킴
});

//지영 추가한 부분
// 통신 데이터 오는 곳
function renderHTML(data) {
  var orderList = data.data.orders;
  var orderContainer = $(".ordermenu-board");

  for (var i = 0; i < orderList.length; i++) {
    var order = orderList[i];
    console.log(order);

    // 상품 정보 표시
    var orderDiv = $("<div>");
    orderDiv.html(`
        <div class="ordermenu-list">
          <div class="ordernumber-btn">${order.id}</div>
  
          <ul class="order-list">
            <li id="order-item">주문내역: ${order.items[0].product.name} 외 ${
      order.items.length - 1
    }개</li>
            <li id="order-item">금액: ${order.total_price}원</li>
          </ul>
          <li class="orderstatus">
            <input type="button" class="cooked-btn" value=" 조리 완료 " />
          </li>
      </div>
      `);

    // 상품 컨테이너에 추가
    orderContainer.append(orderDiv);
  }
}

function showModal(num) {
  $.ajax({
    type: "GET",
    url: `http://127.0.0.1:8000/api/v1/order/${num}`,
    dataType: "json",
    success: function (data) {
      let itemList = data.data.order.items;

      let sum = 0;
      for (var i = 0; i < itemList.length; i++) {
        var item = itemList[i];

        // 상품 정보 표시
        var itemDiv = $("<div>");
        itemDiv.html(`
        <li class="item-menu">${item.product.name} x ${item.quantity}</li>
        `);

        var itemPriceDiv = $("<div>");
        itemPriceDiv.html(`
        <li class="item-price">${item["unit-price"] * item.quantity}</li>
        `);
        // 상품 컨테이너에 추가

        $(".detail-menu").append(itemDiv);
        $(".detail-price").append(itemPriceDiv);
        sum += Number(`${item["unit-price"] * item.quantity}`);
      }

      $("#modal-orderdate").text(`주문 날짜 : ${data.data.order.created_at}`);
      $("#modal-ordernum").text(`주문번호 : ${num}`);
      $("#price-sum").text(sum);
    },
  });
  const modal = document.getElementById("modal-wrap");

  modal.style.display = "block";
}

$(document).on("click", ".ordernumber-btn", function (e) {
  console.log(e.target.textContent);
  showModal(e.target.textContent);
});

const closeModalBtn = document.getElementById("close-btn");
// 모달창 닫기
closeModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal-wrap");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 스크롤바 보이기

  $(".detail-menu").empty();
  $(".detail-price").empty();
});
