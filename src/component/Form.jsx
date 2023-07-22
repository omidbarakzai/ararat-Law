import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";


function Form(){
    return(
        <>
        
        <div className="form-box">
                        <h1 className="form-title"> نیاز به مشاوره حقوقی دارید؟ <span className="form-span">با ماتماس بگیرید!!</span></h1>
                        <p className="form-p1">جهت دریافت اطاعات بشتر و همچنین دریافت مشاوره تلفنی و مشاوره حضوری تخصصی</p>
                        

                   </div>


                   <div class="form-box">

                    <form action="">
                    <h3>فرم تماس با وکلای انلاین موسسه حقوقی بین المللی آرارات</h3>
                        <input type="text" id="name" placeholder="نام" required  />
                        <input type="email" id="email" placeholder="ایمیل ادرس" />
                        <input  type="text" id="phone" placeholder="شماره تماس" required />
                        <input type="text" id="title" placeholder="موضوع مشاوره شما" required />
                        <textarea name="" id="massage" placeholder="توضیحات در مورد مشکل حقوقی که دارید بنویسید"required cols="30" rows="10"></textarea>
                        <button type="submit" className="btn btn-primary btn-lg">ثبت درخواست</button>
        
                    </form>
                    
                   </div>
                    

        
        
        </>
    )
}


export default Form ;