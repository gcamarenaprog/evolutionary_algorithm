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

  chromosome; // Gene array with defined size with values between 0 and 15
  chromosomeSize = chromosomeSize; // 16 genes have the chromosome
  fitness = -1; // Quality of adaptation of the individual
  targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // Target array, change the order as you wish,

  /**
   * Creates an individual created when we pass a certain chromosome to it, it has two options:<br>
   * Option 1: (1, null) Generate an empty individual <br>
   * Option 2: (2, null) Generate an individual with random chromosome<br>
   * Option 3: (3, chromosome) Generate an individual with a specific chromosome<br>
   *
   * @param chromosome {number[] || null}  Values between 0 and 15 of the genes
   * @param option {number} Indicates what type of individual is initialized (1 .. 3)
   */
  constructor(option, chromosome) {
    if (option == 1 && chromosome == null) {
      this.chromosome = [];
      this.fitness = 0;
    } else if (option == 2 && chromosome == null) {
      this.chromosome = this.intializeIndividual(this.targetArray);
      this.fitness = this.calculateFitness(this.chromosome);
    } else  if(option == 3 && chromosome){
      this.chromosome = this.intializeIndividual(chromosome);
      this.fitness = this.calculateFitness(this.chromosome);
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
    return mixedGenes;
  }

  /**
   * Calculates the fitness value of an individual, based on the number of correct genes compared to the target array
   * @return {}
   */
  calculateFitness(chromosome) {

    let correctGenes = 0;
    let fitnessNumber = 0;

    for (let i = 0; i < chromosome.length; i++) {
      if (chromosome[i] == targetArray[i]) {
        correctGenes++;
      }
    }
    fitnessNumber = correctGenes / this.chromosomeSize;
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

}