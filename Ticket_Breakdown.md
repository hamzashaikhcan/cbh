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

1.  **Research and design:**

- **Acceptance criteria:**

  - A detailed proposal for implementing custom Agent IDs in reports is created, including a plan for storing and retrieving the IDs, a plan for updating the report generation process, and a plan for updating the user interface.
  - A rough estimate of the time and effort required for implementation is provided.

- **Time/effort estimate:** 2-4 hours
- **Implementation details:**

  - Analyze the current data model and determine how custom Agent IDs can be stored and retrieved.
  - Determine the necessary changes to the report generation process to use custom Agent IDs instead of internal database IDs.
  - Determine the necessary changes to the user interface to allow Facilities to enter and edit custom Agent IDs.
  - Create a detailed proposal document outlining the above plans and estimates.

2.  **Implement M2M relationship between agents and facilities:**

- **Acceptance criteria:**
  - A new M2M table is created to store the relationship between agents and facilities.
  - The data model is modified to support the M2M relationship.
  - The user interface is updated to allow Facilities to assign custom Agent IDs to specific agents.
  - Data migration scripts are created and run to ensure that existing data is migrated to the new storage structure.
- **Time/effort estimate:** 4-8 hours
- **Implementation details:**

  - Create a new M2M table in the database to store the relationship between agents and facilities.
  - Modify the data model to support the M2M relationship.
  - Update the user interface to allow Facilities to assign custom Agent IDs to specific agents.
  - Write and run data migration scripts to ensure that existing data is migrated to the new storage structure.
  - Test the updated data storage system to ensure it works as expected.

3.  **Implement custom Agent ID storage:**

- **Acceptance criteria:**

  - The database or data storage system is updated to support the storage of custom Agent IDs for each Agent.
  - Data migration scripts are created and run to ensure that existing data is migrated to the new storage structure.
  - The custom Agent ID field is added to the user interface for entering and editing the IDs.
  - The custom Agent ID field is added to the Shifts table in the database to store the ID for each Shift.

- **Time/effort estimate:** 4-8 hours
- **Implementation details:**

  - Create a new table or column in the database to store the custom Agent IDs.
  - Modify the data model to support the new field.
  - Write and run data migration scripts to ensure that existing data is migrated to the new storage structure.
  - Update the user interface to include a field for entering and editing custom Agent IDs.
  - Update the Shifts table in the database to include a field for the custom Agent ID.
  - Test the updated data storage system to ensure it works as expected.

4.  **Modify report generation process:**

- **Acceptance criteria:**

  - The report generation process is modified to use the custom Agent IDs instead of the internal database IDs when generating reports.
  - The report template is updated to include the custom Agent IDs.
  - The report generation code is updated to retrieve the custom Agent IDs from the database.
  - The modified report generation process is tested and verified to work as expected.

- **Time/effort estimate:** 4-8 hours
- **Implementation details:**

  - Update the report template to include the custom Agent IDs.
  - Modify the report generation code to retrieve the custom Agent IDs from the database instead of the internal database IDs.
  - Test the modified report generation process to ensure it works as expected.
  - Fix any issues that are discovered during testing.

5.  **Documentation and testing:**

- **Acceptance criteria:**

  - Detailed documentation for the new feature is created.
  - Test cases are created and executed to ensure the feature works as expected.
  - Any issues that are discovered during testing are fixed.

- **Time/effort estimate:** 2-4 hours
- **Implementation details:**
  - Write documentation for the new feature, including instructions for how Facilities can enter and edit custom Agent IDs, and how the custom IDs will be used in reports.
  - Create test cases to ensure that the feature works as expected, including testing the M2M relationship, custom Agent ID storage, report generation, and user interface functionality.
  - Execute the test cases and verify that the feature works as expected.
  - Fix any issues that are discovered during testing.
