import Head from "next/head";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { TOKEN, DATABASE_ID } from "../config";

const SKILLS = [
  ["설비 제어 백엔드", ["C++ / MFC", "C# / .NET", "Java", "Visual Basic"], "실시간 제어 로직, 큐 기반 이벤트 처리, 멀티스레드/타이머 스케줄링"],
  ["통신 · 프로토콜", ["TCP/IP", "SECS/GEM", "OPC UA", "MQTT", "LLRP", "Serial / RS-232"], "설비 - 시스템 실시간 통신. 커스텀 헤더/체크섬 설계 포함"],
  ["데이터", ["Oracle / PL-SQL", "MSSQL", "PostgreSQL"], "작업 이력 적재, 트랜잭션 제어, 대량 insert 튜닝"],
  ["프론트엔드", ["React", "Next.js", "TypeScript", "SVG / Canvas"], "설비 상태·작업 흐름 모니터링 화면"],
  ["설비 도메인", ["Conveyor", "Stacker Crane", "LGV / AGV", "AMR", "Sorter", "BCR / RFID"], "직접 제어 로직을 작성해 본 설비 유형"],
];
const EXAMPLE_PROJECTS = [
  { category: "Logistics · WCS", title: "물류 분류 자동화 시스템", desc: "휠소터 실시간 제어 · 목적지 산출 · 재순환 로직. 설비 연동 프로토콜 설계부터 운영까지.", tags: ["C#", "Oracle", "TCP/IP"] },
  { category: "Equipment · ECS", title: "설비 통합 제어", desc: "CV · SC · LGV · AMR · BCR 연동 제어. 큐 기반 이벤트 처리와 멀티스레드 스케줄링.", tags: ["C++", "MFC", "OPC"] },
  { category: "Monitoring", title: "실시간 모니터링 대시보드", desc: "설비 상태 · 작업 흐름 시각화. WebSocket 실시간 갱신과 이력 조회 화면.", tags: ["React", "Next.js", "WebSocket"] },
  { category: "+ More", title: "더 많은 프로젝트", desc: "Notion 데이터베이스에서 자동으로 불러옵니다.", tags: ["Notion API"] },
];

