// Gêneros do modo claro ("Locus por Leitura"): cada um tem URL própria
// (/Locus/romance, /Locus/fantasia, /Locus/suspense) e o título da página
// do gênero é o próprio nome. Pacotes existe nos dois modos — o id é o
// mesmo, só muda a lista do menu. Não entram em `generos` (data/produtos)
// para não aparecerem no menu do modo escuro.
export const generosLeitura = [
  {
    id: 'romance',
    nome: 'Romance',
    tagline: 'Histórias que fazem o coração disparar.',
    descricao: 'Do encontro ao grande amor: romances para ler com o coração apertado.',
  },
  {
    id: 'fantasia',
    nome: 'Fantasia',
    tagline: 'Reinos mágicos e portais.',
    descricao: 'Magia, criaturas lendárias e aventuras em mundos impossíveis.',
  },
  {
    id: 'suspense',
    nome: 'Suspense',
    tagline: 'Mistérios até a última página.',
    descricao: 'Tensão, mistério e reviravoltas do começo ao fim.',
  },
  {
    id: 'pacotes',
    nome: 'Pacotes',
    tagline: 'Kits e conjuntos completos.',
    descricao: 'Pacotes especiais com vários itens selecionados para você.',
  },
]
