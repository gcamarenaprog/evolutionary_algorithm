/**
 * Population class, which contains the attributes:
 *
 * - Chromosome
 * - Chromosome size
 * - Fitness
 * - Target array
 */
class Population {

  population = []; // An array of individuals
  size = 0; // Population size
  fitness = -1; // Quality of adaptation of the population
  populationBestIndividual = [];
  populationBestIndividualPosition = 0;
  populationBestIndividualFitness = 0;
  populationBestIndividualChromosome = [];

  targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // Target array, change the order as you wish, please re declare values into of the classes

  /**
   *
   * @param size
   */
  constructor(size, empty) {

    if (empty == 0) {
      this.size = size;
      this.population = [size];
      for (let i = 0; i < size; i++) {
        let chromosome = [];
        const individualObject = new Individual();
        if (this.population.includes(individualObject)) {
          i--;
        } else {
          this.population.push(individualObject);
        }
      }
      this.calculatePopulationFitness;
    } else {
      this.size = size;
      this.population = [size];
      for (let i = 0; i < size; i++) {
        let chromosome = [];
        const individualObject = new Individual(1);
        this.population.push(individualObject);
      }

    }


  }

  get calculatePopulationFitness() {
    let totalFintness = 0;
    for (let i = 1; i < this.size; i++) {
      totalFintness = totalFintness + this.population[i].individualFitness;
    }
    this.fitness = totalFintness;
  }


  get getPopulation() {
    return this.population;
  }

  get getPopulationSize() {
    return this.size;
  }

  set setPopulation(size) {
    this.population = size[size];
  }

  get getFitnessPopulation() {
    return this.fitness;
  }

  set setFitnessPopulation(fitness) {
    this.fitness = fitness;
  }

  get getBestAdaptedIndividual() {
    let bestAdaptedIndividual = [];
    let bestAdaptedIndividualChromosome = [];
    let bestAdaptedIndividualFitness = 0;
    let position = 0;

    //console.log(this.population)

    for (let i = 1; i < this.size; i++) {
      if (this.population[i].individualFitness > bestAdaptedIndividualFitness) {
        bestAdaptedIndividualFitness = this.population[i].individualFitness;
        //console.log(this.population[i].individualFitness);

        bestAdaptedIndividual = this.population[i];


        /*        bestAdaptedIndividualFitness = this.population[i].individualFitness;
         bestAdaptedIndividualChromosome = this.population[i].chromosome;
         position = i;*/
      }
    }
    //console.log(this.population)
    /*    this.populationBestIndividualPosition = position;
     this.populationBestIndividualFitness = bestAdaptedIndividualFitness;
     this.populationBestIndividualChromosome = bestAdaptedIndividualChromosome;
     this.populationBestIndividual = bestAdaptedIndividual;*/
    //this.bestAdaptedIndividual = bestAdaptedIndividualFitness;
    console.log(bestAdaptedIndividual);
    return this.bestAdaptedIndividual;
  }



  /**
   * Set an individual
   * @param index
   * @returns {*}
   */
  setIndividualNew(index, individual) {
    this.population[index] = individual;
  }

}