/**
 *
 * Individual class, which contains the properties:
 *
 * - Chromosome
 * - Chromosome size
 * - Fitness
 *
 */
class Individual {

  chromosome; // String of numbers between 0 and 15
  chromosomeSize = 16;
  individualFitness = -1; // Quality of adaptation of the individual

  /**
   * Creates an individual created when we pass a certain chromosome to it
   * @param chromosome {array} Values between 0 and 15
   */
  constructor(emptyIndividual, chromosome) {
    if (emptyIndividual == 1 && chromosome == null) {
      this.chromosome = [];
      this.individualFitness = 0;
    } else if (emptyIndividual == 1 && chromosome) {
      this.chromosome = chromosome;
      this.individualFitness = this.calculateIndividualFitness();
    } else {
      this.initiaizeIndividual();
    }
  }

  initiaizeIndividual() {
    let startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    startArray.sort(function (a, b) {
      return 0.5 - Math.random()
    });
    this.chromosome = startArray;
    this.individualFitness = this.calculateIndividualFitness();
  }

  calculateIndividualFitness() {
    const objectiveArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    let correctGenes = 0;
    let fitnessNumber = 0;
    for (var i = 0; i < objectiveArray.length; i++) {
      if (objectiveArray[i] == this.chromosome[i]) {
        correctGenes++;
      }
    }
    return correctGenes / 16;
  }

  get getChromosomeSize() {
    return this.chromosomeSize;
  }

  get getChromosme() {
    return this.chromosome;
  }

  getChromosmeIndex(index) {
    let chromosomeExtract = this.chromosome[index];
    return chromosomeExtract;
  }

  get getFintness() {
    return this.individualFitness;
  }

  set setFitness(fitness) {
    this.individualFitness = fitness;
  }

  setChromosome(index, chromosome) {
    this.chromosome[index] = chromosome;
  }


}