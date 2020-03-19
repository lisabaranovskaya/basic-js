module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    function solution() {
        this.turns = 2 ** disksNumber - 1,
        this.seconds = this.turns / (turnsSpeed / 3600);
    }
    return new solution();
}