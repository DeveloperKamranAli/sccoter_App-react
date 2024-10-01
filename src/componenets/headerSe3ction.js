import React from 'react'
import sx from '../sx/logo img.png'
const Header = () => {
  return (
<>

<nav className="container navbar navbar-expand-lg">
  <div className="container-fluid border-bottom pb-3">
    <a className="navbar-brand" href="#">
        <img   src={sx}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav fs-5 m-auto mb-2 mb-lg-0 gap-5">
        <li className="nav-item">
          <a className="nav-link active fw-medium" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-medium" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active fw-medium" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button type="button" class="btn border-0 py-2 px-3 fs-5 me-2 fw-medium">Login</button>
      <button type="button" class="btn-peela rounded-pill text-white border-0 py-2 px-3 fs-5">Book Scooter</button>
      </form>
    </div>
  </div>
</nav>


</>
  )
}

export default Header

