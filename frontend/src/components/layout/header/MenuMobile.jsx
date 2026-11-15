import { useState } from 'react'
import { subcategorias as subcategoriasPadrao } from '../../../data/subcategorias'

// Menu mobile em acordeão de 2 níveis: nicho > subpasta.
// Clicar na subpasta leva direto para a página do nicho já com o filtro dela
// (?sub=...); nicho sem subpasta — Coleção Dinossauro e Pacotes — o clique já
// vai direto para a página do nicho.
function MenuMobile({ generos, generoId, onEscolherGenero, onFechar, onMostrarPerfil, onMostrarFavoritos, subcategorias = subcategoriasPadrao }) {
  const [nichoAberto, setNichoAberto] = useState(null)

  function alternarNicho(id) {
    setNichoAberto((atual) => (atual === id ? null : id))
  }

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden header-tema"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onFechar}
      />

      <div
        className="absolute left-0 top-0 h-full w-[82%] max-w-[340px] flex flex-col shadow-2xl animate-[slideInLeft_0.3s_ease-out] menu-drawer"
        style={{ background: 'var(--cor-fundo-cartao)' }}
      >

        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: 'var(--cor-borda)' }}
        >
          <span
            className="flex items-center leading-none"
            style={{ fontFamily: 'Cinzel, Georgia, serif', color: 'var(--cor-texto)' }}
          >
            <img src={`${import.meta.env.BASE_URL}IDENTIDADE VISUAL LOCUS/locus-png.png`} alt="" className="h-8 w-38 rounded-full object-cover mx-0.5" />
          </span>
          <button
            onClick={onFechar}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none"
            style={{ background: 'var(--cor-fundo-suave)', color: 'var(--cor-texto)' }}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        {/* Ações que no desktop ficam na barra do header: em telas muito
            estreitas os ícones saem de lá e ficam acessíveis aqui. */}
        

        <ul className="flex-1 overflow-y-auto px-4 py-4 list-none flex flex-col gap-1">
          {generos.map((genero) => {
            const aberto = nichoAberto === genero.id
            const subs = subcategorias[genero.id] || []
            const ehAtual = generoId === genero.id

            return (
              <li key={genero.id}>
                <button
                  onClick={() => (subs.length > 0 ? alternarNicho(genero.id) : onEscolherGenero(genero.id))}
                  aria-expanded={subs.length > 0 ? aberto : undefined}
                  className={`w-full text-left py-3.5 px-3 rounded-xl bg-transparent border-none cursor-pointer text-base transition-colors ${
                    ehAtual || aberto ? 'font-semibold' : ''
                  }`}
                  style={{
                    color: ehAtual || aberto ? 'var(--cor-primaria)' : 'var(--cor-texto)',
                    background: ehAtual ? 'var(--cor-primaria-suave)' : 'transparent',
                  }}
                >
                  {genero.nome}
                </button>

                {aberto && subs.length > 0 && (
                  <ul className="list-none m-0 p-0 mt-0.5 flex flex-col">
                    {subs.map((sub) => (
                      <li key={`sub-${sub.id}`}>
                        <button
                          onClick={() => onEscolherGenero(genero.id, sub.id)}
                          className="w-full text-left py-2.5 pl-8 pr-3 rounded-lg bg-transparent border-none cursor-pointer text-sm transition-colors"
                          style={{ color: 'var(--cor-texto)' }}
                        >
                          {sub.nome}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--cor-borda)' }}>
          <button
            onClick={() => { onFechar(); onMostrarPerfil?.() }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border cursor-pointer text-sm font-medium"
            style={{ background: 'var(--cor-fundo-suave)', borderColor: 'var(--cor-borda)', color: 'var(--cor-texto)' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Perfil
          </button>
          <button
            onClick={() => { onFechar(); onMostrarFavoritos?.() }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border cursor-pointer text-sm font-medium"
            style={{ background: 'var(--cor-fundo-suave)', borderColor: 'var(--cor-borda)', color: 'var(--cor-texto)' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Favoritos
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile
