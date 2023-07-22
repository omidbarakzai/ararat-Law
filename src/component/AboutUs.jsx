import 'animate.css'; 
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";






function About(){
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
               <img className='mine-con-photo' src="./photo/ararat11.png" alt="##" />
           </div>
           </div>







                  <div className='about-div'>
               <img className='about-img' src="./photo/wkalat.webp" alt="##" />

               <p className='about-p'>
               زندگی باکیفیت و امن در دنیای امروز به استفاده از افراد متخصص در زمینه‌های تخصصی گره خورده است. چون این روزها همه ابعاد زندگی با یک دانش تخصصی ارتباط دارد و جهان مدرن با دورانی که بسیاری از موضوعات با یک شیوهٔ مشترک بررسی و حل‌وفصل می‌شد خداحافظی کرده است.

دنیای تخصصی و پر از رمز و راز، اکنون نیاز ضروری به استفاده از دانش متخصصانی دارد که عمر و سرمایه خود را فقط در یک مسیر حرفه‌ای و خاص به کار گرفته‌اند تا بتوانند کیفیت زندگی دیگران را ارتقا دهند و یک متخصص دانا در نظام پیچیده و قانونمند امروز باشند.

مشورت‌پذیر بودن و ارزش قائل بودن برای مشورت‌، مهمترین و ساده‌ترین اصلی‌ است که می‌تواند انسان‌ها را در این دنیای پیچیده به هدفشان برساند. انسان با استفاده از این اصل، چارچوب زندگی‌‌اش را با حضور متخصصان محکم می‌سازد. پایبندی به این اصل، افراد را برای دستیابی به علم و دانش متخصصان آماده می‌سازد و از ایجاد انحراف، بنیان کج و اشتباه جبران‌ناپذیر در این عصر قانونمند جلوگیری می‌نماید.

ساختن زندگی قانونمند و ایمن، هنر ویژه‌ای را می‌طلبد. برای فراهم ساختن این شیوه از زندگی باید از هنر مشورت‌ بهره‌مند بود تا این هنر، انسان را به همکلامی و هم‌نشینی با متخصصان و افراد دانا برساند.
               </p>
           </div>  
           <div className="members-info">
                  <div className="member-box1">
                    <img className="members-img" src="./image/photo_2023-07-16_23-41-23.jpg" alt=""/>
                    <h1 className="members-name">دکتر محمد دولتخواه</h1>
                    <h1 className="members-name">وکیل پایه یک دادگستری</h1>
                    <p className="members-job">مدیر عامل و ریس هیت مدیره</p>
                    
                  </div>

                  <div className="member-box1">
                    <img className="members-img" src="./image/family.jpg" alt=""/>
                    <h1 className="members-name">احمد ازاد</h1>
                    <h1 className="members-name">وکیل پایه یک دادگستری</h1>
                    <p className="members-job">عضو هیت مدیره</p>
                    
                  </div>

                  <div className="member-box1">
                    <img className="members-img" src="./image/family.jpg" alt=""/>
                    <h1 className="members-name">حبیب الله جنیدی</h1>
                    <h1 className="members-name">وکیل پایه یک دادگستری</h1>
                    <p className="members-job">نایت ریس هیت مدیره</p>
                    
                  </div>
               </div>
                 <div className="members">

                  <div className="member-box1">
                    <img className="members-img" src="./image/photo_2023-07-16_23-41-29.jpg" alt=""/>
                    <h1 className="members-name">دکتر مسعود اقتصادی</h1>
                    <p className="members-job">وکیل پایه یک دادگستری</p>
                    
                  </div>


                  <div className="member-box1">

                    <img className="members-img" src="./image/family.jpg" alt=""/>
                    <h1 className="members-name">سروش نصیری</h1>
                    <p className="members-job">وکیل پایه یک دادگستری</p>
                    
                  </div>




                  <div className="member-box1">
                    <img className="members-img" src="./image/ms.jahfari.jpg" alt=""/>
                    <h1 className="members-name">ناهید جعفری</h1>
                    <p className="members-job">وکیل پایه یک دادگستری</p>
                    
                  </div>




                  <div className="member-box1">
                    <img className="members-img" src="./image/ms.dolatkha.jpg" alt=""/>
                    <h1 className="members-name">گلابتون دولتخواه</h1>
                    <p className="members-job">مشاور حقوقی</p>
                    
                  </div>




                  <div className="member-box1">
                    <img className="members-img" src="./image/maryam.jpg" alt=""/>
                    <h1 className="members-name">مریم توکلی</h1>
                    <p className="members-job">مشاوری حقوقی</p>
                    
                  </div>





                  <div className="member-box1">
                    <img className="members-img" src="./image/ms.azam.jpg" alt=""/>
                    <h1 className="members-name">اعظم توکلی</h1>
                    <p className="members-job">وکیل رسمی</p>
                    
                  </div>
                  

                  

                 </div>


             <div className='ararat'>
                <h1 className='ararat-info'>موسسه حقوقی بین المللی آرارات</h1>
                <p className='ararat-p'>
                موسسه حقوقی بین المللی آرارات به شماره ثبت 3807 ، به منظور ارائه کلیه خدمات (داوری ، وکالت و مشاوره ای در امور حقوقی ، کیفری ، ثبتی ، بازرگانی ، گمرکی ، شهرداری ، مالیاتی ، بیمه ای و غیره ) و نیز تنظیم قرار دادهای تجاری و غیر تجاری مربوط به اشخاص حقیقی و حقوقی با استفاده از کارشناسان متخصص و مجرب در هر یک از رشته های مذکور و نیز پیگیری امور حقوقی و اداری اشخاص مزبور در هریک ازسازمانهاو مراجع قضایی و اداری و انتظامی مانند محاکم دادگستری ، دادگاه های انقلاب ، دادسراهای عمومی و انقلاب و دادسرای نیروی های مسلح ، دیوان عدالت اداری ، تعزیرات حکومتی ، شوراها و مراجع حل اختلاف ، شهرداری ها و کمیسیون های آن، مراجع مالیاتی و کمیسیونهای آن و هیئت های رسیدگی تحت پوشش وزارت کار و امور اجتماعی ، ثبت اسنادو املاک ، منابع طبیعی ، ثبت احوال ) همچنین ارائه خدمات حقوقی وانجام امور وکالت از طرف اتباع بیگانه درهریک از مراجع داخلی و بین المللی و یا از سوی ایرانیان در هریک از مراجع بین المللی یا مراجع قضایی دیگر کشورها بارعایت ضوابط قانونی مربوطه به وکالت در هریک از موضوعات مذکور ، تشکیل و در اداره ثبت به ثبت رسیده و فعالبت رسمی خود را از تاریخ 1391/12/26 آغاز نموده است.

