//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
/////////////////// level
const monster_move_minimum = 0;
const monster_move_maximum = 192 * 2 - 8 * 2;
const play_scene_maximumX = 384;
const play_scene_maximumY = 448;
const GREEN_ZONE = 144
const BLUE_ZONE = 208
const PINK_ZONE = 272
const YELLOW_ZONE = 336
const MONSTERDISTANCE = 32;
const MONSTERYOFFSET = 80;
const OCTOPUS = 1;
const CRAB = 2;
const SQUID = 3;
const BABY = 4;
const STIFFENTIME = 0.3;

const LEVEL_1 = [
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_12 = [
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 0, 2, 2, 0, 2, 2, 0, 3, 3],
[1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_14 = [
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
[3, 3, 3, 0, 2, 2, 2, 0, 3, 3, 3],
[1, 2, 2, 2, 0, 1, 0, 2, 2, 2, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_16 = [
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[4, 4, 2, 0, 3, 3, 3, 4, 2, 4, 4],
[4, 4, 3, 0, 2, 3, 2, 0, 3, 4, 4],
[1, 1, 0, 2, 2, 2, 2, 2, 0, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_17 = [
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]
////////////////////
