import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL

function tempoParaNatal() {
  const agora = new Date()
  let alvo = new Date(agora.getFullYear(), 11, 25)
  if (agora >= alvo) alvo = new Date(agora.getFullYear() + 1, 11, 25)
  const segundos = Math.max(0, Math.floor((alvo - agora) / 1000))
  return {
    dias: Math.floor(segundos / 86400),
    horas: Math.floor((segundos % 86400) / 3600),
    minutos: Math.floor((segundos % 3600) / 60),
    segundos: segundos % 60,
  }
}

const pad = (n) => String(n).padStart(2, '0')

const FLOCOS_NATAL = [
  { esq: '6%', tam: 6, dur: 11, atr: 0, op: 0.85 },
  { esq: '14%', tam: 4, dur: 9, atr: 2.5, op: 0.6 },
  { esq: '23%', tam: 7, dur: 13, atr: 5, op: 0.75 },
  { esq: '31%', tam: 5, dur: 10, atr: 1, op: 0.9 },
  { esq: '39%', tam: 4, dur: 14, atr: 7, op: 0.55 },
  { esq: '47%', tam: 6, dur: 12, atr: 3.5, op: 0.8 },
  { esq: '54%', tam: 5, dur: 9.5, atr: 6, op: 0.7 },
  { esq: '62%', tam: 7, dur: 13.5, atr: 0.5, op: 0.85 },
  { esq: '69%', tam: 4, dur: 11.5, atr: 4, op: 0.6 },
  { esq: '77%', tam: 6, dur: 10.5, atr: 8, op: 0.8 },
  { esq: '85%', tam: 5, dur: 14, atr: 2, op: 0.65 },
  { esq: '93%', tam: 7, dur: 12.5, atr: 5.5, op: 0.8 },
]

function Hero({ mundo = 'mundos' }) {
  const [contagem, setContagem] = useState(tempoParaNatal)

  useEffect(() => {
    if (mundo !== 'natal') return undefined
    const t = setInterval(() => setContagem(tempoParaNatal()), 1000)
    return () => clearInterval(t)
  }, [mundo])

  const irPara = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // ===== NATAL (/Locus/natal) =====================================
  // Referência: modelo ECHRIST "Christmas Event Page" — fundo vermelho,
  // neve caindo, mascotes nos cantos, banco de neve com pinheiros,
  // contagem regressiva até o Natal e dois botões.
  // IMG e TEXTOS do Natal ficam marcados abaixo — troque o que quiser.
  if (mundo === 'natal') {
    return (
      <div className="natal-hero container overflow-hidden">
        {/* Neve caindo */}
        <div className="natal-flocos" aria-hidden="true">
          {FLOCOS_NATAL.map((f, i) => (
            <span
              key={i}
              className="natal-florco"
              style={{
                left: f.esq,
                width: f.tam,
                height: f.tam,
                animationDuration: `${f.dur}s`,
                animationDelay: `-${f.atr}s`,
                opacity: f.op,
              }}
            />
          ))}
        </div>

        {/* Mascotes nos cantos (LOCUS_NATAL/*.png) */}
        <img
          className="natal-mascote natal-mascote--esq"
          src={`${BASE}LOCUS_NATAL/Locus_Natal.png`}
          alt=""
          aria-hidden="true"
        />
        <img
          className="natal-mascote natal-mascote--dir"
          src={`${BASE}LOCUS_NATAL/locu-natalino.png`}
          alt=""
          aria-hidden="true"
        />

        <div className="natal-conteudo">
          {/* DATA — edite o texto abaixo */}
          <span className="natal-data">Dezembro 25</span>

          {/* TÍTULO — edite as duas linhas abaixo */}
          <h1 className="natal-titulo">
            <span>Natal</span>
            <span>Locus</span>
          </h1>

          {/* Contagem regressiva até o próximo Natal (atualiza sozinha) */}
          <div className="natal-contagem" aria-label="Contagem regressiva para o Natal">
            <div className="natal-unidade">
              <strong>{pad(contagem.dias)}</strong>
              <span>Dias</span>
            </div>
            <i>:</i>
            <div className="natal-unidade">
              <strong>{pad(contagem.horas)}</strong>
              <span>Horas</span>
            </div>
            <i>:</i>
            <div className="natal-unidade">
              <strong>{pad(contagem.minutos)}</strong>
              <span>Min</span>
            </div>
            <i>:</i>
            <div className="natal-unidade">
              <strong>{pad(contagem.segundos)}</strong>
              <span>Seg</span>
            </div>
          </div>

          {/* BOTÕES — edite os rótulos se quiser */}
          <div className="natal-botoes">
            <button type="button" className="natal-botao natal-botao--verde" onClick={() => irPara('destaques')}>
              Ver produtos
            </button>
            <button type="button" className="natal-botao natal-botao--linha" onClick={() => irPara('sobre')}>
              Saiba mais
            </button>
          </div>
        </div>

        {/* Banco de neve com pinheiros brancos */}
        <div className="natal-banco" aria-hidden="true">
          <svg className="natal-onda" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              d="M0,64 C140,34 280,92 430,72 C580,52 700,24 860,48 C1010,70 1150,38 1300,56 C1350,62 1400,70 1440,66 L1440,120 L0,120 Z"
            />
          </svg>
          <svg className="natal-pinho natal-pinho--esq" viewBox="0 0 210 130">
            <g fill="#ffffff">
              <path d="M50 4 L72 44 H60 L84 84 H70 L98 124 H2 L30 84 H16 L40 44 H28 Z" />
              <path
                d="M50 4 L72 44 H60 L84 84 H70 L98 124 H2 L30 84 H16 L40 44 H28 Z"
                transform="translate(108 26) scale(0.78)"
              />
            </g>
          </svg>
          <svg className="natal-pinho natal-pinho--dir" viewBox="0 0 210 130">
            <g fill="#ffffff">
              <path
                d="M50 4 L72 44 H60 L84 84 H70 L98 124 H2 L30 84 H16 L40 44 H28 Z"
                transform="translate(4 26) scale(0.78)"
              />
              <path d="M50 4 L72 44 H60 L84 84 H70 L98 124 H2 L30 84 H16 L40 44 H28 Z" transform="translate(105 0)" />
            </g>
          </svg>
        </div>
      </div>
    )
  }

  const imagem = mundo === 'leitura' ? 'locu-lendo.png' : 'locu.png'
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
          src={`${BASE}IDENTIDADE VISUAL LOCUS/${imagem}`}
          alt="Locus"
          className="portal-hero-image"
        />
      </div>
    </div>
  )
}

export default Hero
