
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300  items-center flex  flex-wrap gap-5 justify-between">
        <div className="text-white-600 flex gap-5 ">
            <p> Terms & Conditions</p>
            <p> |</p>
            <p> Privacy Policy </p>
        </div>
        <div className="flex gap-3">
            <div className="social-icon">
                <img src="/assets/github.svg" alt="github"  className="w-1/2 h-1/2"/> 
            </div>
                  <div className="social-icon">
                <img src="/assets/twitter.svg" alt="twitter"  className="w-1/2 h-1/2"/> 
            </div>
                  <div className="social-icon">
                <img src="/assets/instagram.svg" alt="linkedin"  className="w-1/2 h-1/2"/> 
            </div>

        </div>
        <p className="text-white-500"> 2025 Prakriti. All rights reserved. </p>
    </section>
  )
}

export default Footer