export function NoteCard() {
  return (
    <button
      className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none
                  hover:ring-2 hover:ring-slate-600
                  focus-visible:ring-2 focus-visible:ring-lime-400'>

      <span className='text-sm font-medium text-slate-200'>
        há 2 dias
      </span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem inventore veniam sint, possimus necessitatibus nostrum quisquam eum ducimus cumque itaque quod sapiente tenetur, corporis officia, eius obcaecati corrupti dolorum laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vitae laboriosam corporis sit facere dolores tempora quidem sed earum et iste nesciunt nisi expedita quod, a sequi amet! Consequuntur, nesciunt?
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}