// Importiere stylesheets (ja, das geht!)
import './style.css';

// Hier referenziere ich das HTML-Element innerhalb der Seite über seine ID
let commandInput = document.getElementById('commandInput');

// Hier referenziere ich das HTML-Element über einen CSS-Selektor
let commandSubmit = document.querySelector('#commandSubmit');
let gameOutput = document.querySelector('textarea#game');

// ^^^^ Beides ist nützlich, Beides ist erlaubt! ^^^^

const textarea = document.getElementById('game');

const clickSubmit = document.getElementById('commandSubmit');

if (document.getElementById('commandInput').value != ' ') {
  clickSubmit.addEventListener('click', function handleClick() {
    textarea.value += document.getElementById('commandInput').value;
  });
} else {
  alert('nein');
}

function handleCommandInput() {
  /**
   * Aufgabe 1.) Implementiere die Funktion
   *
   * Wenn der Nutzer in das Eingabefeld einen Text eingibt und absendet,
   * soll dieser als neue Zeile innerhalb von dem Spielfeld (die Textarea)
   * ausgegeben werden.
   *
   * Später wird diese Funktion erweitert ...
   **/
}

/**
 * Google:
 *
 * - Event Listener JavaScript
 * - If/Else
 * - Textarea append
 */
