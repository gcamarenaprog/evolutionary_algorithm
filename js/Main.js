/**
 *
 * Main file: This file is the starting point for initializing the genetic algorithm and for the web application.
 *
 * Evolutionary Algorithm v1.0.0
 *
 * Name:          Evolutionary Algorithm for 4x4 puzzle
 * Description:   Example of a genetic algorithm to solve a 4x4 puzzle.
 * Version:       1.0.0
 * Author:        Guillermo Camarena
 * Author URI:    https://gcamarenaprog.com
 * GitHub:        https://github.com/gcamarenaprog/evolutionary_algorithm
 * Date:          03-12-2023
 *
 * Additional Information
 *
 * Based on the algorithms from the book "Genetic Algorithms in Java Basics" by authors Lee Jacobson and
 * Burak Kanber
 *
 */


// Target array, change the order as you wish, please re declare values into of the classes
const targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
// Chromosome size, please re declare values into of the classes
const chromosomeSize = 16;

// Maximum generations
const maxGenerations = 100;

// Population size
const populationSize = 50;


$(document).ready(function () {

  const d = new Individual(2,null)
  console.log(d)

  const d2 = new Individual(2,null)
  console.log(d2)

  //const i = new Individual(2,targetArray)
  //console.log(i)

/*  const newobj = new Population(populationSize,2)
  console.log(newobj)*/




/*  // Print the target array on Window
  windowTargetObjetive(targetArray);

  // Print the target array on Log
  writeToLog('Target array', targetArray, 'target');

  // Square the target array
  squareTargetArray(targetArray);

  console.log('--- Start of log ---');
  console.log('Target array', targetArray);*/



/*  // Create GeneticAlgorithm object
  const objectGeneticAlgorithm = new GeneticAlgorithm(populationSize, 0.01, 0.95, 0)

  // 1. Generation 1
  let generation = 1;

  // 2. Initialize population of 50 individuals
 // let initialPopultation = objectGeneticAlgorithm.initPopulation(50);

  // 3. Populate evaluation
  let bestAdaptativeIndividual = initialPopultation.getBestAdaptedIndividual();

  // 3. Check termination condition
  if (objectGeneticAlgorithm.finalCondition(initialPopultation) == false) {

    // If the initial condition is not met in the first generation, it begins to repeat and the population goes through
    // the parent selection, crossover and mutation process
    do {
      // Print fittest individual from population
      //printTheBestSolution(generation, bestAdaptativeIndividual);


     // console.log(initialPopultation)

      // 4. Select parents
      let parent1 = objectGeneticAlgorithm.parentSelectWithBinaryMethod(initialPopultation.population);
      let parent2 = objectGeneticAlgorithm.parentSelectWithBinaryMethod(initialPopultation.population);

     // console.log(parent1);
     // console.log(parent2);

      // 5. Apply crossover

      // 6. Apply mutation

      // 7. Evaluate population

      // 8. Increment the current generation
      generation++;

    } while (objectGeneticAlgorithm.finalCondition(initialPopultation) != false || generation <= maxGenerations);


  } else {
    printTheBestSolution(generation, bestAdaptativeIndividual);
  }*/

  /**
   * Print the data of the best solution.
   * @param generation
   * @param bestAdaptativeIndividual
   */
  function printTheBestSolution(generation, bestAdaptativeIndividual) {
    // Print the best solution of first generation
    squareTheBestSolution(bestAdaptativeIndividual.chromosome)
    console.log('Generation: ' + generation);
    console.log('The best solution number: ' + bestAdaptativeIndividual.chromosome);

    // Table generation data test
    insertIntoTableGenerations(generation, bestAdaptativeIndividual.chromosome);
  }



  //population.getBestAdaptedIndividual;

  /*   // Inicializamos la población de individuos
   population = newGeneticAlgorithmObject.populationInitialization(100);*/

  // Evaluamos la poblacion
  //population.getBestAdaptedIndividual;

  // Número de generación
  // let generation = 1;*/


  /*
   while (newGeneticAlgorithmObject.finalCondition(population) == false) {

   // Mostrar el más adaptado de la población
   console.log('Mejor solución: ' + population.getBestAdaptedIndividual);

   // Aplicamos el cruzamiento
   population = newGeneticAlgorithmObject.crossing(population);

   // Aplicamos la mutación

   // Evaluamos la población
   population.getBestAdaptedIndividual;

   // Incrementamos la generación
   generation++;


   }*/

  /*  console.log('----------------------------------------------------------');
   console.log('Solución encontrada en: ' + generation + ' generaciones');
   console.log(population.getBestAdaptedIndividual);
   console.log('Chromosome: ' + population.getBestAdaptedIndividual.chromosome);
   console.log('Fitness: ' + population.getBestAdaptedIndividual.individualFitness);

   console.log('----------------------------------------------------------');*/

  /**
   * Test of graphic part in the HTML ----------------------------------------------------------------------------------
   */

/*    // Print square test
  const newObjectTest = new Individual(2, targetArray);
  //console.log(newObjectTest.getChromosme);


  // Print "Starting State" on log
  windowTargetObjetive(newObjectTest.getChromosme);
  writeToLog('Starting State', newObjectTest.getChromosme, 'target');

  // Refresh and print square
  //squareTheBestSolution(newObjectTest.getChromosme)

  // Log test
  writeToLog('dataName', 'data', 'array');

  // Table generation data test
  //insertIntoTableGenerations('genData', 'solData');*/


  // End of log on console
  console.log('--- End of log ---');

  /**
   * Graphic part in the HTML ------------------------------------------------------------------------------------------
   */

  /**
   * Escritura en el Log
   *
   * @param dataName
   * @param data
   * @param type
   */
  function writeToLog(dataName, data, type) {
    $("#info").append('<p class="text-muted">' + dataName + ':	<span class="' + type + '">' + data + '</span></p>');
  }

  /**
   * Print array objective
   * @param data
   */
  function windowTargetObjetive(data) {
    $("#targetObjetive").text("[" + data + "]");
  }

  /**
   * Updating the graphic matrix
   *
   * @param data
   */
  function squareTheBestSolution(data) {
    for (let i = 0; i < 16; i++) {
      $("#index-" + i).text(data[i]);
    }
    $("#theBestSolution").text("[" + data + "]");

  }

  /**
   * Target array the graphic matrix
   *
   * @param data
   */
  function squareTargetArray(data) {
    for (let i = 0; i < 16; i++) {
      $("#indexTarget-" + i).text(data[i]);
    }
    $("#targetObjetive").text("[" + data + "]");

  }

  /**
   * Insert data into the generations table
   *
   * @param genData
   * @param solData
   */
  function insertIntoTableGenerations(genData, solData) {
    $("#tableBody").append("<tr><td>Generation " + genData + "</td><td>" + solData + "</td></tr>");
  }

  /**
   * Scroll to the end of the record
   */
  $(function () {
    let log = $('#log');
    let endOfLog = log[0].scrollHeight;
    log.scrollTop(endOfLog);
  });

});





