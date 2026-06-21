const parameters=new URLSearchParams(window.location.search);
const id=parameters.get("id");
fetch(`https://dummyjson.com/products/${id}`)
.then(response=>response.json())
.then(product=>{
    console.log(product);
    let template =
    document.getElementById("productTemplate");
    let clone =
    template.content.cloneNode(true);
    clone.querySelector(".image").src =
    product.thumbnail;
    clone.querySelector(".title").textContent =
    product.title;
    clone.querySelector(".description").textContent =
    "Description:" + product.description;
    clone.querySelector(".price").textContent =
    "Price:$" + product.price;
    clone.querySelector(".brand").textContent =
    "Brand:" + product.brand;
    clone.querySelector(".category").textContent =
    "Category:" + product.category;
    clone.querySelector(".rating").textContent =
    "Rating:" + product.rating;
    clone.querySelector(".stock").textContent =
    "Stock:" + product.stock;
    clone.querySelector(".discount").textContent =
    "Discount:"+ product.discountPercentage + "%";
    clone.querySelector(".sku").textContent =
    "SKU: "+ product.sku;
    clone.querySelector(".weight").textContent =
    "Weight:" + product.weight + " g";
    clone.querySelector(".warranty").textContent =
    "Warranty:"+ product.warrantyInformation;
    clone.querySelector(".shipping").textContent =
    "Shipping:" + product.shippingInformation;
    clone.querySelector(".availability").textContent =
    "Availability:"+ product.availabilityStatus;
    clone.querySelector(".returnPolicy").textContent =
    "Return Policy:"+ product.returnPolicy;
    document.getElementById("product")
    .appendChild(clone);});
