import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/CartSlice'
import { likeCart } from '../store/CartSlice'
import { Link } from 'react-router-dom'

const Home = () => {
  const [produts, setProducts] = useState([]);
  let dispatch = useDispatch()

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=0');
      const data = await res.json();
      setProducts(data.products)
      setFilteredProducts(data.products);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])
  
  let category = [
    "All",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ];

  const handleSearch = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(produts); 
    } else {
      const filtered = produts.filter((product) =>
        product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  let itemPage = 12;
  let lastIndex = itemPage * currentPage;
  let firstIndex = lastIndex - itemPage;
  let slicedArr = filteredProducts.slice(firstIndex, lastIndex);

  let noOfButton = Math.ceil(filteredProducts.length / itemPage);

  const handleNext = () => {
    if (currentPage < noOfButton) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const [panelVisible, setPanelVisible] = useState(false);
  const handleVisable = () => {
    setPanelVisible(!panelVisible)
  }

  return (
    <>
      <div className="font-sans p-4 lg:max-w-6xl md:max-w-3xl flex justify-center ">
        <div className="h-max 2xl:ml-20 ">
          <button onClick={handleVisable} className="py-2 px-1 capitalize cursor-pointer border-b-2 text-white text-center ml-2 rounded-md bg-[#ff523b] ">Products</button>
          <div
            className={`fixed top-20 right-0 w-48  bg-white z-50 transition-transform ${
              panelVisible ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
          >
            <ul className="flex flex-col max-h-[80vh] overflow-y-auto p-2">
              {category.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => handleSearch(cat)}
                  className={`p-2 capitalize cursor-pointer border-b-2 text-white text-center ml-2 rounded-md bg-[#ff523b]  ${selectedCategory === cat ? 'bg-[#e04b3b]' : ''}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="2xl:ml-4 xl:ml-2 lg:ml-4 md:ml-8 sm:ml-2 ml-2 grid grid-cols-1  sm:gap-x-[30px] sm:grid-cols-2 md:grid-cols-2 md:gap-x-[100px] lg:grid-cols-3 lg:gap-x-[100px] xl:grid-cols-4 xl:gap-x-[200px]  2xl:gap-x-[260px] gap-y-5 2xl:grid-cols-5  " >
          {slicedArr.map((ele, index) => {
            return (
              <div key={index} className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all shadow-xl w-60">
                <div className="w-full">
                  <Link to={"/view"} state={ele}>
                    <img src={ele.thumbnail} alt="Image" className="w-full object-cover object-top aspect-[230/307]" />
                  </Link>
                </div>
                <div className="p-2 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{ele.title}</h5>
                    <p className="mt-1 text-gray-500 truncate">{ele.brand}</p>
                    <div className="flex flex-wrap justify-between gap-2 mt-2">
                      <div className="flex gap-2">
                        <h6 className="text-sm sm:text-base font-bold text-gray-800">${ele.price}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <button onClick={() => dispatch(likeCart(ele))}>
                      <div className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                          <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                        </svg>
                      </div>
                    </button>
                    <button onClick={() => dispatch(addToCart(ele))} className="text-sm px-2 min-h-[36px] w-full bg-[#ff523b] hover:bg-[#ff442cd1] text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <ul className="flex flex-wrap gap-y-2 mt-10 ml-5 mx-auto divide-x-2 rounded-lg w-max font-[sans-serif]">
          <li onClick={handlePrev} className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-[#e24632] bg-[#ff523b] cursor-pointer text-sm text-white w-32 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white mr-2" viewBox="0 0 55.753 55.753">
              <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
            </svg>
            Previous
          </li>
          {Array(noOfButton).fill("").map((_, i) => {
            return (
              <li onClick={() => setCurrentPage(i + 1)} className={`flex items-center justify-center shrink-0 px-4 py-2 ${i + 1 === currentPage ? "bg-[#e24632]" : "bg-[#ff523b]"} hover:bg-[#e24632] cursor-pointer text-base font-bold text-white rounded-md w-16`}>
                {i + 1}
              </li>
            )
          })}

          <li onClick={handleNext} className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-[#e24632] bg-[#ff523b] cursor-pointer text-sm text-white w-32 rounded-md">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white ml-2 rotate-180" viewBox="0 0 55.753 55.753">
              <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
            </svg>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home;
