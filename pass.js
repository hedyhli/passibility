const willPass = function (perc) {
    /**
     * Returns true/false based on probability given
     */
    if (!(typeof perc === 'number')) {
        throw new Error("perc is not a number")
    }

    if (perc >= 100) return true
    if (perc <= 0) return false

    // get random int
    let value = Math.floor(Math.random() * Math.floor(100)) + 1
    
    // return boolean
    return value <= perc
}

module.exports = {willPass}
