const pokemonData = {"ガブリアス": {"roles": ["高速アタッカー", "ステルスロック", "終盤エース", "対面"], "scores": {"theory": 92, "environment": 78, "overall": 85, "confidence": "暫定 45%"}, "builds": [{"name": "スカーフ型", "purpose": "上から制圧し、終盤の掃除役を担う"}, {"name": "タスキ起点型", "purpose": "初手性能と最低限の仕事を両立"}, {"name": "剣舞型", "purpose": "崩しと抜き性能を高める"}], "reasons": ["電気の一貫を切る", "高速物理枠", "ステルスロック", "終盤性能"], "concerns": ["氷打点", "フェアリー", "スカーフが必要か", "受け崩し不足"]}, "ルカリオ": {"roles": ["終盤エース", "崩し", "先制技", "対面"], "scores": {"theory": 89, "environment": 72, "overall": 80, "confidence": "暫定 40%"}, "builds": [{"name": "物理型", "purpose": "先制技と高火力で対面性能を確保"}, {"name": "特殊型", "purpose": "物理受けへの奇襲と崩し"}, {"name": "メガ型", "purpose": "高い制圧力をエース運用"}], "reasons": ["先制技", "終盤の詰め", "型の読まれにくさ", "メガエース"], "concerns": ["耐久不足", "役割集中", "地面弱点", "特殊型の再現性"]}, "メタグロス": {"roles": ["フェアリー受け", "対面", "クッション", "メガエース"], "scores": {"theory": 91, "environment": 76, "overall": 84, "confidence": "暫定 42%"}, "builds": [{"name": "チョッキ型", "purpose": "特殊方面の行動保証を高める"}, {"name": "メガ型", "purpose": "高い攻撃性能と素早さで制圧"}, {"name": "先制技型", "purpose": "終盤の詰めとストッパー"}], "reasons": ["フェアリー耐性", "先制技", "高い物理耐久", "メガ枠"], "concerns": ["炎", "地面", "サイクル負荷", "技枠不足"]}, "サーフゴー": {"roles": ["崩し", "状態異常対策", "特殊アタッカー", "サイクル"], "scores": {"theory": 90, "environment": 81, "overall": 86, "confidence": "暫定 48%"}, "builds": [{"name": "スカーフ型", "purpose": "速度補完とトリックによる崩し"}, {"name": "眼鏡型", "purpose": "高火力で受けを崩す"}, {"name": "悪巧み型", "purpose": "積みから一気に崩す"}], "reasons": ["状態異常を拒否", "特殊崩し", "トリック", "詰め性能"], "concerns": ["地面", "悪", "素早さ", "受け出し回数"]}, "ミミッキュ": {"roles": ["ストッパー", "終盤エース", "切り返し", "対面"], "scores": {"theory": 88, "environment": 69, "overall": 78, "confidence": "暫定 35%"}, "builds": [{"name": "剣舞型", "purpose": "ばけのかわを活かして積む"}, {"name": "トリル型", "purpose": "切り返しと展開補助"}, {"name": "呪い型", "purpose": "受けや積みへの圧力"}], "reasons": ["行動保証", "ストッパー", "終盤性能", "切り返し"], "concerns": ["火力不足", "ばけのかわ後", "技選択", "鋼への打点"]}};

const state = {
  currentPage: "home",
  homeProblem: localStorage.getItem("pccd_home_problem") || "",
  selectedPokemon: localStorage.getItem("pccd_selected_pokemon") || "ガブリアス",
  decision: {
    problem: "",
    target: "",
    pain: ""
  }
};

const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

function showPage(pageId) {
  state.currentPage = pageId;
  document.querySelectorAll(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.page === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pageId === "research") renderResearch();
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.querySelectorAll("[data-page-link]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.pageLink));
});

function setupSingleChoice(containerId, onSelect) {
  const container = document.getElementById(containerId);
  container.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
      onSelect(button.dataset.value || button.textContent.trim());
    });
  });
}

