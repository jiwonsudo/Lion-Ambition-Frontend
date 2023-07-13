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

const modal = document.getElementById("modal-wrap");
const openModalBtn = document.querySelectorAll(".ordernumber-btn");
const openModalCard = document.getElementById("card-item");
const closeModalBtn = document.getElementById("close-btn");

// // 모달창 열기
// openModalBtn.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // 스크롤바 제거
// });

// openModalCard.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // 스크롤바 제거
// });

// 모달창 닫기
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 스크롤바 보이기
});

//조리완료 버튼 클릭하면 넘어가기
$(document).on("click", ".cooked-btn", function () {
    var parentDiv = $(this).closest(".ordermenu-list"); // 클릭한 버튼의 부모 div 요소 선택
    var newParent = $(".cookingfinish-board"); // 이동할 새로운 부모 요소 선택
  
    parentDiv.appendTo(newParent); // 부모 div 요소를 새로운 부모 요소의 마지막 자식으로 이동시킴
  });
  


//지영 추가한 부분
// 통신 데이터 오는 곳
let data = {
    data: {
      orders: [
        {
          id: 1,
          status: {
            id: 1,
            name: "접수 전",
          },
          items: [
            {
              id: 1,
              product: {
                id: 1,
                name: "제품 명",
              },
              "unit-price": 1000,
              quantity: 2,
            },
          ],
          total_price: 2000,
          created_at: "2023 - 07 - 13",
          updated_at: "2023 - 07 - 13",
        },
  
        {
          id: 1,
          status: {
            id: 1,
            name: "접수 전",
          },
          items: [
            {
              id: 1,
              product: {
                id: 1,
                name: "제품 명",
              },
              "unit-price": 1000,
              quantity: 2,
            },
          ],
          total_price: 2000,
          created_at: "2023 - 07 - 13",
          updated_at: "2023 - 07 - 13",
        },
      ],
    },
  };
  
  console.log(data.data);
  
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
          <input type="button" class="ordernumber-btn" value="${order.id}" />
  
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
    // 렌더링 실행
    renderHTML(data);

    //지영 추가한 부분
    $(document).on("click", ".ordernumber-btn", function (e) {
    // on 이벤트로 변경
    console.log("하이요");

    // 렌더링 실행
    //renderModal(data);
    let orderNumber = e.target.value;
    var orderList = data.data.orders;
    var orderdate = orderList[orderNumber-1].created_at;
    var orderprice = orderList[orderNumber-1].total_price;

    console.log(orderNumber);
    console.log(orderList[orderNumber-1]);
    //  console.log(orderdate);
    //   console.log(item-menu);
    //   console.log(item-price);



    $("#modal-ordernum").text("주문 번호: " + orderNumber);
    $("#modal-orderdate").text("주문 날짜: " + orderdate);  
    
    //   $("#datail-menu").text("주문한메뉴 " + item-menu);
    $("#price-sum").text("총: " + orderprice);

    //   $(".detail-menu").text("메뉴 " +ordermenu);  
    //   $(".detail-price").text("가격 " + ordermenunum);

    var itemList = data.data.orders[orderNumber-1].items;
    console.log(itemList)

        var itemContainer = $(".form-text");
    
        for (var i = 0; i < itemList.length; i++) {
            var order = orderList[i];

            var ordermenu = itemList.product;
            var ordermenuNum = itemList.quantity;
            var ordermenuPrice = itemList.unit-price;

    
            console.log(ordermenu, ordermenuNum)
        


    
        // 상품 컨테이너에 추가
        itemContainer.append(form-text);
        }
    $(".detail-menu").text("주문메뉴: " + ordermenu);
    $(".detail-count").text("메뉴갯수: " + ordermenuNum);
    $(".detail-price").text("메뉴가격: " + ordermenuPrice);

    console.log(item-menu);
    console.log(item-price);
    console.log(item-count);

    modal.style.display = "block";

    document.body.style.overflow = "hidden";
    });

    


