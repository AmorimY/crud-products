// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:2000/product");
//   const data = await res.json();
//   console.log(data)
//   return data.map((product: any) => ({
//     productId: product._id,
//   }));
// }

async function getProduct(id: any) {
  try {
    const res = await fetch(`http://localhost:2000/product/${id}`);
    const data = await res.json();

    return {
      status: res.status,
      data: data,
    };
  } catch (error: any) {
    return {
      status: "error",
      error: error.message,
    };
  }
}
export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);
  console.log(product);
  //lidar com isso depois,talvez fazer um redirect
  if (product.status != 200 || product.data == null) {
    return <div className="">{product.data.message}</div>;
  }
  return (
    <div>
      Nome:{product.data.name}
      <br></br>
      Preço:{product.data.price}
    </div>
  );
}

//Outro exemplo utilizando o then direto na function
// getProduct('60f6c48e6d593c12dcb1f030')
//   .then(response => {
//     if (response.status === 200) {
//       console.log('Produto encontrado:', response.data);
//     } else if (response.status === 404) {
//       console.log('Produto não encontrado.');
//     } else {
//       console.log('Erro ao buscar o produto:', response.status);
//     }
//   })
//   .catch(error => {
//     console.error('Erro inesperado:', error);
//   });
