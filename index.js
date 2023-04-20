// code your solution here
function superbowlWin(array) {
    const wonYear = array.find(play => play.result === "W")
    if (wonYear) {
        return wonYear.year
    }
}