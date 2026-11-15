
function Hero({ temaLeitura = false }) {
  const imagem = temaLeitura ? 'locu-lendo.png' : 'locu.png'
  return (
    <div
      className="min-h-[400px] md:min-h-[520px] grid grid-cols-1 content-center items-center justify-items-center gap-y-10 min-[600px]:gap-x-[10px] min-[600px]:grid-cols-[auto_1fr_auto] min-[600px]:justify-items-start px-5 md:px-6 min-[600px]:pl-[max(1.5rem,calc((100vw_-_1200px)/2_+_1.5rem))] min-[600px]:pr-[max(1.5rem,calc((100vw_-_1200px)/2_+_1.5rem))] relative overflow-hidden"
      style={{ background: 'var(--cor-fundo)', transition: 'background-color 0.25s' }}
    >
      <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-30 blur-[120px]" style={{ background: 'var(--cor-esverdiado-bts)' }} />
      <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-[250px] h-[200px] rounded-full opacity-50 blur-[80px]" style={{ background: 'var(--cor-esverdiado)' }} />

      <div className="w-full min-[600px]:col-start-1 min-[1440px]:ml-[160px]">
        <h1
          className="text-[clamp(68px,18vw,96px)] md:text-[72px] lg:text-[85px] xl:text-[100px] leading-[0.93] tracking-[-0.025em] max-w-[590px] my-5 font-[Barlow_Condensed,sans-serif] font-extrabold"
          style={{ color: 'var(--cor-texto)', animation: 'aparecer 0.7s ease-out 0.28s both' }}
        >
          Onde os{' '}
          <span style={{ color: 'var(--cor-esverdiado)', display: 'block' }}>mundos</span>
          <span
            style={{
              fontSize: '0.8em',
              color: 'var(--cor-texto)',
              whiteSpace: 'nowrap',
            }}
          >
            se encontram
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

      <img
        key={imagem}
        src={`${import.meta.env.BASE_URL}IDENTIDADE VISUAL LOCUS/${imagem}`}
        alt="Locus"
        className="h-56 w-64 sm:h-72 sm:w-80 md:h-88 md:w-104 lg:h-100 lg:w-120 object-cover min-[600px]:max-w-full min-[600px]:col-start-3 min-[1440px]:mr-50"
        style={{ filter: 'drop-shadow(0 18px 35px rgba(121,0,213,0.09))', animation: 'float 7s ease-in-out infinite' }}
      />
    </div>
  )
}

export default Hero
