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


$(document).ready(function () {

  const objPopulation = new Population(10, 2);
  console.log(objPopulation.population)
  let population = objPopulation.population;


  const objGenetic = new GeneticAlgorithm(100,0.01,0.95,0)
  console.log(population)

  let res = objGenetic.parentSelectWithBinaryMethod(population)

  console.log(res)



  //const objGenetAlgorithm = new GeneticAlgorithm(100, 0.01, 0.95, 0);
  // console.log(objGenetAlgorithm);

 // objGenetAlgorithm.finalCondition(objPopulation);

  /*  const objIndividuo = new Individual(2, targetArray);
   console.log(objIndividuo);*/

  /*  const objectTest = new Population(10, 2);
   console.log(objectTest);

   objectTest.getBestAdaptedIndividual()*/

  /*  const newGeneticAlgorithmObject = new GeneticAlgorithm(100, 0.01, 0.70, 0);

   // Inicializamos la población de individuos
   population = newGeneticAlgorithmObject.populationInitialization(100);

   // Evaluamos la poblacion
   population.getBestAdaptedIndividual;

   // Número de generación
   let generation = 1;*/


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

   // Print the target array on log
   printTargetArray(targetArray);
   writeToLog('Target array', targetArray, 'target');

   // Print "Starting State" on log
   printTargetArray(newObjectTest.getChromosme);
   writeToLog('Starting State', newObjectTest.getChromosme, 'target');

   // Refresh and print square
   refreshSquare(newObjectTest.getChromosme)

   // Log test
   writeToLog('dataName', 'data', 'array');

   // Table generation data test
   insertIntoTable('genData', 'solData');*/

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
  function printTargetArray(data) {
    $("#arrayObjective").text("[" + data + "]");
  }

  /**
   * Updating the graphic matrix
   *
   * @param data
   */
  function refreshSquare(data) {
    for (let i = 0; i < 16; i++) {
      $("#index-" + i).text(data[i]);
    }
    $("#array").text("[" + data + "]");

  }

  /**
   * Insert data into the generations table
   *
   * @param genData
   * @param solData
   */
  function insertIntoTable(genData, solData) {
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





