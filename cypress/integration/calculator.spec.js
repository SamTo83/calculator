

describe('calculator', () => {
  it('Should check that 7+2 equals 9', () => {  
    cy.visit('/')
    cy.get('.7').click()
    cy.get('.add').click()
    cy.get('.2').click()
    cy.get('.equal').click()
  
    cy.get('.display-2').should('contain', '9')
  })

  it('Should check that 5x4 equals 20', () => {
    cy.visit('/')
  
    cy.get('.5').click()
    cy.get('.multiply').click()
    cy.get('.4').click()
    cy.get('.equal').click()
  
    cy.get('.display-2').should('contain', '20')
  })

  it('Should check that 20/10 equals 2', () => {
    cy.visit('/')
  
    cy.get('.2').click()
    cy.get('.0').click()
    cy.get('.divide').click()
    cy.get('.1').click()
    cy.get('.0').click()
    cy.get('.equal').click()
  
    cy.get('.display-2').should('contain', '2')
  })

  it('Should check that 50-23 equals 27', () => {
    cy.visit('/')
  
    cy.get('.5').click()
    cy.get('.0').click()
    cy.get('.minus').click()
    cy.get('.2').click()
    cy.get('.3').click()
    cy.get('.equal').click()
  
    cy.get('.display-2').should('contain', '27')
  })

  it('Should check if decimal only click once', () => {
    cy.visit('/')
  
    cy.get('.5').click()
    cy.get('.dot').click()
    cy.get('.9').click()
    cy.get('.dot').click()
    cy.get('.dot').click()
    cy.get('.dot').click()
    cy.get('.equal').click()
  
    cy.get('.display-2').should('contain', '5.9')
  })

  it('Should check if all clear clears the screen', () => {
    cy.visit('/')
  
    cy.get('.5').click()
    cy.get('.5').click()
    cy.get('.6').click()
    cy.get('.6').click()
    cy.get('.7').click()
    cy.get('.7').click()
    cy.get('.7').click()
    cy.get('.all-clear').click()
  
    cy.get('.display-2').should('contain', '0')
  })

  it('Should check if delete remove digits from the screen', () => {
    cy.visit('/')
  
    cy.get('.5').click()
    cy.get('.5').click()
    cy.get('.5').click()
    cy.get('.6').click()
    cy.get('.6').click()
    cy.get('.7').click()
    cy.get('.7').click()
    cy.get('.7').click()
    cy.get('.delete').click()
    cy.get('.delete').click()
    cy.get('.delete').click()
    cy.get('.delete').click()
    cy.get('.delete').click()
    cy.get('.delete').click()
    cy.get('.delete').click()
  
    cy.get('.display-2').should('contain', '5')
  })
})