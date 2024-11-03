
const getStoredReadList =()=>{
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList =JSON.parse(storedListStr);
        return storedList;
    }else{
        return []
    }
}
export { getStoredReadList };
const addToStoredReadList=(id)=>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        alert(id+ "aleardy exists")
    }
    else{
        storedList.push(id)
        const storedListStr =JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
    }
}
export { addToStoredReadList };

const getStoredWishList=()=>{
    const wishListStr = localStorage.getItem('wish-list')
    if(wishListStr){
        const storedList =JSON.parse(wishListStr)
        return storedList
    }else{
        return []
    }
}

const addToWishList=(id)=>{
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        alert(id + "already exists in wish list")
    }else{
        storedList.push(id)
        const wishListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', wishListStr)
    }
}
export { addToWishList };

