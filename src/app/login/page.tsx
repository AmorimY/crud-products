export default function Home(){

    
    return(
        <div>
            <form>
                Email<input className="text-black" type="text"/>
                User<input className="text-black" type="text"/>
                Password<input className="text-black" type="password"/>
                Confirm Password<input className="text-black" type="password"/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}