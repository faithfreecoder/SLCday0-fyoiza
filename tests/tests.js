

(function () {
  'use strict';
var jasmine = require('jasmine');
//var assert = chai.assert;
//var expect = chai.expect;
var jasmine = jasmine.expect;

var findMinMax = require('../app/library.js');

describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [3, 16] for [4,5,9,3,7,3,16]', function () {
        expect(findMinMax([4,5,9,3,7,3,16])).toEqual([3, 16]);
      });

      it('should return [1, 6] for [1,1,1,1,6]', function () {
        expect(findMinMax([1,1,1,1,6])).toEqual([1, 6]);
      });

      it('should return [76, 106] for [106,76]', function () {
        expect(findMinMax([106,76])).toEqual([76,106]);
      });

      it('should return [-8, -1] for [-1,-8]', function () {
        expect(findMinMax([-1,-8])).toEqual([-8,-1]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [16] for [16, 16, 16, 16]', function () {
        expect(findMinMax([16, 16, 16, 16])).toEqual([16]);
      });

      it('should return [1] for [1,1,1,1]', function () {
        expect(findMinMax([1,1,1,1])).toEqual([1]);
      });

    });

  });

})();

