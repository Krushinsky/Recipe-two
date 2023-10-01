function Portfolio(){
  const ShowPage =(e) =>{
    const conatiner = document.querySelector('.container')
    conatiner.classList.remove('active');
  }
    return(
        <div className='screen' id="Portfolio" onClick={ShowPage}>
        <div className='main'>
          <header className='header_three'>
            <div className='header'>
              <div className='header_item'>
                <h2 className='title'>Portfolio page</h2>
                <ul>
                  <li>  <a href=" https://krushinsky.github.io/Portfolio/" className="linkPortfolio" target="_blank" rel="noreferrer"> Portfolio</a>
                  </li>
                  <li>
                    <a href="https://github.com/Krushinsky" className="linkPortfolio" target="_blank" rel="noreferrer">GitHub</a> 
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        <div className='shadow one'></div>
        <div className='shadow two'></div>
      </div>

    )
}
export default Portfolio;
