/**
 * Individual class, which contains:
 *
 * Attributes
 * - chromosome
 * - chromosomeSize
 * - fitness
 * - targetArray
 *
 *  Methods
 *  - constructor(option, chromosome)
 *  - intializeIndividual(chromosome)
 *  - calculateFitness(chromosome)
 *  - get getChromosme()
 *  - set setChromosme(chromosome)
 *  - get getChromosomeSize()
 *  - set setChromosmeSize(chromosomeSize)
 *  - get getFitness()
 *  - set setFitness(fitness)
 *  - getGeneChromosome(index)
 *  - setGeneChromosome(index, gene)
 */
class Individual {

  chromosome = [chromosomeSize]; // Gene array with defined size with values between 0 and 15
  chromosomeSize = chromosomeSize; // 16 genes have the chromosome
  fitness = -1; // Quality of adaptation of the individual
  targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // Target array, change the order as you wish,

  /**
   * Creates an individual created when we pass a certain chromosome to it, it has two options:<br>
   * Option 1: Generate an empty individual<br>
   * Option 2: Generate an individual with a specific chromosome
   *
   * @param chromosome {number[]}  Values between 0 and 15 of the genes
   * @param option {number} Indicates what type of individual is initialized (1 or 2)
   */
  constructor(option, chromosome) {

    if (option == 1 && chromosome == null) {
      this.chromosome = [];
      this.fitness = 0;
    } else {
      let isEqual = this.targetArray.toString() === chromosome.toString();
      if (isEqual) {
        this.intializeIndividual(chromosome)
      } else {
        this.chromosome = chromosome;
        this.fitness = this.calculateFitness(this.chromosome);
      }

    }
  }

  /**
   * Resets an already created object
   * @param chromosome {number[]}
   */
  intializeIndividual(chromosome) {
    let mixedGenes = chromosome.sort(function (a, b) {
      return 0.5 - Math.random()
    });
    this.chromosome = mixedGenes;
    this.fitness = this.calculateFitness(this.chromosome);
  }


  /**
   * Calculates the fitness value of an individual, based on the number of correct genes compared to the target array
   * @return {number}
   */
  calculateFitness(chromosome) {

    let correctGenes = 0;
    let fitnessNumber = 0;
    for (let i = 0; i < chromosomeSize; i++) {
      if (this.targetArray[i] === chromosome[i]) {
        correctGenes++;

      }
    }
    fitnessNumber = correctGenes / chromosomeSize;
    return fitnessNumber;
  }

  /**
   * Getter chromosome
   * @return {number[]}
   */
  get getChromosme() {
    return this.chromosome;
  }

  /**
   * Setter chromosome
   * @param {number[]} chromosome
   */
  set setChromosme(chromosome) {
    this.chromosome = chromosome;
  }

  /**
   * Getter chromosomeSize
   * @return {number}
   */
  get getChromosomeSize() {
    return this.chromosomeSize;
  }

  /**
   * Setter chromosomeSize
   * @param {number} chromosomeSize
   */
  set setChromosmeSize(chromosomeSize) {
    this.chromosomeSize = chromosomeSize;
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

  /**
   * Gets the gene from the given position within the chromosome
   * @param {number} index
   * @return {number}
   */
  getGeneChromosome(index) {
    let chromosomeExtract = this.chromosome[index];
    return chromosomeExtract;
  }

  /**
   * Sets a gene to the given position within the chromosome
   * @param {number} index
   * @param {number} gene
   */
  setGeneChromosome(index, gene) {
    this.chromosome[index] = gene;
  }

}