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
  targetArray; // Target array, change the order as you wish

  /**
   * Initialize the GeneticAlgorithm class with the parameters:
   * @param populationSize
   * @param mutationMug
   * @param crossoverRate
   */
  constructor(populationSize, mutationMug, crossoverRate) {

    this.targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    this.populationSize = populationSize;
    this.mutationMug = mutationMug;
    this.crossoverRate = crossoverRate;
  }

  /**
   * Initialize a initial population
   * @return {Population[]}
   */
  initPopulation(populationType, populationSize) {
    let objectInitPopulation = new Population('initial', '50');
    this.initialPopulation = objectInitPopulation;
    return this.initialPopulation;
  }

  /**
   * Final stop condition, if the fitness is equal to 1. This means that the combination is equal to the final
   * objective.
   *
   * @param population
   * @return {boolean}
   */
  finalCondition(population) {
    //console.log(population);
    for (let i = 0; i < population.population.length; i++) {
      if (population.population[i].fitness == 1) {
        console.log('true');
        //return true;
      } else {
        //console.log('false');
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
    let max = population.population.length;

    // Two individuals are randomly selected from the population, the selection is based on a binary tournament, that
    // is, it is selected randomly and with the same probability
    let parentIndex1 = this.getRandomInt(min, max);
    let parentIndex2 = this.getRandomInt(min, max);

    // Prevent them from being the same parents
    while (parentIndex1 == parentIndex2) {
      parentIndex2 = this.getRandomInt(min, max);
    }

    // The fitnesses are compared and the parent with the highest fitness is chosen
    if (population.population[parentIndex1].fitness <= population.population[parentIndex2].fitness) {
      return population.population[parentIndex2];
    } else {
      return population.population[parentIndex1];
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
   * Returns a new population, where parent selection and population crossing are applied.
   *
   * Generates a selection of parents per binary tournament (50%)
   * To apply the crossover, a 70% crossover rate is used to see if it is applied.
   * A crossover is created with the uniform crossover point of 50% or random method.
   *
   */
  selectParentsAndCorssover() {

    let parent1;
    let parent2;

    const newPopulation = new Population();

    let copy1 = new Population();
    copy1 = Object.assign({}, this.initPopulation(), 1);

    // The first parent is selected by binary tournament (50)
    parent1 = this.parentSelectWithBinaryMethod(copy1);

    // A random number between 0.1 and 1 is obtained to compare with the 70% crossover rate.
    let randomNumber = (this.getRandomInt(1, 100)) * 0.01;

    console.log(randomNumber)

    for (let i = 0; i < this.populationSize; i++) {

      // The crossover is generated with a rate of 70%. Apply crossover to this individual?
      if (randomNumber < this.crossoverRate) {

        // The second parent is selected by binary tournament (50)
        parent2 = this.parentSelectWithBinaryMethod(copy1);

        // A uniform 50% crossover point is generated, in this method, each gene in the offspring has a change
        // 50% of coming from your first parent or your second parent.
        let rand = this.getRandomInt(0, 15);

        for (let i = 0; i < parent1.chromosome.length/2; i++) {
          parent2.chromosome[i] = parent1.chromosome[i];
        }



        // The cross stitch is done randomly
        /*        let rand = this.getRandomInt(0, 15);
         for (let i = 0; i < rand; i++) {
         parent2.chromosome[i] = parent1.chromosome[i];
         }*/


       // console.error(parent2)
        // The new child resulting from the crossing is added to the population
        newPopulation.setIndividualNew(i, parent2);
       // console.error(newPopulation.population[i])

        //newPopulation.population[i].calculateFitness(newPopulation.population[i].chromosome);

      } else {

        // Parent 2 is not generated and parent 1 is passed as is to the new population
        newPopulation.setIndividualNew(i, parent1);
        //newPopulation.population[i].calculateFitness(newPopulation.population[i].chromosome);
      }

    }

    // The new fitness of the created population is calculated.
   // newPopulation.calculatePopulationFitness();

    // console.log(newPopulation)

    return newPopulation;

  }

  mutation(newPopulation) {

    const newPopulation2 = new Population(1, this.populationSize);

    //console.log(newPopulation);

    for (let i = 0; i < newPopulation.population.length; i++) {
      //   console.log(this.newPopulation.population[i].chromosome);

      for (let j = 0; j < newPopulation.population[i].chromosome.length; j++) {
        newPopulation.population[i].chromosome = this.shuffle(newPopulation.population[i].chromosome);
      }
      // console.log(this.newPopulation.population[i].chromosome);

      newPopulation2.setIndividualNew(i, newPopulation.population[i]);
    }

    //  console.log(this.newPopulation);

    // The new fitness of the created population is calculated.
    let res = newPopulation2.calculatePopulationFitness();

    return newPopulation2;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}


