import fetch from "node-fetch";

export const loginService = async (req, res) => {
    const { correo, password, url } = req;
    try {
        const response = await fetch(url,{
            method: 'post',
            body: JSON.stringify({
                correo,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_1');
        }
        const res_ = await response.json(); 
        return res_;   
    } catch (error) {
        console.error(error);
    }
};

export const createProductService = async (req, res) => {
    const {nombre, descripcion, cantidad, color, url } = req;
    try {
        const response = await fetch(url,{
            method: 'post',
            body: JSON.stringify({
                nombre,
                descripcion,
                cantidad,
                color
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_2');
        }
        const res_ = await response.json();
        return JSON.stringify(res_);   
    } catch (error) {
        console.error(error);
    }
};

export const getAllProductService = async (req, res) => {
    try {
        const response = await fetch(req, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_2');
        }
        const res_ = await response.json(); 
        return res_;   
    } catch (error) {
        console.error(error);
    }
};

export const getOneProductService = async (url, res) => {
    try {
        const response = await fetch(url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_2');
        }
        const res_ = await response.json(); 
        return res_;   
    } catch (error) {
        console.error(error);
    }
}

export const deleteProductService = async (url, res) => {
    try {
        const response = await fetch(url, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_2');
        }
        const res_ = await response.json();
        return res_;   
    } catch (error) {
        console.error(error);
    }
}

export const updateProductService = async (req_, res) => {
    try {
        const response = await fetch(req_.url, {
            method: 'patch',
            body: JSON.stringify(req_.body),
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_2');
        }
        const res_ = await response.json(); 
        return res_;
    } catch (error) {
        console.error(error);
    }

}

export const executeSeederService = async (req, res) => {
    try {
        const response = await fetch(req, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok){
            throw new Error('Wrong conection to microservice_1');
        }
        const res_ = await response.json(); 
        return res_;   
    } catch (error) {
        console.error(error);
    }
}