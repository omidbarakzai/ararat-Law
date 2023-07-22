import 'animate.css'; 
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";



function Commercial(){
    return(
        <>
         <div className='mian-contianer'>
           
           <div className='tiitle-content'>
           <h1 className="animate__animated animate__bounce">مشاوره حضوری و تلفنی پرونده های کیفری</h1>
           
           <Link id='btn' type="button" className="btn btn-primary btn-lg" to="#">تماس با ما</Link>
   
           
           </div>
   
   
   
   
           <div className='min-con-photo1'>
               <img className='mine-con-photo1' src="./photo/biuness.webp" alt="##" />
           </div>
           </div> 


           <div className='info-div'>
            <p className='part-one'>
                <h4 className='part-one-title'>پرونده های کیفری تیغ دو لبه است! با احتیاط قدم بردارید!</h4>
                <p className='part-one-p'>
              <br />  تعریف ساده پرونده کیفری این است که اگر شخصی در موضوع یک پرونده، عمل مجرمانه‌ای انجام داده باشد و آن عمل براساس قانون جرم شناخته شود، در صورت پیگیری پرونده، شخص به مجازات معین شده در قانون محکوم می شود.
              <br />دعاوی کیفری شما معمولا موضوعاتی مانند کلاهبرداری، چک بی محل، خیانت در امانت، سرقت، ایجاد مزاحمت، جرایم رایانه ‌ای، ضرب و جرح، رابطه نامشروع، تجاوز به عنف، جعل، قتل، توهین، افترا، تهدید و هر آنچه که در قانون جرم شناخته شده و برای آن مجازات تعیین شده است را شامل می‌شود.
                </p>
            </p>

            
                <p className='part-one-p'>
                ممکن است از شما شکایت شده و احضاریه دریافت کرده باشید یا اینکه تصمیم به شکایت کیفری داشته باشید از لحظه تنظیم شکوایه تا طرح دعوا و دفاع جزییات قانونی زیادی هست که باید مطلع باشید بنابراین قبل اینکه کار از کار بگذرد از وکیل تخصصی مشاوره بگیرید
                </p>
            


            <p className='part-one'>
                <h4 className='part-one-title' >ما چطور می توانیم کمک کنیم!</h4>
                <p className='part-one-p'>ما در موسسه حقوقی بین المللی آرارات  بهترین وکلای پایه یک کیفری و حقوقی را آنلاین یا حضوری(به دلخواه شما) به شما معرفی کرده  و تا حصول نتیجه همراه شما هستیم.</p>
            </p>
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



export default Commercial ;