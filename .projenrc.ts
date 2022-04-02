import { typescript, web } from 'projen'
import { TurborepoProject } from 'projen-turborepo'

const project = new TurborepoProject({
  defaultReleaseBranch: 'main',
  devDeps: ['projen-turborepo'],
  name: 'projen-turborepo-test',
  projenrcTs: true,
  depsUpgrade: true,

  pathMapping: true,
  jestModuleNameMapper: true,
  projectReferences: true,
  parallelWorkflows: false,
  vscodeMultiRootWorkspaces: true,
})

new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'NextJS-TS',
  parent: project,
  outdir: 'app/nextjs-ts',
  tailwind: false,
})

new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'sub-project',
  outdir: 'package/sub-project',
  parent: project,
  releaseToNpm: false,
  package: false,
  jest: false,
})

// next.addDeps(subProject.package.packageName)

project.eslint?.addRules({
  semi: [
    'error',
    'never',
  ],
})

project.synth()