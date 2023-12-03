/**
 *
 * Evolutionary Algorihtm v1.0.0
 *
 * Name:          Evolutionary Algorithm for 4x4 puzzle
 * Description:   Example of a genetic algorithm to solve a 4x4 puzzle.
 * Version:       1.0.0
 * Author:        Guillermo Camarena
 * Author URI:    https://gcamarenaprog.com
 * Date:          03-12-2023
 *
 * Additional Information
 *
 * Based on the algorithms from the book "Genetic Algorithms in Java Basics" by authors Lee Jacobson and
 * Burak Kanber
 *
 */

$(document).ready(function () {

  // Matriz objetiva
  const objectiveArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

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


  // Test impesion en web
  const newObject = new Individual();

  console.log(newObject);

  // Impresion en html
  refreshSquare(newObject.getChromosme);


  /**
   * Parte gráfica en el HTML ------------------------------------------------------------------------------------------
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
   * Actualización de la matriz gráfica
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
   * Inserta datos en la tabla de generaciones
   *
   * @param genData
   * @param solData
   */
  function insertIntoTable(genData, solData) {
    $("#tableBody").append("<tr><td>Generation " + genData + "</td><td>" + solData + "</td></tr>");
  }

  /**
   * Scrolla al final del registro
   */
  $(function () {
    let log = $('#log');
    let endOfLog = log[0].scrollHeight;
    log.scrollTop(endOfLog);
  });

});





