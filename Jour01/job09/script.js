function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b); // Tri ascendant
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a); // Tri descendant
    } else {
        console.log("je ne trie que les nombres");
        return false;
    }
    return numbers;
}
console.log(tri([5, 6, 8, 1, 79, 3, 101, 2, 4], "desc"));
console.log(tri([5, 6, 8, 1, 79, 3, 101, 2, 4], "asc"));