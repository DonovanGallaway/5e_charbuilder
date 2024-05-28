<script>
import { onMount } from 'svelte';
import { marked } from 'marked';
import { get } from 'svelte/store';
import { characterStore } from '../../lib/store';
import DOMPurify from 'dompurify';
import { html2pdf } from 'html2pdf.js';

let character;
let markdownContent = '';

onMount(() => {
    characterStore.subscribe(value => {
        character = value;
    });
});

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const editCharacter = () => {
    
};

const saveAsPDF = () => {
    console.log(html2pdf)
    const element = document.querySelector('.character-sheet');
    html2pdf(element);
};
</script>

{#if character}
    <div class="character-sheet">
        <header>
            <h1>{character.name}</h1>
            <p><strong>Class:</strong> {character.class}</p>
            <p><strong>Level:</strong> {character.level}</p>
        </header>
        <div class="grid-container">
            <section class="attributes">
                <h2>Attributes</h2>
                <ul>
                    {#each Object.keys(character.attributes) as attr}
                        <li><strong>{capitalize(attr)}:</strong> {character.attributes[attr]}</li>
                    {/each}
                </ul>
            </section>
            <section class="skills">
                <h2>Skills</h2>
                <ul>
                    {#each Object.entries(character.skills).filter(([_, proficient]) => proficient) as [skill]}
                        <li>{capitalize(skill)}</li>
                    {/each}
                </ul>
            </section>
            <section class="saving-throws">
                <h2>Saving Throws</h2>
                <ul>
                    {#each Object.entries(character.savingThrows).filter(([_, proficient]) => proficient) as [savingThrow]}
                        <li>{capitalize(savingThrow)}</li>
                    {/each}
                </ul>
            </section>
            <section class="other-info">
                <h2>Other Information</h2>
                <ul>
                    <li><strong>Armor Class:</strong> {character.armorClass}</li>
                    <li><strong>Initiative:</strong> {character.initiative}</li>
                    <li><strong>Speed:</strong> {character.speed}</li>
                    <li><strong>Hit Points:</strong> {character.hitPoints}</li>
                    <li><strong>Hit Dice:</strong> {character.hitDice}</li>
                </ul>
            </section>
            <section class="class-features">
                <h2>Class Features</h2>
                <ul>
                    {#each character.classFeatures as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>
            </section>
            <section class="equipment">
                <h2>Equipment</h2>
                <ul>
                    {#each character.equipment as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </section>
            <section class="spells">
                <h2>Spells</h2>
                <ul>
                    {#each character.spells as spell}
                        <li>{spell}</li>
                    {/each}
                </ul>
            </section>
            <section class="notes">
                <h2>Notes</h2>
                <p>{character.notes}</p>
            </section>
            <section class="spell-slots">
                <h2>Spell Slots</h2>
                <ul>
                    {#each Object.keys(character.spellSlots) as slot}
                        <li><strong>{slot.replace('level', 'Level ')}</strong>: {character.spellSlots[slot]}</li>
                    {/each}
                </ul>
            </section>
        </div>
        <button class="save-button" on:click={saveAsPDF}>Save as PDF</button>
    </div>
{:else}
    <p>No character data available.</p>
{/if}

<a href='/' on:click={editCharacter}><button class="edit-button">Edit Character</button></a>

<style>
.character-sheet {
    font-family: 'Arial, sans-serif';
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 0;
}

header p {
    font-weight: bold;
    font-size: 1.2em;
    margin: 5px 0;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

section {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
}

section h2 {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    margin-top: 0;
}

ul {
    list-style: none;
    padding-left: 0;
}

ul li {
    margin: 5px 0;
    padding: 5px;
    background-color: #f1f1f1;
    border-radius: 4px;
}

.edit-button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 1em;
}

.edit-button a {
    color: white;
    text-decoration: none;
}

.edit-button:hover {
    background-color: #0056b3;
}
</style>
