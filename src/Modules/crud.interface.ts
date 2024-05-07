export default interface CRUD<T>{
    create:(nuevo:T)=>Promise<any>
    read:(filtros:Partial<T>)=>Promise<any>
    update:(id:number, datos:Partial<T>)=>Promise<any>
    delete:(id:number,)=>Promise<any>
}