import InputProducts from "@/app/components/InputProducts";

async function getProduct(id: any) {
  try {
    const res = await fetch(`http://44.201.160.235:2000/product/${id}`);
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
  if (product.status != 200 || product.data == null) {
    return <div className="">{product.data.message}</div>;
  }
  
  return (
    <div>
      <InputProducts id={params.productId} edit={true} />
    </div>
  );
}
