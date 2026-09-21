import React from 'react'

// Glyph registry: add a new service icon by adding an entry here and referencing its key in serviceData.
// Paths are drawn on a 96x96 grid and stroked by the parent <g>, so each glyph only describes its shape.
const glyphs = {
    web: (
        <>
            <circle cx='48' cy='48' r='21' />
            <path d='M27 48h42' />
            <ellipse cx='48' cy='48' rx='9.5' ry='21' />
        </>
    ),
    mobile: (
        <>
            <rect x='33' y='24' width='30' height='48' rx='5' />
            <path d='M43 31h10' />
            {/* A near-zero-length path with a thick round cap renders as a dot. */}
            <path d='M48 64h.01' strokeWidth='5' />
        </>
    ),
    design: (
        <>
            <path d='m59 27 10 10-27 27-13 3 3-13z' strokeLinejoin='round' />
            <path d='m54 32 10 10' />
        </>
    ),
    backend: (
        <>
            <rect x='27' y='27' width='42' height='15' rx='4' />
            <rect x='27' y='54' width='42' height='15' rx='4' />
            <path d='M37 34.5h.01' strokeWidth='5' />
            <path d='M37 61.5h.01' strokeWidth='5' />
        </>
    ),
}

// The fill must stay in sync with the `accent` colour in tailwind.config.mjs.
const ServiceIcon = ({name}) => (
    <svg viewBox='0 0 96 96' className='w-10' xmlns='http://www.w3.org/2000/svg'>
        <rect width='96' height='96' rx='22' fill='#567257' />
        <g fill='none' stroke='#fff' strokeWidth='4' strokeLinecap='round'>
            {glyphs[name]}
        </g>
    </svg>
)

export default ServiceIcon
