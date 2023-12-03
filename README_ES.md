# Algoritmo evolutivo

Ejemplo de algoritmo genético para resolver un rompecabezas 4x4.

## Algoritmo evolutivo v1.0.0

- Nombre: Algoritmo evolutivo para rompecabezas 4x4
- Descripción: Ejemplo de algoritmo genético para resolver un rompecabezas 4x4.
- Versión: 1.0.0
- Autor: Guillermo Camarena See More
- URI del autor: https://gcamarenaprog.com
- GitHub: https://github.com/gcamarenaprog/evolutionary_algorithm
- Fecha: 12-03-2023

## Más información

El código de este algoritmo se basa en los algoritmos del libro "Algoritmos genéticos en conceptos básicos de Java" de
los autores Lee
Jacobson y Burak Kanber, Capítulo 2: Implementación de un algoritmo genético básico.

El código está implementado en JavaScript, programado orientado a objetos. Se divide en 4 clases principales:

- Clase individual
- Clase de población
- Clase de algoritmo genético
- Clase principal

### Clases de descripción

- Una clase Individual, que representa una única solución candidata y su cromosoma.
- Una clase de población, que representa una población o una generación de individuos, y aplica operaciones a nivel de
  grupo.
  a ellos.
- Una clase GeneticAlgorithm, que abstrae el algoritmo genético en sí y proporciona implementaciones específicas del
  problema.
  de métodos de interfaz, como cruce, mutación, evaluación de aptitud y verificación de condiciones de terminación.
- Una clase principal que contiene el punto de entrada así como el código para mostrar los resultados en la página web.

Cada clase tiene sus propios atributos y métodos para la implementación de la clase principal GeneticAlgorithm.

## Descargar

Descargue el código del repositorio y ejecute el archivo index.html.

##Cómo utilizar

Para ejecutar el programa, simplemente abra la página index.html, tiene dos modos gráfico y de consola. Para ver la
consola debes
utilice la herramienta de "inspección" en su navegador y seleccione la herramienta "consola".

El archivo Main.js es el punto de entrada del programa, puede establecer el tamaño del cromosoma y la matriz de destino.
Recuerde que el tamaño del cromosoma debe ser igual al conjunto objetivo y no olvide volver a declarar el conjunto
objetivo en
cada clase.

# Teoría/Implementación de un Algoritmo Genético Básico

## Terminología básica

Los algoritmos genéticos se basaron en los conceptos de evolución biológica, por lo que si está familiarizado con la
terminología encontrada
En la evolución, probablemente notarás una superposición en la terminología que se encuentra cuando se trabaja con
algoritmos genéticos. El
Las similitudes entre los campos se deben, por supuesto, a los algoritmos evolutivos y, más específicamente, a la
genética.
Los algoritmos son análogos a los procesos que se encuentran en la naturaleza.

Es importante comprender primero parte del lenguaje y la terminología básicos utilizados. A continuación se muestra una
lista de algunos de los más
términos de referencia comunes.

### Población

Esto es simplemente una colección de soluciones candidatas a las que se pueden aplicar operadores genéticos como la
mutación y
Se puede aplicar cruce.

### Candidato a solución

Una posible solución a un problema dado.

###Gene

Los bloques de construcción indivisibles que forman el cromosoma. Clásicamente, un gen consta de 0 o 1, pero no
necesariamente.

###Cromosoma

Un cromosoma es una cadena de genes. Un cromosoma define una solución candidata específica. Un típico cromosoma
codificado en binario.
puede contener algo como “01101011” u otro patrón determinado.

### Mutación

El proceso en el que los genes de una solución candidata se alteran aleatoriamente para crear nuevos rasgos.

### Transversal

El proceso en el que los cromosomas se combinan para crear una nueva solución candidata. Esto a veces se conoce como
recombinación.

### Selección

Esta es la técnica de seleccionar soluciones candidatas para generar la próxima generación de soluciones.

###Aptitud física

Puntuación que mide en qué medida una solución candidata se adapta a un problema determinado.

### Buscar espacios

En informática, cuando se trata de problemas de optimización que tienen muchas soluciones candidatas que deben buscarse
A través de ello, nos referimos a la colección de soluciones como un “espacio de búsqueda”. Cada punto específico dentro
del espacio de búsqueda sirve
como solución candidata para el problema planteado. Dentro de este espacio de búsqueda existe un concepto de distancia
donde las soluciones
que se colocan más cerca unos de otros son más
Es probable que expresen rasgos similares a los de las soluciones ubicadas más separadas.

Para comprender cómo se organizan estas distancias en el espacio de búsqueda, considere el siguiente ejemplo usando un
binario
representación genética:

```
"101" está a sólo 1 diferencia de "111". Esto se debe a que solo se requiere 1 cambio (cambiar el 0 a 1) para
transición de “101” a “111”. Esto significa que estas soluciones están separadas por solo 1 espacio en el espacio de búsqueda.
```

```
“000”, por otro lado, está a tres diferencias de “111”. Esto le da una distancia de 3, colocando “000” 3 espacios
desde “111” en el espacio de búsqueda.
```

### Parámetros

Aunque todos los algoritmos genéticos se basan en los mismos conceptos, sus implementaciones específicas pueden variar
bastante. Uno
de las formas en que las implementaciones específicas pueden variar según sus parámetros. Un algoritmo genético básico
tendrá al menos algunos
par