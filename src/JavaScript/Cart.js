 const cart = [
  { name: 'Classic White T-Shirt', price: '499', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Denim Jacket', price: '1999', img: 'https://images.unsplash.com/photo-1551028711-873f1f12d0b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Black Hoodie', price: '1299', img: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Red Flannel Shirt', price: '899', img: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Blue Slim Jeans', price: '1599', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Beige Chinos', price: '1199', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Grey Sweatpants', price: '799', img: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Graphic Print Tee', price: '599', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Leather Jacket', price: '2999', img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Plain Black T-Shirt', price: '499', img: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Navy Blue Polo', price: '699', img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Casual Shorts', price: '899', img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'White Kurta', price: '1099', img: 'https://images.unsplash.com/photo-1595341595379-cf0f2f5a0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Track Jacket', price: '1599', img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Printed Shirt', price: '999', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Denim Shorts', price: '799', img: 'https://images.unsplash.com/photo-1604176354204-9266247a5e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Formal Blazer', price: '3499', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Woolen Sweater', price: '1299', img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Cropped Hoodie', price: '1199', img: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { name: 'Joggers', price: '999', img: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
];


    const data = cart.map((item)=>{
      return`
      <div class="shadow-md pb-2 mx-5 mb-5">
      <img class="h-[200px] w-[150px]"
        src=${item.img}
        alt="">
      <h1 class="text-center">${item.name}</h1>
      <p class="text-center">${item.price}</p>
      <div class="flex justify-center">
        <button class="bg-amber-600 px-2 rounded-2xl">Click</button>

      </div>
    </div>
      
      `
    })
 document.getElementById('cart').innerHTML = data.join('')
 