1. Clonar el repositorio
2. Abrir un cmd o bash en el directorio del repo
3. Ejecuta los siguientes comandos (no omitir puntos):

    3.1.- cd api-gateway

    3.2.- npm install

    3.3.- docker build -t api-gateway .

    3.4.- docker run -d --name api-gateway -p 3001:3001 api-gateway


4. Abrir otro cmd o bash en el directorio del repo
5. Ejecuta los siguientes comandos (no omitir puntos):

    5.1.- cd microservice1

    5.2.- npm install

    5.3.- docker build -t microservice1 .

    5.4.- docker run -d --name microservice1 --hostname microservice1 -p 3001:3001 microservice1


6. Abrir otro cmd o bash en el directorio del repo
7. Ejecuta los siguientes comandos (no omitir puntos):

    7.1.- cd microservice2

    7.2.- npm install

    7.3.- docker build -t microservice2 .

    7.4.- docker run -d --name microservice2 --hostname microservice2 -p 3001:3001 microservice2

8. Abrir otro cmd o bash en el directorio del repo

9. Ejecuta el siguiente comando (construir container con database):

    9.1.- docker compose up


En POSTMAN crear los siguientes endpoints:

    -- Login --
    POST - http://localhost:3000/login
        Enviar en el body la siguiente data:
            {
                "correo":"luis.lopez@ieee.com",
                "password":"cantilever"
            }
        Como respuesta se obtiene un token
    
    -- Crear nuevo producto --
    POST - http://localhost:3000/createProduct/:token
        Enviar en la URL el token recibido en el login
        Enviar en el body la siguiente data:
            {
                "nombre":"Producto 5",
                "descripcion": "Lorem ipsum est...",
                "cantidad": 27,
                "color": "[{amarillo:12}]"
            }
        Como respuesta se obtiene un string con el id del 
        nuevo producto creado
    
    -- Modificar producto existente --
    PATCH - http://localhost:3000/modifyProduct/:id/:token
        Enviar en la URL el id del producto (anteriormente obtenido) y el token
        Enviar en el body la data modificada (ejemplo):
            {
                "nombre":"Producto 5 MODIFICADO",
                "descripcion": "Lorem ipsum est... MODIFICADO",
                "cantidad": 24,
                "color": "[{amarillo:12}, {Verde: 12}]"
            }
        Como respuesta se obtiene el producto modificado
    
    -- Eliminar producto existente --
    PATCH - http://localhost:3000/delete/:id/:token
        Enviar en la URL el id del producto (anteriormente obtenido) y el token
        
        Como respuesta se obtiene el estatus 200, 400 o 401
    
    -- Obtener todos los productos --
    GET - http://localhost:3000/allProducts
        
        Como respuesta se obtienen todos los productos registrados
    
    -- Obtener un solo producto --
    GET - http://localhost:3000/product/:id
        Enviar en la URL el id del producto (anteriormente obtenido)
        
        Como respuesta se obtienen el producto registrado
    



