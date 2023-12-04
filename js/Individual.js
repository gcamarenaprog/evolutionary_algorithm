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
 *  - initializeChromosome(chromosome)
 *  - calculateFitness(chromosome)
 *  - get getChromosme()
 *  - setChromosme(chromosome)
 *  - get getChromosomeSize()
 *  - set setChromosmeSize(chromosomeSize)
 *  - get getFitness()
 *  - setFitness(fitness)
 *  - getGeneChromosome(index)
 *  - setGeneChromosome(index, gene)
 */
class Individual {

  chromosome; // Gene array with defined size with values between 0 and 15
  chromosomeSize; // Genes have the chromosome
  fitness; // Quality of adaptation of the individual
  targetArray; // Target array, change the order as you wish,
  genesMatch;

  /**
   * Creates an individual created when we pass a certain chromosome to it, it has two options:<br>
   * Option ('default'): Generate an empty individual <br>
   * Option ('empty'): Generate an individual with random chromosome<br>
   * Option ('specific', chromosome) Generate an individual with a specific chromosome<br>
   *
   * @param chromosome {number[] || null}  Array of values between 1 and 0 that represent the genes
   * @param option {string} Indicates what type of individual is to be initialized
   */
  constructor(option, chromosome) {

    this.targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    this.chromosomeSize = chromosomeSize;
    this.chromosome = chromosome;

    // Create an individual with random genes
    if (option === 'default') {
      this.chromosome = this.initializeChromosome();
      this.fitness = this.calculateFitness();
    }

    // Create an empty individual
    if (option === 'empty') {
      this.chromosome = [];
      this.fitness = -1;
    }

    // Create an individual with a specific chromosome
    if (option === 'specific') {
      this.fitness = this.calculateFitness();
    }

  }

  /**
   * Initializes the chromosome of an individual
   * @param chromosome {number[]}
   */
  initializeChromosome() {

    let mixedGenes;
    let target = Array.from(this.targetArray);

    // Shuffle the genes randomly
    mixedGenes = target.sort(function (a, b) {
      return 0.5 - Math.random()
    });

    return mixedGenes;
  }

  /**
   * Calculates the fitness value of an individual, based on the number of correct genes compared to the target array
   * @return {number}
   */
  calculateFitness() {

    let correctGenes = 0;
    let fitnessNumber = 0;
    let target = Array.from(this.targetArray);

    for (let i = 0; i < target.length; i++) {
      if (this.chromosome[i] === target[i]) {
        correctGenes++;
      }
    }
    fitnessNumber = correctGenes / this.chromosomeSize;
    this.genesMatch = correctGenes;
    return fitnessNumber;
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

  /**
   * Getter chromosome
   * @return {number[]}
   */
  get getChromosme() {
    return this.chromosome;
  }

  /**
   * Set chromosome
   * @param {number[]} chromosome
   */
  setChromosme(chromosome) {
    this.chromosome = chromosome;
    this.setFitness();
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
  setFitness() {
    this.fitness = this.calculateFitness();
  }

}