import { typescript } from 'projen'
import { TurborepoProject } from 'projen-turborepo'

const project = new TurborepoProject({
  defaultReleaseBranch: 'main',
  devDeps: ['projen-turborepo@0.0.38'],
  name: 'projen-turborepo-test',
  projenrcTs: true,

  pathMapping: true,
  jestModuleNameMapper: true,
  projectReferences: true,
  parallelWorkflows: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
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