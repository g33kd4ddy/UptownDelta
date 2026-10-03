function showSection(id) {
  document.querySelectorAll(".content-section").forEach((section) => section.classList.remove("visible"));
  const target = document.getElementById(id);
  if (target) target.classList.add("visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const image = document.getElementById("responsiveImage");
if (image) {
  if (image.complete) {
    image.classList.add("fade-in");
  } else {
    image.addEventListener("load", () => {
      image.classList.add("fade-in");
    });
  }
}

async function loadSongs() {
  const container = document.getElementById("song-table-container");
  if (!container) return;
  container.textContent = "Loading songs...";

  try {
    const response = await fetch("songs.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const songs = await response.json();
    renderSongs(songs);
  } catch (error) {
    container.innerHTML = `<p>Unable to load songs: ${error.message}</p>`;
  }
}

function renderSongs(songs) {
  const container = document.getElementById("song-table-container");
  if (!container) return;

  if (!Array.isArray(songs) || songs.length === 0) {
    container.innerHTML = "<p>No songs found.</p>";
    return;
  }

  const table = document.createElement("table");
  table.className = "center";

  const thead = document.createElement("thead");
  thead.innerHTML = `<tr><th>Song</th><th>Artist</th></tr>`;

  const tbody = document.createElement("tbody");
  songs.forEach(({ title, artist }) => {
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    const artistCell = document.createElement("td");
    titleCell.textContent = title;
    artistCell.textContent = artist;
    row.append(titleCell, artistCell);
    tbody.appendChild(row);
  });

  table.append(thead, tbody);
  container.innerHTML = "";
  container.appendChild(table);
}

async function loadEvents() {
  const container = document.getElementById("event-table-container");
  if (!container) return;
  container.textContent = "Loading events...";

  try {
    const response = await fetch("events.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const events = await response.json();
    renderEvents(events);
  } catch (error) {
    container.innerHTML = `<p>Unable to load events: ${error.message}</p>`;
  }
}

function renderEvents(events) {
  const container = document.getElementById("event-table-container");
  if (!container) return;

  if (!Array.isArray(events) || events.length === 0) {
    container.innerHTML = "<p>No events found.</p>";
    return;
  }

  const table = document.createElement("table");
  table.className = "center";

  const thead = document.createElement("thead");
  thead.innerHTML = `<tr><th>Date</th><th>Venue</th></tr>`;

  const tbody = document.createElement("tbody");
  events.forEach(({ date, venue }) => {
    const row = document.createElement("tr");
    const dateCell = document.createElement("td");
    const venueCell = document.createElement("td");
    dateCell.textContent = date;
    venueCell.textContent = venue;
    row.append(dateCell, venueCell);
    tbody.appendChild(row);
  });

  table.append(thead, tbody);
  container.innerHTML = "";
  container.appendChild(table);
}

loadSongs();
loadEvents();