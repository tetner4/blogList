describe('Blog app', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3003/api/testing/reset')
      cy.visit('http://localhost:3000')

      const user = {
        username:"beast",
        password:"experninja",
        name:'hotdog'
      }
    })
  
    it('Login form is shown', function() {
      cy.contains('login'),
      cy.contains('username'),
      cy.contains('password')
    })

    describe('Login', function() {
      it('Succeeds with correct credentials', function(){
        cy.contains('log in').click()
        cy.get('#username').type('beast')
        cy.get('#password').type('expertninja')
        cy.get('#loginButton').click()

        cy.contains('hotodog logged-in')
      })
    })
  })