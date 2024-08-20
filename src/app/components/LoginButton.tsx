"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginButton({ sendingData, description}: any) {

    const router = useRouter();

    function handleClick(e: any) {
        e.preventDefault()
            axios
                .post("http://localhost:2000/user/login", sendingData)
                .then((response) => {
                    console.log(response.data)
                    let id = response.data._id
                    let name = response.data.user.name
                    router.push(`/login/${name}`);
                })
                .catch((error) => {
                    console.log(error)
                });
    }

    return <button onClick={handleClick}>{description}</button>;
}
