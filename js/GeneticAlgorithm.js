/**
 *
 * This class has the methods and variables necessary for the operations of the genetic algorithm itself. For example,
 * this class includes logic to handle crossovers, mutations, fitness evaluations, and termination condition checking.
 * Once the class is created, add a constructor that accepts all four parameters: population size, mutation rate,
 * crossover rate, and number of elite members.
 *
 * Genetic Algorithm class, which contains:
 *
 * Attributes
 * - targetArray
 * - populationSize
 * - mutationMug
 * - crossoverRate
 * - eliteNumber
 *
 * Methods
 * - finalCondition(population)
 * - parentSelectWithBinaryMethod(population)
 *
 */
class GeneticAlgorithm {

  populationSize; // Size population
  mutationMug; // Mutation mug
  crossoverRate; // Crossover rate
  eliteNumber; // Elite number
  targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // Target array, change the order as you wish


  /**
   * Initialize the GeneticAlgorithm class with the parameters:
   * @param populationSize
   * @param mutationMug
   * @param crossoverRate
   * @param eliteNumber
   */
  constructor(populationSize, mutationMug, crossoverRate, eliteNumber) {
    this.populationSize = populationSize;
    this.mutationMug = mutationMug;
    this.crossoverRate = crossoverRate;
    this.eliteNumber = eliteNumber;
  }


  /**
   * Final stop condition, if the fitness is equal to 1. This means that the combination is equal to the final
   * objective.
   *
   * @param population
   * @return {boolean}
   */
  finalCondition(population) {
    console.log(population)
    for (let i = 0; i < population.size; i++) {
      if (population.population[i].fitness == 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  /**
   * Selected from the father by Binary Tournament Method
   *
   * In this, the GA randomly selects two individuals from the population with the same probability, subsequently the
   * fitness value of each of the selected individuals is calculated. The individual with the best fitness value will
   * be the finally selected individual.
   *
   * @param {Population[]} population
   * @return {Individual[]}
   */
  parentSelectWithBinaryMethod(population) {

    let parent1 = [];
    let parent2 = [];
    let min = 0;
    let max = population.length;

    // Two individuals are randomly selected from the population
    let parentIndex1 = this.getRandomInt(min, max);
    let parentIndex2 = this.getRandomInt(min, max);

    // Prevent them from being the same parents
    while (parentIndex1 == parentIndex2) {
      parentIndex2 = this.getRandomInt(min, max);
    }

    // The fitnesses are compared and the parent with the highest fitness is chosen
    if (population[parentIndex1].fitness <= population[parentIndex2].fitness) {
      return population[parentIndex2]
    } else {
      return population[parentIndex1]
    }
  }

  /**
   * Returns a random integer between the given minimum and maximum
   * @param min {number}
   * @param max {number}
   * @return {number}
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }








  /**
   * Retorna la nueva población con el cruzamiento aplicado
   * @param population
   * @return {Population}
   */
  crossing(population) {


    // console.log(population)
    // Se crea una nueva población
    const newPopulation = new Population(population.getPopulationSize, 1); // Era 1
    let parent1 = [];
    let parent2 = [];
    let descendant = [];

    // Recorrer la poblacion actual
    for (let i = 0; i < population.getPopulationSize; i++) {

      // Encuentra el primer padre
      parent1 = population.getBestAdaptedIndividual;
      // console.log(parent1)

      // Aplica el cruzamiento a los individuos
      if (this.crossoverRate > Math.random() && i >= this.eliteNumber) {

        // Encuentra el segundo padre
        parent2 = this.parentSelectWithBinaryMethod(population);

        // Inicia la descendencia
        descendant = new Individual(1, parent1.chromosome);

        // console.log(Math.random());

        // Recorre el genoma
        for (let genIndex = 0; genIndex < parent1.getChromosomeSize; genIndex++) {

          //console.log(descendant.chromosome[genIndex]);
          // Usa la mitad de los genes de ambos padres
          if (0.5 > Math.random()) {
            // console.log('here1')
            descendant.setChromosome(genIndex, parent1.getGeneChromosome(genIndex));
          } else {
            //console.log('here2')
            descendant.setChromosome(genIndex, parent2.getGeneChromosome(genIndex));
          }

        }
        //console.log('------------------')
        // Añade la descendencia a la nueva población
        newPopulation.setIndividualNew(i, descendant);

      } else {
        newPopulation.setIndividualNew(i, parent1);
      }
    }

    //console.log (newPopulation);
    return newPopulation;
  }






  populationInitialization(populationSize) {
    const population = new Population(populationSize, 0); // era 0
    return population;
  }


  calculateIndividualFitness(individual) {
    const targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    let correctGenes = 0;
    let fitnessNumber = 0;
    for (var i = 0; i < targetArray.length; i++) {
      if (targetArray[i] == individual.getChromosme[i]) {
        correctGenes++;
      }
    }
    individual.fitnessNumber = correctGenes / 16;
  }

}