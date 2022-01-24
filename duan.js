let sanpham = [
    ['Trà sữa Matcha', '35000', 'matcha.jpg'],
    ['Trà sữa Olong', '35000', 'olong.jpg'],
    ['Trà sữa Hokaido', '35000', 'hokaido.jpg'],
    ['Trà sữa Than Tre', '35000', 'thantre.jpg'],
    ['Trà sữa Nướng', '35000', 'tsnuong.jpg'],
    ['Trà sữa hoa đậu biếc', '35000', 'daubiec.jpg'],
    ['Trà sữa khoai môn', '35000', 'khoaimon.jpg'],
    ['Trà socola', '35000', 'socola.jpg'],
    ['Trà đào cam sả', '35000', 'tradao.jpg'],
    ['Trà trái cây nhiệt đơi', '35000', 'nhietdoi.jpg'],
    ['Tiramisu', '25000', 'tiramisu.jpg'],
    ['Bánh tart trứng', '8000', 'tarttrung.jpg'],
    ['Bánh Crep sầu riêng', '35000', 'crepe.jpg'],
    ['Bánh Crepe Pháp', '35000', 'crepe2.jpg'],
    ['Chân gà sả tắc', '35000', 'ga.jpg'],
    ['Tokbokki', '35000', 'tookboki.jpg']
]
/* <div class="product">
                <div class="product-image">
                    <img class="image" src="anh/matcha.jpg">
                </div>
                <div class="product-info">
                    <h3>Trà sữa Matcha</h3>
                    <p>35.000 VND</p>
                </div>
                <div class="add-to-cast">
                    <input type="button" value="Mua" class="add-button">
                </div>
            </div> */

function hienthisanpham() {
    let khu_vuc_hien_thi = document.getElementById('display');
    let temp = '';
    for (let i = 0; i < sanpham.length; i++) {

        temp += `
             <div class="product">
                <div class="product-image">
                    <img class="image" src="anh/`+ sanpham[i][2] + `">
                </div>
                <div class="product-info">
                    <h3>`+ sanpham[i][0] + `</h3>
                    <p>`+ sanpham[i][1] + ` VND</p>
                </div>
                <div class="add-to-cart">
                   <input type="button" value="Mua" class="add-button"  onclick="muasanpham(${i})" id="muasanpham">
                </div>
            </div>
             `


    }

    khu_vuc_hien_thi.innerHTML = temp;
}
hienthisanpham()


let cart = [];
function muasanpham(vi_tri) {

    alert('Đã thêm '+sanpham[vi_tri][0]+' vào giỏ hàng !');
    cart.push([sanpham[vi_tri][0], sanpham[vi_tri][1]])
    //  console.log(cart);   
    localStorage.setItem("cart", JSON.stringify(cart));
}



