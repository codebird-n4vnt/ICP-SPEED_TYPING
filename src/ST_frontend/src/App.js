import { html, render } from "lit-html";

class SpeedTypingApp {
  constructor() {
    this.words = [
      "magic",
      "journey",
      "travel",
      "explore",
      "life",
      "experience",
      "happiness",
      "gratitude",
      "discipline",
      "exercise",
      "workout",
      "friendship",
      "practice",
      "routine",
      "morning",
      "reading",
      "books",
      "education",
      "amour",
      "delibrate",
      "protein",
      "partner",
      "empathy",
      "concert",
      "patience",
      "humor",
      "resilience",
      "confidence",
      "consistency",
      "appreciation",
      "literature",
      "meaning",
      "humble",
      "province",
      "flight",
      "alchemy",
      "intense",
      "adorable",
      "swoon",
      "stunning",
      "sensational",
      "provocative",
      "apocalypse",
      "compliance",
      "meticulous",
      "replicate",
      "relentless",
      "pursuit",
      "proactive",
      "astounding",
      "delightful",
      "legitimate",
      "mesmerizing",
      "polarizing",
      "validate",
      "explore",
      "happiness",
      "gratitude",
      "discipline",
      "exercise",
      "workout",
      "friendship",
      "practice",
      "routine",
      "morning",
      "reading",
      "books",
      "education",
      "love",
      "care",
      "journey",
      "travel",
      "life",
      "magic",
      "experience",
      "music",
      "story",
      "future",
      "hope",
      "dream",
      "sunset",
      "adventure",
      "peace",
      "courage",
      "wisdom",
      "growth",
      "light",
      "nature",
      "strength",
      "freedom",
      "art",
      "technology",
      "discovery",
      "faith",
      "imagination",
      "perspective",
      "potential",
      "dedication",
      "community",
      "unity",
      "balance",
      "patience",
      "empathy",
      "compassion",
      "connection",
      "confidence",
      "leadership",
      "integrity",
      "resilience",
      "understanding",
      "clarity",
      "transformation",
      "creativity",
      "mindfulness",
      "serenity",
      "exploration",
      "commitment",
      "innovation",
      "curiosity",
      "sustainability",
      "determination",
      "strategy",
      "ambition",
      "solution",
      "vision",
      "mission",
      "goals",
      "achievement",
      "focus",
      "collaboration",
      "trust",
      "security",
      "opportunity",
      "success",
      "progress",
      "motivation",
      "clarity",
      "reflection",
      "philosophy",
      "learning",
      "knowledge",
      "efficiency",
      "excellence",
      "planning",
      "results",
      "development",
      "creativity",
      "design",
      "engineering",
      "logic",
      "harmony",
      "emotions",
      "awareness",
      "consciousness",
      "purpose",
      "balance",
      "mindset",
      "relaxation",
      "breathing",
      "gratitude",
      "perspective",
      "ambition",
      "success",
      "appreciation",
      "discipline",
      "vision",
      "focus",
      "serenity",
      "healing",
      "transformation",
      "trust",
      "partnership",
      "integrity",
      "value",
      "respect",
      "dignity",
      "communication",
      "contribution",
      "harmony",
      "spirit",
      "reflection",
      "awareness",
      "perseverance",
      "effort",
      "consistency",
      "achievement",
      "direction",
      "persistence",
      "visionary",
      "growth",
      "mission",
      "advancement",
      "sincerity",
      "leadership",
      "aspiration",
      "satisfaction",
      "fulfillment",
    ];

    this.levels = {
      easy: 5,
      medium: 3,
      hard: 2,
    };

    this.currentLevel = this.levels.easy;
    this.timeCount = this.currentLevel + 1;
    this.scoreCount = 0;
    this.isPlaying = false;
    this.wordDisplayed = "";

    this.#render();
    this.init();
  }

  init = () => {
    this.showWord();
    setInterval(this.countdown, 1000);
    setInterval(this.checkStatus, 100);
  };

  #handleInput = (e) => {
    this.startMatch(e.target.value);
  };

  #handleDifficultyChange = (e) => {
    this.changeLevel(e.target.value);
  };

  #render() {
    let body = html`
      <header class="bg-info p-3 mb-5 text-center">
        <h1>Speed Typing Game</h1>
      </header>
      <section class="container text-center">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <p>
              Type the following word in
              <span id="seconds" class="text-warning"
                >${this.currentLevel}</span
              >
              seconds:
            </p>
            <h2 id="current-word" class="display-2 mb-4">
              ${this.wordDisplayed}
            </h2>
            <div class="form-group col-md-4 mx-auto">
              <label for="difficulty">Difficulty:</label>
              <select
                class="form-control"
                id="difficulty"
                @change="${this.#handleDifficultyChange}"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <input
              id="input-word"
              type="text"
              class="form-control form-control-lg mb-4 mt-4"
              placeholder="Start typing ..."
              autofocus
              @input="${this.#handleInput}"
            />
            <h4 id="message" class="mt-3 text-warning"></h4>
            <div class="row mt-3">
              <div class="col-md-6">
                <h3>
                  Time Left: <span id="time-left">${this.timeCount}</span>
                </h3>
              </div>
              <div class="col-md-6">
                <h3>Score: <span id="score">${this.scoreCount}</span></h3>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-10 mx-auto">
                <div class="card card-body bg-secondary">
                  <h5>Instructions</h5>
                  <p>
                    Type each word in the given amount of time to score. To play
                    again, just type the current word. Your score will reset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    render(body, document.getElementById("root"));
  }

  showWord = () => {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    this.wordDisplayed = this.words[randomIndex];
    this.#render();
  };

  countdown = () => {
    if (this.timeCount > 0) {
      this.timeCount--;
    } else if (this.timeCount === 0) {
      this.isPlaying = false;
    }
    this.#render();
  };

  checkStatus = () => {
    if (!this.isPlaying && this.timeCount === 0) {
      document.querySelector("#message").textContent = "Time Up!!";
      this.scoreCount = 0;
      this.#render();
    }
  };

  startMatch = (inputValue) => {
    if (inputValue === this.wordDisplayed) {
      this.isPlaying = true;
      document.querySelector("#message").textContent = "Correct!!";
      document.querySelector("#input-word").value = "";
      this.scoreCount++;
      this.timeCount = this.currentLevel + 1;
      this.showWord();
    }
  };

  changeLevel = (level) => {
    if (level === "Medium") {
      this.currentLevel = this.levels.medium;
    } else if (level === "Hard") {
      this.currentLevel = this.levels.hard;
    } else {
      this.currentLevel = this.levels.easy;
    }
    this.scoreCount = 0;
    this.timeCount = this.currentLevel + 1;
    this.#render();
  };
}

export default SpeedTypingApp;