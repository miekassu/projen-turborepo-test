import { typescript } from 'projen'
import { TurborepoProject } from 'projen-turborepo'

const project = new TurborepoProject({
  defaultReleaseBranch: 'main',
  devDeps: ['projen-turborepo'],
  name: 'projen-turborepo-test',
  projenrcTs: true,
  depsUpgrade: false,

  pathMapping: true,
  jestModuleNameMapper: true,
  projectReferences: true,
  parallelWorkflows: true,
})

const subProjects = [1, 2, 3, 4, 5].map((n) => new typescript.TypeScriptProject({
  defaultReleaseBranch: 'master',
  name: `sub-project-${n}`,
  outdir: `package/sub-project-${n}`,
  parent: project,
  releaseToNpm: false,
  package: false,
  jest: false,
}))

subProjects[0].addDeps(subProjects[1].package.packageName)

project.eslint?.addRules({
  semi: [
    'error',
    'never',
  ],
})

project.synth()