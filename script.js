const pokemonData = {"ガブリアス": {"english": "GARCHOMP", "type": "DRAGON / GROUND", "theme": "theme-garchomp", "mono": "G", "roles": ["高速アタッカー", "ステルスロック"], "scores": [92, 78, 85, "45%"], "builds": [["スカーフ型", "上から制圧し、終盤の掃除役を担う"], ["タスキ起点型", "初手性能と最低限の仕事を両立"], ["剣舞型", "崩しと抜き性能を高める"]], "knowledge": [["fact", "事実", "高速物理枠・地面打点・電気無効を同時に持てる。"], ["analysis", "考察", "終盤の掃除役が不足する構築ではスカーフ型の役割圧縮が有効。"], ["hypothesis", "仮説", "環境次第ではラムやタスキの方が再現性が高い可能性がある。"]]}, "ルカリオ": {"english": "LUCARIO", "type": "FIGHTING / STEEL", "theme": "theme-lucario", "mono": "L", "roles": ["終盤エース", "先制技"], "scores": [89, 72, 80, "40%"], "builds": [["物理型", "先制技と高火力で対面性能を確保"], ["特殊型", "物理受けへの奇襲と崩し"], ["メガ型", "高い制圧力をエース運用"]], "knowledge": [["fact", "事実", "物理・特殊・両刀の選択肢と先制技を持つ。"], ["analysis", "考察", "受け先を曖昧にできるが、行動保証は別途必要。"], ["hypothesis", "仮説", "物理偏重構築では特殊型の奇襲価値が高い可能性がある。"]]}, "メタグロス": {"english": "METAGROSS", "type": "STEEL / PSYCHIC", "theme": "theme-metagross", "mono": "M", "roles": ["フェアリー受け", "対面"], "scores": [91, 76, 84, "42%"], "builds": [["チョッキ型", "特殊方面の行動保証を高める"], ["メガ型", "攻撃性能と素早さで制圧"], ["先制技型", "終盤の詰めとストッパー"]], "knowledge": [["fact", "事実", "鋼タイプによる耐性と高い物理耐久を持つ。"], ["analysis", "考察", "フェアリー受けと対面性能を同時に求める構築で役割圧縮しやすい。"], ["hypothesis", "仮説", "現環境ではメガよりチョッキ型の方がサイクル適性が高い可能性がある。"]]}, "サーフゴー": {"english": "GHOLDENGO", "type": "STEEL / GHOST", "theme": "theme-gholdengo", "mono": "G", "roles": ["崩し", "状態異常対策"], "scores": [90, 81, 86, "48%"], "builds": [["スカーフ型", "速度補完とトリックによる崩し"], ["眼鏡型", "高火力で受けを崩す"], ["悪巧み型", "積みから一気に崩す"]], "knowledge": [["fact", "事実", "変化技への耐性と高い特殊火力を持つ。"], ["analysis", "考察", "受け崩しと状態異常対策を同時に担当したい構築に向く。"], ["hypothesis", "仮説", "環境次第では風船型が最も構築補完に優れる可能性がある。"]]}, "ミミッキュ": {"english": "MIMIKYU", "type": "GHOST / FAIRY", "theme": "theme-mimikyu", "mono": "M", "roles": ["ストッパー", "切り返し"], "scores": [88, 69, 78, "35%"], "builds": [["剣舞型", "ばけのかわを活かして積む"], ["トリル型", "切り返しと展開補助"], ["呪い型", "受けや積みへの圧力"]], "knowledge": [["fact", "事実", "ばけのかわにより一度の行動保証を作りやすい。"], ["analysis", "考察", "ストッパー不足の構築で負け筋を減らせる。"], ["hypothesis", "仮説", "火力型より呪い型の方が受け構築に有効な可能性がある。"]]}};
const glossaryData = {"H": ["basic", "HPの略。耐久を考える時の基礎となる数値。", "努力値配分ではH252のように表記します。HPへ252振るという意味です。", "H252 B252なら、HPと防御へ多く努力値を振った物理耐久重視の配分です。", ["努力値", "耐久", "B", "D"]], "A": ["basic", "Attack（攻撃）の略。物理技のダメージに関わる数値。", "A252は攻撃へ努力値を252振ることを示します。", "AS252は攻撃と素早さを最大近くまで伸ばす典型的な物理アタッカー配分です。", ["努力値", "AS252", "S"]], "B": ["basic", "Defense（防御）の略。物理技を耐える力に関わる数値。", "Bへ努力値を振ることで物理攻撃への耐久を高められます。", "HBベースはHPと防御を中心に伸ばす配分です。", ["H", "耐久", "努力値"]], "C": ["basic", "Special Attack（特攻）の略。特殊技のダメージに関わる数値。", "C252は特攻へ努力値を252振ることを示します。", "CS252は特攻と素早さを中心に伸ばす特殊アタッカー配分です。", ["努力値", "S", "性格"]], "D": ["basic", "Special Defense（特防）の略。特殊技を耐える力に関わる数値。", "Dへ努力値を振ることで特殊攻撃への耐久を高められます。", "HDベースはHPと特防を中心に伸ばす配分です。", ["H", "耐久", "努力値"]], "S": ["basic", "Speed（素早さ）の略。行動順に関わる数値。", "どの相手を抜きたいかを基準に努力値を決めます。", "S252は素早さへ最大限近く努力値を振る配分です。", ["AS252", "同速", "努力値"]], "努力値": ["basic", "育成で各能力へ配分できるポイント。", "通常は合計510まで、1つの能力には最大252まで振れます。", "A252 S252 残りH4は、攻撃と素早さを最大限伸ばす配分です。", ["個体値", "性格", "AS252"]], "AS252": ["basic", "攻撃（A）と素早さ（S）へ、それぞれ努力値252を振る配分。", "役割が明確で、火力と速度を最大化したい物理アタッカーに多い配分です。", "ようきAS252ガブリアスは典型例です。", ["A", "S", "努力値"]], "受からない": ["battle", "相手の攻撃を安全に受けることが難しい状態。", "交代から出しても倒されにくく、その後も行動できるかまで含めます。", "キュレムの攻撃に交代で出したポケモンが2発で倒されるなら、安定して受からないと言えます。", ["受け出し", "耐久", "一貫"]], "受け出し": ["battle", "相手の攻撃に合わせて交代し、後から場に出すこと。", "一度耐えるだけでなく、その後に圧力をかけられるかも重要です。", "電気技を予想してガブリアスへ交代するのは受け出しの一例です。", ["クッション", "一貫", "耐久"]], "一貫": ["battle", "ある技やタイプを安全に受けられるポケモンが少ない状態。", "交代先が削れている場合も一貫が生まれます。", "地面技を無効・半減できるポケモンがいないなら地面の一貫があります。", ["受け出し", "耐性", "サイクル"]], "勝ち筋": ["build", "その対戦で最終的に勝つための具体的なルート。", "エースで全抜きする、削って先制技圏内に入れるなどがあります。", "ステルスロックで削り、終盤にスカーフガブリアスで一掃する流れが一例です。", ["負け筋", "起点", "選出"]], "負け筋": ["build", "相手に通されると敗北へつながりやすい展開。", "特定の積みエースを止められないなどが該当します。", "高速特殊アタッカーへの切り返しがない構築では、それが負け筋になります。", ["勝ち筋", "ストッパー", "構築の穴"]], "サイクル": ["build", "交代を繰り返しながら有利対面や削りを積み重ねる戦い方。", "耐性、回復、クッションなどで相手の攻撃をいなします。", "受け出しと交代技を繰り返して相手を削る動きが代表例です。", ["受け出し", "クッション", "一貫"]], "使用率": ["research", "環境全体で、そのポケモンや型が使われた割合。", "使用率が高いことは必ずしも勝率が高いことを意味しません。", "対策が進むと、使用率が高くても勝率が下がることがあります。", ["勝率", "信頼度", "サンプル数"]], "勝率": ["research", "記録された対戦のうち、勝った割合。", "プレイヤー層・サンプル数・期間によって意味が変わります。", "10戦8勝の80%と1000戦580勝の58%では信頼性が異なります。", ["使用率", "信頼度", "サンプル数"]], "信頼度": ["research", "その評価や仮説をどの程度信用できるかを示す指標。", "ゲームデータ、大会実績、実戦数などを分けて評価します。", "理論上は強くても実戦が3試合なら信頼度は低めです。", ["サンプル数", "仮説", "再現性"]]};
const categoryLabels = { basic:"基礎", battle:"対戦", build:"構築", research:"研究" };

