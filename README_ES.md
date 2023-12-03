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

El código de este algoritmo se basa en los algoritmos del libro "Algoritmos genéticos en conceptos básicos de Java" de los autores Lee
Jacobson y Burak Kanber, Capítulo 2: Implementación de un algoritmo genético básico.

El código está implementado en JavaScript, programado orientado a objetos. Se divide en 4 clases principales:

- Clase individual
- Clase de población
- Clase de algoritmo genético
- Clase principal

### Clases de descripción

- Una clase Individual, que representa una única solución candidata y su cromosoma.
- Una clase de población, que representa una población o una generación de individuos, y aplica operaciones a nivel de grupo.
  a ellos.
- Una clase GeneticAlgorithm, que abstrae el algoritmo genético en sí y proporciona implementaciones específicas del problema.
  de métodos de interfaz, como cruce, mutación, evaluación de aptitud y verificación de condiciones de terminación.
- Una clase principal que contiene el punto de entrada así como el código para mostrar los resultados en la página web.

Cada clase tiene sus propios atributos y métodos para la implementación de la clase principal GeneticAlgorithm.

## Descargar

Descargue el código del repositorio y ejecute el archivo index.html.

## Cómo utilizar

Para ejecutar el programa, simplemente abra la página index.html, tiene dos modos gráfico y de consola. Para ver la consola debes
utilice la herramienta de "inspección" en su navegador y seleccione la herramienta "consola".

El archivo Main.js es el punto de entrada del programa, puede establecer el tamaño del cromosoma y la matriz de destino.
Recuerde que el tamaño del cromosoma debe ser igual al conjunto objetivo y no olvide volver a declarar el conjunto objetivo en
cada clase.

# Teoría/Implementación de un Algoritmo Genético Básico

## Preimplementación

## Pseudocódigo para un algoritmo genético básico

El pseudocódigo se describe a continuación:

1. Se inicializa la primera generación.
2. Comienza con la creación de la población inicial del algoritmo genético.
3. Esta población se evalúa para encontrar los valores de aptitud de sus individuos.
   Se ejecuta una verificación para decidir si se ha cumplido la condición de terminación del algoritmo genético.
   De lo contrario, el algoritmo genético comienza a repetirse y la población pasa por su primera ronda de cruce.
   y mutación antes de ser finalmente reevaluado. A partir de aquí, el cruce y la mutación se aplican continuamente hasta que
   Se cumple la condición de terminación y el algoritmo genético termina:
4. Selección de padres por torneo binario (50)
5. Cruce de padres.
6. Mutación
7. Evaluación de la población
8. Se repite con una nueva generación

Este pseudocódigo demuestra el proceso básico de un algoritmo genético.

```java
1: generación = 0;
2: población[generación] = inicializarPoblación(tamaño de población);
3: evaluarPoblación(población[generación]);
3: Mientras isTerminationConditionMet() == false hacer
4: padres = selectParents(población[generación]);
5: población[generación+1] = cruce(padres);
6: población[generación+1] = mutar(población[generación+1]);
7: evaluarPoblación(población[generación]);
8: generación++;
9: Fin del bucle;
```