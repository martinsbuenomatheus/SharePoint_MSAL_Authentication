# hello-world

## Summary

SPFx 1.11.0 with MSAL React authentication Sample

## Used SharePoint Framework Version

| Dependency | Version | 
|------|---------|
|NODE: |![version](https://img.shields.io/badge/version-10.24.2-green.svg)|
|Yo: |![version](https://img.shields.io/badge/version-3.1.1-green.svg)|
|SPFx: |![version](https://img.shields.io/badge/version-1.11-green.svg)|
|React: |![version](https://img.shields.io/badge/version-16.8.5-green.svg)|

## Prerequisites

> Attention to those Dependencies
- Axios: ^1.4.0 (must update rush-stack-compiler) or 0.27.2 (issue: no default.headers)
- Typescript: ^4.9.5 
- eslint: "^8.17.0"
- @microsoft/rush-stack-compiler-4.7
- @azure/msal-react@1.0.0,
- @azure/msal-browser@2.14.2,

## Configurations
- Gulpfile
Add: build.tslintCmd.enabled = false;

- TSconfig
If using Axios 1.4.0, change the compiler to: rush-stack-compiler-4.7

- TSLINT
Gulpconfig should be enough, Otherwise, delete the file.
If using rush-stack-compiler-3.3 ou 3.9 - set every flag to FALSE
