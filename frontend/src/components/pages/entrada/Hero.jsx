
function Hero({ temaLeitura = false }) {
  const imagem = temaLeitura ? 'locu-lendo.png' : 'locu.png'
  return (
    <div
      className="fun-hero container overflow-hidden"
      style={{ background: 'var(--cor-fundo)', transition: 'background-color 0.25s' }}
    >
      <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-30 blur-[120px]" style={{ background: 'var(--cor-esverdiado-bts)' }} />
      <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-[250px] h-[200px] rounded-full opacity-50 blur-[80px]" style={{ background: 'var(--cor-esverdiado)' }} />

      <div className="hero-copy">
        <h1
          className="text-[clamp(68px,18vw,96px)] md:text-[72px] lg:text-[85px] xl:text-[100px] leading-[0.93] tracking-[-0.025em] max-w-[590px] my-5 font-[Barlow_Condensed,sans-serif] font-extrabold"
          style={{ color: 'var(--cor-texto)', animation: 'aparecer 0.7s ease-out 0.28s both' }}
        >
          ONDE{' '}
          <span style={{ color: 'var(--cor-esverdiado)', display: 'block' }}>MUNDOS</span>
          <span
            style={{
              fontSize: '0.8em',
              color: 'var(--cor-texto)',
              whiteSpace: 'nowrap',
            }}
          >
            SE ENCONTRAM
          </span>
        </h1>
        <p
          className="text-[13px] leading-[1.9] max-w-[590px] mb-[27px]"
          style={{ color: 'var(--cor-texto-suave)', animation: 'aparecer 0.7s ease-out 0.44s both' }}
        >
          Decorações e colecionáveis para os leitores que querem
          <br />
          levar o seu gênero favorito para todos os cantos.
        </p>
      </div>

      <div className="hero-art">
        <img
          key={imagem}
          src={`${import.meta.env.BASE_URL}IDENTIDADE VISUAL LOCUS/${imagem}`}
          alt="Locus"
          className="portal-hero-image"
        />
      </div>
    </div>
  )
}

export default Hero
