import MegaMenuNicho from './MegaMenuNicho'
import { subcategorias as subcategoriasPadrao } from '../../../data/subcategorias'
import { generosLeitura } from '../../../data/generosLeitura'
import { generosNatal } from '../../../data/generosNatal'

function NavDesktop({
  generos,
  mundo = 'mundos',
  generoId,
  onSelecionarGenero,
  nichoAtivo,
  onAbrirNicho,
  onAdiarFechamento,
  subcategorias = subcategoriasPadrao,
}) {
  // Cada mundo tem a sua lista no menu: /Locus/leitura usa os gêneros de
  // leitura, /Locus/natal usa os de Natal (data/generosNatal.js) e o
  // escuro fica com os nichos padrão — todos com URL própria.
  const lista = mundo === 'leitura' ? generosLeitura : mundo === 'natal' ? generosNatal : generos
  // mx-auto centraliza o menu entre a logo e o campo de busca
  // (o espaÃ§o livre divide igual entre as margens automÃ¡ticas).
  return (
    <nav className="hidden lg:block lg:mx-auto">
      <ul className="flex gap-[30px] list-none items-center">
        {lista.map((genero, indice) => {
          // Sem subpasta nÃ£o existe painel: sÃ³ o clique, que vai direto pra URL.
          const subs = subcategorias[genero.id] || []

          return (
            <li
              key={genero.id}
              className="relative"
              onMouseEnter={() => subs.length > 0 && onAbrirNicho(genero.id)}
              onMouseLeave={onAdiarFechamento}
            >
              <button
                onClick={() => onSelecionarGenero(genero.id)}
                className={`bg-transparent border-none cursor-pointer text-base transition-colors ${
                  generoId === genero.id ? 'font-semibold' : ''
                }`}
                style={{
                  color:
                    generoId === genero.id || nichoAtivo === genero.id
                      ? 'var(--cor-primaria)'
                      : 'var(--cor-texto)',
                }}
              >
                {genero.nome}
              </button>

              {subs.length > 0 && nichoAtivo === genero.id && (
                <MegaMenuNicho
                  genero={genero}
                  subcategorias={subcategorias}
                  onAbrirNicho={onAbrirNicho}
                  onAdiarFechamento={onAdiarFechamento}
                  onEscolherSubpasta={(id, sub) => onSelecionarGenero(id, sub)}
                  alinharDireita={lista.length > 2 && indice >= lista.length - 2}
                />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavDesktop
