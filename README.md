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

## Basic Terminology

Genetic algorithms were built on the concepts of biological evolution, so if you’re familiar with the terminology found
in evolution, you’ll likely notice overlap in the terminology found when working with genetic algorithms. The
similarities between the fields are of course due to evolutionary algorithms, and more specifically, genetic
algorithms being analogous to processes found in nature.

It is important to first understand some of the basic language and terminology used. Below is a list of some of the most
common terms of reference.

### Population

This is simply a collection of candidate solutions to which genetic operators such as mutation and
crossover can be applied.

### Solution candidate

A possible solution to a given problem.

### Gene

The indivisible building blocks that make up the chromosome. Classically, a gene consists of 0 or 1, but not
necessarily.

### Chromosome

A chromosome is a chain of genes. A chromosome defines a specific candidate solution. A typical binary-coded chromosome
may contain something like “01101011” or another given pattern.

### Mutation

The process in which genes in a candidate solution are randomly altered to create new traits.

### Crossover

The process in which chromosomes are combined to create a new candidate solution. This is sometimes referred to as
recombination.

### Selection

This is the technique of picking candidate solutions to breed the next generation of solutions.

### Fitness

A score which measures the extent to which a candidate solution is adapted to suit a given problem.

### Search Spaces

In computer science when dealing with optimization problems that have many candidate solutions which need to be searched
through, we refer to the collection of solutions as a “search space”. Each specific point within the search space serves
as a candidate solution for the given problem. Within this search space there is a concept of distance where solutions
that are placed closer to one another are more
likely to express similar traits than solutions place further apart.

To understand how these distances are organized on the search space, consider the following example using a binary
genetic representation:

```
“101” is only 1 difference away from, “111”. This is because there is only 1 change required (flipping the 0 to 1) to
transition from “101” to “111”. This means these solutions are only 1 space apart on the search space.
```

```
“000” on the other hand, is three differences away from, “111”. This gives it a distance of 3, placing “000” 3 spaces
from “111” on the search space.
```

### Parameters

Although all genetic algorithms are based on the same concepts, their specific implementations can vary quite a bit. One
of the ways specific implementations can vary is by their parameters. A basic genetic algorithm will have at least a few
parameters that need to be considered during the implementation.

The main three are:

- The rate of mutation.
- The population size.
- The crossover rate.

### Mutation Rate

The mutation rate is the probability in which a specific gene in a solution’s chromosome will be mutated. There is
technically no correct value for the mutation rate of a genetic algorithm, but some mutation rates will provide vastly
better results than others. A higher mutation rate allows for more genetic diversity in the population and can also help
the algorithm avoid local optimums. However, a mutation rate that’s too high can cause too much genetic variation
between each generation causing it to lose good solutions it
found in its previous population.

If the mutation rate is too low, the algorithm can take an unreasonably long time to move along the search space
hindering its ability to find a satisfactory solution. A mutation rate that’s too high can also prolong the time it
takes to find an acceptable solution. Although, a high mutation rate can help the genetic algorithm avoid getting stuck
in local optimums, when it’s set too high it can have a negative impact on the search. This, as was said before, is due
to the solutions in each generation being mutated to such a large extent
that they’re practically randomized after mutation has been applied.

The mutation rate should be set to a value that allows for enough diversity toprevent the algorithm plateauing, but not
so much that it causes the algorithm to lose valuable genetic information from the previous population. This balance
will depend on the nature of the problem being solved.

### Population Size

The population size is simply the number of individuals in the genetic algorithm’s population in any one generation. The
larger the population’s size, the more of the search space the algorithm can sample. This will help lead it in the
direction of more accurate, and globally optimal, solutions. A small population size will often result in the algorithm
finding less desirable solutions in locally optimal areas of the search space, however they require less computational
resources per generation.

Again here, like with the mutation rate, a balance needs to be found for optimum performance of the genetic algorithm.
Likewise, the population size required will change depending on the nature of the problem being solved. Large hilly
search spaces commonly require a larger population size to find the best solutions.

Interestingly, when picking a population size there is a point in which increasing the size will cease to provide the
algorithm with much improvement in the accuracy of the solutions it finds. Instead, it will slow the execution down due
to the extra computational demand needed to process the additional individuals. A population size around this transition
is usually going to provide the best balance between resources and results.

### Crossover Rate

The frequency in which crossover is applied also has an effect on the overall performance of the genetic algorithm.
Changing the crossover rate adjusts the chance in which solutions in the population will have the crossover operator
applied to them. A high rate allows for many new, potentially superior, solutions to be found during the crossover
phase. A lower rate will help keep the genetic information from fitter individuals intact for the next generation. The
crossover rate should usually be set to a reasonably high rate promoting the search for new solutions while allowing a
small percentage of the population to be kept unaffected for the next generation.

### Genetic Representations

Aside from the parameters, another component that can affect a genetic algorithm’s performance is the genetic
representation used. This is the way the genetic information is encoded within the chromosomes. Better representations
will encode the solution in a way that is expressive while also being easily evolvable. Holland’s (1975) genetic
algorithm was based on a binary genetic representation. He proposed using chromosomes that were comprised of strings
containing 0s and 1s. This binary representation is probably the simplest encoding available, however for many problems
it isn’t quite expressive enough to be a suitable first choice.

Aside from simple binary representations and integers, genetic algorithms can use: floating point numbers, trees-based
representations, objects, and any other data structure required for its genetic encoding. Picking the right
representation is key when it comes to building an effective genetic algorithm.

### Termination

Genetic algorithms can continue to evolve new candidate solutions for however long is necessary. Depending on the nature
of the problem, a genetic algorithm could run for anywhere between a few seconds to many years! We call the condition in
which a genetic algorithm finishes its search its termination condition.

Some typical termination conditions would be:

• A maximum number of generations is reached
• Its allocated time limit has been exceeded
• A solution has been found that meets the required criteria
• The algorithm has reached a plateau

Occasionally it might be preferable to implement multiple termination conditions. For example, it can be convenient to
set a maximum time limit with the possibility of terminating earlier if an adequate solution is found.

### The Search Process

Initialize population -> Evaluate -> Terminate?

- YES -> Results
- NO -> Selection - Crossover - Mutation and go to "Evaluate"

1. Genetic algorithms begin by initializing a population of candidate solutions. This is typically done randomly to
   provide an even coverage of the entire search space.
2. Next, the population is evaluated by assigning a fitness value to each individual in the population. In this stage we
   would often want to take note of the current fittest solution, and the average fitness of the population.
3. After evaluation, the algorithm decides whether it should terminate the search depending on the termination
   conditions set. Usually this will be because the algorithm has reached a fixed number of generations or an adequate
   solution has been found.
4. If the termination condition is not met, the population goes through a selection stage in which individuals from the
   population are selected based on their fitness score – the higher the fitness, the better chance an individual has of
   being selected.
5. The next stage is to apply crossover and mutation to the selected individuals. This stage is where new
   individuals are created for the next generation.
6. At this point the new population goes back to the evaluation step and the process starts again. We call each cycle of
   this loop a generation.
7. When the termination condition is finally met, the algorithm will break out of the loop and typically return its
   finial search results back to the user.

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

The pseudo code begins with creating the genetic algorithm’s initial population. This population is then evaluated to
find the fitness values of its individuals. Next, a check is run to decide if the genetic algorithm’s termination
condition has been met. If it hasn’t, the genetic algorithm begins looping and the population goes through its first
round of crossover and mutation before finally being reevaluated.
From here, crossover and mutation are continuously applied until the termination condition is met, and the genetic
algorithm terminates.