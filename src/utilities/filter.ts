export default function Filter<T>(array:T[], filters:T){
    const keys = Object.keys(filters)
    return array.filter(item=>{
        for(const i in keys){
            const key = keys[i];
            if(filters[key]!==undefined){
                if(filters[key]!==item[key]){
                    return false
                }
            }
        }
        return true
    })
}