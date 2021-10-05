minRooms = function(intervals) {

    const startingTimes = [];
    const endingTimes = [];

    for (let i = 0; i < intervals.length; i++) {
        const [startTime, endTime] = intervals[i];

        startingTimes[i] = startTime;
        endingTimes[i] = endTime;
    }

    startingTimes.sort((a, b) => a - b);
    endingTimes.sort((a, b) => a - b);

    let startIndex = 0;
    let endIndex = 0;
    let maxRooms = 0;
    let currRooms = 0;

    while (startIndex < startingTimes.length || endIndex < endingTimes.length) {

        if (startIndex >= startingTimes.length)
            break;

        if (startingTimes[startIndex] < endingTimes[endIndex]) {
            currRooms++;
            startIndex++;
        } else {
            currRooms--;
            endIndex++;
        }
        maxRooms = Math.max(maxRooms, currRooms);

    }
    return maxRooms;
}

console.log(minRooms([
    [30, 75],
    [0, 50],
    [60, 150]
]));