# Proyecto: Clon Riot Games Site
Proyecto dedicado a clonar la página oficial de Riot Games (https://www.riotgames.com/en).
## Nota al califcador
Una interacción importante que se puede perder a simple vista (y con ello gran parte de mi esfuerzo), está en clickear el primer logo de la barra de navegacio. El clik lleva a un menu que tiene elemntos que al pasar por encima despliega una imagen en especifico.   
## Pre requisitos
- Node < ^16. *Probado en version v16.14.0
- npm < ^8. *Probado en version v8.3.1
## Ver proyecto 
El acceso a este proyecto puede darse de dos formas distintas. 
- Desde el directorio local, abrir el index.html de la carpeta proyecto01. 
- Alternativamente, puede ver el proyecto en el siguiente enlace:  http://ec2-52-20-181-247.compute-1.amazonaws.com:3013/#/
## Editar proyecto (DEV)
Como es de costumbre con proyecto que utilizan npm debemos instalar todas las dependencias con el siguiente comando: 
```
npm i 
```
Posteriormente podemos reconstruir el proyecto en la carpeta proyecto01 (que es el bundle de este proyecyo). 
```
npm run build
```
O correr en webpack server con el comando
```
npm start
```