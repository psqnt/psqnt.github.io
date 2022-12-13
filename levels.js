const WALL_DEPTH = 5;
const levels = {
  1: {
    player: {
      x: 250,
      y: 30,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 500,
        y: 100,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 100 },
          { x: 10, y: 100 },
        ],
      },
      {
        x: 10,
        y: 200,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 10, y: 200 },
          { x: 500, y: 200 },
        ],
      },
      {
        x: 500,
        y: 300,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 300 },
          { x: 10, y: 300 },
        ],
      },
      {
        x: 10,
        y: 400,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 400 },
          { x: 10, y: 400 },
        ],
      },
    ],
    items: [
      {
        x: 250,
        y: 450,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 500, height: 5 },
      { x: 0, y: 500, width: 500, height: 5 },
      { x: 0, y: 0, width: 5, height: 500 },
      { x: 500, y: 0, width: 5, height: 505 },
    ],
  },
  2: {
    player: {
      x: 450,
      y: 50,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 500,
        y: 150,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 150 },
          { x: 10, y: 150 },
        ],
      },
      {
        x: 10,
        y: 250,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 10, y: 250 },
          { x: 500, y: 250 },
        ],
      },
      {
        x: 500,
        y: 350,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 350 },
          { x: 10, y: 350 },
        ],
      },
      {
        x: 100,
        y: 450,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 450 },
          { x: 100, y: 450 },
        ],
      },
    ],
    items: [
      {
        x: 20,
        y: 450,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 500, height: WALL_DEPTH },
      { x: 0, y: 0, width: WALL_DEPTH, height: 500 },
      { x: 500, y: 0, width: WALL_DEPTH, height: 505 },
      { x: 100, y: 100, width: 400, height: WALL_DEPTH },
      { x: 0, y: 200, width: 400, height: WALL_DEPTH },
      { x: 100, y: 300, width: 400, height: WALL_DEPTH },
      { x: 0, y: 400, width: 400, height: WALL_DEPTH },
      { x: 0, y: 500, width: 500, height: WALL_DEPTH },
    ],
  },
  3: {
    player: {
      x: 50,
      y: 50,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 100,
        y: 500,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 100, y: 50 },
          { x: 100, y: 500 },
        ],
      },
      {
        x: 450,
        y: 50,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 450, y: 50 },
          { x: 450, y: 500 },
        ],
      },
      {
        x: 250,
        y: 100,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 250, y: 50 },
          { x: 250, y: 500 },
        ],
      },
    ],
    items: [
      {
        x: 450,
        y: 450,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 500, height: WALL_DEPTH },
      { x: 500, y: 0, width: WALL_DEPTH, height: 505 },
      { x: 0, y: 500, width: 500, height: WALL_DEPTH },
      { x: 0, y: 0, width: WALL_DEPTH, height: 500 },
      { x: 0, y: 100, width: 400, height: WALL_DEPTH },
      { x: 100, y: 200, width: 400, height: WALL_DEPTH },
      { x: 0, y: 300, width: 400, height: WALL_DEPTH },
      { x: 100, y: 400, width: 400, height: WALL_DEPTH },
    ],
  },
  4: {
    player: {
      x: 50,
      y: 50,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 10,
        y: 125,
        radius: 10,
        color: "red",
        velocity: {
          x: 4,
          y: 4,
        },
        coordinates: [
          { x: 700, y: 125 },
          { x: 10, y: 125 },
        ],
      },
      {
        x: 10,
        y: 200,
        radius: 10,
        color: "red",
        velocity: {
          x: 2,
          y: 2,
        },
        coordinates: [
          { x: 10, y: 200 },
          { x: 700, y: 200 },
        ],
      },
      {
        x: 10,
        y: 300,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 10, y: 300 },
          { x: 700, y: 300 },
        ],
      },
      {
        x: 10,
        y: 400,
        radius: 10,
        color: "red",
        velocity: {
          x: 2,
          y: 2,
        },
        coordinates: [
          { x: 10, y: 400 },
          { x: 700, y: 400 },
        ],
      },
      {
        x: 10,
        y: 475,
        radius: 10,
        color: "red",
        velocity: {
          x: 4,
          y: 4,
        },
        coordinates: [
          { x: 700, y: 475 },
          { x: 10, y: 475 },
        ],
      },
    ],
    items: [
      {
        x: 650,
        y: 500,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 700, height: WALL_DEPTH },
      { x: 0, y: 600, width: 705, height: WALL_DEPTH },
      { x: 700, y: 0, width: WALL_DEPTH, height: 600 },
      { x: 0, y: 0, width: WALL_DEPTH, height: 600 },
      { x: 100, y: 0, width: WALL_DEPTH, height: 425 },
      { x: 100, y: 500, width: WALL_DEPTH, height: 100 },
      { x: 200, y: 0, width: WALL_DEPTH, height: 100 },
      { x: 200, y: 175, width: WALL_DEPTH, height: 425 },
      { x: 300, y: 0, width: WALL_DEPTH, height: 425 },
      { x: 300, y: 500, width: WALL_DEPTH, height: 100 },
      { x: 400, y: 0, width: WALL_DEPTH, height: 100 },
      { x: 400, y: 175, width: WALL_DEPTH, height: 425 },
      { x: 500, y: 0, width: WALL_DEPTH, height: 425 },
      { x: 500, y: 500, width: WALL_DEPTH, height: 100 },
      { x: 600, y: 0, width: WALL_DEPTH, height: 100 },
      { x: 600, y: 175, width: WALL_DEPTH, height: 425 },
    ],
  },
  5: {
    player: {
      x: 25,
      y: 100,
      radius: 10,
      color: "white",
    },
    enemies: [
      //   {
      //     x: 50,
      //     y: 10,
      //     radius: 10,
      //     color: "red",
      //     velocity: {
      //       x: 4,
      //       y: 4,
      //     },
      //     coordinates: [
      //       { x: 50, y: 10 },
      //       { x: 100, y: 190 },
      //       { x: 150, y: 10 },
      //       { x: 200, y: 190 },
      //       { x: 250, y: 10 },
      //       { x: 300, y: 190 },
      //       { x: 350, y: 10 },
      //       { x: 400, y: 190 },
      //       { x: 450, y: 10 },
      //       { x: 500, y: 190 },
      //       { x: 550, y: 10 },
      //       { x: 600, y: 190 },
      //       { x: 650, y: 10 },
      //       // reverse
      //       { x: 600, y: 190 },
      //       { x: 550, y: 10 },
      //       { x: 500, y: 190 },
      //       { x: 450, y: 10 },
      //       { x: 400, y: 190 },
      //       { x: 350, y: 10 },
      //       { x: 300, y: 190 },
      //       { x: 250, y: 10 },
      //       { x: 200, y: 190 },
      //       { x: 150, y: 10 },
      //       { x: 100, y: 190 },
      //     ],
      //   },
      //   {
      //     x: 50,
      //     y: 190,
      //     radius: 10,
      //     color: "red",
      //     velocity: {
      //       x: 4,
      //       y: 4,
      //     },
      //     coordinates: [
      //       { x: 50, y: 190 },
      //       { x: 100, y: 10 },
      //       { x: 150, y: 190 },
      //       { x: 200, y: 10 },
      //       { x: 250, y: 190 },
      //       { x: 300, y: 10 },
      //       { x: 350, y: 190 },
      //       { x: 400, y: 10 },
      //       { x: 450, y: 190 },
      //       { x: 500, y: 10 },
      //       { x: 550, y: 190 },
      //       { x: 600, y: 10 },
      //       { x: 650, y: 190 },
      //       // reverse
      //       { x: 600, y: 10 },
      //       { x: 550, y: 190 },
      //       { x: 500, y: 10 },
      //       { x: 450, y: 190 },
      //       { x: 400, y: 10 },
      //       { x: 350, y: 190 },
      //       { x: 300, y: 10 },
      //       { x: 250, y: 190 },
      //       { x: 200, y: 10 },
      //       { x: 150, y: 190 },
      //       { x: 100, y: 10 },
      //     ],
      //   },
      {
        x: 100,
        y: 10,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 100, y: 10 },
          { x: 100, y: 190 },
        ],
      },
      {
        x: 200,
        y: 190,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 200, y: 10 },
          { x: 200, y: 190 },
        ],
      },
      {
        x: 300,
        y: 10,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 300, y: 10 },
          { x: 300, y: 190 },
        ],
      },
      {
        x: 400,
        y: 190,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 400, y: 10 },
          { x: 400, y: 190 },
        ],
      },
      {
        x: 500,
        y: 10,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 10 },
          { x: 500, y: 190 },
        ],
      },
      {
        x: 600,
        y: 190,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 600, y: 10 },
          { x: 600, y: 190 },
        ],
      },
    ],
    items: [
      {
        x: 650,
        y: 100,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 700, height: WALL_DEPTH },
      { x: 0, y: 200, width: 705, height: WALL_DEPTH },
      { x: 700, y: 0, width: WALL_DEPTH, height: 200 },
      { x: 0, y: 0, width: WALL_DEPTH, height: 200 },
    ],
  },
  6: {
    player: {
      x: 25,
      y: 100,
      radius: 10,
      color: "white",
    },
    enemies: [
      //   {
      //     x: 50,
      //     y: 10,
      //     radius: 10,
      //     color: "red",
      //     velocity: {
      //       x: 4,
      //       y: 4,
      //     },
      //     coordinates: [
      //       { x: 50, y: 10 },
      //       { x: 100, y: 190 },
      //       { x: 150, y: 10 },
      //       { x: 200, y: 190 },
      //       { x: 250, y: 10 },
      //       { x: 300, y: 190 },
      //       { x: 350, y: 10 },
      //       { x: 400, y: 190 },
      //       { x: 450, y: 10 },
      //       { x: 500, y: 190 },
      //       { x: 550, y: 10 },
      //       { x: 600, y: 190 },
      //       { x: 650, y: 10 },
      //       // reverse
      //       { x: 600, y: 190 },
      //       { x: 550, y: 10 },
      //       { x: 500, y: 190 },
      //       { x: 450, y: 10 },
      //       { x: 400, y: 190 },
      //       { x: 350, y: 10 },
      //       { x: 300, y: 190 },
      //       { x: 250, y: 10 },
      //       { x: 200, y: 190 },
      //       { x: 150, y: 10 },
      //       { x: 100, y: 190 },
      //     ],
      //   },
      //   {
      //     x: 50,
      //     y: 190,
      //     radius: 10,
      //     color: "red",
      //     velocity: {
      //       x: 4,
      //       y: 4,
      //     },
      //     coordinates: [
      //       { x: 50, y: 190 },
      //       { x: 100, y: 10 },
      //       { x: 150, y: 190 },
      //       { x: 200, y: 10 },
      //       { x: 250, y: 190 },
      //       { x: 300, y: 10 },
      //       { x: 350, y: 190 },
      //       { x: 400, y: 10 },
      //       { x: 450, y: 190 },
      //       { x: 500, y: 10 },
      //       { x: 550, y: 190 },
      //       { x: 600, y: 10 },
      //       { x: 650, y: 190 },
      //       // reverse
      //       { x: 600, y: 10 },
      //       { x: 550, y: 190 },
      //       { x: 500, y: 10 },
      //       { x: 450, y: 190 },
      //       { x: 400, y: 10 },
      //       { x: 350, y: 190 },
      //       { x: 300, y: 10 },
      //       { x: 250, y: 190 },
      //       { x: 200, y: 10 },
      //       { x: 150, y: 190 },
      //       { x: 100, y: 10 },
      //     ],
      //   },
      {
        x: 100,
        y: 10,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 100, y: 10 },
          { x: 100, y: 190 },
        ],
      },
      {
        x: 200,
        y: 190,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 200, y: 10 },
          { x: 200, y: 190 },
        ],
      },
      {
        x: 300,
        y: 10,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 300, y: 10 },
          { x: 300, y: 190 },
        ],
      },
      {
        x: 400,
        y: 190,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 400, y: 10 },
          { x: 400, y: 190 },
        ],
      },
      {
        x: 500,
        y: 10,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 10 },
          { x: 500, y: 190 },
        ],
      },
      {
        x: 600,
        y: 190,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 600, y: 10 },
          { x: 600, y: 190 },
        ],
      },
      {
        x: 610,
        y: 250,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 700, y: 250 },
          { x: 610, y: 250 },
        ],
      },
      {
        x: 700,
        y: 300,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 700, y: 300 },
          { x: 610, y: 300 },
        ],
      },
      {
        x: 610,
        y: 350,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 700, y: 350 },
          { x: 610, y: 350 },
        ],
      },
      {
        x: 700,
        y: 400,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 700, y: 400 },
          { x: 610, y: 400 },
        ],
      },
      {
        x: 610,
        y: 450,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 700, y: 450 },
          { x: 610, y: 450 },
        ],
      },
      {
        x: 700,
        y: 500,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 700, y: 500 },
          { x: 610, y: 500 },
        ],
      },
      {
        x: 10,
        y: 530,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 335, y: 530 },
          { x: 10, y: 530 },
        ],
      },
      {
        x: 355,
        y: 530,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 680, y: 530 },
          { x: 355, y: 530 },
        ],
      },
      {
        x: 335,
        y: 570,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 10, y: 570 },
          { x: 335, y: 570 },
        ],
      },
      {
        x: 680,
        y: 570,
        radius: 10,
        color: "red",
        velocity: {
          x: 1.5,
          y: 1.5,
        },
        coordinates: [
          { x: 355, y: 570 },
          { x: 680, y: 570 },
        ],
      },
      {
        x: 30,
        y: 220,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [
          { x: 30, y: 220 },
          { x: 60, y: 285 },
          { x: 90, y: 220 },
          { x: 120, y: 285 },
          { x: 150, y: 220 },
          { x: 180, y: 285 },
          { x: 220, y: 220 },
          { x: 250, y: 285 },
          { x: 280, y: 220 },
          { x: 250, y: 285 },
          { x: 220, y: 220 },
          { x: 180, y: 285 },
          { x: 150, y: 220 },
          { x: 120, y: 285 },
          { x: 90, y: 220 },
          { x: 60, y: 285 },
          { x: 30, y: 220 },
        ],
      },
      {
        x: 400,
        y: 220,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [
          { x: 400, y: 220 },
          { x: 400, y: 285 },
        ],
      },
      {
        x: 500,
        y: 220,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [
          { x: 500, y: 220 },
          { x: 500, y: 285 },
        ],
      },
      {
        x: 250,
        y: 320,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [
          { x: 150, y: 480 },
          { x: 250, y: 320 },
        ],
      },
      {
        x: 250,
        y: 480,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [
          { x: 250, y: 480 },
          { x: 150, y: 320 },
        ],
      },
      {
        x: 350,
        y: 375,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [],
      },
      {
        x: 400,
        y: 325,
        radius: 10,
        color: "red",
        velocity: {
          x: 1,
          y: 1,
        },
        coordinates: [],
      },
    ],
    items: [
      {
        x: 450,
        y: 350,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 700, height: WALL_DEPTH },
      { x: 0, y: 600, width: 705, height: WALL_DEPTH },
      { x: 700, y: 0, width: WALL_DEPTH, height: 600 },
      { x: 0, y: 0, width: WALL_DEPTH, height: 600 },
      { x: 0, y: 200, width: 600, height: WALL_DEPTH },
      { x: 0, y: 200, width: WALL_DEPTH, height: 405 },
      { x: 600, y: 200, width: WALL_DEPTH, height: 305 },
      { x: 100, y: 500, width: 505, height: WALL_DEPTH },
      { x: 100, y: 300, width: WALL_DEPTH, height: 205 },
      { x: 100, y: 300, width: 405, height: WALL_DEPTH },
      { x: 500, y: 300, width: WALL_DEPTH, height: 105 },
      { x: 250, y: 400, width: 255, height: WALL_DEPTH },
    ],
  },
  7: {
    player: {
      x: 250,
      y: 30,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 500,
        y: 100,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 100 },
          { x: 10, y: 100 },
        ],
      },
      {
        x: 10,
        y: 200,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 10, y: 200 },
          { x: 500, y: 200 },
        ],
      },
      {
        x: 500,
        y: 300,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 300 },
          { x: 10, y: 300 },
        ],
      },
      {
        x: 10,
        y: 400,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 400 },
          { x: 10, y: 400 },
        ],
      },
    ],
    items: [
      {
        x: 250,
        y: 450,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 500, height: 5 },
      { x: 0, y: 500, width: 500, height: 5 },
      { x: 0, y: 0, width: 5, height: 500 },
      { x: 500, y: 0, width: 5, height: 505 },
    ],
  },
  8: {
    player: {
      x: 250,
      y: 30,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 500,
        y: 100,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 100 },
          { x: 10, y: 100 },
        ],
      },
      {
        x: 10,
        y: 200,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 10, y: 200 },
          { x: 500, y: 200 },
        ],
      },
      {
        x: 500,
        y: 300,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 300 },
          { x: 10, y: 300 },
        ],
      },
      {
        x: 10,
        y: 400,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 400 },
          { x: 10, y: 400 },
        ],
      },
    ],
    items: [
      {
        x: 250,
        y: 450,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 500, height: 5 },
      { x: 0, y: 500, width: 500, height: 5 },
      { x: 0, y: 0, width: 5, height: 500 },
      { x: 500, y: 0, width: 5, height: 505 },
    ],
  },
  9: {
    player: {
      x: 250,
      y: 30,
      radius: 10,
      color: "white",
    },
    enemies: [
      {
        x: 500,
        y: 100,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 100 },
          { x: 10, y: 100 },
        ],
      },
      {
        x: 10,
        y: 200,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 10, y: 200 },
          { x: 500, y: 200 },
        ],
      },
      {
        x: 500,
        y: 300,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 300 },
          { x: 10, y: 300 },
        ],
      },
      {
        x: 10,
        y: 400,
        radius: 10,
        color: "red",
        velocity: {
          x: 3,
          y: 3,
        },
        coordinates: [
          { x: 500, y: 400 },
          { x: 10, y: 400 },
        ],
      },
    ],
    items: [
      {
        x: 250,
        y: 450,
        radius: 7,
        color: `hsl(60, 100%, 50%)`,
      },
    ],
    boundaries: [
      { x: 0, y: 0, width: 500, height: 5 },
      { x: 0, y: 500, width: 500, height: 5 },
      { x: 0, y: 0, width: 5, height: 500 },
      { x: 500, y: 0, width: 5, height: 505 },
    ],
  },
};
