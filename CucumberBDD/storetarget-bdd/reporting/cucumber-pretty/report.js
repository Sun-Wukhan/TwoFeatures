$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5442451245,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 8,
  "name": "user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "there should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1883287153,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 372937804,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 1323775,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 112643269,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 33389,
  "status": "passed"
});
formatter.after({
  "duration": 77290155,
  "status": "passed"
});
formatter.before({
  "duration": 4638114113,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "There should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1829193018,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 395192260,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 129351583,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 341004461,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 26424,
  "status": "passed"
});
formatter.after({
  "duration": 95676801,
  "status": "passed"
});
formatter.uri("notlogin.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4716999591,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "users enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 8,
  "name": "users clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "theres should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "NotLoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1900692409,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 361512105,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 31352,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 108504387,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 27429,
  "status": "passed"
});
formatter.after({
  "duration": 77593794,
  "status": "passed"
});
formatter.before({
  "duration": 4631870382,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "users enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "users signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "users clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Theres should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "NotLoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1631210545,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 426038938,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 131301345,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 295296658,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 38004,
  "status": "passed"
});
formatter.after({
  "duration": 78895597,
  "status": "passed"
});
});