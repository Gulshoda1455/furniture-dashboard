import { Button } from "antd"
import { deleteProduct } from "../api"


function DeleteProduct({productId}) {
    const handleDelete = async()=>{
        const isAgree = confirm("Are you agree to delete product")
        if(isAgree){
          const response = await deleteProduct(productId)
          console.log(response);
          if(response){
            alert("Product delete");
          }
        }
    }
  return (
    <div>
        <Button onClick={handleDelete} type="primary">Delete</Button>
    </div>
  )
}

export default DeleteProduct