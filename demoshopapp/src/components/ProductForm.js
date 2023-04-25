import { useState } from 'react';
import './ProductForm'

function ProductForm(props) 
{

    // UI per date and title ki changed value show krne ke liye hmne use kiya use state ,by default hmne iski value empty ki hai
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');


    // ham multiple use state use krne ke bjay ak sinle usestate use krke bhi krr skte hai isme ham usestate ka object bnate hai
    // const[fullproduct,setfullproduct]=useState(
    //     {
    //         title:'',
    //         date:''
    //     }
    // );



    // jo bhi app title set krr rhe hai input me vo initially console per dikhega
    function titleChangeHandler(event) 
    {
        // syntax hai - event ko by default vo value mil jati hai 
        setTitle(event.target.value);
        //console.log(event.target.value);
    }


    // event by default var hai 
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }



    // iski help se hmne jo sumbit krne per by default action tha use prevent krke pna ak object bnakar show kiya 39 t0 49
    function submitHandler(event) 
    {

        // default behaviour ko manage krne ke liye hamne default prevent ka use kiya hai ye event object jo by default hota hai uske liye work krta hai
        event.preventDefault();

        // yha apne ap se value set ki object bna krr
        const productData = {
            title:newTitle,
            date:newDate
        };


        //console.log(productData);

        // ye hmne props ke thru access kiya productdate ye value newproduct me jayegi and vha se App.js me
        props.onSaveProduct(productData);


        // set ka use krke ap koi bhi value set krr skte ho
        setTitle('');
        setDate('');
    }

    return (<form onSubmit={submitHandler}>
    <div className='new-product_controls'>
        <div className='new-product_control'>
            <label>Title</label>

            {/* onchange ak event hai jiski help se ham ye pta krr skte hai ki initially iss input ki kya value hai ,  value ka use hmne value ko set krne ke liye  hai */ }
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;