<script>
	import { characterStore } from '../lib/store.js';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
    import { onMount } from 'svelte';
	import { Rules } from '../lib/presets/rules.js';

	let rolls = [];
	let showSubclass = false;
	let subclassList = [];
	let character = {
		name: '',
		class: '',
		subclass: '',
		level: 1,
		attributes: {
			strength: 10,
			dexterity: 10,
			constitution: 10,
			intelligence: 10,
			wisdom: 10,
			charisma: 10
		},
		skills: {
			acrobatics: false,
			animalHandling: false,
			arcana: false,
			athletics: false,
			deception: false,
			history: false,
			insight: false,
			intimidation: false,
			investigation: false,
			medicine: false,
			nature: false,
			perception: false,
			performance: false,
			persuasion: false,
			religion: false,
			sleightOfHand: false,
			stealth: false,
			survival: false
		},
		savingThrows: {
			strength: false,
			dexterity: false,
			constitution: false,
			intelligence: false,
			wisdom: false,
			charisma: false
		},
		armorClass: 10,
		initiative: 0,
		speed: 30,
		hitPoints: 10,
		hitDice: 10,
		classFeatures: [],
		equipment: [],
		spells: [],
		notes: '',
		spellSlots: {
			level1: 0,
			level2: 0,
			level3: 0,
			level4: 0,
			level5: 0,
			level6: 0,
			level7: 0,
			level8: 0,
			level9: 0
		}
	};

    let classFeaturesString = character.classFeatures[0] ? character.classFeatures.join('\n') : '';
	let equipmentString = character.equipment[0] ? character.equipment.join('\n') : '';
	let spellsString = character.spells[0] ? character.spells.join('\n') : '';


    onMount(() => {
        let storedCharacter = get(characterStore);
        if (storedCharacter) {
            character = storedCharacter;
            classFeaturesString = character.classFeatures[0] ? character.classFeatures.join('\n') : '';
	        equipmentString = character.equipment[0] ? character.equipment.join('\n') : '';
	        spellsString = character.spells[0] ? character.spells.join('\n') : '';
        }
    });


	const skills = Object.keys(character.skills);
	const savingThrows = Object.keys(character.savingThrows);

	function handleSubmit() {
		character.classFeatures = classFeaturesString.split('\n').filter(Boolean);
		character.equipment = equipmentString.split('\n').filter(Boolean);
		character.spells = spellsString.split('\n').filter(Boolean);
		characterStore.set(character);
		goto('/character-sheet');
	}

	function onRoll(attribute){
		character.attributes[attribute] = Rules.roll4d6DropLowest();
	}

	function rollArray(){
		rolls = []
		for(let i = 0; i < 6; i++){
			rolls = [...rolls, Rules.roll4d6DropLowest()];
		}
	}

	function checkSubclass(){
		let subclassLevel;
		if(character.class === 'LLMonk'){
			subclassLevel = 3;
		}
		showSubclass = character.level >= subclassLevel;
		subclassList = showSubclass ? Rules.subclasses[character.class] : [];
		console.log(showSubclass)
	}

	function updateCharacter() {
		Rules.updateCharacter(character);
	}


</script>

<h1>Create your DnD Character</h1>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-section">
		<label><h3>Name</h3></label>
		<input type="text" bind:value={character.name} required />
		<label><h3>Class</h3></label>
		<input type="text" bind:value={character.class} required />
		<label><h3>Level</h3></label>
		<input type="number" bind:value={character.level} on:change={checkSubclass} min="1" required />
		<label><h4>Use Preset Class</h4></label>
		<select bind:value={character.class} on:change={checkSubclass}>
			<option value="LLMonk">Monk (LL)</option>
		</select>
		{#if showSubclass}
			<label><h3>Subclass</h3></label>
			{#each subclassList as subclass}
				<input type="radio" bind:group={character.subclass} value={subclass} /> {subclass}
			{/each}
		{/if}
		<button type="button" on:click={updateCharacter}>Update Character</button>
		
	</div>

	<div class="form-section grid-2">
		<h2>Attributes</h2>
		<button type="button" on:click={rollArray}>Roll Array</button>
		<p>
			{#each rolls as roll, i}
				{roll}{i === 5 ? '' : ', '}
			{/each}
		</p>
		<button type="button" on:click={() => character.attributes = { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10 }}>Reset</button>
		{#each Object.keys(character.attributes) as attribute}
			<div>
				<label>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</label>
				<input type="number" bind:value={character.attributes[attribute]} min="1" />
				<button type="button" on:click={() => onRoll(attribute)}>Roll</button>
			</div>
		{/each}
	</div>

	<div class="form-section">
		<h2>Skills</h2>
		{#each skills as skill}
			<div>
				<label>{skill.charAt(0).toUpperCase() + skill.slice(1)}</label>
				<input type="checkbox" bind:checked={character.skills[skill]} />
			</div>
		{/each}
	</div>

	<div class="form-section">
		<h2>Saving Throws</h2>
		{#each savingThrows as savingThrow}
			<div>
				<label>{savingThrow.charAt(0).toUpperCase() + savingThrow.slice(1)}</label>
				<input type="checkbox" bind:checked={character.savingThrows[savingThrow]} />
			</div>
		{/each}
	</div>

	<div class="form-section grid-2">
		<label>Armor Class</label>
		<input type="number" bind:value={character.armorClass} min="1" />
		<label>Initiative</label>
		<input type="number" bind:value={character.initiative} min="0" />
		<label>Speed</label>
		<input type="number" bind:value={character.speed} min="0" />
		<label>Hit Points</label>
		<input type="number" bind:value={character.hitPoints} min="1" />
		<label>Hit Dice</label>
		<input type="text" bind:value={character.hitDice} />
	</div>

	<div class="form-section">
		<label>Class Features (separate features on newlines)</label>
		<textarea bind:value={classFeaturesString} rows="3"></textarea>
		<label>Equipment (separate items on newlines)</label>
		<textarea bind:value={equipmentString} rows="3"></textarea>
		<label>Spells (separate spells on newlines)</label>
		<textarea bind:value={spellsString} rows="3"></textarea>
		<label>Notes</label>
		<textarea bind:value={character.notes} rows="3"></textarea>
	</div>

	<div class="form-section">
		<h2>Spell Slots</h2>
		{#each Object.keys(character.spellSlots) as slot}
			<div>
				<label>{slot.replace('level', 'Level ')}</label>
				<input type="number" bind:value={character.spellSlots[slot]} min="0" />
			</div>
		{/each}
	</div>

	<button type="submit">Save Character</button>
</form>

<style>
	form {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		margin: 0 auto;
		max-width: 1200px;
	}

	form h2 {
		grid-column: span 3;
	}

	.form-section {
		background-color: #f9f9f9;
		padding: 15px;
		border-radius: 8px;
		border: 1px solid #ddd;
		display: grid;
		gap: 10px;
	}

	.form-section.grid-2 {
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	.form-section label {
		display: block;
		font-weight: bold;
		margin-bottom: 2px;
	}

	.form-section input,
	.form-section textarea {
		width: 100%;
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1em;
	}

	button {
		grid-column: span 3;
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		text-align: center;
		font-size: 1em;
	}
</style>
