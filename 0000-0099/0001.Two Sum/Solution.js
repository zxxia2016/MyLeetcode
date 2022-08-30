// 1. 两数之和
const solution = (array, target) => {
    const map = new Map();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (map[target - element] !== undefined) {
            return [map[target - element], index];
        }
        map[element] = index;
    }
    return [];
}

console.log(solution([1, 2, 3, 4], 5));