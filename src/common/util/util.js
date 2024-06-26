/* 기븐오으로 지원해주는 storage 는 persist 라는 접두사가 붙기때문에 커스텀 스토리지 사용 */
const customStorage = {
    getItem: (key) => {
        return Promise.resolve(localStorage.getItem(key.replace('persist:', '')));
    },
    setItem: (key, value) => {
        return Promise.resolve(localStorage.setItem(key.replace('persist:', ''), value));
    },
    removeItem: (key) => {
        return Promise.resolve(localStorage.removeItem(key.replace('persist:', '')));
    }
};

export {
    customStorage
}