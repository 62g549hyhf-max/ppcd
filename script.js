const pokemonData = {"ガブリアス": {"roles": ["高速アタッカー", "ステルスロック", "終盤エース", "対面"], "scores": {"theory": 92, "environment": 78, "overall": 85, "confidence": "45%"}, "evidence": {"game": 100, "tournament": 40, "personal": 15}, "builds": [{"name": "スカーフ型", "purpose": "上から制圧し、終盤の掃除役を担う"}, {"name": "タスキ起点型", "purpose": "初手性能と最低限の仕事を両立"}, {"name": "剣舞型", "purpose": "崩しと抜き性能を高める"}], "knowledge": [{"type": "fact", "label": "事実", "text": "高速物理枠・地面打点・電気無効を同時に持てる。"}, {"type": "analysis", "label": "考察", "text": "構築内に終盤の掃除役が不足している場合、スカーフ型の役割圧縮が有効。"}, {"type": "hypothesis", "label": "仮説", "text": "現環境ではスカーフ固定より、ラムやタスキの方が再現性が高い可能性がある。"}], "reasons": ["電気の一貫を切る", "高速物理枠", "ステルスロック", "終盤性能"], "concerns": ["氷打点", "フェアリー", "スカーフが必要か", "受け崩し不足"]}, "ルカリオ": {"roles": ["終盤エース", "崩し", "先制技", "対面"], "scores": {"theory": 89, "environment": 72, "overall": 80, "confidence": "40%"}, "evidence": {"game": 100, "tournament": 25, "personal": 10}, "builds": [{"name": "物理型", "purpose": "先制技と高火力で対面性能を確保"}, {"name": "特殊型", "purpose": "物理受けへの奇襲と崩し"}, {"name": "メガ型", "purpose": "高い制圧力をエース運用"}], "knowledge": [{"type": "fact", "label": "事実", "text": "物理・特殊・両刀の選択肢と先制技を持つ。"}, {"type": "analysis", "label": "考察", "text": "相手の受け先を曖昧にできるが、耐久の低さから行動保証は別途必要。"}, {"type": "hypothesis", "label": "仮説", "text": "物理偏重構築では特殊型の奇襲価値が高い可能性がある。"}], "reasons": ["先制技", "終盤の詰め", "型の読まれにくさ", "メガエース"], "concerns": ["耐久不足", "役割集中", "地面弱点", "特殊型の再現性"]}, "メタグロス": {"roles": ["フェアリー受け", "対面", "クッション", "メガエース"], "scores": {"theory": 91, "environment": 76, "overall": 84, "confidence": "42%"}, "evidence": {"game": 100, "tournament": 30, "personal": 12}, "builds": [{"name": "チョッキ型", "purpose": "特殊方面の行動保証を高める"}, {"name": "メガ型", "purpose": "高い攻撃性能と素早さで制圧"}, {"name": "先制技型", "purpose": "終盤の詰めとストッパー"}], "knowledge": [{"type": "fact", "label": "事実", "text": "鋼タイプによる耐性と高い物理耐久を持つ。"}, {"type": "analysis", "label": "考察", "text": "フェアリー受けと対面性能を同時に求める構築で役割圧縮しやすい。"}, {"type": "hypothesis", "label": "仮説", "text": "現環境ではメガよりチョッキ型の方がサイクル適性が高い可能性がある。"}], "reasons": ["フェアリー耐性", "先制技", "高い物理耐久", "メガ枠"], "concerns": ["炎", "地面", "サイクル負荷", "技枠不足"]}, "サーフゴー": {"roles": ["崩し", "状態異常対策", "特殊アタッカー", "サイクル"], "scores": {"theory": 90, "environment": 81, "overall": 86, "confidence": "48%"}, "evidence": {"game": 100, "tournament": 45, "personal": 18}, "builds": [{"name": "スカーフ型", "purpose": "速度補完とトリックによる崩し"}, {"name": "眼鏡型", "purpose": "高火力で受けを崩す"}, {"name": "悪巧み型", "purpose": "積みから一気に崩す"}], "knowledge": [{"type": "fact", "label": "事実", "text": "状態異常・変化技への耐性と高い特殊火力を持つ。"}, {"type": "analysis", "label": "考察", "text": "受け崩しと状態異常対策を同時に担当したい構築に向く。"}, {"type": "hypothesis", "label": "仮説", "text": "環境次第では風船型が最も構築補完に優れる可能性がある。"}], "reasons": ["状態異常を拒否", "特殊崩し", "トリック", "詰め性能"], "concerns": ["地面", "悪", "素早さ", "受け出し回数"]}, "ミミッキュ": {"roles": ["ストッパー", "終盤エース", "切り返し", "対面"], "scores": {"theory": 88, "environment": 69, "overall": 78, "confidence": "35%"}, "evidence": {"game": 100, "tournament": 20, "personal": 8}, "builds": [{"name": "剣舞型", "purpose": "ばけのかわを活かして積む"}, {"name": "トリル型", "purpose": "切り返しと展開補助"}, {"name": "呪い型", "purpose": "受けや積みへの圧力"}], "knowledge": [{"type": "fact", "label": "事実", "text": "ばけのかわにより一度の行動保証を作りやすい。"}, {"type": "analysis", "label": "考察", "text": "ストッパー不足の構築で、負け筋を減らす役割を持てる。"}, {"type": "hypothesis", "label": "仮説", "text": "火力型より呪い型の方が現環境の受け構築に有効な可能性がある。"}], "reasons": ["行動保証", "ストッパー", "終盤性能", "切り返し"], "concerns": ["火力不足", "ばけのかわ後", "技選択", "鋼への打点"]}};
const pokemonPresentation = {
  "ガブリアス": { english: "GARCHOMP", type: "DRAGON / GROUND", monogram: "G", theme: "theme-garchomp" },
  "ルカリオ": { english: "LUCARIO", type: "FIGHTING / STEEL", monogram: "L", theme: "theme-lucario" },
  "メタグロス": { english: "METAGROSS", type: "STEEL / PSYCHIC", monogram: "M", theme: "theme-metagross" },
  "サーフゴー": { english: "GHOLDENGO", type: "STEEL / GHOST", monogram: "G", theme: "theme-gholdengo" },
  "ミミッキュ": { english: "MIMIKYU", type: "GHOST / FAIRY", monogram: "M", theme: "theme-mimikyu" }
};

