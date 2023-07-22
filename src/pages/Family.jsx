


import 'animate.css'; 
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";



function Family(){
    return(
        <>



         <div className='mian-contianer'>
           
           <div className='tiitle-content'>
           <h1 className="animate__animated animate__bounce">مشاوره حقوقی با وکیل خانواده</h1>
           
           <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">تماس با ما</Link>
   
           
           </div>
   
   
   
   
           <div className='min-con-photo1'>
               <img className='mine-con-photo1' src="./photo/ezgif.com-gif-maker (5).webp" alt="##" />
           </div>
           </div> 


           <div className='info-div'>

            <p className='part-one'>
                <h4 className='part-one-title'>مشاوره حقوقی با وکیل خانواده</h4>
                <p className='part-one-p'>
              <br /> پیش از هر اقدامی برای موضوعات حقوقی خانواده، چند دقیقه مشاوره تلفنی و آنلاین با وکیل تخصصی خانواده می تواند به بسیاری از سوالات و ابهامات حقوقی شما پاسخ دهد و در نهایت کمک می کند که با دست پر اقدام کنید. مشکلات حقوقی خانواده از طلاق گرفته تا نفقه، مهریه، حضانت، اجرت المثل و .. پیچیدگی حقوقی زیادی دارند بنابراین برای بررسی تمام جوانب تصمیم شما، حتما به بهترین وکیل تخصصی خانواده نیازمند می باشید.
              
            </p>
            </p>
           </div>


           <div className='family-box'>


            <img className='family-img' src="./photo/image-1.webp" alt="" />


            <div className='family-info'>
                <p className='family-info-p'>وکیل خانواده</p>
                <h3 className='family-title'>امور حقوقی طلاق</h3>
                <p className='family-p'>درخواست طلاق از طرف مرد و زن</p>
                <p className='family-p'>طلاق توافقی با قیمت مناسب</p>
                <p className='family-p'>دریافت حق طلاق</p>
                <p className='family-p'>طلاق عیر حضوری</p>
            </div>

            <img className='family-img' src="./photo/image-2.webp" alt="" />


            <div className='family-info'>
                <p className='family-info-p'>وکیل خانواده</p>
                <h3 className='family-title'>امور حقوقی مهریه و نفقه</h3>
                <p className='family-p'>دریافت مهریه</p>
                <p className='family-p'>اعسار و یا قسط بندی مهریه</p>
                <p className='family-p'>دریافت نفقه</p>
                <p className='family-p'>صدور دادخواست مهریه</p>
            </div>
            




            <img className='family-img' src="./photo/image-3.webp" alt="" />





            <div className='family-info'>
                <p className='family-info-p'>وکیل خانواده</p>
                <h3 className='family-title'>سایر مسائل حقوقی</h3>
                <p className='family-p'>الزام به تمکین</p>
                <p className='family-p'>مطالبه و استرداد جهیزیه</p>
                <p className='family-p'>دادخواست ممنوع الخروجی</p>
                <p className='family-p'>اثبات خیانت</p>
            </div>

                    

            <img className='family-img' src="./photo/image.webp" alt="" />




            <div className='family-info'>
                <p className='family-info-p'>وکیل خانواده</p>
                <h3 className='family-title'>امور حقوقی حضانت فرزند</h3>
                <p className='family-p'>اخذ حضانت فرزند</p>
                <p className='family-p'>لغو حضانت فرزند</p>
                <p className='family-p'>حکم رشد</p>
                <p className='family-p'>حضانت فرزند بدون طلاق</p>
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



export default Family ;