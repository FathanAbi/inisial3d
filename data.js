var vertices = [
    0.1,0.0,0.5,    //titik A 0
    0.5,0.0,0.5,    //titik B 1
    0.1,0.0,0.1,    //titik C 2
    0.5,0.0,0.1,    //titik D 3

    0.1,0.5,0.5,    //titik E 4
    0.5,0.5,0.5,    //titik F 5
    0.1,0.5,0.1,    //titik G 6
    0.5,0.5,0.1    //titik H 7
];

var triangles = [
    // K  ///
    0.25, 0.5, 0.0, // A 0
    0.5, 0.5, 0.0, // B 1
    0.5, -0.5, 0.0, // c 2
    0.25, -0.5, 0.0, // D 3

    0.5, 0.25, 0.0, // E 4
    0.75, 0.5, 0.0, // F 5
    1.0, 0.5, 0.0, // G 6
    0.5, 0.0, 0.0, // H 7

    1.0, -0.5, 0.0, // I 8
    0.75, -0.5, 0.0,  // J 9
    0.65, 0.15, 0.0, // K 10

    /// A ///
    -1.0, -0.5, 0.0, // A 11
    -0.5, 0.5, 0.0, // B 12
    -0.5, 0.0, 0.0, // C 13
    -0.75, -0.5, 0.0, // D 14

    0.0, -0.5, 0.0, // E 15
    -0.25, -0.5, 0.0, // F 16


    // ///  3D   ///
    // /// K ///
    0.25, 0.5, -1.0, // A 17
    0.5, 0.5, -1.0, // B 18
    0.5, -0.5, -1.0, // c 19
    0.25, -0.5, -1.0, // D 20

    0.5, 0.25, -1.0, // E 21
    0.75, 0.5, -1.0, // F 22
    1.0, 0.5, -1.0, // G 23
    0.5, 0.0, -1.0, // H 24

    1.0, -0.5, -1.0, // I 25
    0.75, -0.5, -1.0,  // J 26
    0.65, 0.15, -1.0, // K 27

    /// A ///
    -1.0, -0.5, -1.0, // A 28
    -0.5, 0.5, -1.0, // B 29
    -0.5, 0.0, -1.0, // C 30
    -0.75, -0.5, -1.0, // D 31

    0.0, -0.5, -1.0, // E 32
    -0.25, -0.5, -1.0, // F 33
];

var colors = [
   0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0,
   0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0,
   0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0,
   0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0, 0.992,0.961,0,
   0.992,0.961,0, 
   0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953,
   0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953,
   0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953,
   0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953, 0.216,0.921,0.953,
   0.216,0.921,0.953,
];

var indices = [
  // K //
    0,1,2, 2,3,0,
    4,5,7, 5,6,7,
    7,10,8, 8,9,7,

   // A //
   11,12,13,  13,14,11,
   12,15,16,  16,13,12,

   // F layer belakang //
   17,18,19,  19,20,17,
   21,22,24,  22,23,24,
   24,27,25,   25,26,24,

   // join 2 layer F //
   0,17,1,  1,18,17,
   1,18,4,  4,21,18,
   4,21,5,  5,22,21,
   5,22,6,  6,23,22,
   6,23,7,  7,24,23,
   7,24,9,  9,26,24,
   9,26,8,  8,25,26,
   8,25,10, 10,27,25,
   7,24,2,  2,19,24,
   2,19,3,  3,20,19,
   0,17,3,  20,3,17,
     

   // A Layer Belakang ///
   28,29,30,  30,31,28,
   29,32,33,  33,30,29,

   // Join 2 Layer A ///
   11,12,28,  28,29,12,
   12,15,29,  29,32,15,
   15,16,32,  32,33,16,
    16,13,33,  33,30,13,
   13,14,30,  30,31,14,
   14,11,31,  31,28,11,
    

    
];