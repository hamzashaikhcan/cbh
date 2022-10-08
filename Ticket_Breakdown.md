# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables

- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each

- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**TICKET # 1:**
**Title:** - Create a function that saves the data of Agent into the database.
**User Story/Description:** - User should be able to input agent details, database should auto-generate the agent id. The function name shoule be **create(data)** which will be accepting the agent data which will be in JSON format, agent name should be in the input data and can't be null or empty, other fields i.e, agent_number, agent_address can be nullable. The ETA should be 30 minutes including unit tests and integration testing.

### TICKET # 2:

**Title:** - Create a function that generates the report of agent based on agent id.
**User Story/Description:** - User should be able to input the agent_id to function, function name should be **get(agent_id)** which is accepting the id of the agent and gets the data from the database from Agent & Shifts table, convert that data to JSON format which includes Agent data and nested Shifts (Reports) data. Report will be a nested JSON array comprising multiple JSON objects of Shifts. The ETA should be 1 hour including unit tests and integration testing.

**TICKET # 3:**
**Title:** - Design a web page, which has a form from where user can enter the data of agent.
**User Story/Description:** - User should be able to input agent details to the form which includes Agent Name, Agent Contact & Agent Address. Agent Name is required field and other 2 fields are not required. When the user clicks on 'Save' button the API (POST: http://localhost:3000/v1/api/agent/) should be hit, the 'Save' button should be disabled and remains disabled until we get a response from the backend. After getting the response, button should be enabled. If we get the postive/success response from the server, then all fields should be cleared so that user can add new data, but if we get a negative/error response, then fields should not be cleared/reset. The ETA should be 1.5 hours including user testing.

**TICKET # 4:**
**Title:** - Design a report page, which generates the report of agent based on the input agent id.
**User Story/Description:** - User should be able to select agent from the dropdown list which includes search option within a dropdown. User can search agent name from the search option. After selecting the Agent, user will be able to click submit button. Submit button should remain disabled until user selects the Agent from the dropdown list. When user clicks the submit button, an API (GET: http://localhost:3000/v1/api/report/:agent_id) will be hit which expects the agent id and return a detailed report in a JSON format. That report will be displayed in the tabular format to the user. The ETA should be 2 hours including user testing.