این مجموعه به این نکته آگاه است که عصر حاضر ،عصر دانایی محوری است و با تلاش در جهت بهم آمیختن دانش و تجربه بر آن است تا با به بکارگیری مجموعه ای از مجرب ترین وکلا، متخصصان و مشاوران در تمامی رشته های علمی و تخصص مرتبط با موضوعات حقوقی و کیفری به ضرورت پرداختن به موضوع داوری و حل و فصل اختلافهای حقوقی بدور از ابتلا به روند دادرسی پر هزینه وطولانی دادرسی در محاکم دادگستری با اندیشه ایجاد بستری که به صورت عملی امکان بهره مندی اشخاص از مزایای این نهاد ارزشمند و درعین حال مغفول داوری رافراهم نماید تا گره گشای مشکلات حقوقی و یاری گر شما در استفاده بهینه از فرصت ها باشد خود را بعنوان جزء کوچکی از جامعه حقوقی ایران عزیز عهده دار انجام قسمتی از وظیفه معرفی ، گسترش و توسعه نهاد داوری بدانیم.
                </p>
             </div>


             <div className="goals">
                  <div className="our-goals">
                    <span className="goals-icon"><i className="fa-solid fa-bullseye"></i></span>
                    <h3 className="title-goals">اهداف ما</h3>
                    <p className="goals-p">
                      موسسه حقوقی بین المللی آرارات و همکاران در راستای ارتقای سلامت حقوقی و رعایت حقوق موکلین و مراجعین محترم با استفاده از وکلای متخصص و مجرب در زمینه‌های حقوقی، کیفری، بین‌الملل، تجاری و نفت و گاز و با ارائه خدمات مختلف در تمام زمینه‌ها، در تلاش است بهترین سرویس‌ها و مشاوره‌های لازم را با استفاده از تجربیات و علم روز در اختیار موکلین و همکاران گرامی قراردهد. با سابقه‌ای۱۰ساله برخود می‌بالیم که توانسته ایم در راه احقاق حق و دفاع از حقوق موکلین در این راه نامی معتبر و مورد اعتماد در عرصه حقوق ایران برجای گذاریم. اعتبار کسب شده در طی سالیان گذشته جز با کسب اعتماد و اطمینان موکلین محقق نمی‌گشته است و سرمایه این گروه را اعتماد و اطمینان شما می‌دانیم.
                    </p>
                   </div>

                   <div className="our-goals">
                    <span className="goals-icon"><i className="fa-solid fa-bullseye"></i></span>
                    <h3 className="title-goals">خط مشی ما</h3>
                    <p className="goals-p">
                      بر این باوریم که موفقیت در کار شامل عوامل متعددی می‌باشد که این گروه با تکیه بر راه عدالت و احقاق حق و با بهره‌گیری از تجربه، علم روز، تعهد، کسب اعتماد و پشتکار قدم در عرصه حقوق نهاده. با همکاری وکلای مجرب در تمامی زمینه‌های حقوقی معتقدیم، فعالیت‌های گروهی نتایج بسیار موفق‌تری در پی خواهد داشت که همین اندیشه و تفکر تشکیل و تاسیس این موسسه حقوقی را در پی داشت. امید است بتوانیم شما را در زمینه‌های حقوقی همراه باشیم و برای نیل به عدالت در کنارتان قدم برداریم.اعتبار کسب شده در طی سالیان گذشته جز با کسب اعتماد و اطمینان موکلین محقق نمی‌گشته است و سرمایه این گروه را اعتماد و اطمینان شما می‌دانیم
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



export default About ;