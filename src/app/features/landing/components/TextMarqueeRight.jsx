'use client';

const words = [
  'Consistent Refactoring',
  'Debugging',
  'Documenting Code',
  'Learning Architecture',
  'Designing UI',
];

export default function TextMarqueeRight() {
  return (
    <>
      <div className="mt-20 flex text-16px  sm:text-[32px] whitespace-nowrap overflow-hidden space-x-16 sm:space-x-32">

        <div className="animate-marquee-right flex space-x-16 sm:space-x-32 items-center font-outfit text-text-description">
          {words.map((word, idx) => (
            <span key={idx} >
              {word}
            </span>
          ))}
        </div>
        <div className="animate-marquee-right flex space-x-16 sm:space-x-32 items-center font-outfit text-text-description" aria-hidden>
        {words.map((word, idx) => (
          <span key={idx}>
            {word}
          </span>
        ))}
        </div>

      </div>
    </>
  );
}



