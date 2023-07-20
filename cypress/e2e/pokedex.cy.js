describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:4444");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("navigates to ivysaur details page", function () {
    cy.visit("http://localhost:4444");
    cy.contains("ivysaur").click();
    cy.contains("chlorophyll");
  });
});
