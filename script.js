(() => {
  // Wait for DOM content (safe even without `defer`)
  document.addEventListener("DOMContentLoaded", () => {

    // ----- Put your real data here -----
    // Each entry marks where a title starts: { title, bookNo, pageStart }
     const entries = [
      { title: "ព្រហ្មជាលសូត្រទី១",       bookNo: 9, pageStart: 2 },
      { title: "អដ្ឋកថា ព្រហ្មជាលសូត្រ",       bookNo: 9, pageStart: 95 },
      { title: "សាមញ្ញផលសូត្រទី​២",  bookNo: 9, pageStart: 333 },
      { title: "អដ្ឋកថា សាមញ្ញផលសូត្រ",  bookNo: 9, pageStart: 416 },
      { title: "អម្ពដ្ឋសូត្រទី៣",     bookNo: 9, pageStart: 582 },
      { title: "អដ្ឋកថា អម្ពដ្ឋសូត្រ",     bookNo: 9, pageStart: 621 },
      { title: "សោណទណ្ឌសូត្រទី៤",     bookNo: 9, pageStart: 698 },
      { title: "អដ្ឋកថា សោណទណ្ឌសូត្រ",     bookNo: 9, pageStart: 728 },
      { title: "កូដទន្តសូត្រទី៥",     bookNo: 9, pageStart: 757 },
      { title: "អដ្ឋកថា កូដទន្តសូត្រ",     bookNo: 9, pageStart: 799 },
      { title: "មហាលិសូត្រទី៦",      bookNo: 9, pageStart: 827 },
      { title: "អដ្ឋកថា មហាលិសូត្រ",      bookNo: 9, pageStart: 842 },
      { title: "ជាលិយសូត្រទី៧",   bookNo: 9, pageStart: 855 },
      { title: "អដ្ឋកថា ជាលិយសូត្រ",   bookNo: 9, pageStart: 858 },

      { title: "មហាសីហនាទសូត្រទី៨",   bookNo: 10, pageStart: 2 },
      { title: "អដ្ឋកថា​​​ មហាសីហនាទសូត្រទី៨",   bookNo: 10, pageStart: 26 },
      { title: "បោដ្ឋបាទសូត្រទី​៩",   bookNo: 10, pageStart: 51 },
      { title: "អដ្ឋកថា​​ បោដ្ឋបាទសូត្រទី​៩",   bookNo: 10, pageStart: 90 },
      { title: "សុភសូត្រទី១០",   bookNo: 10, pageStart: 122 },
      { title: "អដ្ឋកថា​ សុភសូត្រទី១០",   bookNo: 10, pageStart: 155 },
      { title: "កេវដ្តសូត្រទី១១",   bookNo: 10, pageStart: 162 },
      { title: "អដ្ឋកថា កេវដ្តសូត្រទី១១",   bookNo: 10, pageStart: 178 },
      { title: "លោហិច្ចសូត្រទី១២",   bookNo: 10, pageStart: 188 },
      { title: "អដ្ឋកថា លោហិច្ចសូត្រទី១២",   bookNo: 10, pageStart: 204 },
      { title: "តេវិជ្ជសូត្រទី១៣",   bookNo: 10, pageStart: 212 },
      { title: "អដ្ឋកថា តេវិជ្ជសូត្រទី១៣",   bookNo: 10, pageStart: 239 },
      { title: "មហាបទានសូត្រទី១",   bookNo: 10, pageStart: 254 },
      { title: "អដ្ឋកថា មហាបទានសូត្រទី១",   bookNo: 10, pageStart: 340 },
      { title: "មហានិទានសូត្រទី២",   bookNo: 10, pageStart: 467 },
      { title: "អដ្ឋកថា មហានិទានសូត្រទី២",   bookNo: 10, pageStart: 495 },
      { title: "មហាបរិនិព្វានសូត្រទី៣",   bookNo: 10, pageStart: 556 },
      { title: "អដ្ឋកថា មហាបរិនិព្វានសូត្រទី៣",   bookNo: 10, pageStart: 704 },

      { title: "មហាសុទស្សនសូត្រទី៤",   bookNo: 11, pageStart: 2 },
      { title: "អដ្ឋកថា​​​ មហាសុទស្សនសូត្រទី៤",   bookNo: 11, pageStart: 44 },
      { title: "ជនវសភសូត្រទី៥",   bookNo: 11, pageStart: 80 },
      { title: "អដ្ឋកថា​​ ជនវសភសូត្រទី៥",   bookNo: 11, pageStart: 113 },
      { title: "មហាគោវិន្ទសូត្រទី៦",   bookNo: 11, pageStart: 130 },
      { title: "អដ្ឋកថា​ មហាគោវិន្ទសូត្រទី៦",   bookNo: 11, pageStart: 179 },
      { title: "មហាសមយសូត្រទី៧",   bookNo: 11, pageStart: 224 },
      { title: "អដ្ឋកថា មហាសមយសូត្រទី៧",   bookNo: 11, pageStart: 240 },
      { title: "សក្កបញ្ហាសូត្រទី៨",   bookNo: 11, pageStart: 285 },
      { title: "អដ្ឋកថា សក្កបញ្ហាសូត្រទី៨",   bookNo: 11, pageStart: 325 },
      { title: "មហាសតិបដ្ឋានសូត្រទី៩",   bookNo: 11, pageStart: 409 },
      { title: "អដ្ឋកថា មហាសតិបដ្ឋានសូត្រទី៩",   bookNo: 11, pageStart: 453 },
      { title: "បាយាសិសូត្រទី១០",   bookNo: 11, pageStart: 585 },
      { title: "អដ្ឋកថា បាយាសិសូត្រទី១០",   bookNo: 11, pageStart: 644 },
      { title: "បាដិកសូត្រទី១",   bookNo: 11, pageStart: 659 },
      { title: "អដ្ឋកថា បាដិកសូត្រទី១",   bookNo: 11, pageStart: 712 },
      { title: "ឧទុម្ពរិកសូត្រទី២",   bookNo: 11, pageStart: 742 },
      { title: "អដ្ឋកថា ឧទុម្ពរិកសូត្រទី២",   bookNo: 11, pageStart: 777 },

    ];

    const normalized = entries
      .map(e => ({ ...e, _title: (e.title || "").trim() }))
      .sort((a, b) => a.bookNo - b.bookNo || a.pageStart - b.pageStart);

    const $ = (sel) => document.querySelector(sel);

    const qEl = $("#q");
    const statusEl = $("#status");
    const sectionTitleEl = $("#sectionTitle");
    const shuffleBtn = $("#shuffleBtn");
    const gridEl = $("#grid");

    // Guard if IDs missing
    if (!qEl || !statusEl || !sectionTitleEl || !shuffleBtn || !gridEl) {
      console.error("Missing required HTML elements. Check IDs: q, status, sectionTitle, shuffleBtn, grid");
      return;
    }

    function isBookPageQuery(q) {
      return /^\s*\d+\s*\/\s*\d+\s*$/.test(q);
    }
    function parseBookPage(q) {
      const [b, p] = q.split("/").map(s => parseInt(s.trim(), 10));
      return { bookNo: b, page: p };
    }
    function escapeHTML(str) {
      return String(str).replace(/[&<>"']/g, (m) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
      }[m]));
    }

    // Fisher–Yates shuffle copy
    function shuffledCopy(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    function randomTitles(n = 10) {
      return shuffledCopy(normalized).slice(0, Math.min(n, normalized.length));
    }

    // Lower-bound lookup
    function lookupByBookPage(bookNo, page) {
      const inBook = normalized.filter(e => e.bookNo === bookNo);
      if (!inBook.length) return null;

      let best = null;
      for (const e of inBook) {
        if (e.pageStart <= page) best = e;
        else break;
      }
      return best ? { ...best, requestedPage: page } : null;
    }

    // Title search
    function searchByTitle(query) {
      const q = query.trim().toLowerCase();
      if (!q) return [];
      return normalized.filter(e => e._title.toLowerCase().includes(q)).slice(0, 50);
    }

    function setStatus(text) { statusEl.textContent = text; }

    function render(items, mode) {
      gridEl.innerHTML = "";

      if (!items || items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.innerHTML = normalized.length === 0
          ? `<b>មិនមានទិន្នន័យទេ។</b><br>សូមបញ្ចូល { title, bookNo, pageStart } ក្នុង script.js`
          : `<b>រកមិនឃើញលទ្ធផល។</b><br>សូមសាកល្បងចំណងជើង ឬ <code>12/234</code>។`;
        gridEl.appendChild(empty);
        return;
      }

      for (const item of items) {
        const title = escapeHTML(item.title);
        const bookNo = item.bookNo;
        const pageStart = item.pageStart;

        let desc = "";
        let tags = [];

        if (mode === "bookPage") {
          desc = `ទំព័រដែលស្នើ <b>${item.requestedPage}</b> ត្រូវបានភ្ជាប់ទៅចំណងជើង “ចាប់ផ្តើម” ដែលនៅក្រោម/ស្មើទំព័រនោះ។`;
          tags = [`ស្នើ: ${bookNo}/${item.requestedPage}`, `ចាប់ផ្តើម: ${bookNo}/${pageStart}`, `Lower-bound`];
        } else if (mode === "random") {
          desc = `ចំណងជើងណែនាំ (ចៃដន្យ) សម្រាប់ចាប់ផ្តើមស្វែងរក។`;
          tags = [`សៀវភៅ ${bookNo}`, `ចាប់ផ្តើម ទំព័រ ${pageStart}`];
        } else {
          desc = `រកឃើញចំណងជើងស្រដៀង។ អ្នកអាចប្រើលេខសៀវភៅ/ទំព័រ ដើម្បីទៅកាន់ផ្នែកនេះ។`;
          tags = [`សៀវភៅ ${bookNo}`, `ចាប់ផ្តើម ទំព័រ ${pageStart}`, `ចំណងជើង`];
        }

        const el = document.createElement("div");
        el.className = "card";
        el.innerHTML = `
          <div class="cardInner">
            <div class="row">
              <p class="title">${title}</p>
              <span class="kbd">${bookNo}/${pageStart}</span>
            </div>
            <p class="desc">${desc}</p>
            <div class="tagrow">
              ${tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join("")}
            </div>
          </div>
        `;
        gridEl.appendChild(el);
      }
    }

    function debounce(fn, ms) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), ms);
      };
    }

    function showRandom10() {
      sectionTitleEl.textContent = "ចំណងជើងណែនាំ (ចៃដន្យ)";
      setStatus("បង្ហាញចំណងជើងចៃដន្យ 10 មុន…");
      render(randomTitles(10), "random");
    }

    function runSearch() {
      const q = qEl.value;

      if (!q.trim()) {
        showRandom10();
        return;
      }

      sectionTitleEl.textContent = "លទ្ធផលស្វែងរក";

      if (isBookPageQuery(q)) {
        const { bookNo, page } = parseBookPage(q);
        const match = lookupByBookPage(bookNo, page);

        if (!match) {
          setStatus(`រកមិនឃើញចំណងជើងសម្រាប់ ${bookNo}/${page}។`);
          render([], "bookPage");
          return;
        }

        setStatus(`ភ្ជាប់ ${bookNo}/${page} → ${match.title} (${bookNo}/${match.pageStart})`);
        render([match], "bookPage");
        return;
      }

      const results = searchByTitle(q);
      setStatus(results.length ? `រកឃើញ ${results.length} លទ្ធផល` : `រកមិនឃើញលទ្ធផល`);
      render(results, "title");
    }

    const runSearchDebounced = debounce(runSearch, 120);

    // Events
    qEl.addEventListener("input", runSearchDebounced);
    shuffleBtn.addEventListener("click", () => {
      if (!qEl.value.trim()) showRandom10();
      else runSearch();
    });

    // Initial view
    showRandom10();
  });
})();
