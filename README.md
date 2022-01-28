#Instalacion

````````````````````
npm install -g nodemon
npm install
npm run dev
````````````````````

####Ubicación archivo de pruebas
````````````````````
assets/db.csv
````````````````````

#Rutas

###Subir el archivo al sistema

* POST: formdata http://localhost:3000/api/import-files
  
```````````````````` 
fileName: archivo.csv
----------------------------
Response
{
    "ok": true,
    "msg": "file uploaded",
    "fileName": "aabbfb98-6851-4ef1-8dc0-da4e56e762e8.csv"
}
----------------------------
````````````````````


###Leer los titulos de las columnas
* POST: raw http://localhost:3000/api/read-file

````````````````````
{
    "fileName":"d317deeb-28bc-4174-916e-63441eab7963.csv",
    "separator":","
}
----------------------------
Response
{
    "ok": true,
    "msg": "selecciona las columnas que deseas importar",
    "columns": [
        "producto",
        "telefono",
        "descripcion",
        "direccion",
        "nombres"
    ]
}
----------------------------
````````````````````

###Filtrar las columnas por titulo
* POST: raw http://localhost:3000/api/data-file

````````````````````
{
    "fileName":"d317deeb-28bc-4174-916e-63441eab7963.csv",
    "separator":",",
    "custom_columns": [
        "telefono",
        "direccion",
        "nombres"
    ]
}

----------------------------
Response

{
    "ok": true,
    "msg": "filter result",
    "columns": [
        {
            "telefono": "telefono2",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono3",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono4",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono5",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono6",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono7",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono8",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono9",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono10",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono11",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono12",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono13",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono14",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono15",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono16",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono17",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        },
        {
            "telefono": "telefono18",
            "direccion": "direccion del archivo sin comas",
            "nombres": "pepito perez"
        }
    ]
}
----------------------------
````````````````````