const glossaryLevels = {
  "H": "basic", "A": "basic", "B": "basic", "C": "basic", "D": "basic", "S": "basic",
  "努力値": "basic", "個体値": "basic", "性格": "basic", "AS252": "basic", "ぶっぱ": "basic",
  "受からない": "battle", "耐久": "battle", "受け出し": "battle", "クッション": "battle",
  "起点": "battle", "一貫": "battle", "行動保証": "battle",
  "勝ち筋": "build", "負け筋": "build", "サイクル": "build", "役割集中": "build",
  "使用率": "research", "勝率": "research", "信頼度": "research", "サンプル数": "research"
};

const glossaryData = {"受からない": {"short": "相手の攻撃を安全に受けることが難しい状態。", "detail": "一度だけ耐えることではなく、交代から出しても倒されにくく、その後も行動できるかまで含めて使われることがあります。", "example": "キュレムの攻撃に交代で出したポケモンが2発で倒されるなら、『安定して受からない』と表現できます。", "related": ["受け出し", "後投げ", "耐久", "確定数"]}, "耐久": {"short": "ポケモンが攻撃をどれくらい耐えられるかを表す考え方。", "detail": "HP・防御・特防だけでなく、タイプ耐性、特性、持ち物、努力値、回復手段なども実戦上の耐久に影響します。", "example": "防御が高くても弱点を突かれやすい場合、実戦では『物理耐久が安定しない』ことがあります。", "related": ["物理耐久", "特殊耐久", "耐久指数", "確定数"]}, "受け出し": {"short": "相手の攻撃に合わせて交代し、後から場に出すこと。", "detail": "攻撃を一度耐えるだけでなく、その後に相手へ圧力をかけられるか、回復や交代を繰り返せるかも重要です。", "example": "電気技を予想してガブリアスへ交代するのは、電気技への受け出しの一例です。", "related": ["後投げ", "一貫", "クッション", "受からない"]}, "クッション": {"short": "攻撃を一度受け、味方を安全に場へ出す役割。", "detail": "完全に受け切るポケモンとは限らず、相手の技を確認したり、交代技や先制技で展開を整えたりします。", "example": "一度攻撃を受けてから、とんぼがえり等でエースを安全に出す動きが代表例です。", "related": ["受け出し", "対面操作", "サイクル", "行動保証"]}, "起点": {"short": "積み技や展開技を安全に使える状況、またはその状況を作られたポケモン。", "detail": "相手の火力不足、交代、技固定などを利用して、つるぎのまい等を使える状態を指します。", "example": "こだわりアイテムで無効技に固定された相手は、積み技の起点にされやすいです。", "related": ["積み技", "展開", "技固定", "勝ち筋"]}, "一貫": {"short": "ある技やタイプを安全に受けられるポケモンが少なく、繰り返し通されやすい状態。", "detail": "単純な弱点の数だけではなく、交代先が削れている、回復できない、相手のサブ技まで含めて止めにくい場合も一貫と表現します。", "example": "地面技を無効・半減できるポケモンがいない構築では、『地面の一貫がある』と言えます。", "related": ["受け出し", "耐性", "サイクル", "弱点"]}, "行動保証": {"short": "少なくとも一度は技を使いやすい状態。", "detail": "きあいのタスキ、ばけのかわ、高耐久、先制技などによって確保されます。", "example": "タスキを持ったポケモンは、満タンなら一撃を耐えて行動しやすくなります。", "related": ["タスキ", "対面", "ストッパー", "耐久"]},
    "H": {
        "short": "HPの略。耐久を考える時の基礎となる数値。",
        "detail": "努力値配分ではH252のように表記します。HPへ252振るという意味です。",
        "example": "H252 B252なら、HPと防御へ多く努力値を振った物理耐久重視の配分です。",
        "related": ["努力値", "耐久", "B", "D"]
    },
    "A": {
        "short": "Attack（攻撃）の略。物理技のダメージに関わる数値。",
        "detail": "A252は攻撃へ努力値を252振ることを示します。",
        "example": "AS252は攻撃と素早さを最大近くまで伸ばす、典型的な物理アタッカー配分です。",
        "related": ["努力値", "AS252", "S", "ぶっぱ"]
    },
    "B": {
        "short": "Defense（防御）の略。物理技を耐える力に関わる数値。",
        "detail": "Bへ努力値を振ることで、物理攻撃への耐久を高められます。",
        "example": "HBベースはHPと防御を中心に伸ばす配分です。",
        "related": ["H", "耐久", "物理耐久", "努力値"]
    },
    "C": {
        "short": "Special Attack（特攻）の略。特殊技のダメージに関わる数値。",
        "detail": "C252は特攻へ努力値を252振ることを示します。",
        "example": "CS252は特攻と素早さを中心に伸ばす特殊アタッカー配分です。",
        "related": ["努力値", "S", "性格"]
    },
    "D": {
        "short": "Special Defense（特防）の略。特殊技を耐える力に関わる数値。",
        "detail": "Dへ努力値を振ることで、特殊攻撃への耐久を高められます。",
        "example": "HDベースはHPと特防を中心に伸ばす配分です。",
        "related": ["H", "耐久", "特殊耐久", "努力値"]
    },
    "S": {
        "short": "Speed（素早さ）の略。行動順に関わる数値。",
        "detail": "S調整では、どの相手を抜きたいかを基準に努力値を決めます。",
        "example": "S252は素早さへ最大限近く努力値を振る配分です。",
        "related": ["AS252", "同速", "Sライン", "努力値"]
    },
    "努力値": {
        "short": "育成で各能力へ配分できる隠しポイント。",
        "detail": "通常は合計510まで、1つの能力には最大252まで振れます。役割や仮想敵に合わせて配分します。",
        "example": "A252 S252 残りH4は、攻撃と素早さを最大限伸ばし、残りをHPへ振る配分です。",
        "related": ["個体値", "性格", "AS252", "ぶっぱ"]
    },
    "個体値": {
        "short": "同じポケモンでも個体ごとに異なる、能力の基礎差。",
        "detail": "対戦では多くの場合、必要な能力を最大値として扱いますが、特殊な調整で下げる場合もあります。",
        "example": "イカサマ対策で攻撃個体値を低くする考え方があります。",
        "related": ["努力値", "性格", "実数値"]
    },
    "性格": {
        "short": "能力の伸び方に補正を与える要素。",
        "detail": "1つの能力が1.1倍、別の1つが0.9倍になります。役割に合わせて選びます。",
        "example": "ようきは素早さを上げ、特攻を下げるため、物理高速アタッカーに向きます。",
        "related": ["努力値", "A", "C", "S"]
    },
    "AS252": {
        "short": "攻撃（A）と素早さ（S）へ、それぞれ努力値252を振る配分。",
        "detail": "役割が明確で、火力と速度を最大化したい物理アタッカーに多い配分です。",
        "example": "ようきAS252ガブリアスは、素早さと物理火力を重視した典型例です。",
        "related": ["A", "S", "努力値", "ぶっぱ"]
    },
    "ぶっぱ": {
        "short": "特定の能力へ努力値を最大近くまで振ること。",
        "detail": "ASぶっぱなら、攻撃と素早さへ252ずつ振ることを指します。雑な配分という意味ではなく、目的が明確な合理的配分の場合もあります。",
        "example": "火力と速度を優先する型では、ASぶっぱが最も再現性の高い配分になることがあります。",
        "related": ["AS252", "努力値", "調整"]
    },
    "勝ち筋": {
        "short": "その対戦で最終的に勝つための具体的なルート。",
        "detail": "エースで全抜きする、相手を削って先制技圏内へ入れる、受け切るなど複数あります。",
        "example": "ステルスロックで削り、終盤にスカーフガブリアスで一掃する流れは勝ち筋の一例です。",
        "related": ["負け筋", "起点", "終盤", "選出"]
    },
    "負け筋": {
        "short": "相手に通されると敗北へつながりやすい展開。",
        "detail": "特定の積みエースを止められない、受け崩しが不足する、初手でテンポを失うなどがあります。",
        "example": "高速特殊アタッカーへの切り返しがない構築では、それが負け筋になり得ます。",
        "related": ["勝ち筋", "ストッパー", "構築の穴"]
    },
    "サイクル": {
        "short": "交代を繰り返しながら、有利対面や削りを積み重ねる戦い方。",
        "detail": "耐性、回復、対面操作、クッションなどを使って相手の攻撃をいなし、勝ち筋へつなげます。",
        "example": "受け出しととんぼがえりを繰り返し、相手を削る動きが代表例です。",
        "related": ["受け出し", "クッション", "一貫", "対面操作"]
    },
    "役割集中": {
        "short": "同じ相手や役割へ複数の圧力を重ね、対策を突破する考え方。",
        "detail": "単純なタイプ補完だけでなく、相手の受け先へ似た負荷を重ねることで崩しやすくします。",
        "example": "物理高火力を2体並べ、相手の物理受けを繰り返し削るのが一例です。",
        "related": ["崩し", "役割破壊", "勝ち筋"]
    },
    "使用率": {
        "short": "環境全体で、そのポケモンや型が使われた割合。",
        "detail": "使用率が高いことは、必ずしも勝率が高いことを意味しません。流行や扱いやすさも影響します。",
        "example": "使用率上位でも、対策が進んで勝率が下がることがあります。",
        "related": ["勝率", "採用率", "メタゲーム", "サンプル数"]
    },
    "勝率": {
        "short": "記録された対戦のうち、勝った割合。",
        "detail": "プレイヤー層、サンプル数、構築、期間によって意味が変わるため、単独で強さを断定できません。",
        "example": "10戦8勝の80%と、1000戦580勝の58%では信頼性が異なります。",
        "related": ["使用率", "信頼度", "サンプル数", "再現性"]
    },
    "信頼度": {
        "short": "その評価や仮説を、どの程度信用できるかを示す指標。",
        "detail": "公式データ、大会実績、実戦数、環境の新しさなどを分けて評価します。",
        "example": "理論上は強くても実戦が3試合しかなければ、信頼度は低めに扱います。",
        "related": ["サンプル数", "仮説", "再現性", "Evidence"]
    },
    "サンプル数": {
        "short": "判断の根拠として使った試合・構築・データの件数。",
        "detail": "数が多いほど安定しやすい一方、古い環境の大量データより、新環境の少数データが重要な場合もあります。",
        "example": "5戦全勝だけで最強と断定せず、相手構築や再現性を確認します。",
        "related": ["信頼度", "勝率", "再現性", "環境"]
    }};

