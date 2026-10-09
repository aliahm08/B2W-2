(function () {
  "use strict";
  const main = document.getElementById("main");
  const routes = [
    "/jasonai",
    "/jasonai/capabilities",
    "/jasonai/how-it-works",
    "/jasonai/scenarios",
    "/jasonai/demo",
  ];
  const route = window.location.pathname.replace(/\/$/, "") || "/jasonai";
  const current = routes.includes(route) ? route : "/jasonai";
  const tone = {
    "/jasonai": "light",
    "/jasonai/capabilities": "gray",
    "/jasonai/how-it-works": "light",
    "/jasonai/scenarios": "orange",
    "/jasonai/demo": "light",
  }[current];
  document.body.className = "theme-" + tone;
  document.body.classList.add(
    current === "/jasonai" ? "route-home" : "route-subpage",
  );
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute(
      "content",
      tone === "dark"
        ? "#11150f"
        : tone === "gray"
          ? "#dedfdf"
          : tone === "orange"
            ? "#e7773d"
            : "#f2f1ed",
    );
  document.querySelectorAll(".desktop-nav a").forEach((a) => {
    if (a.pathname.replace(/\/$/, "") === current)
      a.setAttribute("aria-current", "page");
  });
  function page(label, title, content) {
    document.title =
      current === "/jasonai" ? "JasonAI by B2W" : title + " · JasonAI by B2W";
    document.getElementById("current-page").textContent =
      current === "/jasonai" ? "" : label;
    main.innerHTML =
      '<div class="page">' +
      (current === "/jasonai"
        ? ""
        : '<h1 class="visually-hidden">' + label + "</h1>") +
      content +
      "</div>";
  }
  const scenarios = [
    [
      "A supplier changes delivery",
      "A supplier pushes delivery to Thursday in a selected WhatsApp thread. JasonAI recognizes the changed date and associates it with the correct job.",
      "The owner sees what changed, where it came from, and which commitment may need updating.",
    ],
    [
      "A crew reports its hours",
      "A lead sends a voice note listing workers and the days they worked. JasonAI prepares labor entries for the appropriate project.",
      "The owner reviews the time and amount before anything is treated as due or paid.",
    ],
    [
      "A client asks for an update",
      "A client asks when the work will be complete. JasonAI checks the authorized schedule and recent project messages.",
      "A source-backed draft is prepared for the owner to approve.",
    ],
    [
      "An invoice arrives in a chat",
      "A subcontractor sends an invoice. JasonAI connects the document with the job and prepares an entry for review.",
      "The owner can reconcile it without losing the original attachment.",
    ],
    [
      "A task is reported complete",
      "A field worker sends photos and confirms the task is done. JasonAI prepares a project activity update.",
      "The owner can approve, correct, or reject the proposed update.",
    ],
    [
      "Your daily brief",
      "JasonAI assembles upcoming decisions, payments, unresolved questions, and project changes from authorized sources.",
      "The owner gets a useful action list rather than a chronological transcript.",
    ],
  ];
  const demoLink =
    '<div class="link-stack"><a class="section-link" href="/jasonai/demo/">Try the demo <span>↗</span></a></div>';
  const processAccordion = (title, lines, open = false) =>
    '<section class="accordion" data-open="' +
    String(open) +
    '"><button class="accordion-trigger" aria-expanded="' +
    String(open) +
    '" type="button"><span class="glyph" aria-hidden="true"></span><span>' +
    title +
    '</span><span class="sign">' +
    (open ? "×" : "+") +
    '</span></button><div class="accordion-body"' +
    (open ? "" : ' inert aria-hidden="true"') +
    '><div class="accordion-body-inner">' +
    lines.map((line) => "<p>" + line + "</p>").join("") +
    "</div></div></section>";
  const accordion = (key, icon, title, lead, detail, open) =>
    '<section class="accordion" data-open="' +
    String(open) +
    '"><button class="accordion-trigger" aria-expanded="' +
    String(open) +
    '" type="button"><span class="glyph">' +
    icon +
    "</span><span>" +
    title +
    '</span><span class="sign">' +
    (open ? "×" : "+") +
    '</span></button><div class="accordion-body"' +
    (open ? "" : ' inert aria-hidden="true"') +
    '><div class="accordion-body-inner"><p><strong>' +
    lead +
    "</strong></p><p>" +
    detail +
    "</p></div></div></section>";
  if (current === "/jasonai") {
    page(
      "Home",
      "Home",
      `<section class="page-home"><div class="home-grid">
 <div class="mission-unit"><h1>JasonAI remembers the details from the project conversations you choose to share.</h1><div class="mission-interlude"><svg viewBox="0 0 180 42" aria-hidden="true"><path class="motion-path" d="M4 22H55L75 7L101 35L126 22H176"/><circle cx="4" cy="22" r="3"/><circle cx="176" cy="22" r="3"/></svg><a class="mission-link" href="/jasonai/capabilities/">Capabilities <span aria-hidden="true">↗</span></a></div></div>
 <div class="mission-unit"><p><strong>An executive secretary for the owner,</strong> working in existing conversations without replacing your project manager.</p><div class="mission-interlude"><svg viewBox="0 0 180 42" aria-hidden="true"><path class="motion-path" d="M8 21H172"/><circle cx="48" cy="21" r="9"/><circle cx="90" cy="21" r="9"/><circle cx="132" cy="21" r="9"/></svg><a class="mission-link" href="/jasonai/how-it-works/">How It Works <span aria-hidden="true">↗</span></a></div></div>
 <div class="mission-unit"><p>See how messages, voice notes, and project files can become source-backed updates for you to review.</p><div class="mission-interlude"><svg viewBox="0 0 180 42" aria-hidden="true"><path class="motion-path" d="M4 32H40V10H82V32H122V10H176"/></svg><a class="mission-link" href="/jasonai/scenarios/">Scenarios <span aria-hidden="true">↗</span></a></div></div>
 </div><div class="home-bottom-actions"><span>© 2026 B2W LLC</span><a class="home-demo" href="/jasonai/demo/">Try the demo <span aria-hidden="true">↗</span></a></div></section>`,
    );
  } else if (current === "/jasonai/capabilities") {
    page(
      "Capabilities",
      "Capabilities",
      '<section class="subpage">' +
        accordion(
          "agent",
          "⊕",
          "Agent",
          "An executive secretary in your existing conversations.",
          "Ask JasonAI questions, share voice notes, request summaries, prepare responses, and propose updates. The agent reads only approved context and seeks owner approval before consequential actions.",
          true,
        ) +
        accordion(
          "platform",
          "▤",
          "Platform",
          "A clear operating view across your business.",
          "Business memory organizes project information into labor, payments, deliveries, documents, and commitments. A minimal dashboard shows what changed, who needs a payment, and what requires approval.",
          false,
        ) +
        demoLink +
        "</section>",
    );
  } else if (current === "/jasonai/how-it-works") {
    page(
      "How It Works",
      "How It Works",
      '<section class="subpage process-list">' +
        processAccordion(
          "Share selected context",
          [
            "You choose the WhatsApp chats, messages, files, and tools that JasonAI may access.",
            "JasonAI checks what belongs to each project without expanding its permission.",
            "Your records remain limited to approved sources.",
          ],
          true,
        ) +
        processAccordion("Build business memory", [
          "Messages, people, labor, payments, deliveries, and documents become connected context.",
          "JasonAI records useful details and references the source of each fact.",
          "You can ask about the business without searching every conversation.",
        ]) +
        processAccordion("Ask naturally", [
          "You text or send a voice note in language you already use.",
          "JasonAI summarizes, answers, and identifies what remains uncertain.",
          "You receive a useful response with relevant context.",
        ]) +
        processAccordion("Review proposed actions", [
          "You ask JasonAI to prepare a reply or update an existing tracker.",
          "It presents the proposed change with its source for approval.",
          "You keep control of external messages and consequential actions.",
        ]) +
        processAccordion("Start with what matters", [
          "New conversations bring new commitments, dates, and outstanding questions.",
          "JasonAI prepares a brief organized by urgency and project.",
          "You know what requires attention before beginning the day.",
        ]) +
        demoLink +
        "</section>",
    );
  } else if (current === "/jasonai/scenarios") {
    page(
      "Scenarios",
      "Scenarios",
      '<section class="subpage"><div class="scenario-list">' +
        scenarios
          .map(
            (row, i) =>
              '<button class="scenario-choice" type="button" data-scenario="' +
              i +
              '"><span>' +
              String(i + 1).padStart(2, "0") +
              "</span><span>" +
              row[0] +
              "</span></button>",
          )
          .join("") +
        '</div><div class="scenario-detail" hidden></div></section>',
    );
    const list = main.querySelector(".scenario-list"),
      detail = main.querySelector(".scenario-detail");
    function showScenario(i) {
      const row = scenarios[i];
      list.hidden = true;
      detail.hidden = false;
      detail.innerHTML =
        '<button class="scenario-back" type="button">← All scenarios</button><article><h2>' +
        row[0] +
        "</h2><p>" +
        row[1] +
        "</p><p>" +
        row[2] +
        '</p><p>Illustrative workflow. Availability depends on connected tools and permissions.</p><button class="scenario-next" type="button">Next scenario ↗</button></article>';
      detail.querySelector(".scenario-back").addEventListener("click", () => {
        detail.hidden = true;
        list.hidden = false;
      });
      detail
        .querySelector(".scenario-next")
        .addEventListener("click", () =>
          showScenario((i + 1) % scenarios.length),
        );
    }
    list.addEventListener("click", (e) => {
      const choice = e.target.closest("[data-scenario]");
      if (choice) showScenario(Number(choice.dataset.scenario));
    });
  } else {
    page(
      "Demo",
      "Interactive demo",
      '<section class="subpage"><p class="subpage-intro">From one conversation to a decision you can review.</p><div class="flow-box" id="flow"><div><p class="flow-number" id="flow-number">01 / Source</p><p class="flow-copy" id="flow-text"></p></div><div class="flow-controls"><button id="flow-back" type="button">Previous</button><button id="flow-next" type="button">Next →</button></div></div><p style="margin-top:20px;color:var(--muted)">Illustrative only. No project data or systems are connected.</p></section>',
    );
    const frames = [
      [
        "01 / Source",
        "A crew message says framing is complete and three workers stayed late.",
      ],
      [
        "02 / Memory",
        "JasonAI connects the update to the project and labor records.",
      ],
      [
        "03 / Proposal",
        "JasonAI prepares a project update and asks for confirmation of hours.",
      ],
      [
        "04 / Approval",
        "The owner reviews the source and approves or edits the proposed change.",
      ],
    ];
    let n = 0;
    const render = () => {
      document.getElementById("flow-number").textContent = frames[n][0];
      document.getElementById("flow-text").textContent = frames[n][1];
      document.getElementById("flow-back").disabled = n === 0;
      document.getElementById("flow-next").textContent =
        n === 3 ? "Restart ↻" : "Next →";
    };
    document.getElementById("flow-back").addEventListener("click", () => {
      n = Math.max(0, n - 1);
      render();
    });
    document.getElementById("flow-next").addEventListener("click", () => {
      n = (n + 1) % frames.length;
      render();
    });
    render();
  }
  main.addEventListener("click", (e) => {
    const b = e.target.closest(".accordion-trigger");
    if (!b) return;
    const section = b.closest(".accordion"),
      open = section.getAttribute("data-open") !== "true";
    if (open && innerWidth <= 980)
      main.querySelectorAll(".accordion").forEach((other) => {
        if (other === section) return;
        other.setAttribute("data-open", "false");
        const panel = other.querySelector(".accordion-body"),
          trigger = other.querySelector(".accordion-trigger");
        panel.inert = true;
        panel.setAttribute("aria-hidden", "true");
        trigger.setAttribute("aria-expanded", "false");
        trigger.querySelector(".sign").textContent = "+";
      });
    section.setAttribute("data-open", String(open));
    const body = section.querySelector(".accordion-body");
    body.inert = !open;
    body.setAttribute("aria-hidden", String(!open));
    b.setAttribute("aria-expanded", String(open));
    b.querySelector(".sign").textContent = open ? "×" : "+";
  });
  const toggle = document.querySelector(".menu-toggle"),
    menu = document.querySelector("#mobile-menu");
  function setMenu(open, restoreFocus = false) {
    menu.inert = !open;
    menu.setAttribute("aria-hidden", String(!open));
    main.inert = open;
    document.querySelector(".site-footer").inert = open;
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    toggle.querySelector("span").textContent = open ? "Close ×" : "Menu +";
    if (open) menu.querySelector("a")?.focus();
    else if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true"),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open"))
      setMenu(false, true);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) setMenu(false);
  });
  menu
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setMenu(false)));
  menu.inert = true;
  menu.setAttribute("aria-hidden", "true");
})();
