

import CreateProducts from "../components/CreateProducts";
import EditProduct from "../components/EditProduct";
import ProductsTable from "../components/ProductsTable";
import useGetProducts from "../hooks/useGetProducts";




function Products() {
 const products = useGetProducts();
  

  return (
    <div >
     
        <CreateProducts/>
        
     
      <ProductsTable products={products}/>
    </div>
  )
}

export default Products