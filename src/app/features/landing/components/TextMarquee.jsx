'use client';

const words = [
  'Component Architecture',
  'Responsive design',
  'API Integration',
  'Implementing Authentication',
  'Documenting Code',
];

export default function TextMarquee() {
  return (
    <>
      <div className="mt-20 flex text-[18px] sm:text-[32px] whitespace-nowrap overflow-hidden space-x-16 sm:space-x-32">

        <div className="animate-marquee flex space-x-16 sm:space-x-32 items-center font-outfit text-text-description">
          {words.map((word, idx) => (
            <span key={idx} >
              {word}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex space-x-16 sm:space-x-32 items-center font-outfit text-text-description" aria-hidden>
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








// 'use client';

// const words = [
//   'Component Architecture',
//   'Responsive design',
//   'API Integration',
//   'Implementing Authentication',
//   'Documenting Code',
// ];

// export default function TextMarquee() {
//   return (
//     <div className="overflow-hidden mt-20 w-full bg-black text-white">
//       <div className="flex animate-marquee whitespace-nowrap">
//         <MarqueeWords />
//         <MarqueeWords />
//       </div>
//     </div>
//   );
// }

// function MarqueeWords() {
//   return (
//     <div className="flex items-center font-outfit text-text-description">
//       {words.map((word, idx) => (
//         <span key={idx} className="mx-8 text-[20px] flex items-center tracking-wide">
//           {word}
//         </span>
//       ))}
//       {words.map((word, idx) => (
//         <span key={idx} className="mx-8 text-[20px] tracking-wide">
//           {word}
//         </span>
//       ))}
//     </div>
//   );
// }
