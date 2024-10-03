// Controleer of zowel het knop- als paragraafelement bestaat (null-check)
if (button && paragraph) {
    // Event-listener toevoegen aan de knop
    button.addEventListener('click', function() {
        // Verander de tekst van de <p>-element
        paragraph.textContent = 'De tekst is succesvol veranderd!';
        
        // Optioneel: Verander de kleur van de <h1>
        const header = document.getElementById('header');
        if (header) {
            header.style.color = '#e74c3c'; // Verander kleur van de header
        }
    });
} else {
    console.error('Het knop- of paragraafelement werd niet gevonden.');
}