import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;
export async function createProduct(data){
    try{
        
    const response=await axios.post(`${url}/api/products`, data);
    return response;
    }catch(err){
        console.log(err);
    }
}

export async function getProductById(productId){
    try{  
    const response=await axios.get(`${url}/api/products/${productId}`);
    return response;
    }catch(err){
        console.log(err);
    }
}

export async function editProduct(data,productId){
    try{
        
    const response=await axios.put(`${url}/api/products/${productId}`, data);
    return response;
    }catch(err){
        console.log(err);
    }
}

export async function deleteProduct(productId){
    try{  
    const resonse=await axios.delete(`${url}/api/products/${productId}`);
    return resonse;
    }catch(err){
        console.log(err);
    }
}