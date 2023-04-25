import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {


    // ye fn props ke thru pranay wale fn ko access kiya hai
    function saveProduct(product) {
        console.log("i am inside new product");
        console.log(product)

        //calling parent function

        // jitne props fn hai unke ander object as a oarameter ata hai
        props.pranay(product);
    }

    return (<div className='new-product'>

         {/* ab saveProduct fn ProductForm child pass hoga jisko ham props ke thru access krr payenge iske child me and vo kuchh return krega jo ham iss parent me use krr payenge ye hmne child to parent communication ke liye krr rhe hai */}
        <ProductForm onSaveProduct = {saveProduct}/>
    </div>)
}

export default NewProduct;