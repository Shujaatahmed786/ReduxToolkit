
// import React from 'react';
// import Data from './assets/dummy.data';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from './Redux/CartSlice';
// import { useSelector } from 'react-redux';


// const Home = () => {
//     const dispatch = useDispatch();

//   return (

//     <div>
//         <div className='bg-black text-white w-full h-12 mb-24 flex justify-around items-center text-4xl' >
// <h2>Code</h2>
// <h4>Cart <small>0</small></h4>
//         </div>


//     <div className='flex justify-center gap-12'>
//       {Data?.map((data, index) => (
//         <div key={index} className="grid grid-rows-1">
//           <img  src={data.img} alt={`Image ${index}`}/>
//           <p>{data.text}</p>
//           <button onClick={()=>dispatch(addtoCart)} className='bg-yellow-500 text-white w-24 mx-auto h-12 mt-2 rounded-lg'>Add To Cart</button>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Home;


import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Product from '../src/Product'
import Shoe1 from '../src/assets/shoe1.jpg';
import Shoe2 from '../src/assets/shoe2.jpg';
import Shoe3 from '../src/assets/shoe3.jpg';
import Shoe4 from '../src/assets/shoe4.jpg';
import {Link} from 'react-router-dom'

const Home = () => {
    const CartItems = useSelector(state => state.cart);
    console.log(CartItems['items'].length, 'carditems')
  return (
    <div className='w-100 d-flex flex-column'>
        <div className='d-flex justify-content-between px-4 bg-dark text-white align-items-center h-12'>
            <h2>Code</h2>
            <Link to="/checkout"><h4>Cart <small>{CartItems['items']?.length}</small></h4></Link>
        </div>
        <div className='container d-flex flex-wrap mt-5'>
            <div className='border w-72'></div>
            <Product 
            title='Summers SALE up to 50% OFF what are you wating for'
            image={Shoe1}>

            </Product>
            <Product 
            title='AUTUMN is coming, choose what suits you THE BEST'
            image={Shoe2}>

            </Product>
            <Product 
            title='Make your feet as comfortable as walking on the beach'
            image={Shoe3}>

            </Product>
            <Product 
            title='Choose between basketball and fashion or choose both'
            image={Shoe4}>

            </Product>

        </div>
        
    </div>
  )
}

export default Home