document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const q = document.querySelector("[data-market-search]");
  const role = document.querySelector("[data-market-role]");
  const cards = [...document.querySelectorAll("[data-profile]")];

  function apply(){
    const term = (q?.value || "").trim().toLowerCase();
    const r = (role?.value || "").trim().toLowerCase();

    cards.forEach(c => {
      const text = (c.getAttribute("data-text") || "").toLowerCase();
      const cr = (c.getAttribute("data-role") || "").toLowerCase();
      const okTerm = !term || text.includes(term);
      const okRole = !r || r === "all" || cr === r;
      c.style.display = (okTerm && okRole) ? "" : "none";
    });
  }

  if (q) q.addEventListener("input", apply);
  if (role) role.addEventListener("change", apply);
});
