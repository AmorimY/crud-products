"use client";
import { useRouter } from "next/navigation";

export default function ProductButton({ id, description, edit }: any) {

  const router = useRouter();

  function handleClick() {
    if (!id) {
      return router.push(`/produtos/gerenciar/novo`);
    }
    if (edit == true) {
      return router.push(`/produtos/gerenciar/editar/${id}`);
    }
    router.push(`/produtos/${id}`);
  }

  return <button onClick={handleClick}>{description}</button>;
}
