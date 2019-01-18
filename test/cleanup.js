const utils = require('../src/utils');
const githubHandler = require('../src/githubHandler');

function cleanup(path = 'a-demo-project') {
  const name = utils.normalizeName(path);

  // Remove test folder
  console.log(`Deleting folder ${path}`);
  utils.deleteDirRecursive(path);

  // Delete github project
  githubHandler.deleteRepo(name, 'nmicht');
}

cleanup(process.argv[2]);
