/**
 * Embed a Star Wars Crawl into your Google Site!
 *
 * Modified from this INCREDIBLE codepen: https://codepen.io/dbanks2010/pen/mJZNmY
 */

/**
 * IMPORTANT STEP
 * Change value of the DOC_KEY variable to the key to your Google Doc.
 * @return {HtmlOutput} The HTML page to be served.
 */
function doGet() {
  var DOC_KEY = "1bVwdpcswsQ8Nsz9-BJQXm0f28aBszowTNUZKHEsVWHM";
  var html = HtmlService.createTemplateFromFile("page");
  html.text = getBody(DOC_KEY);

  return html.evaluate().setTitle("Simple Tasks");
}

/**
 * Returns the ID and name of every task list in the user's account.
 * @param {id} The ID of the Google Doc.
 * @return {DocumentApp} Returns the text contents of Google Doc.
 */
function getBody(id) {
  return DocumentApp.openById(id)
    .getBody()
    .getParagraphs()
    .map(function(paragraph) {
      return paragraph.getText();
    })
    .filter(function(paragraph) {
      return paragraph !== "";
    });
}
