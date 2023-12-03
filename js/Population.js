/**
 * Population class, which contains:
 *
 * Attributes
 * - population
 * - size
 * - fitness
 * - targetArray
 *
 *  Methods
 *  - constructor(size, option)
 *  - calculatePopulationFitness()
 *  - setIndividualNew(index, individual)
 *  - getIndividual(index)
 *  - getBestAdaptedIndividual()
 *  - get getPopulation()
 *  - set setPopulation(population)
 *  - get getSize()
 *  - set setSize(size)
 *  - get getFitness()
 *  - set setFitness(fitness)
 *
 */
class Population {

  population = []; // An array of individuals
  size = 0; // Population size
  fitness = -1; // Quality of adaptation of the population
  targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // Target array, change the order as you wish

  /**
   * Create a population with the given size, you have two options:<br>
   * Option 1: Generate an empty population<br>
   * Option 2: Generate a population randomize
   *
   * @param {number} size
   * @param {number} option
   */
  constructor(size, option) {

    this.size = size;

    if (option == 1) {

      this.size = size;
      this.population = [size];
      for (let i = 0; i < size; i++) {
        const individualObject = new Individual(1);
        this.population.push(individualObject);
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        let individualObject = new Individual(2, this.targetArray);
        this.population.push(individualObject);
        individualObject.intializeIndividual(this.targetArray);
      }
      this.fitness = this.calculatePopulationFitness();
    }
  }

  /**
   * Calculate the fitness of the total population
   */
  calculatePopulationFitness() {
    let totalFintness = 0;
    for (let i = 1; i < this.size; i++) {
      totalFintness = totalFintness + this.population[i].fitness;
    }
    return totalFintness;
  }

  /**
   * Set an individual
   * @param index
   * @returns {*}
   */
  setIndividualNew(index, individual) {
    console.log(individual)
    this.population[index] = individual;
  }

  /**
   * Obtains an individual from the population by its index
   * @param index
   * @return {Individual[]}
   */
  getIndividual(index) {
    let individual = this.population[index - 1];
    return individual;
  }

  /**
   * Obtains the best individual in the population
   * @return {Individual[]}
   */
  getBestAdaptedIndividual() {

    let bestAdaptedIndividualFitness = 0;
    let bestAdaptedIndividual = [];

    for (let i = 1; i < this.size; i++) {
      if (this.population[i].fitness > bestAdaptedIndividualFitness) {
        bestAdaptedIndividualFitness = this.population[i].fitness;
        bestAdaptedIndividual = this.population[i];
      }
    }
    return bestAdaptedIndividual;
  }

  /**
   * Getter population
   * @return {Individual[]}
   */
  get getPopulation() {
    return this.population;
  }

  /**
   * Setter population
   * @param {Individual[]} population
   */
  set setPopulation(population) {
    this.population = population;
  }

  /**
   * Getter size
   * @return {number}
   */
  get getSize() {
    return this.size;
  }

  /**
   * Setter size
   * @param {number} size
   */
  set setSize(size) {
    this.size = size;
  }

  /**
   * Getter fitness
   * @return {number}
   */
  get getFitness() {
    return this.fitness;
  }

  /**
   * Setter fitness
   * @param {number} fitness
   */
  set setFitness(fitness) {
    this.fitness = fitness;
  }

}