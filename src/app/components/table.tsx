"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductButton from "./ProductButton";

export default function Table() {
  let [product,setProduct] = useFetch("http://localhost:2000/product");
  console.log(product)
  const handlerDelete = (id : string) =>{
  axios.delete(`http://localhost:2000/product/${id}`)
  .then((res) => {
    console.log(res.data)
    setProduct(prevProducts => prevProducts.filter(product => product._id !== id));
  })
  .catch((error) => {
    console.error('Erro ao deletar produto:', error);
  });
  }
  product.map((id) => {
    return id._id;
  });
  return (
    <div>
      <table className="border-collapse border border-slate-500 bg-slate-700 ">
        <thead className="bg-slate-500">
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {product.map((products) => {
            
            return (
              <tr key={products._id}>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>{products.quantity}</td>
                <td>
                  <ProductButton
                    id={products._id}
                    description={"Acessar Produto"}
                  />
                </td>
                <td>
                  <ProductButton
                    id={products._id}
                    description={"Editar"}
                    edit={true}
                  />
                </td>
                <td>
                  <button onClick={ () => handlerDelete(products._id)}>Deletar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ProductButton description={"Adicionar Produto"} />
    </div>
  );
}
