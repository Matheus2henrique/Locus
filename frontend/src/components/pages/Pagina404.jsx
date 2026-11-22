// Rota que não existe (ex.: /Locus/fsdfs): mostra erro em vez de cair
// na home. O endereço digitado aparece na mensagem.
function Pagina404({ onVoltar }) {
  return (
    <section
      className="min-h-[55vh] flex flex-col items-center justify-center text-center px-6 py-[70px]"
      style={{ background: 'var(--cor-fundo)', transition: 'background-color 0.25s' }}
    >
      <span
        className="text-[110px] leading-none font-[Georgia,serif]"
        style={{ color: 'var(--cor-esverdiado)' }}
      >
        404
      </span>
      <h1
        className="text-3xl md:text-4xl font-[Georgia,serif] mt-3"
        style={{ color: 'var(--cor-texto)' }}
      >
        Página não encontrada
      </h1>
      <p className="mt-4 text-sm max-w-[460px] leading-relaxed" style={{ color: 'var(--cor-texto-suave)' }}>
        O endereço <code style={{ color: 'var(--cor-texto)' }}>{window.location.pathname}</code>{' '}
        não existe na Locus.
      </p>
      <button
        type="button"
        onClick={onVoltar}
        className="mt-8 px-7 py-3 rounded-full text-sm font-semibold border-none cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: 'var(--cor-esverdiado-bts)', color: 'var(--cor-texto)' }}
      >
        Voltar para o início
      </button>
    </section>
  )
}

export default Pagina404