const painOptions = {
  "攻撃面": ["火力不足", "相手を崩せない", "上から倒せない", "詰め切れない"],
  "防御面": ["一撃で倒される", "後出しできない", "技が一貫する", "サイクルが続かない"],
  "選出面": ["初手が安定しない", "選出が読まれる", "誰を出すか迷う", "裏の勝ち筋がない"],
  "情報面": ["型が読めない", "持ち物が分からない", "技範囲が分からない", "対策方法が分からない"]
};

const state = {
  currentPage: "home",
  homeProblem: localStorage.getItem("pccd_home_problem") || "",
  selectedPokemon: localStorage.getItem("pccd_selected_pokemon") || "ガブリアス",
  decision: {
    problem: "",
    target: "",
    category: "",
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
  if (pageId === "academy") renderGlossary();
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
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
setupSingleChoice("decisionCategory", value => {
  state.decision.category = value;
  state.decision.pain = "";
  renderPainOptions(value);
});

function renderPainOptions(category) {
  const container = document.getElementById("decisionPain");
  container.innerHTML = (painOptions[category] || []).map(item => `<button data-value="${item}">${item}</button>`).join("");
  setupSingleChoice("decisionPain", value => state.decision.pain = value);
}

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

function evidenceRows(data) {
  const items = [
    ["ゲームデータ", data.evidence.game],
    ["大会・環境", data.evidence.tournament],
    ["自分の実戦", data.evidence.personal]
  ];
  return items.map(([label, value]) => `
    <div class="evidence-row">
      <span>${label}</span>
      <div class="evidence-bar"><i style="width:${value}%"></i></div>
      <small>${value}%</small>
    </div>
  `).join("");
}

function openPokemon(name) {
  state.selectedPokemon = name;
  localStorage.setItem("pccd_selected_pokemon", name);
  const data = pokemonData[name];
  const presentation = pokemonPresentation[name] || { english: name, type: "", monogram: name.slice(0,1), theme: "theme-garchomp" };

  const visual = document.getElementById("pokemonVisual");
  visual.className = "pokemon-visual " + presentation.theme;
  document.getElementById("pokemonMonogram").textContent = presentation.monogram;
  document.getElementById("pokemonEnglishName").textContent = presentation.english;
  document.getElementById("pokemonTypeLine").textContent = presentation.type;

  document.getElementById("pokemonDetail").classList.remove("hidden");
  document.getElementById("detailName").textContent = name;
  document.getElementById("theoryScore").textContent = data.scores.theory;
  document.getElementById("envScore").textContent = data.scores.environment;
  document.getElementById("overallScore").textContent = data.scores.overall;
  document.getElementById("confidenceScore").textContent = data.scores.confidence;
  document.getElementById("evidenceBox").innerHTML = evidenceRows(data);

  document.getElementById("roleChoices").innerHTML = data.roles.map(role => `<button>${role}</button>`).join("");
  document.getElementById("buildList").innerHTML = data.builds.map(build => `
    <div class="stack-item">
      <strong>${build.name}</strong>
      <p>${build.purpose}</p>
    </div>
  `).join("");

  document.getElementById("knowledgeBlocks").innerHTML = data.knowledge.map(item => `
    <div class="knowledge-card">
      <span class="tag ${item.type}">${item.label}</span>
      <p>${linkGlossaryTerms(item.text)}</p>
    </div>
  `).join("");

  document.getElementById("adoptReasons").innerHTML = data.reasons.map(item => `<button>${item}</button>`).join("");
  document.getElementById("concerns").innerHTML = data.concerns.map(item => `<button>${item}</button>`).join("");

  document.querySelectorAll("#roleChoices button, #adoptReasons button, #concerns button").forEach(button => {
    button.addEventListener("click", () => button.classList.toggle("selected"));
  });
  bindGlossaryLinks();
}

function linkGlossaryTerms(text) {
  let output = text;
  Object.keys(glossaryData).forEach(term => {
    output = output.replaceAll(term, `<button class="term-button" data-term="${term}">${term} ⓘ</button>`);
  });
  return output;
}

function bindGlossaryLinks() {
  document.querySelectorAll("[data-term]").forEach(button => {
    button.addEventListener("click", () => openGlossary(button.dataset.term));
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
  const { problem, target, category, pain } = state.decision;
  if (!problem || !target || !category || !pain) {
    showToast("4項目をすべて選択してください");
    return;
  }

  const summary = `${target}に対して「${pain}」が課題。原因分類は${category}です。構築変更だけでなく、技・持ち物・選出・プレイングの順でも改善可能性を確認します。`;
  document.getElementById("adviceSummary").textContent = summary;

  const recommendations = [
    { title: "選出変更", text: `${target}を想定した初手と裏選出を2パターン用意する。`, score: "優先度 高", type: "analysis" },
    { title: "技変更", text: `現在の6匹を維持したまま、${pain}への回答となる技を1枠検討する。`, score: "優先度 中", type: "analysis" },
    { title: "ポケモン変更", text: `失う役割を確認した上で、対象への耐性と現在の勝ち筋を両立する候補を比較する。`, score: "優先度 中", type: "hypothesis" },
    { title: "研究テーマ化", text: `同じ条件で最低10戦を記録し、再現性がある問題か確認する。`, score: "推奨", type: "fact" }
  ];

  document.getElementById("adviceList").innerHTML = recommendations.map(item => `
    <div class="stack-item">
      <span class="tag ${item.type}">${item.type === "fact" ? "事実" : item.type === "analysis" ? "考察" : "仮説"}</span>
      <strong>${item.title}</strong>
      <p>${linkGlossaryTerms(item.text)}</p>
      <div class="meta">${item.score}</div>
    </div>
  `).join("");

  document.getElementById("adviceEvidence").innerHTML = `
    <div class="evidence-row"><span>一般理論</span><div class="evidence-bar"><i style="width:70%"></i></div><small>70%</small></div>
    <div class="evidence-row"><span>自分の実戦</span><div class="evidence-bar"><i style="width:15%"></i></div><small>15%</small></div>
    <div class="evidence-row"><span>総合信頼度</span><div class="evidence-bar"><i style="width:35%"></i></div><small>35%</small></div>
  `;

  document.getElementById("advicePanel").classList.remove("hidden");
  document.getElementById("advicePanel").scrollIntoView({ behavior: "smooth" });
  bindGlossaryLinks();
});

document.getElementById("saveAsResearchBtn").addEventListener("click", () => {
  const { problem, target, category, pain } = state.decision;
  const research = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  research.unshift({
    id: Date.now(),
    title: `${target}対策：${pain}の解決`,
    status: "未検証",
    progress: 0,
    note: `${problem} / ${category}`
  });
  localStorage.setItem("pccd_research", JSON.stringify(research));
  showToast("研究テーマに保存しました");
  updateMetrics();
  renderNextResearch();
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
  renderNextResearch();
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

function renderNextResearch() {
  const logs = JSON.parse(localStorage.getItem("pccd_battle_logs") || "[]");
  const research = JSON.parse(localStorage.getItem("pccd_research") || "[]");
  const card = document.getElementById("nextResearchCard");

  if (research.length) {
    card.innerHTML = `<strong>${research[0].title}</strong><p>保存した未検証テーマを10戦分記録して、再現性を確認してください。</p>`;
    return;
  }

  if (logs.length >= 3) {
    const counts = logs.reduce((acc, log) => {
      acc[log.cause] = (acc[log.cause] || 0) + 1;
      return acc;
    }, {});
    const top = Object.entries(counts).sort((a,b) => b[1]-a[1])[0];
    card.innerHTML = `<strong>${top[0]}の改善</strong><p>直近ログで最も多い原因です。次の5戦で同じ負け方が続くか確認してください。</p>`;
    return;
  }

  card.innerHTML = `<strong>まず3戦記録する</strong><p>勝敗・相手・主因の3項目だけで十分です。蓄積後に共通点を提案します。</p>`;
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
  renderNextResearch();
  showToast("保存データを初期化しました");
});

let activeGlossaryLevel = "all";

function renderGlossary(filter = "") {
  const list = document.getElementById("glossaryList");
  const query = filter.trim().toLowerCase();
  list.innerHTML = Object.entries(glossaryData)
    .filter(([term, data]) => {
      const matchesText = `${term} ${data.short} ${data.related.join(" ")}`.toLowerCase().includes(query);
      const matchesLevel = activeGlossaryLevel === "all" || glossaryLevels[term] === activeGlossaryLevel;
      return matchesText && matchesLevel;
    })
    .map(([term, data]) => `
      <button class="stack-item" data-glossary="${term}">
        <strong>${term}</strong>
        <p>${data.short}</p>
        <div class="meta">${({basic:"基礎",battle:"対戦",build:"構築",research:"研究"})[glossaryLevels[term]] || "関連用語"}</div>
      </button>
    `).join("");

  document.querySelectorAll("[data-glossary]").forEach(button => {
    button.addEventListener("click", () => openGlossary(button.dataset.glossary));
  });
}

function openGlossary(term) {
  const data = glossaryData[term];
  if (!data) return;
  document.getElementById("glossaryTerm").textContent = term;
  document.getElementById("glossaryShort").textContent = data.short;
  document.getElementById("glossaryDetail").textContent = data.detail;
  document.getElementById("glossaryExample").textContent = "例：" + data.example;
  document.getElementById("glossaryRelated").innerHTML = data.related
    .map(item => `<button data-related="${item}">${item}</button>`).join("");
  document.getElementById("glossaryModal").classList.remove("hidden");

  document.querySelectorAll("[data-related]").forEach(button => {
    button.addEventListener("click", () => {
      if (glossaryData[button.dataset.related]) openGlossary(button.dataset.related);
      else showToast("関連語は今後追加予定です");
    });
  });
}

document.getElementById("closeGlossaryModal").addEventListener("click", () => {
  document.getElementById("glossaryModal").classList.add("hidden");
});

document.getElementById("glossarySearch").addEventListener("input", event => {
  renderGlossary(event.target.value);
});

document.querySelectorAll("#academyLevels button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#academyLevels button").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    activeGlossaryLevel = button.dataset.level;
    renderGlossary(document.getElementById("glossarySearch").value);
  });
});

renderPokemonList();
renderGlossary();
updateMetrics();
renderNextResearch();
