/* 自定义本地缓存处理模块 */
var storage = {
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    remove(key){
        localStorage.removeItem(key);
    }
}
export default storage;