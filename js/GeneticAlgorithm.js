/**
 * Clase Algoritmo Genético
 */
class GeneticAlgorithm {

  populationSize;
  mutationMug;
  crossbreedingMug;
  eliteNumber;

  /**
   *
   * @param populationSize
   * @param mutationMug
   * @param crossbreedingMug
   * @param eliteNumber
   */
  constructor(populationSize, mutationMug, crossbreedingMug, eliteNumber) {
    this.populationSize = populationSize;
    this.mutationMug = mutationMug;
    this.crossbreedingMug = crossbreedingMug;
    this.eliteNumber = eliteNumber;
  }

  /**
   * Retorna la nueva población con el cruzamiento aplicado
   * @param population
   * @return {Population}
   */
  crossing(population) {


    // console.log(population)
    // Se crea una nueva población
    const newPopulation = new Population(population.getPopulationSize, 1);
    let parent1 = [];
    let parent2 = [];
    let descendant = [];

    // Recorrer la poblacion actual
    for (let i = 0; i < population.getPopulationSize; i++) {

      // Encuentra el primer padre
      parent1 = population.getBestAdaptedIndividual;
      // console.log(parent1)

      // Aplica el cruzamiento a los individuos
      if (this.crossbreedingMug > Math.random() && i >= this.eliteNumber) {

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
            descendant.setChromosome(genIndex, parent1.getChromosmeIndex(genIndex));
          } else {
            //console.log('here2')
            descendant.setChromosome(genIndex, parent2.getChromosmeIndex(genIndex));
          }

        }
        //console.log('------------------')
        // Añade la descendencia a la nueva población
        newPopulation.setIndividualNew(i, descendant);

      }else{
        newPopulation.setIndividualNew(i, parent1);
      }
    }

    //console.log (newPopulation);
    return newPopulation;
  }

  /**
   * Seleccion del padre por Método Torneo Binario
   *
   * En este, el AG selecciona aleatoriamente y con la misma
   * probabilidad dos individuos de la población, posteriormente se calcula el valor de fitness de cada uno de los
   * individuos seleccionados. El individuo con mejor valor de fitness será el individuo finalmente seleccionado.
   *
   * @param population
   * @return
   */
  parentSelectWithBinaryMethod(population) {

    let parent1 = [];
    let parent2 = [];
    let min = 1;
    let max = population.getPopulationSize;

    parent1 = this.getRandomInt(min, max);
    parent2 = this.getRandomInt(min, max);

    while (parent2 != parent1) {
      parent2 = this.getRandomInt(min, max);
    }

    if (population.population[parent1].individualFitness <= population.population[parent2].individualFitness) {
      //console.log(population.population[parent2])
      return population.population[parent2];
    } else {
      //console.log(population.population[parent1])
      return population.population[parent1];
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  populationInitialization(populationSize) {
    const population = new Population(populationSize, 0);
    return population;
  }

  finalCondition(population) {

    for (let i=0; i < population.population.length; i++) {
      //console.log(population.population[i].individualFitness);
      if (population.population[i].individualFitness >= 0.2) {
        return true;
      } else {
        return false;
      }
    }
  }

  calculateIndividualFitness(individual) {
    const objectiveArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    let correctGenes = 0;
    let fitnessNumber = 0;
    for (var i = 0; i < objectiveArray.length; i++) {
      if (objectiveArray[i] == individual.getChromosme[i]) {
        correctGenes++;
      }
    }
    individual.fitnessNumber = correctGenes / 16;
  }

}