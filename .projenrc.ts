import { TurborepoProject } from 'projen-turborepo'

const project = new TurborepoProject({
  defaultReleaseBranch: 'main',
  devDeps: ['projen-turborepo@0.0.38'],
  name: 'projen-turborepo-test',
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
})

project.eslint?.addRules({
  semi: [
    'error',
    'never',
  ],
})

project.synth()