function Logo({ onHome }) {
  return (
    <button
      onClick={onHome}
      className="border-none bg-transparent cursor-pointer flex items-center shrink-0"
      aria-label="Locus — início"
    >
      <span
        className="flex items-center leading-none gap-1"
        style={{ fontFamily: 'Cinzel, Georgia, serif' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}IDENTIDADE VISUAL LOCUS/locus-png.png`}
          alt="Locus"
          className="h-9 sm:h-10 md:h-14 lg:h-20 w-auto min-w-[120px] max-w-[150px] sm:max-w-[190px] md:max-w-[230px] lg:max-w-[240px] object-contain"
        />
      </span>
    </button>
  )
}

export default Logo
