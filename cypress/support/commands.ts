// / <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
// Cypress.Commands.add('login', commonCommands.login);
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
// Cypress.Commands.overwrite('intercept', () => {
//   const FIXTURE_MODE = process.env.FIXTURE_MODE;
//   const fixtureName = req.METHOD + req.url + hash(req.body);
//   if (FIXTURE_MODE === 'READ') {
//     readFixture(fixtureName);
//   }

//   if (FIXTURE_MODE === 'WRITE') {
//     createFixture(fixtureName, req.body);
//   }

//   if (FIXTURE_MODE === 'API') {
//   }
// });
