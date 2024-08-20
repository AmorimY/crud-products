export default function Home({params} : {params : {profileId : string}}){
    return(
        <>
        Olá {params.profileId}
        </>
    )
}