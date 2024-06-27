"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function InputProducts({ edit, id }: any) {
    const [sendingData, setSendingData] = useState({
      name: "",
      price: "",
      quantity: "",
    });
  if (id) {
    useEffect(() => {
      axios
        .get(`http://44.201.160.235:2000/product/${id}`)
        .then((res) => {
          console.log(res.status)
          setSendingData(res.data);
        })
        .catch((error) => {});
    }, []);
    console.log(sendingData.name);
  }

  const handlerChangePrice = (e: any) => {
    const value = e.target.value;
    console.log(setSendingData);
    setSendingData({
      ...sendingData,
      price: value,
    });
  };
  const handlerChangeName = (e: any) => {
    const value = e.target.value;
    setSendingData({
      ...sendingData,
      name: value,
    });
    console.log(sendingData);
  };
  const handlerChangeQuantity = (e: any) => {
    const value = e.target.value;
    setSendingData({
      ...sendingData,
      quantity: value,
    });
    console.log(sendingData);
  };
  const handlerSubmit = (e :any) => {
    e.preventDefault()
    axios.patch(`http://44.201.160.235:2000/product/${id}`, sendingData).then((res) => {
      console.log(res.status);
      console.log("alterado")

    });
  };
  if (!edit) {
      const handlerSubmit = (e: any) => {
        e.preventDefault();
        console.log(sendingData);
        axios.post("http://44.201.160.235:2000/product", sendingData).then((res) => {
          console.log(res.status);
          console.log("criado")
        });
      };

    return (
      <div>
        Adicionar produto
        <form>
          <label htmlFor="">Nome</label>
          <input
            className="text-black"
            type="text"
            name="nome"
            value={sendingData.name}
            id="nome"
            onChange={handlerChangeName}
          />
          <label htmlFor="">Preço</label>
          <input
            className="text-black"
            type="text"
            name="preco"
            value={sendingData.price}
            id="preco"
            onChange={handlerChangePrice}
          />
          <label htmlFor="">Quantidade</label>
          <input
            className="text-black"
            type="text"
            name="quantidade"
            value={sendingData.quantity}
            id="quantidade"
            onChange={handlerChangeQuantity}
          />
          <button type="submit" onClick={handlerSubmit}>
            Envia
          </button>
        </form>
      </div>
    );
  }
  return (
    <div>
      Editar produto
      <form>
        <label htmlFor="">Nome</label>
        <input
          className="text-black"
          type="text"
          name="nome"
          value={sendingData.name}
          id="nome"
          onChange={handlerChangeName}
        />
        <label htmlFor="">Preço</label>
        <input
          className="text-black"
          type="text"
          name="preco"
          value={sendingData.price}
          id="preco"
          onChange={handlerChangePrice}
        />
        <label htmlFor="">Quantidade</label>
        <input
          className="text-black"
          type="text"
          name="quantidade"
          value={sendingData.quantity}
          id="quantidade"
          onChange={handlerChangeQuantity}
        />
        <button type="submit" onClick={handlerSubmit}>
          Envia
        </button>
      </form>
    </div>
  );
}