export default function Home({ projects }) {
  const { resolvedTheme, setTheme } = useTheme();
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const NS = "http://www.w3.org/2000/svg";
    const q = (s) => root.querySelector(s);
    const set = (el, a) => { for (const k in a) el.setAttribute(k, a[k]); return el; };
    const cleanups = [];
    // 재실행(StrictMode/remount) 시 중복 방지 — 컨테이너 초기화
    ["#pf-chutes", "#pf-carriers", "#pf-diverts", "#pf-inductions", "#pf-tl2rows", "#pf-tl2years"].forEach((s) => { const el = q(s); if (el) el.innerHTML = ""; });
    const _gr = q("#pf-tl2grid"); if (_gr) _gr.querySelectorAll(".gl").forEach((n) => n.remove());

    /* ── 소터 애니 ── */
    const LOOP = "M 150 40 L 690 40 A 40 40 0 0 1 690 120 L 150 120 A 40 40 0 0 1 150 40 Z";
    const CHUTES = [[210,"실행","n"],[270,"습관","n"],[330,"꼼꼼","n"],[390,"해결","n"],[450,"소통","n"],[510,"고객","n"],[570,"신뢰","n"],[630,"미룸","reject"],[690,"성장","recycle"]];
    const g = q("#pf-chutes"), boxByX = {};
    if (g) {
      for (const [x, label, kind] of CHUTES) {
        const cls = "chute-" + (kind === "reject" ? "reject" : kind === "recycle" ? "recycle" : "n");
        g.append(set(document.createElementNS(NS, "line"), { class: cls, x1: x, y1: 128, x2: x, y2: 164, "stroke-width": 5, "stroke-linecap": "round" }));
        const box = set(document.createElementNS(NS, "rect"), { class: cls + " chute-box", x: x - 13, y: 164, width: 26, height: 16, rx: 2, fill: "none", "stroke-width": 1.5 });
        g.append(box); boxByX[x] = box;
        const t = document.createElementNS(NS, "text"); set(t, { class: cls, x: x, y: 194, "text-anchor": "middle", "font-size": 10 }); t.textContent = label; g.append(t);
      }
    }
    const cg = q("#pf-carriers"), loopEl = q("#pf-loop");
    let raf = 0;
    if (cg && loopEl) {
      const LOOPLEN = loopEl.getTotalLength();
      const CARRIERS = [[0,1],[9,0],[18,1],[27,1],[36,0],[45,1],[54,0],[63,1],[72,1],[81,0],[90,1]];
      const carriers = CARRIERS.map(([off, loaded]) => {
        const r = set(document.createElementNS(NS, "rect"), { width: 16, height: 10, x: -8, y: -5, rx: 1.5, "stroke-width": 1.5 });
        r.setAttribute("class", "carrier " + (loaded ? "loaded" : "empty")); cg.append(r);
        return { el: r, off };
      });
      let last = performance.now();
      const tick = (now) => {
        const dt = Math.min((now - last) / 1000, 0.05); last = now;
        for (const c of carriers) {
          c.off = (c.off - dt * (100 / 15) + 100) % 100;   // 시계 반대방향
          const p = loopEl.getPointAtLength((c.off / 100) * LOOPLEN);
          c.el.setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }
    const dg = q("#pf-diverts"), ig = q("#pf-inductions");
    const NORMALX = CHUTES.filter((c) => c[2] === "n").map((c) => c[0]);
    const flash = (box, color) => { if (!box) return; box.style.stroke = color; box.style.fill = "color-mix(in srgb," + color + " 22%,transparent)"; setTimeout(() => { box.style.fill = "none"; box.style.stroke = ""; }, 260); };
    const divert = () => {
      if (!dg) return;
      // ★리젝(미룸)으로는 절대 분기 안 함 — 강점 또는 성장(재순환)만
      const roll = Math.random(); let x, color, cls;
      if (roll < 0.15) { x = 690; color = "var(--safety)"; cls = "rec"; }
      else { x = NORMALX[(Math.random() * NORMALX.length) | 0]; color = "var(--ink)"; cls = ""; }
      const pk = set(document.createElementNS(NS, "rect"), { width: 12, height: 8, x: x - 6, y: 113, rx: 1.5 });
      pk.setAttribute("class", "divert-pk " + cls); dg.append(pk);
      requestAnimationFrame(() => requestAnimationFrame(() => { pk.style.transform = "translateY(54px)"; pk.style.opacity = "0"; }));
      setTimeout(() => flash(boxByX[x], color), 380);
      setTimeout(() => pk.remove(), 820);
      if (cls === "rec") {
        const back = set(document.createElementNS(NS, "rect"), { width: 10, height: 7, x: 684, y: 34, rx: 1.5 });
        back.setAttribute("class", "ind-dot"); dg.append(back);
        requestAnimationFrame(() => requestAnimationFrame(() => { back.style.transform = "translateX(-540px)"; }));
        setTimeout(() => back.remove(), 1250);
      }
    };
    const inject = () => {
      if (!ig) return;
      const d = set(document.createElementNS(NS, "circle"), { cx: 8, cy: 120, r: 4 }); d.setAttribute("class", "ind-dot"); ig.append(d);
      requestAnimationFrame(() => requestAnimationFrame(() => { d.style.transform = "translateX(142px)"; d.style.opacity = "0"; }));
      setTimeout(() => d.remove(), 1250);
    };
    const iv1 = setInterval(divert, 1300), iv2 = setInterval(inject, 1500);
    cleanups.push(() => { cancelAnimationFrame(raf); clearInterval(iv1); clearInterval(iv2); });

    /* ── 타임라인 : 실제 노션 프로젝트로 구성 (없으면 예시) ── */
    const EX_TL = [
      ["WCS 휠소터 실시간 제어", "C# · Oracle · 진행중", "2021-07-01", null],
      ["ECS 설비 통합 제어", "C++ · MFC", "2019-01-01", "2022-02-28"],
      ["물류센터 구축 · SAT", "Integration", "2019-05-01", "2022-07-31"],
      ["소터 증설 · 개조 공사", "C#", "2023-04-03", "2023-11-30"],
      ["실시간 모니터링 대시보드", "React · Next.js", "2024-09-18", "2025-08-29"],
      ["신규 시스템 개발 · 진행중", "Design", "2026-01-01", null],
    ];
    const TODAY = Date.parse("2026-08-06");
    const TL = (projects && projects.length)
      ? projects.filter((p) => p.start).map((p) => [
          ((p.title || "").replace(/^Project\s*\d+\s*[-·]?\s*/i, "").trim() || p.title || "프로젝트"),
          (p.tags || []).slice(0, 4).join(" · "),
          p.start, p.end,
        ]).sort((a, b) => Date.parse(a[2]) - Date.parse(b[2]))
      : EX_TL;
    const _starts = TL.map((r) => Date.parse(r[2])).filter((n) => !isNaN(n));
    const minY = _starts.length ? new Date(Math.min.apply(null, _starts)).getFullYear() : 2017;
    const maxY = 2026;
    const MIN = Date.parse(minY + "-01-01"), MAX = Date.parse((maxY + 1) + "-01-01"), span = MAX - MIN;
    const pct = (t) => (t - MIN) / span * 100;
    let ylab = "", grid = "";
    for (let y = minY; y <= maxY; y++) { const L = pct(Date.parse(y + "-01-01")); grid += '<div class="gl" style="left:' + L + '%"></div>'; if ((y - minY) % 2 === 0 || y === maxY) ylab += '<span style="left:' + L + '%">' + (y === maxY ? "'" + String(maxY).slice(2) : y) + "</span>"; }
    const yearsEl = q("#pf-tl2years"), gridEl = q("#pf-tl2grid"), nowEl = q("#pf-tl2now"), rowsEl = q("#pf-tl2rows");
    if (yearsEl) yearsEl.innerHTML = ylab;
    if (gridEl) gridEl.insertAdjacentHTML("afterbegin", grid);
    if (nowEl) nowEl.style.left = pct(TODAY) + "%";
    if (rowsEl) rowsEl.innerHTML = TL.map(([label, tech, s, e]) => {
      const a = Date.parse(s), b = e ? Date.parse(e) : TODAY;
      const left = pct(a), width = Math.max(1.2, pct(b) - pct(a));
      const bg = !e ? "var(--safety)" : "var(--ink)";
      return '<div class="tl-row"><div class="tl-lbl"><h4>' + label + '</h4><p>' + tech + '</p></div><div class="tl-track"><div class="bar" style="left:' + left + '%;width:' + width + '%;background:' + bg + '"></div></div></div>';
    }).join("");
    const tl2El = q("#pf-tl2");
    if (tl2El) {
      const tio = new IntersectionObserver((es) => es.forEach((ev) => { if (ev.isIntersecting) { root.querySelectorAll(".tl-row").forEach((r, i) => setTimeout(() => r.classList.add("in"), Math.min(i, 8) * 70)); tio.unobserve(ev.target); } }), { threshold: 0.15 });
      tio.observe(tl2El); cleanups.push(() => tio.disconnect());
    }

    /* ── reveal ── */
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    root.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = Math.min(i, 6) * 40 + "ms"; io.observe(el); });
    cleanups.push(() => io.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, [projects]);

  const list = projects && projects.length ? projects : EXAMPLE_PROJECTS;
  const usingNotion = projects && projects.length > 0;
  const LOOP = "M 150 40 L 690 40 A 40 40 0 0 1 690 120 L 150 120 A 40 40 0 0 1 150 40 Z";

  return (
    <div className="pf" ref={rootRef}>
      <Head>
        <title>김성경 · 물류 자동화 시스템 엔지니어</title>
        <meta name="description" content="WCS · ECS 물류 자동화 시스템 설계 · 실시간 설비 제어 — 김성경 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="inner">
          <span className="brand">SungKyung Kim</span>
          <div className="links tag">
            <a href="#about">About</a><a href="#layers">Layers</a><a href="#stack">Stack</a>
            <a href="#timeline">Timeline</a><a href="#contact">Contact</a>
            <button className="tgl" aria-label="테마 전환" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>◐</button>
          </div>
        </div>
      </nav>

      <main className="wrap">
        <section className="hero">
          <p className="tag reveal">물류 자동화 시스템 엔지니어 · 2016 – 현재</p>
          <h1 className="disp hero-t reveal">라인은<br />멈추지 않는다</h1>
          <p className="lede reveal">컨베이어 한 대가 멈추면 라인 전체가 멈춥니다. 10년간 그 라인을 멈추지 않게 만드는 일을 했습니다. WCS · ECS 물류 자동화 시스템을 설계하고 설비를 실시간으로 제어합니다.</p>

          <figure className="reveal">
            <svg viewBox="0 0 760 210" role="img" aria-label="소터 루프. 들어온 화물이 나의 강점(실행·습관·꼼꼼·해결·소통·고객·신뢰)으로 분류되고, 미룸은 리젝, 성장은 재순환한다.">
              <line className="induction" x1="8" y1="120" x2="150" y2="120" strokeWidth="6" strokeLinecap="round" />
              <text className="induction-label" x="8" y="142" fontSize="11" letterSpacing="1.5">INDUCTION</text>
              <g id="pf-inductions" />
              <path id="pf-loop" className="loop-track" d={LOOP} fill="none" strokeWidth="14" strokeLinejoin="round" opacity=".45" />
              <path className="loop-dash" d={LOOP} fill="none" strokeWidth="1" strokeDasharray="3 6" opacity=".55" />
              <g id="pf-chutes" />
              <g id="pf-diverts" />
              <g id="pf-carriers" />
            </svg>
            <figcaption className="tag" style={{ marginTop: 12 }}>일은 나의 강점으로 분류된다 · 미룸=리젝 · 성장=재순환</figcaption>
          </figure>

          <dl className="stats reveal">
            <div><dt className="tag">현장 프로젝트</dt><dd>19건</dd></div>
            <div><dt className="tag">고객 사이트</dt><dd>10곳</dd></div>
            <div><dt className="tag">해외 현장</dt><dd>헝가리 · 태국</dd></div>
          </dl>
        </section>

        <section className="blk" id="about">
          <div className="seclabel"><span className="tag">WHO</span><h2>일하는 방식</h2><span className="tag meta">Habit · Execution · Detail · User</span></div>
          <div className="layers">
            <div className="layer reveal"><p className="tag">HABIT</p><h3>작은 습관에서 시작된 큰 변화</h3><p>매일 메모하는 습관으로 업무를 구조화하고, 반복되는 작업 속에서도 효율을 찾아냅니다.</p></div>
            <div className="layer reveal"><p className="tag">EXECUTION</p><h3>&quot;나중에&quot;는 없다, 지금 당장</h3><p>주어진 일은 미루지 않고 바로 실행합니다. 빠른 실행력은 곧 신뢰와 성과로 이어집니다.</p></div>
            <div className="layer reveal"><p className="tag">DETAIL</p><h3>빈틈을 그냥 두지 않습니다</h3><p>기능과 기능 사이의 연결을 생각하고, 팀워크의 균형을 세심하게 맞추며 한 걸음 더 나아갑니다.</p></div>
            <div className="layer reveal"><p className="tag">USER-FIRST</p><h3>&apos;고객의 니즈&apos;에 집착합니다</h3><p>개발은 결국 사용자를 위한 것. 고객이 진짜 원하는 것이 무엇인지 끊임없이 고민합니다.</p></div>
          </div>
          <p className="pull reveal">저는 기능을 만드는 사람이 아니라, <b>문제를 해결하고 가치를 전달하는 개발자</b>입니다.</p>
        </section>

        <section className="blk" id="layers">
          <div className="seclabel"><span className="tag">WHAT</span><h2>다루는 층위</h2><span className="tag meta">WMS → WCS → ECS → 설비</span></div>
          <div className="layers">
            <div className="layer reveal"><p className="tag">WCS / SMS</p><h3>창고·소터 제어</h3><p>작업 지시 해석, 분배 로직, 재고·경로 결정. 처리량과 직결되는 레이어라 알고리즘 선택이 곧 성능이다.</p></div>
            <div className="layer reveal"><p className="tag">ECS</p><h3>설비 제어</h3><p>컨베이어·스태커크레인·LGV·소터에 실제 명령을 내리는 층. 밀리초 단위 타이밍과 예외 처리가 전부다.</p></div>
            <div className="layer reveal"><p className="tag">I/F</p><h3>상·하위 인터페이스</h3><p>상위 WMS와 하위 설비 사이 프로토콜 설계. 재전송·중복 방지·정합성 대사까지 포함한다.</p></div>
            <div className="layer reveal"><p className="tag">OPS</p><h3>구축과 운영</h3><p>FAT·SAT 통합 테스트, 가동 대응, 장애 원인 규명. 새벽에 전화받아 본 사람만 아는 설계가 있다.</p></div>
          </div>
        </section>

        <section className="blk" id="stack">
          <div className="seclabel"><span className="tag">STACK</span><h2>기술</h2></div>
          <div>
            {SKILLS.map(([label, items, note]) => (
              <div className="skill reveal" key={label}>
                <h3 className="tag" style={{ paddingTop: 4 }}>{label}</h3>
                <div><ul>{items.map((it) => <li key={it}>{it}</li>)}</ul><p className="note">{note}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="blk" id="timeline">
          <div className="seclabel"><span className="tag">TIMELINE</span><h2>가동 이력</h2><span className="tag meta">장기 계약 · 단기 공사 병행</span></div>
          <p style={{ maxWidth: "38rem", fontSize: ".9rem", color: "var(--ink60)", marginBottom: 8 }}>굵직한 계약은 길게 끌고 가고, 그 위로 단기 공사·신규 개발이 겹칩니다. 운영 대응과 신규 개발을 동시에 굴려 온 10년입니다.</p>
          <p className="tag" style={{ marginBottom: 28 }}>{usingNotion ? "Notion 연동" : "예시 · 실제 프로젝트는 Notion에서 자동 표시"}</p>
          <div className="tl2" id="pf-tl2">
            <div className="tl2-years tag" id="pf-tl2years" />
            <div className="tl2-grid" id="pf-tl2grid"><div className="tl2-now" id="pf-tl2now"><b>NOW</b></div></div>
            <div className="tl2-rows" id="pf-tl2rows" />
          </div>
          <div className="tl-legend tag">
            <span><i style={{ background: "var(--safety)" }} />진행 중</span>
            <span><i style={{ background: "var(--ink)" }} />완료</span>
          </div>
        </section>

        <section className="blk" id="projects">
          <div className="seclabel"><span className="tag">WORK</span><h2>프로젝트</h2>
            <span className="tag meta">{usingNotion ? "Notion 연동 · " + list.length + "건" : "예시 · Notion 연동"}</span></div>
          {!usingNotion && <p className="pnote reveal">※ 아래는 레이아웃 예시입니다. 배포 환경에서는 Notion 데이터로 자동 표시됩니다.</p>}
          <div className="pgrid">
            {list.map((p, i) => {
              const inner = (
                <>
                  {p.image && <img className="pcimg" src={p.image} alt={p.title} loading="lazy" />}
                  <span className="tag pco">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="pt">{(p.tags || []).map((t) => <span key={t}>{t}</span>)}</div>
                </>
              );
              return p.github
                ? <a className="pc reveal" key={i} href={p.github} target="_blank" rel="noopener noreferrer">{inner}</a>
                : <div className="pc reveal" key={i}>{inner}</div>;
            })}
          </div>
        </section>

        <section className="blk" id="education">
          <div className="seclabel"><span className="tag">EDU</span><h2>학력 · 교육</h2></div>
          <ol className="edu">
            <li className="reveal"><span className="ew">2016.10–2017.04</span><div><h3>[NCS] 자바 웹 개발자 양성과정</h3><p>KH정보교육원</p></div></li>
            <li className="reveal"><span className="ew">2016.03–2017.02</span><div><h3>서일대학교 컴퓨터소프트웨어학과 (전공심화) 졸업<span className="g">GPA 4.44/4.5</span></h3><p>학사</p></div></li>
            <li className="reveal"><span className="ew">2011.03–2016.02</span><div><h3>서일대학교 인터넷정보과 졸업<span className="g">GPA 4.06/4.5</span></h3><p>전문학사</p></div></li>
            <li className="reveal"><span className="ew">2006.03–2009.02</span><div><h3>덕소고등학교 (인문계) 졸업</h3></div></li>
          </ol>
        </section>

        <section className="contact" id="contact">
          <p className="tag reveal">CONTACT</p>
          <h2 className="reveal">라인을 함께<br />멈추지 않게</h2>
          <p className="reveal">물류 자동화 · 실시간 제어 · 시스템 설계 — 언제든 편하게 연락 주세요.</p>
          <div className="clinks reveal">
            <a className="btn fill" href="mailto:sungkyung521@gmail.com">✉ sungkyung521@gmail.com</a>
            <a className="btn" href="https://github.com/sungkyung521" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="inner tag">
          <span>© 2026 SungKyung Kim · Application Developer</span>
          <a style={{ marginLeft: "auto" }} href="https://github.com/sungkyung521" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  let projects = [];
  try {
    if (TOKEN && DATABASE_ID) {
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
        method: "POST",
        headers: { Accept: "application/json", "Notion-Version": "2022-02-22", "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
        body: JSON.stringify({ sorts: [{ property: "이름", direction: "ascending" }], page_size: 100 }),
      });
      const data = await res.json();
      if (res.ok && Array.isArray(data.results)) {
        projects = data.results.map((r) => {
          const pr = r.properties || {};
          const tags = (pr.Tags?.multi_select || []).map((t) => t.name);
          const start = pr.WorkPeriod?.date?.start;
          const end = pr.WorkPeriod?.date?.end;
          const period = start ? (start.slice(0, 7) + (end ? " ~ " + end.slice(0, 7) : " ~")) : (tags[0] || "PROJECT");
          return {
            title: (pr.이름?.title || []).map((t) => t.plain_text).join("").trim() || "제목 없음",
            desc: (pr.Remark?.rich_text || []).map((t) => t.plain_text).join(""),
            tags,
            github: pr.Github?.url || null,
            category: period,
            image: r.cover?.file?.url || r.cover?.external?.url || null,
            start: start || null,
            end: end || null,
          };
        });
      } else { console.error("Notion API 응답 오류:", data); }
    }
  } catch (e) { console.error("Notion fetch 실패:", e); }
  return { props: { projects }, revalidate: 300 };
}
