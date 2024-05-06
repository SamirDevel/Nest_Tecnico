export default function Catch(callback:()=>any, msj:string){
    try {
        callback();
        return null;
    } catch (error) {
        console.log(error);
        return {error:msj}
    }
}