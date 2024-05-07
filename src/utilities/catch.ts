export default async function Catch(callback:()=>any, msj:string){
    try {
        await callback();
        return null;
    } catch (error) {
        console.log(error);
        return {error:msj}
    }
}