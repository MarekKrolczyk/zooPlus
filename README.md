# Introduction 
Goal of this project is to automate ZooPlus project using Playwright + Typescript.

# Getting Started
1.	Installation process
- install visual studio code
- clone repo: https://github.com/MarekKrolczyk/zooPlus.git
- download and install Node.js: https://nodejs.org/en/download
- install npm using: npm install -g npm
- install playwright using: npm init playwright@latest

# VS Code settings:
1. "editor.formatOnSave": true
2. "editor.formatOnPaste": true
3. "files.autoSave": "afterDelay"
4. "terminal.external.windowsExec": "C:\Windows\System32\cmd.exe"

# VS Code extensions:
sakamoto66.vscode-playwright-test-runner

# Build and Test
run tests: npx playwright test
run codegen: npx playwright codegen URL
show report: npx playwright show-report

# Updating all packages
1. Install `npm-check-updates` package globally by running `npm install -g npm-check-updates`
2. Run `ncu -u`, the list of new versions of packages should appear
3. Run `npm install` to install updated packages

# Documentation link:
1. https://playwright.dev/docs/intro
