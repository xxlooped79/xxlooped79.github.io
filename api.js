const characterInput = document.getElementById("characterInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

async function searchCharacter() {
  const characterName = characterInput.value.trim();

  if (characterName === "") {
    result.innerHTML = "<p>Please enter a Disney character name.</p>";
    return;
  }

  result.innerHTML = "<p>Searching Disney magic...</p>";

  try {
    const response = await fetch(
      `https://api.disneyapi.dev/character?name=${encodeURIComponent(characterName)}`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      result.innerHTML = `<p>Sorry, I couldn’t find a Disney character named <strong>${characterName}</strong>.</p>`;
      return;
    }

    let output = "";

    data.data.forEach(character => {
      const films = character.films && character.films.length > 0
        ? character.films.join(", ")
        : "No film information available";

      const tvShows = character.tvShows && character.tvShows.length > 0
        ? character.tvShows.join(", ")
        : "No TV show information available";

      const allies = character.allies && character.allies.length > 0
        ? character.allies.join(", ")
        : "No allies listed";

      const image = character.imageUrl
        ? `<img src="${character.imageUrl}" alt="${character.name}" style="max-width: 250px; border-radius: 10px;">`
        : "";

      output += `
        <div class="card">
          <h2>${character.name}</h2>
          ${image}
          <p><strong>Films:</strong> ${films}</p>
          <p><strong>TV Shows:</strong> ${tvShows}</p>
          <p><strong>Allies:</strong> ${allies}</p>
        </div>
      `;
    });

    result.innerHTML = output;
  } catch (error) {
    result.innerHTML = "<p>Something went wrong while loading the Disney character.</p>";
    console.error(error);
  }
}

searchBtn.addEventListener("click", searchCharacter);

characterInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchCharacter();
  }
});