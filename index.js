const core = require('@actions/core');
const pass = require('./pass');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const perc = parseInt(core.getInput('percentage'))
    core.info(`Started. Your pass percentage is: ${perc}`)
    const canPass = pass.willPass(perc)
    core.debug(`willPass(${perc}) returned ${canPass}`)
    if (canPass) core.setOutput("Passed!")
    if (!canPass) core.setFailed("Failed...")
  } catch (error) {
    core.setOutput("Oh, no! An error occured...")
    core.setFailed(error.message)
  }
}

run();