const state = {
  page: "home",
  selectedPokemon: "ガブリアス",
  decision: { problem: "", target: "", pain: "" },
  glossaryCategory: "all"
};

const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

function showPage(id) {
  state.page = id;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === id));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === id));
  if (id === "research") renderResearch();
  if (id === "academy") renderGlossary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});
document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

function setupChoice(containerId, key) {
  const container = document.getElementById(containerId);
  container.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(x => x.classList.remove("selected"));
      button.classList.add("selected");
      state.decision[key] = button.dataset.value;
    });
  });
}
setupChoice("problemChoices", "problem");
setupChoice("targetChoices", "target");
setupChoice("painChoices", "pain");

function renderPokemon(filter = "") {
  const grid = document.getElementById("pokemonGrid");
  const query = filter.trim().toLowerCase();
  grid.innerHTML = Object.entries(pokemonData)
    .filter(([name, data]) => [name, ...data.roles].join(" ").toLowerCase().includes(query))
    .map(([name, data]) => `
      <button class="pokemon-card ${data.theme}" data-pokemon="${name}">
        <p>${data.type}</p>
        <h3>${name}</h3>
        <footer><strong>${data.scores[2]}</strong><span>${data.roles.join("・")}</span></footer>
      </button>
    `).join("");

  document.querySelectorAll("[data-pokemon]").forEach(button => {
    button.addEventListener("click", () => openPokemon(button.dataset.pokemon));
  });
}

