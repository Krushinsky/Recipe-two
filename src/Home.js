import './App.scss'

function Home(){
  const ShowPage =(e) =>{
    const conatiner = document.querySelector('.container')
    conatiner.classList.remove('active');
  }
    return(
        <div className='screen' id="Home" onClick={ShowPage}>
        <div className='main'>
          <header className='header_one'>
            <div className='header'>
              <div className='header_item'>
                <h2 className='title'>Home page</h2>
                <p> New text from this page</p>
                <button className='btn'>Read more</button>
              </div>
            </div>
          </header>
        </div>
        <div className='shadow one'></div>
        <div className='shadow two'></div>
      </div>
    )
}
export default Home;