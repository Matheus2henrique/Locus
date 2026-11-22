// Seletor de universo do header (estilo do modelo locus.html): três mundos
// lado a lado — "Por Diversao" (mundos = escuro), "Por Leitura" (leitura =
// claro) e "Natal". Os hrefs batem com /Locus/mundos, /Locus/leitura e
// /Locus/natal; o clique troca o mundo sem recarregar.
function UniverseSwitch({ mundo = 'mundos', onEscolherMundo }) {
  const opcoes = [
    {
      id: 'mundos',
      rotulo: 'Por Diversao',
      aria: 'Locus por Diversao',
      icone: (
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
      ),
    },
    {
      id: 'leitura',
      rotulo: 'Por Leitura',
      aria: 'Locus por Leitura',
      icone: (
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
      ),
    },
    {
      id: 'natal',
      rotulo: 'Natal',
      aria: 'Locus por Natal',
      icone: (
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
          className="lucide lucide-gift"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M12 8v13" />
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
      ),
    },
  ]

  return (
    <div className="universe-switch" aria-label="Escolha seu universo">
      {opcoes.map((opcao) => (
        <a
          key={opcao.id}
          href={`${import.meta.env.BASE_URL}${opcao.id}`}
          aria-label={opcao.aria}
          className={mundo === opcao.id ? 'selected' : ''}
          onClick={(e) => {
            e.preventDefault()
            onEscolherMundo?.(opcao.id)
          }}
        >
          {opcao.icone}
          {opcao.rotulo}
        </a>
      ))}
    </div>
  )
}

export default UniverseSwitch
