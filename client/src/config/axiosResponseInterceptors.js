

export function axiosResponse (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response
};

export function axiosResponseReject (error) {
    const errorCode = error.response?.status;
    if (errorCode === 403) {
        window.location.replace("/login")
    }
    return Promise.reject(error);
}

