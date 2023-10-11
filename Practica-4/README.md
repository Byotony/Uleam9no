

![Participantes](https://github.com/Byotony/logospng/blob/main/PNG/Participantes%20WHITE.png)

| Antony Palacios | Gustavo Rodriguez | Cristhopher Alcivar | Diego Flores | Ian Velez | Isaac Joviric |
| ------ | ------ | ------ | ------ |  ------ | ------ |
|<p align="center"><a href="https://github.com/byotony"><img src="https://github.com/Byotony/logospng/blob/main/PNG/Byonetta.png" text-align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/gusrsl"><img src="https://github.com/Byotony/logospng/blob/main/PNG/gustavo.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/krixsjdk"><img src="https://github.com/Byotony/logospng/blob/main/PNG/alcivar.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/diegoflores16"><img src="https://github.com/Byotony/logospng/blob/main/PNG/diego.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/e1313326363"><img src="https://github.com/Byotony/logospng/blob/main/PNG/ian.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/IsaacJ95"><img src="https://github.com/Byotony/logospng/blob/main/PNG/chepo.png" align="center" width="100" height="100"/></a></p>|

## Testing

### 1er Paso.
#### Definimos las variables las cuales se van a testear.
![Alt text](images/9.png)

### 2do Paso.
#### En el Act detallamos todo el testeo que se realizará, hay que tener en cuenta los factores de "Proviers" que es el encargado de llamar al servicio que se quiera testear, y los mocker de usan para ayudarnos a definir variables de mongo a través de tokens
![Alt text](images/10.png)

### 3er Paso.
#### El assert que es el encargado de ejecutar el testeo, esto lo logramos usando la función describe sobre el findAll
![Alt text](images/11.png)

## Luego Procedemos a la Dockerizar 

### 1er Paso
#### Configuramos el Dockerfile
![Alt text](images/12.png)

### 2do Paso
#### Ejecutamos todos los Test del proyecto
```sh
  npm test
```
![Alt text](images/5.png)

### 3er Paso
#### Creamos la imagen del docker pero con referencia al Test
```sh
    docker build --target test -t mi-backend:test .  
```    
![Alt text](images/6.png)

### 4to Paso
#### Creamos la imagen del docker completa
```sh
    docker build -t mi-backend:latest .
``` 
![Alt text](images/7.png)

### 5to Paso
#### Revisamos las imagenes creadas 
```sh
    docker images
``` 
![Alt text](images/7.1.png)

### 6to Paso
#### Nos Logueamos en docker
```sh
    docker login
``` 
![Alt text](images/7.2.png)

### 7to Paso
#### Etiquetar las imágenes con tu nombre de usuario de Docker Hub, antes de poder subir tus imágenes a Docker Hub.
```sh
  docker tag mi-backend:test byotony/mi-backend:test
  docker tag mi-backend:latest byotony/mi-backend:latest
```
#### Subir las imágenes a Docker Hub
```sh
  docker push byotony/mi-backend:test
  docker push byotony/mi-backend:latest
```
![Alt text](images/8.png)

### 8vo Paso
#### Por ultimo hacemos el Docker Publico
```sh
  docker push byotony/mi-backend
```
![Alt text](images/13.png)

### 9no Paso
#### Ejecutamos la imagen bajada del docker del test y Observamos que funcione correctamente
![Alt text](images/3.png)

#### Tambien podemos observar la imagen completa y Observamos que funcione correctamente
![Alt text](images/1.png)

### 10mo Paso
#### Observamos todas las imagenes bajadas y creadas
![Alt text](images/2.png)

#### Observamos las imagenes subida en Docker Hub
![Alt text](images/4.png)