setupSingleChoice("homeProblems", value => {
  state.homeProblem = value;
  localStorage.setItem("pccd_home_problem", value);
});

if (state.homeProblem) {
  document.querySelectorAll("#homeProblems button").forEach(button => {
    button.classList.toggle("selected", button.dataset.value === state.homeProblem);
  });
}

document.getElementById("startDecisionBtn").addEventListener("click", () => {
  showPage("decision");
  if (state.homeProblem) {
    state.decision.problem = state.homeProblem;
    document.querySelectorAll("#decisionProblem button").forEach(button => {
      button.classList.toggle("selected", button.dataset.value === state.homeProblem);
    });
  }
});

setupSingleChoice("decisionProblem", value => state.decision.problem = value);
setupSingleChoice("decisionTarget", value => state.decision.target = value);
setupSingleChoice("decisionPain", value => state.decision.pain = value);

function renderPokemonList(filter = "") {
  const list = document.getElementById("pokemonList");
  list.innerHTML = "";
  const query = filter.trim().toLowerCase();

  Object.entries(pokemonData)
    .filter(([name, data]) => {
      const searchable = [name, ...data.roles].join(" ").toLowerCase();
      return searchable.includes(query);
    })
    .forEach(([name, data]) => {
      const button = document.createElement("button");
      button.className = "pokemon-card";
      button.innerHTML = `<div><strong>${name}</strong><small>${data.roles.slice(0, 2).join("・")}</small></div><span>›</span>`;
      button.addEventListener("click", () => openPokemon(name));
      list.appendChild(button);
    });
}

function openPokemon(name) {
  state.selectedPokemon = name;
  localStorage.setItem("pccd_selected_pokemon", name);
  const data = pokemonData[name];

  document.getElementById("pokemonDetail").classList.remove("hidden");
  document.getElementById("detailName").textContent = name;
  document.getElementById("theoryScore").textContent = data.scores.theory;
  document.getElementById("envScore").textContent = data.scores.environment;
  document.getElementById("overallScore").textContent = data.scores.overall;
  document.getElementById("confidenceScore").textContent = data.scores.confidence;

  const roleChoices = document.getElementById("roleChoices");
  roleChoices.innerHTML = data.roles.map(role => `<button>${role}</button>`).join("");

  const buildList = document.getElementById("buildList");
  buildList.innerHTML = data.builds.map(build => `
    <div class="stack-item">
      <strong>${build.name}</strong>
      <p>${build.purpose}</p>
    </div>
  `).join("");

  document.getElementById("adoptReasons").innerHTML = data.reasons.map(item => `<button>${item}</button>`).join("");
  document.getElementById("concerns").innerHTML = data.concerns.map(item => `<button>${item}</button>`).join("");

  document.querySelectorAll("#roleChoices button, #adoptReasons button, #concerns button").forEach(button => {
    button.addEventListener("click", () => button.classList.toggle("selected"));
  });
}

document.getElementById("closeDetailBtn").addEventListener("click", () => {
  document.getElementById("pokemonDetail").classList.add("hidden");
});

document.getElementById("pokemonSearch").addEventListener("input", event => {
  renderPokemonList(event.target.value);
});

document.getElementById("openDecisionFromPokemon").addEventListener("click", () => {
  showPage("decision");
  state.decision.target = state.selectedPokemon;
  document.querySelectorAll("#decisionTarget button").forEach(button => {
    button.classList.toggle("selected", button.dataset.value === state.selectedPokemon);
  });
});

