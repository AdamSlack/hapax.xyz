# Validating External API Requests using AJV with AWS Lambda

## Why validate API Responses?

Dependancy on the response
learn if contract has been broken

## What do we want out of it
Learn about issues ASAP
- See all problems at the same time
- Before reaching the end user

Consistency
- For all response validation
- With other validation
- In Outputs from validation


Schema based
- Minimal Implementation

## Usage in lambda

1. Define Schema
- required fields
- field formats

2. Create Validator

3. Make Request

4. Validate Response

5. Throw errors

## Testing in lambda

Unit style integration tests give most value for your time

1. Mock API response to be invalid
2. Invoke Lambda
3. Assert on expected result