function openPokemon(name) {
  state.selectedPokemon = name;
  const data = pokemonData[name];
  const hero = document.getElementById("pokemonHero");
  hero.className = `pokemon-hero ${data.theme}`;

  document.getElementById("pokemonMonogram").textContent = data.mono;
  document.getElementById("pokemonName").textContent = name;
  document.getElementById("pokemonEnglish").textContent = data.english;
  document.getElementById("pokemonType").textContent = data.type;
  document.getElementById("scoreTheory").textContent = data.scores[0];
  document.getElementById("scoreEnvironment").textContent = data.scores[1];
  document.getElementById("scoreOverall").textContent = data.scores[2];
  document.getElementById("scoreConfidence").textContent = data.scores[3];

  document.getElementById("buildList").innerHTML = data.builds.map(([title, desc]) => `
    <article class="info-card"><strong>${title}</strong><p>${desc}</p></article>
  `).join("");

  document.getElementById("knowledgeList").innerHTML = data.knowledge.map(([type, label, text]) => `
    <article class="info-card"><span class="tag ${type}">${label}</span><p>${text}</p></article>
  `).join("");

  document.getElementById("pokemonDetail").classList.remove("hidden");
  document.getElementById("pokemonDetail").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("pokemonSearch").addEventListener("input", e => renderPokemon(e.target.value));
document.getElementById("closePokemon").addEventListener("click", () => document.getElementById("pokemonDetail").classList.add("hidden"));
document.getElementById("useInDecision").addEventListener("click", () => {
  showPage("decision");
  state.decision.target = state.selectedPokemon;
  document.querySelectorAll("#targetChoices button").forEach(button => {
    button.classList.toggle("selected", button.dataset.value === state.selectedPokemon);
  });
});

document.getElementById("generateAdvice").addEventListener("click", () => {
  const { problem, target, pain } = state.decision;
  if (!problem || !target || !pain) {
    showToast("3項目をすべて選択してください");
    return;
  }

  document.getElementById("adviceSummary").textContent =
    `${target}に対して「${pain}」が課題。構築変更だけでなく、技・持ち物・選出・プレイングの順で解決可能性を確認します。`;

  document.getElementById("adviceList").innerHTML = [
    ["analysis","選出変更","対象を想定した初手と裏選出を2パターン用意する。","優先度 高"],
    ["analysis","技変更",`${pain}への回答となる技を1枠検討する。`,"優先度 中"],
    ["hypothesis","ポケモン変更","失う役割を確認した上で、耐性と勝ち筋を両立する候補を比較する。","要検証"],
    ["fact","研究テーマ化","同じ条件で最低10戦を記録し、再現性を確認する。","推奨"]
  ].map(([type,title,text,meta]) => `
    <article class="info-card"><span class="tag ${type}">${type==="fact"?"事実":type==="analysis"?"考察":"仮説"}</span><strong>${title}</strong><p>${text}</p><small>${meta}</small></article>
  `).join("");

  document.getElementById("advicePanel").classList.remove("hidden");
  document.getElementById("advicePanel").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("saveResearch").addEventListener("click", () => {
  const list = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  list.unshift({
    id: Date.now(),
    title: `${state.decision.target}対策：${state.decision.pain}`,
    status: "未検証",
    progress: 0
  });
  localStorage.setItem("pccd_research", JSON.stringify(list));
  showToast("研究テーマとして保存しました");
  updateStats();
});

document.getElementById("saveQuickLog").addEventListener("click", () => {
  const logs = JSON.parse(localStorage.getItem("pccd_logs") || "[]");
  logs.unshift({
    id: Date.now(),
    date: new Date().toLocaleDateString("ja-JP"),
    result: document.getElementById("quickResult").value,
    opponent: document.getElementById("quickOpponent").value,
    cause: document.getElementById("quickCause").value
  });
  localStorage.setItem("pccd_logs", JSON.stringify(logs));
  showToast("対戦ログを保存しました");
  updateStats();
});

function updateStats() {
  const logs = JSON.parse(localStorage.getItem("pccd_logs") || "[]");
  const research = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  document.getElementById("statLogs").textContent = String(logs.length).padStart(2,"0");
  document.getElementById("statUnverified").textContent = String(3 + research.length).padStart(2,"0");
}

function renderResearch() {
  const saved = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  const base = [
    { title:"ガブリアスはスカーフが最適か？",status:"検証中",progress:60 },
    { title:"受け崩し不足は構築変更で解決すべきか？",status:"未検証",progress:0 }
  ];
  const all = [...saved, ...base];
  document.getElementById("researchCount").textContent = `${all.length}件`;
  document.getElementById("researchList").innerHTML = all.map(item => `
    <article class="info-card">
      <strong>${item.title}</strong>
      <p>${item.status}</p>
      <div class="progress"><i style="width:${item.progress}%"></i></div>
    </article>
  `).join("");

  const logs = JSON.parse(localStorage.getItem("pccd_logs") || "[]");
  document.getElementById("battleLogList").innerHTML = logs.length
    ? logs.map(log => `<article class="info-card"><strong>${log.result} vs ${log.opponent}</strong><p>主因：${log.cause}</p><small>${log.date}</small></article>`).join("")
    : `<article class="info-card"><p>まだ対戦ログはありません。</p></article>`;
}

document.getElementById("clearData").addEventListener("click", () => {
  if (!confirm("保存データを初期化しますか？")) return;
  localStorage.removeItem("pccd_logs");
  localStorage.removeItem("pccd_research");
  updateStats();
  renderResearch();
  showToast("保存データを初期化しました");
});

function renderGlossary() {
  const query = document.getElementById("glossarySearch").value.trim().toLowerCase();
  const grid = document.getElementById("glossaryGrid");
  grid.innerHTML = Object.entries(glossaryData)
    .filter(([term, data]) => {
      const categoryMatch = state.glossaryCategory === "all" || data[0] === state.glossaryCategory;
      const textMatch = `${term} ${data[1]}`.toLowerCase().includes(query);
      return categoryMatch && textMatch;
    })
    .map(([term, data]) => `
      <button class="glossary-card" data-term="${term}">
        <strong>${term}</strong>
        <p>${data[1]}</p>
        <small>${categoryLabels[data[0]]}</small>
      </button>
    `).join("");

  document.querySelectorAll("[data-term]").forEach(button => {
    button.addEventListener("click", () => openGlossary(button.dataset.term));
  });
}

function openGlossary(term) {
  const data = glossaryData[term];
  document.getElementById("modalTerm").textContent = term;
  document.getElementById("modalShort").textContent = data[1];
  document.getElementById("modalDetail").textContent = data[2];
  document.getElementById("modalExample").textContent = "例：" + data[3];
  document.getElementById("modalRelated").innerHTML = data[4].map(x => `<button>${x}</button>`).join("");
  document.getElementById("glossaryModal").classList.remove("hidden");
}

document.getElementById("closeModal").addEventListener("click", () => document.getElementById("glossaryModal").classList.add("hidden"));
document.getElementById("glossarySearch").addEventListener("input", renderGlossary);
document.querySelectorAll("#academyTabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#academyTabs button").forEach(x => x.classList.remove("active"));
    button.classList.add("active");
    state.glossaryCategory = button.dataset.category;
    renderGlossary();
  });
});

renderPokemon();
renderGlossary();
updateStats();
