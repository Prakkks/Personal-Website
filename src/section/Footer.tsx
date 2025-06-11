
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300  items-center flex  flex-wrap gap-5 justify-between">
        <div className="text-white-600 flex gap-5 ">
            <p> Terms & Conditions</p>
            <p> |</p>
            <p> Privacy Policy </p>
        </div>
      <div className="flex gap-3">
  <a
    href="https://github.com/Prakkks"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img
      src="/assets/github.svg"
      alt="github"
      className="w-2/3 h-2/3 grayscale hover:grayscale-0 transition duration-500"
    />
  </a>

  <a
    href="https://twitter.com/prakkks_"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img
      src="/assets/x.svg"
      alt="twitter"
      className="w-1/2 h-1/2 grayscale hover:grayscale-0 transition duration-500"
    />
  </a>

  <a
    href="https://linkedin.com/in/prakkks"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img
      src="/assets/linkedin.png"
      alt="linkedin"
      className="w-1/2 h-1/2 grayscale hover:grayscale-0 transition duration-500"
    />
  </a>
</div>

        <p className="text-white-500"> 2025 Prakriti. All rights reserved. </p>
    </section>
  )
}

export default Footer