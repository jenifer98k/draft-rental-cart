import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
const Home=()=>{
 
    return(
        <>
         <h1 className="text-center mt-3">Equipment Rental</h1>  
             <h3 className="text-center mt-3">Get equipment for rent and place you order.</h3>
         <section className="py-4  container">
             <div className="row justify-content-center">
                 {data.productData.map((item,index)=>{
         return(
            <Itemcard
             img={item.img}
             title={item.title} 
             desc={item.desc}
              price={item.price}
               item={item} 
               key={index}  />
         )
                 })}
                
             </div>
         </section>
      </>
    );
};
export default Home;