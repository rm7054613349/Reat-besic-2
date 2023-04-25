
// state ko use krne se phle hme usse import krana padta hai - yha usestate  ak fn hai jo ham iss     state me use krte hai apko usse particuler state ke fn ko import krte hai {useState}
import React, { useState } from 'react';


import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {


  // STATE - varible me yadi value change hui hai then UI me bhi uski value change kr deta hai state ,yadi ham state ka use nhi krenge then vo UI me show nhi hoga but value change hoga

  // usestate input me - ap kis value se title ko initialize krna chahte hai vo leta hai ex- props.title 

  // ye besicallay do value return krta hai first Title- Kon si value le rhe hai kon si value me changes krna hai, second-setTitle besically ap kya value set krna chahte hai uske liye ak fn deta hai
  
  // ye syntax hai

  // initially title ko props .title initialize ho jaiga
  //jaise hi set title me popcorn ayega vo title me bhi value update krke set tilte vali value hio krr dega and vhi UI per show hoga
  const [title, setTitle] =  useState(props.title);


  // ye event ka  ander ka fn hai 
  function clickHandler() 
  {
    // ye wronge initialisation hai isse UI me change nhi hoga
    // //title = "Popcorn";

    // use state ak settitle fn return krta hai vo use krenge and usme ham ak value pass krenge 
    // isse UI me change hoga kyuki hmne STATE ka use kiya hai
    setTitle("Popcorn");

    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>


      {/* event listner in react onclick ,clickhandler ap kuchh bhi name de skte hai but ye good practice hai last me handler dena ak good practice hai*/}
       {/* IMPORTANT - react ke ander jitne bhi event handler hote hai vo props dwara handle kiye jate hai and ye {ON} key se start hota hai ex onclick */}

       {/* EVENT KA SYNTEX */}
      <button onClick={clickHandler}>Add to Cart</button>
      
    </Card>
  );
}

export default ProductItem;