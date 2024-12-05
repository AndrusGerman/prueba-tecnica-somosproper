# Proyecto para la prueba tecnica (somosproper)

Este proyecto cuenta con una capa en Memoria y una en MYSQL Para mayor comodidad de la intérpretante.

## Requerimientos en caso de contar con Docker:

### En memoria:

En caso de ejecutar la capa mas sencilla en memoria solo es necesario ejecutar los siguientes comandos:
Para compilar:

```bash
docker build -f ./dockerfiles/Dockerfile.memory -t prueba-tecnica-somosproper-memory .
```

Para ejecutar:

```bash
docker prueba-tecnica-somosproper-memory
```

## En mysql
