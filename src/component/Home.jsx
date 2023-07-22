import 'animate.css'; 
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";



function Home() {
    return(
        <>
        <div className='mian-contianer'>
           
        <div className='tiitle-content'>
        <h1 className="animate__animated animate__bounce">موسسه حقوقی بین المللی آرارات</h1>
        <p className='Container-p'>برای ما بن بستی وجود ندارد</p>
        <p className='Container-p'>یا راهی خواهیم یافت یا راه خواهیم ساخت</p>
        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">تماس با ما</Link>

        
        </div>




        <div className='min-con-photo'>
            <img className='mine-con-photo' src="./photo/wkalat.webp" alt="##" />
        </div>
        </div>

    


 
        <div id="container">
            <div className=' title-contianer'>
                <h1 className='con-title'> مشاوره حقوقی  باوکیل های پایه یک دادگستری</h1>
                <hr  className='conn-hr'/>
                <p className='con-p'>در سریعترین زمان ممکن با یک وکیل پایه یک مشورت کنید.</p>
                <p className='con-p'>بر روی خدمات حقوقی مورد نظر خوتان کلیک کنید</p>

            </div>



            <div className='flex-box'>
                
            <div className='box-1'>
                       <div className='title-box'><h1 className='title-h1'>مشاوره حقوقی </h1></div>

                      <div className='box-p'>مشاوره حضوری</div>

                      <div className='box-p'>مشاوره افلاین از طریق ایمیل</div>
                      <div className='box-p'>مشاوره حقوقی با کادری مجرب و حرفه ای</div>
                      <div className='box-p'>مشاوره افلاین</div>
                      <Link id='btn' type="button" className="btn btn-primary btn-lg" to="Tel:+982188947841">تماس با مشاور حقوقی</Link>                        
                </div>


                <div className='box-1'>
                  <div className='title-box'><h1 className='title-h1'>وکالت</h1></div>
                 <div className='box-p'>مالی تجاری</div>
                 <div className='box-p'>حقوقی</div>
                 <div className='box-p'>املاک و اسناد</div>
                 <div className='box-p'>اتومبیل</div>
                 <Link id='btn' type="button" className="btn btn-primary btn-lg" to="Tel:+982188947841">تماس با وکیل با یک دادگستری</Link>
                  
           </div>


           <div className='box-1'>
                       <div className='title-box'>
                        <h1 className='title-h1'>کارشناسی</h1></div>
                      <div className='box-p'>مالی و تجاری </div>
                      <div className='box-p'>حقوقی و قرار دادی</div>
                      <div className='box-p'>املاک و اسناد</div>
                       <div className='box-p'>اتومبیل</div> 
                       <Link id='btn' type="button" className="btn btn-primary btn-lg" to="Tel:+982188947841">تماس با کارشناس حقوقی</Link>                      
                </div>




                <div className='box-1'>
                       <div className='title-box'>
                        <h1 className='title-h1'>خدمات داوری</h1></div>

                      <div className='box-p'>مالی و تجاری</div>
                      <div className='box-p'>حقوقی و قراردادی</div>
                      <div className='box-p'>املاک و اسناد</div>
                      <div className='box-p'></div>
                      <Link id='btn' type="button" className="btn btn-primary btn-lg" to="Tel:+982188947841">تماس با وکیل</Link> 
                    
                      
                       
                </div>

            </div>

        </div>




 
                         <div className='main-content'>
            
            <div className='content-1'>
            <span className='content-icon'><i className="fa-sharp fa-solid fa-gavel"></i></span>
                <h1 className='title-content'>تعداد وکلای موسسه</h1>
                <p className='p-content'>40</p>
            </div>
             
              <div className='content-1'>
                <span className='content-icon'><i className="fa-solid fa-user"></i></span>
                <h1 className='title-content'>مشاوره حقوقی در موسسه بین المللی آرارات</h1>
                <p className='p-content'>11800</p>
            </div>



            <div className='content-1'>
            <span className='content-icon'><i className="fa-solid fa-scale-balanced"></i></span>     
                <h1 className='title-content'>خدمات ارائه شده</h1>
                <p className='p-content'>2727</p>
            </div>
            
        </div>
    

        
                      <div id='service'>
                      <div className='service-img'>
                            <img className='service-img' src='./photo/khadamat.png' alt="" /></div>
                      
                        <div className='service-1'>
                            <h1 className='service-title'>انجام کلیه خدمات حقوقی</h1>
                         <p className='service-p'>مفتخریم با بهره مندی از وکلای پایه یک دادگستری ,حقودانان و مشاورین مجرب,امادگی خود را جهت ارایه کلیه خدمات حقوقی به نحو شایسته با اشخاص حقیقی و حقوقی                    </p>
                            <Link id='service-btn' type="button" className="btn btn-primary btn-lg" to="#">ادامه مطلب</Link>
  
                        </div>
                        </div>  



                       
          


                <div id='service-box'>


                    <div className='box-service-1'>
                        <div className='service-img-box'><img className='service-box-1-img' src='./photo/andrea.webp' alt="" /></div>
                        <h1 className='service-box-1-title'>دعاوی ملکی و قرار  داد ها</h1>
                        <hr className='service-box-1-hr' />
                        <hr className='service-box-1-hr' />
                        <p className='service-box-1-p'>نکته حایز اهمیت در اینگونه دهاوی این است که بر خلاف تصور و</p>
                        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="Form">ادامه مطلب</Link>
                    </div>


                    <div className='box-service-1'>
                        <div className='service-img-box'><img className='service-box-1-img' src='./photo/ezgif.com-gif-maker (5).webp' alt="" /></div>
                        <h1 className='service-box-1-title'>دعاوی خانواده </h1>
                        <hr className='service-box-1-hr' />
                        <hr className='service-box-1-hr' />
                        <p className='service-box-1-p'>اساسآ دعاوی که مربوط به کانون خانواده باشد رادعاوی خانواده می گویند</p>
                        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">ادامه مطلب</Link>                   </div>




                    <div className='box-service-1'>
                        <div className='service-img-box'><img className='service-box-1-img' src="./photo/ezgif.com-gif-maker (4).webp" alt="" /></div>
                        <h1 className='service-box-1-title'>دعاوی کیفری</h1>
                        <hr className='service-box-1-hr' />
                        <hr className='service-box-1-hr' />
                        <p className='service-box-1-p'>دعاوی کیفری بطور کلی دعوایی که فرد برای اعلام وقوع جرم به</p>
                        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">ادامه مطلب</Link>                    </div>
                                  



                                  
                    <div className='box-service-1'>
                        <div className='service-img-box'><img className ='service-box-1-img'src='./photo/biuness.webp' alt="" /></div>
                        <h1 className='service-box-1-title'>دعاوی تجاری</h1>
                        <hr className='service-box-1-hr' />
                        <hr className='service-box-1-hr' />
                        <p className='service-box-1-p'>دعاوی تجارت به دعاوی گفته میشود که به اقتضای تجارت</p>
                        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">ادامه مطلب</Link>
                    </div>


                    <div className='box-service-1'>
                        <div className='service-img-box'><img className='service-box-1-img' src="./photo/ezgif.com-gif-maker (6).webp" alt="" /></div>
                        <h1 className='service-box-1-title'>مشاوره حقوقی حضوری یا تلفنی</h1>
                        <hr className='service-box-1-hr' />
                        <hr className='service-box-1-hr' />
                        <p className='service-box-1-p'>مشاوره حقوقی با وکیل پایه یک دادکستری مشاوره حقوقی</p>
                        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">ادامه مطلب</Link>
                    </div>




                    <div className='box-service-1'>
                        <div className='service-img-box'><img className='service-box-1-img' src="./photo/ezgif.com-gif-maker (4).webp" alt="##" /></div>
                        <h1 className='service-box-1-title'>سوال حقوقی </h1>
                        <hr className='service-box-1-hr' />
                        <hr className='service-box-1-hr' />
                        <p className='service-box-1-p'>در لیست ذیل تمام سوالات حقوقی پرسیده شده در موسسه حقوقی بین المللی آرارات</p>
                        <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">ادامه مطلب</Link>
                    </div>

                </div> 


                <div className='info'>


            <div className='info-title'>
                <h1 className='title-info'>مرکز مشاوره  موسسه حقوقی بین المللی آرارات</h1>
                <p className='info-p'>ارائه کلیه خدمات مشاوره حقوقی رایگان تلفنی و وکالت در دعاوی .. توسط وکیل های پایه یک دادگستری و مشاوره حقوقی خبره براساس رشته تخصصی مرتبط </p>
                <hr className='hr-info' />
            </div>

            <div className='info-cantent'>

            <div className='con-info'>
            <span className='info-icon'><i className="fa-solid fa-a"></i></span>
                <h1 className='title-con-titile'>موسسه حقوقی معتبر</h1>
                <p className='p-con'>قبول مسولیت نظارت  بر عملکرد وکلا و پاسخگویی قانونی به موکلین در چارچوب قرارداد منعقده با موسسه حقوقی بین المللی آرارات</p>
            </div>
             
              <div className='con-info'>
                <span className='info-icon'><i className="fa-solid fa-coins"></i></span>
                <h1 className='title-con-titile'>مشاوره حقوقی به صرفه</h1>
                <p className='p-con'>وجود تعرفه های مناسب و قابل قبول در مقایسه با نرخ رایج خدمات و مشاوره حقوقی در کشور</p>
            </div>



            <div className='con-info'>
            <span className='info-icon'><i className="fa-solid fa-users"></i></span>     
                <h1 className='title-con-titile'>مشاوره حقوقی با وکیل</h1>
                <p className='p-con'>امکان بهره مندی از حضوری دو یا چند وکیل در برخی پرونده های قضایی بدون پرداخت اضافی</p>
            </div>
            



            
        </div>

        </div>





                       <div className='call'>
                        <div className='image-call'>
                            <img className='call-image' src="./photo/images.webp" alt="" />
                        </div>
                        <div className='lawery'>
                            <h1 className='lawyer-title1'>آیا سوال حقوقی دارید؟</h1>
                            <h1 className='lawyer-title'>کارشناسان حقوقی موسسه آرارات  آماده پاسخگویی به شما می باشند</h1>
                            <input className='call-input' type="text" id="title" placeholder="شماره تماس:09370000" required />
                            <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">درخواست مشاوره</Link>
                        </div>

                       </div>


        










                       
                   <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>خدمات</h3>
                        <ul>
                            <li><Link to="#">خدمات مشاوره</Link></li>
                            <li><Link to="#">خدمات وکالت</Link></li>
                            <li><Link to="#">خدمات کارشناسی</Link></li>
                            <li><Link to="#">خدماتی داوری</Link></li>
                            
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>معلومات</h3>
                        <ul>
                        <li><Link to="#">درباره موسسه حقوقی بین المللی آرارات</Link></li>
                        <li><Link to="#">شعبات موسسه حقوقی بین المللی آرارت</Link></li>
                        <li><Link to="#">راه های اتباط با موسسه حقوقی بین المللی آرارات</Link></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>لینک ها</h3>
                        <ul>
                        <li><Link to="#">سامانه ثنا</Link></li>
                        <li><Link to="#">ساجد دیوان عدالت اداری</Link></li>
                        <li><Link to="#">سامانه خدمات الکترونیکی قضایی </Link></li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </footer>
    </div>
    



                    


                   <div class="col-md-3">
              <div id="footer-socials">
                <div class="socials inline-inside socials-colored">

                  <Link to="" target="_blank" title="Facebook" class="socials-item">
                    <i class="fab fa-facebook-f facebook"></i>
                  </Link>
                 
                  <Link to="http://www.instagram.com/ararat.law" target="_blank" title="Instagram" class="socials-item">
                    <i class="fab fa-instagram instagram"></i>
                  </Link>
                  <Link to="https://web.whatsapp.com/send?phone=989306006484&amp;text=سلام به موسسه آرارات خوش آمدید" target="_blank" title="تماس با واتس اپ موسسه آرارات"   class="socials-item">
                  <i class="fab fa-whatsapp fa-2x"></i>
                  </Link>
                  <Link to="https://t.me/araratfirm" target="_blank"  title="Telegram" class="socials-item">
                    <i class="fab fa-telegram telegram"></i>
                  </Link>
                </div>
              </div>
            </div>

  
  



                   

                 
        







                       






        </>
    );
    
}
export default Home;

























