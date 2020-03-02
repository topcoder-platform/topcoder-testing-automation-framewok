# Topcoder Testing Automation Framework

This POC defines the framework for the topcoder automation testing.

Technology Used

Selenium
Protractor
Typescript
Jasmine

The POC consists of two sections

The topcoder-ui-testing-lib : The library will have common functionality that is shared by applications. For example the login functionality is common for both the community and the accounts apps. The library will also have generic utility files that could also be used by all apps.

The community-app-tests : The POC includes a couple of tests for the community app (Login tests and Profile Settings - > Tools -> Subscriptions tests). These tests mainly serve as a real example to see how the framework works.
