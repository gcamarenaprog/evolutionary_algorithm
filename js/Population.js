
/**
 *
 */
class Population {

  population = []; // An array de individuals
  populationSize = 0;
  populationFitness = -1; // Quality of adaptation of the population
  populationBestIndividual = [];
  populationBestIndividualPosition = 0;
  populationBestIndividualFitness = 0;
  populationBestIndividualChromosome = [];

  /**
   *
   * @param populationSize
   */
  constructor(populationSize, empty) {

    if (empty == 0) {
      this.populationSize = populationSize;
      this.population = [populationSize];
      for (let i = 0; i < populationSize; i++) {
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
      this.populationSize = populationSize;
      this.population = [populationSize];
      for (let i = 0; i < populationSize; i++) {
        let chromosome = [];
        const individualObject = new Individual(1);
        this.population.push(individualObject);
      }

    }


  }

  get calculatePopulationFitness() {
    let totalFintness = 0;
    for (let i = 1; i < this.populationSize; i++) {
      totalFintness = totalFintness + this.population[i].individualFitness;
    }
    this.populationFitness = totalFintness;
  }


  get getPopulation() {
    return this.population;
  }

  get getPopulationSize() {
    return this.populationSize;
  }

  set setPopulation(populationSize) {
    this.population = populationSize[populationSize];
  }

  get getFitnessPopulation() {
    return this.populationFitness;
  }

  set setFitnessPopulation(fitness) {
    this.populationFitness = fitness;
  }

  get getBestAdaptedIndividual() {
    let bestAdaptedIndividual = [];
    let bestAdaptedIndividualChromosome = [];
    let bestAdaptedIndividualFitness = 0;
    let position = 0;

    //console.log(this.population)

    for (let i = 1; i < this.populationSize; i++) {
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