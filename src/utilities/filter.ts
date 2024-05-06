export default function Filter<T>(array:T[], filters:T){
    const keys = Object.keys(filters)
    return array.filter(item=>{
        keys.forEach(key=>{
            if(filters[key]!==undefined){
                if(filters[key]!==item[key]){
                    return false
                }
            }
        })
        return true
    })
}