// Sample product data
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

const productData = [
  {
    id: 1,
    title: "Round Neck T-Shirt",
    price: "$25.00",
    color: "orange",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT56gkvv7Si1IAgDhfFQkn7RqnzQGxqhLq2c3tuCKZnZQQmvHZDkzHhYjnrzS8gz3YQqT32dq4I17ABi9O5Jw5iA6W0RFNo",
  },
  {
    id: 2,
    title: "V-Neck T-Shirt",
    price: "$22.00",
    color: "white",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT56gkvv7Si1IAgDhfFQkn7RqnzQGxqhLq2c3tuCKZnZQQmvHZDkzHhYjnrzS8gz3YQqT32dq4I17ABi9O5Jw5iA6W0RFNo",
  },
  {
    id: 3,
    title: "Graphic T-Shirt",
    price: "$28.00",
    color: "cyan",
    image:
      "https://e7.pngegg.com/pngimages/3/819/png-clipart-printed-t-shirt-polo-shirt-clothing-t-shirt-tshirt-fashion-thumbnail.png",
  },
  {
    id: 4,
    title: "Basic Tee",
    price: "$20.00",
    color: "purple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sm79Vvnh8ZjEMZGi3e4y19cRfjbG_hZmB-dRwinnpewxcn0Mrm0Qw60NTC0wlIc9ZTM&usqp=CAU",
  },
  {
    id: 5,
    title: "Round Neck T-Shirt",
    price: "$25.00",
    color: "orange",
    image:
      "https://w7.pngwing.com/pngs/797/355/png-transparent-t-shirt-clothing-template-t-shirt-purple-template-tshirt-thumbnail.png",
  },
  {
    id: 6,
    title: "V-Neck T-Shirt",
    price: "$22.00",
    color: "white",
    image: "https://pngfre.com/wp-content/uploads/T-Shirt-20-1-876x1024.png",
  },
  {
    id: 7,
    title: "Graphic T-Shirt",
    price: "$28.00",
    color: "cyan",
    image:
      "https://e7.pngegg.com/pngimages/140/752/png-clipart-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-thumbnail.png",
  },
  {
    id: 8,
    title: "Basic Tee",
    price: "$20.00",
    color: "purple",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAyL3Jhd3BpeGVsb2ZmaWNlM18zZF9yZWFsaXN0aWNfbWVuc19ncmVlbl90LXNoaXJ0X21vY2t1cF9mcm9udF92aV9lODQ4MTNkOS03NDMxLTQyZmMtYjBmMi02ODhhOTU3YWViYjctbTdidDNsd2cucG5n.png",
  },
];

// Function to create product cards
function createProductCard(product) {
  return `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <p class="product-title">${product.title}</p>
                        <p class="product-price">${product.price}</p>
                    </div>
                </div>
            `;
}

// Function to load initial products
function loadInitialProducts() {
  const trendingContainer = document.getElementById("trending-products");
  const exploreContainer = document.getElementById("explore-products");

  let trendingHTML = "";
  let exploreHTML = "";

  productData.forEach((product) => {
    trendingHTML += createProductCard(product);
    exploreHTML += createProductCard(product);
  });

  trendingContainer.innerHTML = trendingHTML;
  exploreContainer.innerHTML = exploreHTML;
}

// Function to load more products on scroll more button click
function loadMoreProducts() {
  const trendingContainer = document.getElementById("trending-products");
  const exploreContainer = document.getElementById("explore-products");

  // Generate 12 new products (based on existing ones with new IDs)
  let newProductsHTML = "";

  for (let i = 0; i < 12; i++) {
    const baseProduct = productData[i % productData.length];
    const newProduct = {
      ...baseProduct,
      id: baseProduct.id + 100 + i,
    };
    newProductsHTML += createProductCard(newProduct);
  }

  // Append new products to both containers
  trendingContainer.innerHTML += newProductsHTML;
  exploreContainer.innerHTML += newProductsHTML;

  // Smooth scroll to show new products
  window.scrollBy({
    top: 300,
    behavior: "smooth",
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadInitialProducts();
});
