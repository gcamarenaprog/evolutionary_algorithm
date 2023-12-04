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
  size = 50; // Population size
  fitness = -1; // Quality of adaptation of the population
  targetArray; // Target array, change the order as you wish

  /**
   * Create a population with the given size, you have two options:<br>
   * Option 1: (1, size) Generate an empty population<br>
   * Option 2: Generate a population randomize<br>
   *
   * @param {string} option
   * @param {number} size
   * @param {number} chromosome
   */
  constructor(option, size) {

    this.targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

    this.size = size;

    if(option === 'initial'){
      for (let i = 0; i < this.size; i++) {
        const individualObject = new Individual('default', null, 16);
        let isEqual = this.population.includes(individualObject, 0);
        while (isEqual) {
          isEqual = this.population.includes(individualObject, 0);
        }
        this.population.push(individualObject);
      }
      this.fitness = this.calculatePopulationFitness();

      console.log(this.population)
    }



/*    if (option == 1) {

      for (let i = 0; i < this.size; i++) {
        const individualObject = new Individual(1);
        this.population.push(individualObject);
      }
    } else if (option == 2) {

      for (let i = 0; i < this.size; i++) {
        const individualObject = new Individual(2, null);
        let isEqual = this.population.includes(individualObject, 0);
        while (isEqual) {
          isEqual = this.population.includes(individualObject, 0);
        }
        this.population.push(individualObject);
      }
      this.fitness = this.calculatePopulationFitness();

      console.log(this.population)
    }*/
  }

  /**
   * Calculate the fitness of the total population
   */
  calculatePopulationFitness() {
    let totalFintness = 0;
    for (let i = 1; i < this.size; i++) {
      totalFintness = totalFintness + this.population[i].fitness;
    }
    this.fitness = totalFintness;
    return totalFintness;
  }

  /**
   * Set an individual
   * @param index
   * @returns {*}
   */
  setIndividualNew(index, individual) {
    this.calculatePopulationFitness()
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