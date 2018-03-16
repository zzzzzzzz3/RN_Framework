/**
 * 网络请求工具
 * */

const get = async (url) => {
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        console.log('parsed json', responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
};

const post = async (url, params) => {
    try {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    error = new Error(response.statusText);
                    error.response = response;
                    throw error
                }
            })
            .then(response => {
                return response.json();
            })
            .then(json => {
                return json.toString();
            });
    } catch (error) {
        console.error(error);
    }
};

const get2 = async (url) => {
    try {
        return await fetch(url)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    error = new Error(response.statusText);
                    error.response = response;
                    throw error
                }
            })
            .then(response => {
                return response.json();
            })
            .then(json => {
                return json.toString();
            });
    } catch (error) {
        console.error(error);
    }
};

export default {
    get,post,get2
}