document.getElementById("generateAdviceBtn").addEventListener("click", () => {
  const { problem, target, pain } = state.decision;
  if (!problem || !target || !pain) {
    showToast("3項目をすべて選択してください");
    return;
  }

  const summary = `${target}に対して「${pain}」が課題。まずは構築変更だけでなく、技・持ち物・選出・プレイングの順でも解決可能性を確認します。`;
  document.getElementById("adviceSummary").textContent = summary;

  const recommendations = [
    { title: "選出変更", text: `${target}を想定した初手・裏選出を固定せず、対面ごとの分岐を用意する。`, score: "優先度 高" },
    { title: "技変更", text: `現在の6匹を維持したまま、${pain}への回答となる技を1枠検討する。`, score: "優先度 中" },
    { title: "ポケモン変更", text: `失う役割を確認した上で、対象への耐性と現在の勝ち筋を両立する候補を比較する。`, score: "優先度 中" },
    { title: "研究テーマ化", text: `同じ条件で最低10戦を記録し、再現性がある問題か確認する。`, score: "推奨" }
  ];

  document.getElementById("adviceList").innerHTML = recommendations.map(item => `
    <div class="stack-item">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
      <div class="meta">${item.score}</div>
    </div>
  `).join("");

  document.getElementById("advicePanel").classList.remove("hidden");
  document.getElementById("advicePanel").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("saveAsResearchBtn").addEventListener("click", () => {
  const { problem, target, pain } = state.decision;
  const research = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  research.unshift({
    id: Date.now(),
    title: `${target}対策：${pain}の解決`,
    status: "未検証",
    progress: 0,
    note: `${problem}として記録`
  });
  localStorage.setItem("pccd_research", JSON.stringify(research));
  showToast("研究テーマに保存しました");
  updateMetrics();
});

document.getElementById("saveQuickLogBtn").addEventListener("click", () => {
  const logs = JSON.parse(localStorage.getItem("pccd_battle_logs") || "[]");
  logs.unshift({
    id: Date.now(),
    date: new Date().toLocaleDateString("ja-JP"),
    result: document.getElementById("quickResult").value,
    opponent: document.getElementById("quickOpponent").value,
    cause: document.getElementById("quickCause").value
  });
  localStorage.setItem("pccd_battle_logs", JSON.stringify(logs));
  showToast("対戦ログを保存しました");
  updateMetrics();
});

function renderResearch() {
  const baseResearch = [
    { title: "ガブリアスはスカーフが最適か？", status: "検証中", progress: 60, note: "18 / 30戦" },
    { title: "受け崩し不足は構築変更で解決すべきか？", status: "未検証", progress: 0, note: "次回検証" }
  ];
  const saved = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  const allResearch = [...saved, ...baseResearch];

  document.getElementById("researchList").innerHTML = allResearch.map(item => `
    <div class="stack-item">
      <strong>${item.title}</strong>
      <p>${item.status} ・ ${item.note || ""}</p>
      <div class="progress"><span style="width:${item.progress || 0}%"></span></div>
    </div>
  `).join("");

  const logs = JSON.parse(localStorage.getItem("pccd_battle_logs") || "[]");
  document.getElementById("battleLogList").innerHTML = logs.length
    ? logs.map(log => `
      <div class="stack-item">
        <strong>${log.result} vs ${log.opponent}</strong>
        <p>主因：${log.cause}</p>
        <div class="meta">${log.date}</div>
      </div>
    `).join("")
    : `<div class="stack-item"><p>まだ対戦ログはありません。</p></div>`;
}

function updateMetrics() {
  const logs = JSON.parse(localStorage.getItem("pccd_battle_logs") || "[]");
  const research = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  document.getElementById("metricLogs").textContent = logs.length;
  document.getElementById("metricUnverified").textContent = 3 + research.length;
}

document.getElementById("clearLogsBtn").addEventListener("click", () => {
  if (!confirm("保存した研究テーマと対戦ログを初期化しますか？")) return;
  localStorage.removeItem("pccd_research");
  localStorage.removeItem("pccd_battle_logs");
  renderResearch();
  updateMetrics();
  showToast("保存データを初期化しました");
});

renderPokemonList();
updateMetrics();
