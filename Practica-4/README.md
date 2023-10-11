

![Participantes](https://github.com/Byotony/logospng/blob/main/PNG/Participantes%20WHITE.png)

| Antony Palacios | Gustavo Rodriguez | Cristhopher Alcivar | Diego Flores | Ian Velez | Isaac Joviric |
| ------ | ------ | ------ | ------ |  ------ | ------ |
|<p align="center"><a href="https://github.com/byotony"><img src="https://github.com/Byotony/logospng/blob/main/PNG/Byonetta.png" text-align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/gusrsl"><img src="https://github.com/Byotony/logospng/blob/main/PNG/gustavo.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/krixsjdk"><img src="https://github.com/Byotony/logospng/blob/main/PNG/alcivar.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/diegoflores16"><img src="https://github.com/Byotony/logospng/blob/main/PNG/diego.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/e1313326363"><img src="https://github.com/Byotony/logospng/blob/main/PNG/ian.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/IsaacJ95"><img src="https://github.com/Byotony/logospng/blob/main/PNG/chepo.png" align="center" width="100" height="100"/></a></p>|

## Testing

### 1er Paso.
#### Nos movemos de promp y generamos la imagen.
![Alt text](images/Screenshot_1.png)

### 2do Paso.
#### Nos logeamos con docker para continuar con los pasos
![Alt text](images/Screenshot_2.png)

### 3er Paso.
#### Le hacemos el tag a la imagen
![Alt text](images/Screenshot_3.png)

### 4to Paso
#### Luego comenzamos a aplicar los cambios en todos nuestros archivos .yaml
![Alt text](images/Screenshot_4.png)

### 5to Paso (OPCIONAL)
#### Si llegan a presentar un error al momento de ejecutar, corren el siguiete código
```sh
  minikube docker-env | Invoke-Expression
```
![Alt text](images/Screenshot_5.png)

### 6to Paso
#### Corremos con el siguiente código verificando que todo funcione de manera correcta.
```sh
    minikube service backend-service  
```    
![Alt text](images/Screenshot_6.png)

### 7mo Paso
#### Aquí una vez ejecutado nos dará la dirección en la que se alojó.

![Alt text](images/Screenshot_7.png)

### 8vo Paso
#### Podemos verificarlo desde la web

![Alt text](images/Screenshot_8.png)

### 9no Paso
#### Podemos hacer post y gest con la herramienta Postaman para evaluar si funcionamiento.

![Alt text](images/Screenshot_9.png)

### 10mo Paso
#### Aquí podemos ver la image creada de docker.

![Alt text](images/Screenshot_10.png)