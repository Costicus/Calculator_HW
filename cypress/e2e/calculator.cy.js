describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

// calculator.add() - add 1 to 4 and get 5
  it('should add 1 to 4 and get 5', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 5)
  })

// calculator.subtract() subtract 4 from 7 and get 3
  it('should subtract 4 from 7 and get 3', () => {
    cy.get('#number7').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 3)
  })

// calculator.multiply() - multiply 3 by 5 and get 15

  it('should multiply 3 by 5 and get 15', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 15)
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', () => {
    cy.get('#number2').click()
    cy.get('#number1').click()
    cy.get('#operator-divide').click()
    cy.get('#number7').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 3)

  })

// calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenate multiple number button clicks', () => {
    cy.get('#number1').click()
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('#number4').click()
    cy.get('#number5').click()
    cy.get('.display').should('contain', 12345)

  })

// calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operations together', () => {
  cy.get('#number5').click()
  cy.get('#operator-multiply').click()
  cy.get('#number2').click()
  cy.get('#operator_add').click()
  cy.get('#number7').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', 17)
  })

// calculator.clearClick() - clear the running total without affecting the calculation
it('clear the running total without affecting the calculation', () => {
  cy.get('#number5').click()
  cy.get('#operator_add').click()
  cy.get('#number3').click()
  cy.get('#operator-equals').click()
  cy.get('#clear').click()
  cy.get('#operator-subtract').click()
  cy.get('#number2').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', 6)
  })

}) 

