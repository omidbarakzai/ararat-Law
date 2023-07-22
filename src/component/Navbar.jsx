
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";










function Navbar (){
    return(


    
        <>
        <Container className="mian-nav">
          <nav className="navbar navbar-expand-lg bg-body-white  " >
           <div className="container-fluid">
           <Link type="button" className="btn btn-primary btn-lg" to="#">حساب کاربری</Link>

        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
           <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li class="nav-item">
      <Link type="button" className="btn btn- btn-lg" to="/">صحفه اصلی</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            خدمات
          </Link>
          <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" to="">خدمات مشاوره </Link>
                </li>
            <li>
                <Link className="dropdown-item" to="#service-box">خدمات وکالت</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="#">خدمات کارشناسی</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="#">خدمات داوری</Link>
            </li>
          </ul>
        </li>




        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            موضوعات حقوقی
          </Link>
          <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" to="مشاوره-حضوری-و-تلفنی-پرونده-های-کیفری">دعاوی کیفری</Link>
                </li>
            <li>
                <Link className="dropdown-item" to="/family-lawyers">دعاوی خانواده</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/دعاوی ملکی و قرار دادی">دعاوی قرار دادی ملکی</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/">دعاوی تجاری</Link>
            </li>
          </ul>
        </li>




        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            قوانین
          </Link>
          <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" to="#">قوانین داخلی</Link>
                </li>
            <li>
                <Link className="dropdown-item" to="#">قوانین بین المللی</Link>
            </li>
            
          </ul>
        </li>





        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            لینک های کاربردی
          </Link>
          <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" to="https://sana.adliran.ir/Sana/Index#/Main">سامانه ثنا</Link>
                </li>
            <li>
                <Link className="dropdown-item" to="https://divan-edalat.ir/">ساجد دیوان عدالت اداری
                                                                                    </Link>
            </li>
            <li>
                <Link className="dropdown-item" to="https://adliran.ir/">سامانه خدمات الکترونیکی قضایی </Link>
            </li>
            <li>
                <Link className="dropdown-item" to="https://adliran.ir/">سامانه حراز هویت ثنا   </Link>
            </li>
          </ul>
        </li>









        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           درباره ما
          </Link>
          <ul className="dropdown-menu">
          <li>
                <Link className="dropdown-item" to="#">درباره موسسه حقوقی بین المللی آرارات</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="#">شعبات موسسه حقوقی بین المللی آرارات</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="#">راه ارتباط با موسسه حقوقی بین المللی آرارت</Link>
                </li>
           
          </ul>
        </li>





      </ul>
    </div>
  </div>
</nav>
</Container>
        </>
    )
}

export default Navbar ;