// Seletor de universo do header (do modelo locus.html): dois universos
// lado a lado — "Por Diversao" (mundos = modo escuro) e "Por Leitura"
// (modo claro). Os hrefs batem com as URLs /Locus/mundos e /Locus/leitura;
// o clique troca o tema sem recarregar (onAlternarTemaLeitura).
function UniverseSwitch({ temaLeitura = false, onAlternarTemaLeitura }) {
  const escuroAtivo = !temaLeitura

  function escolher(querEscuro) {
    if (querEscuro === escuroAtivo) return
    onAlternarTemaLeitura?.()
  }

  return (
    <div className="universe-switch" aria-label="Escolha seu universo">
      <a
        href={`${import.meta.env.BASE_URL}mundos`}
        aria-label="Locus por Diversao"
        className={escuroAtivo ? 'selected' : ''}
        onClick={(e) => {
          e.preventDefault()
          escolher(true)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-orbit"
          aria-hidden="true"
        >
          <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
          <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
        </svg>
        Por Diversao
      </a>
      <a
        href={`${import.meta.env.BASE_URL}leitura`}
        aria-label="Locus por Leitura"
        className={escuroAtivo ? '' : 'selected'}
        onClick={(e) => {
          e.preventDefault()
          escolher(false)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-cloud"
          aria-hidden="true"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
        Por Leitura
      </a>
    </div>
  )
}

export default UniverseSwitch
