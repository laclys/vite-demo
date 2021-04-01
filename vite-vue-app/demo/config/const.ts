const projectName = require('../package.json').name
const version = require('../package.json').version

module.exports = {
  projectName,
  version,
  PORT: 8871,
  publicUrl: {
    test: `//static2.balabala.com/yx/${projectName}/last/dist/`,
    uat: `//s1.uat.balabala.com/yx/${projectName}/last/dist/`,
    prod: `//s1.balabala.com/yx/${projectName}/last/dist/`
  }
}
