# Evolutionary Algorithm

Example of a genetic algorithm to solve a 4x4 puzzle.

## Evolutionary Algorithm v1.0.0

- Name:          Evolutionary Algorithm for 4x4 puzzle
- Description:   Example of a genetic algorithm to solve a 4x4 puzzle.
- Version:       1.0.0
- Author:        Guillermo Camarena
- Author URI:    https://gcamarenaprog.com
- GitHub:        https://github.com/gcamarenaprog/evolutionary_algorithm
- Date:          03-12-2023

## More information

The code of this algorithm is based on the algorithms from the book "Genetic Algorithms in Java Basics" by authors Lee
Jacobson and Burak Kanber, Chapter 2: Implementation of a Basic Genetic Algorithm.

The code is implemented in JavaScript, programmed object-oriented. It is divided into 4 main classes:

- Individual class
- Population class
- GeneticAlgorithm class
- Main class

### Description classes

- An Individual class, which represents a single candidate solution and its chromosome.
- A Population class, which represents a population or a generation of Individuals, and applies group-level operations
to them.
- A GeneticAlgorithm class, which abstracts the genetic algorithm itself and provides problem-specific implementations
of interface methods, such as crossover, mutation, fitness evaluation, and termination condition checking. 
- A main class that contains the entry point as well as the code to display the results on the Web page.

Each class has its own attributes and methods for the implementation of the main GeneticAlgorithm class.

## Download

Download the code from the repository and run the index.html file.

## How to use

To run the program, just open the index.html page, it has two graphical and console modes. To view the console you must
use the "inspection" tool in your browser and select the "console" tool.

The Main.js file is the entry point of the program, you can set the size of the chromosome and the target array.
Remember that the chromosome size must be equal to the target array and don't forget to re-declare the target array in
each class.

# Theory / Implementation of a Basic Genetic Algorithm

## Pre-Implementation

## Pseudo Code for a Basic Genetic Algorithm

The pseudocode is described as follows:

1. The first generation is initialized
2. It begins with the creation of the initial population of the genetic algorithm.
3. This population is evaluated to find the fitness values of its individuals.
   A check is run to decide whether the termination condition of the genetic algorithm has been met.
   If not, the genetic algorithm begins to repeat itself and the population goes through its first round of crossover
   and mutation before finally being re-evaluated. From here, crossover and mutation are continuously applied until the
   termination condition is met and the genetic algorithm terminates:
4. Parent selection by binary tournament (50)
5. Parent crossing.
6. Mutation
7. Population assessment
8. It is repeated with a new generation

This pseudocode demonstrates the basic process of a genetic algorithm.

```java
1: generation = 0;
2: population[generation] = initializePopulation(populationSize);
3: evaluatePopulation(population[generation]);
3: While isTerminationConditionMet() == false do
4:      parents = selectParents(population[generation]);
5:      population[generation+1] = crossover(parents);
6:      population[generation+1] = mutate(population[generation+1]);
7:      evaluatePopulation(population[generation]);
8:      generation++;
9: End loop;
```