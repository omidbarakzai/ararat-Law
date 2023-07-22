import 'animate.css'; 
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";



function Contract(){
    return(
        <>
         <div className='mian-contianer'>
           
           <div className='tiitle-content'>
           <h1 className="animate__animated animate__bounce">تنظیم قرارداد چیست؟</h1>
           
           <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">تماس با ما</Link>
   
           
           </div>
   
   
   
   
           <div className='min-con-photo1'>
               <img className='mine-con-photo1' src="./photo/andrea.webp" alt="##" />
           </div>
           </div> 


           <div className='info-div'>
            <p className='part-one'>
                <h4 className='part-one-title'>تنظیم قرارداد چیست؟</h4>
                <p className='part-one-p'>
                چرا قرارداد باید توسط یک کارشناس حقوقی یا وکیل تنظیم شود؟
              </p>
              <p className='part-one-p'>
              امروزه لزوم تنظیم قرارداد بر هیچ شخصی پوشیده نیست و از بدیهیات شروع یک رابطه کاری، تجاری و اجتماعی است. مسائل حقوقی و قضائی یکی مهم ترین چالش های این مسیر است و برای جلوگیری از مراحل اداری طولانی در مراجع قضایی افراد تلاش می کنند  با تنظیم یک قرارداد کاملا جامع و استاندارد که در برگیرنده تمام مسائل و نکات کلیدی مرتبط با قرارداد باشد تا حد ممکن از بروز مشکلات احتمالی جلوگیری شود.

قراردادهای هر حوزه دارای چارچوب خاصی است که شامل قوانین اختصاصی همان موضوع است  مانند: قراردادهای اجاره، خرید و فروش، نیروی انسانی و استخدام، کار، تجارت و بسیار موارد دیگر که نیاز است به طور صحیح و جامع تنظیم شده و تعهدات طرفین در آن کاملاً ذکر شده باشد تا در صورت بروز هر گونه مشکل راه حلی ارائه شده باشد.
              </p>
            </p>

           </div>

                          <div className='contract-info'>
                            <img className='contarct-img' src="./photo/writing-a-contract-by-kawyer-min.webp" alt="" />

                            <div className='contract-div' >
                                <p className='contract-p'>مزیت های تنظیم قرارداد توسط یک وکیل چیست</p>
                                <h3 className='contract-title'>تنظیم قرارداد جدید توسط وکیل و کارشناس حقوقی</h3>
                                <p className='contract-p'>
                                گاهی اوقات در شروع کار مشکلات به چشم نمی آید و ممکن یه اشتباه جزئی در تنظیم قرارداد خسارات باور نکردنی به بار آورد. دانایی به قوانین، چارچوب و اصول قرارداد نویسی بخشی شروط اصلی یک قرارداد نویس خوب است، به عبارتی می توان گفت یک وکیل یا کارشناس حقوقی خبره که سالها در این زمینه فعالیت داشته و به چم و خم قراردادها و مشکلات احتمالی بیشتر از هر کسی دیگری آشنا است تنها راه حل جلوگیری از مشکلات قراردادی است.
                                </p>
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
    )
}



export default Contract ;