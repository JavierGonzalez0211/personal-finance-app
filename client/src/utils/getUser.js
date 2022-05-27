
const getUser = () => {
    const user = document.cookie?.substring(9)
    if (user) {
        return user
    }else {
        return false
    };
};

export default getUser;