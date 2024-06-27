
import axios from "axios";
import { useState, useEffect } from "react";

type Products = {
    _id: string;
    name: string;
    price: number;
    quantity: number

}

const useFetch = (url : string) => {
    const [product, setProduct] =  useState<Products[]>([])
    useEffect(() => {
        axios.get(url)
          .then((response) => {
           setProduct (response.data);
        })
        .catch((error) => {
            console.error('Erro ao buscar produtos:', error);
        });
    },[]);

    return [product,setProduct] as const
}



export default useFetch;