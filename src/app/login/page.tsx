'use client'
import { ChangeEvent, useState } from "react"

export default function Home() {
    const [sendingData, setSendingData] = useState({
        email:"",
        password:""
    })

    const handlerChangeEmail = (e : any) =>{
        const value = e.target.value
        setSendingData({
          ...sendingData,
          email : value,
        });
        console.log(sendingData)
      };

    function handlerChangepassword(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value
        setSendingData({
            ...sendingData,
            password: value
        })
        console.log(sendingData)
    }

    const handlerSubmit = (e : any) =>{
        e.preventDefault()
       const objt =  {email : "rafael" , password : "rafael"}

       if(objt.email.trim != sendingData.email.trim || objt.password.trim != sendingData.password.trim){
        return console.log("Email ou senha incorretos")
       }
       console.log("Login autenticado")

    }

    return (
        <div>
            <form>
                Email
                <input
                    className="text-black"
                    type="text"
                    name="email"
                    value={sendingData.email}
                    id="email"
                    onChange={handlerChangeEmail}
                />
                Password
                <input
                    className="text-black"
                    type="password"
                    name="password"
                    value={sendingData.password}
                    id="password"
                    onChange={handlerChangepassword}
                />
                <button type="submit" onClick={handlerSubmit}>Entrar</button>
            </form>
        </div>
    )
}