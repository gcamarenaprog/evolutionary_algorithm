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
  initialPopulation;
  targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // Target array, change the order as you wish

  /**
   * Initialize the GeneticAlgorithm class with the parameters:
   * @param populationSize
   * @param mutationMug
   * @param crossoverRate
   */
  constructor(populationSize, mutationMug, crossoverRate) {
    this.populationSize = populationSize;
    this.mutationMug = mutationMug;
    this.crossoverRate = crossoverRate;
  }

  /**
   * Initialize a initial population
   * @return {Population[]}
   */
  initPopulation() {
    let objectInitPopulation = new Population(2, this.populationSize);
    this.initialPopulation = objectInitPopulation;
    return objectInitPopulation;
  }

  /**
   * Final stop condition, if the fitness is equal to 1. This means that the combination is equal to the final
   * objective.
   *
   * @param population
   * @return {boolean}
   */
  finalCondition(population) {
    for (let i = 0; i < population.size; i++) {
      if (population.population[i].fitness == 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  /**
   * Selected from the father by Binary Tournament Method (50)
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

    // Two individuals are randomly selected from the population, the selection is based on a binary tournament, that
    // is, it is selected randomly and with the same probability
    let parentIndex1 = this.getRandomInt(min, max);
    let parentIndex2 = this.getRandomInt(min, max);

    // Prevent them from being the same parents
    while (parentIndex1 == parentIndex2) {
      parentIndex2 = this.getRandomInt(min, max);
    }

    // The fitnesses are compared and the parent with the highest fitness is chosen
    if (population[parentIndex1].fitness <= population[parentIndex2].fitness) {
      return population[parentIndex2];
    } else {
      return population[parentIndex1];
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


  corssover() {

    let initialPopulation = this.initialPopulation.population;
    let parent1;
    let parent2;

    const newPopulation = new Population(1, this.populationSize);


    // The first parent is selected by binary tournament (50)
    parent1 = this.parentSelectWithBinaryMethod(initialPopulation);


    // A random number between 0.1 and 1 is obtained to compare with the 70% crossover rate.
    let randomNumber = (this.getRandomInt(1, 100)) * 0.01;

    for (let i = 0; i < newPopulation.population.length; i++) {

      // The crossover is generated with a rate of 70%. Apply crossover to this individual?
      if (randomNumber < this.crossoverRate) {

        // The second parent is selected by binary tournament (50)
        parent2 = this.parentSelectWithBinaryMethod(initialPopulation);

/*        console.log('Parent 1 antes de : ')
        console.log(parent1)

        console.log('Parent 2 antes de : ')
        console.log(parent2)*/

        // Se genera un punto de cruce uniforme del 50%, en este método, cada gen de la descendencia tiene un cambio
        // del 50% de provenir de su primer padre o de su segundo padre.

        //console.log('here');
       // console.log(parent1.chromosome);

        for (let i = 0; i < parent1.chromosome.length/2; i++) {
          //console.log(parent1.chromosome[i]);
          parent2.chromosome[i] = parent1.chromosome[i];

        }
  /*      console.log('------')*/

        //console.log(parent1)
  /*      console.log('Parent 2 despues de : ')
        console.log(parent2)*/

        newPopulation.setIndividualNew(i, parent2);


      } else {


        //  console.log('no se genera y parent1 se queda igual')

        // No se genera el parent 2 y se pasa el paren 1 tal cual a la nueva población
       // newPopulation.setIndividualNew(i, parent1);

        //console.log(parent1)
        newPopulation.setIndividualNew(i, parent1);
      }

    }

    // The new fitness of the created population is calculated.
    let newFitness =  newPopulation.calculatePopulationFitness();
    //newPopulation.fitness = newFitness;
    console.log(newPopulation);

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


}