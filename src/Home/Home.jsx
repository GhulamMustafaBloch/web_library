import React, { useEffect, useState } from 'react';
import logo from "../assats/monogram.png"
// import image from "../assats/download.jpeg";
// import image1 from "../assats/download (1).jpeg";
// import image2 from "../assats/download (2).jpeg";
// import image3 from "../assats/download (3).jpeg";
// import image4 from "../assats/download (4).jpeg";
// import image5 from "../assats/download (5).jpeg";
// import image6 from "../assats/download (6).jpeg";
// import image7 from "../assats/download (7).jpeg";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('https://api.library.haqnawaz.org/book/meta')
        .then((res) =>{
            // console.log(res.data)
            setBooks(res.data)
        });
        console.log(books.name)
    }, [])
    return (
    <div>
    <section className="img"></section>
    
    <section className="about">
        <div className="about_content">
            <h1>مختصرا ہمارے بارےمیں</h1>
            <p>
                یہ ویب سائٹ ایک اسلامی کتابوں کی لائبریری کے طور پر ترتیب دی گئی ہے،
      جہاں لوگ اپنی مقبول اسلامی کتابوں کو ایڈیٹ کر سکتے ہیں۔اس ویب سائٹ کا
      مقصد اسلامی تعلیمات کو فراہم کرنا اور لوگوں کو ان کی فہم میں مدد کرنا
      ہے۔
            </p>
            <p>
                اس ویب سائٹ پر کتابوں کی مختلف شناختی وضاحتیں موجود ہیں، جس میں ختم
      نبوت، اسلامی تعلیمات، تاریخ، سیرت، فقہ، حدیث، تفسیر، تصوف شامل ہیں۔ اس
      ویب سائٹ پر شناختی وضاحتیں اس طرح سے کی جاتی ہیں کہ کتابوں کے عنوان،
      مصنفین، اور ناشرین کے ساتھ متعلق معلومات بھی شامل ہیں۔
            </p>
            <p>
                اس ویب سائٹ پر کتابوں کی فہرست بھی دستیاب ہے جس میں کتابوں کے عنوان کے
      حروفِ تہجی کے لحاظ سے ترتیب دیا گیا ہے۔ اس فہرست کے ذریعے، کسی بھی
      کتاب کی تلاش کرنا بہت آسان ہو جاتا ہے۔
            </p>
            <p>
                اس ویب سائٹ کی سب سے بڑی خصوصیت اس کے ادارہ و ترتیب دینے کا طریقہ ہے۔
      اس ویب سائٹ کی وسیع لائبریری، جو کہ انٹرنیٹ کے ذریعے دستیاب ہے، اپنے
      کسی بھی کتاب کو آسانی سے جاری رکھنے کی اجازت دیتی ہے۔ اس کے علاوہ، لوگ
      ان کتابوں کے متعلق اپنے خیالات کو بھی شیئر کرسکتے ہیں۔
            </p>
            <p>
                یہ ویب سائٹ ایک ایسی جگہ ہے جہاں مختلف سوالات کے جوابات بھی دستیاب
      ہیں۔ اس ویب سائٹ پر موجود مواد مختلف زبانوں میں دستیاب ہیں، جو کہ اس
      میں دستیاب کتابوں کے متعلق معلومات، تفسیرات، وظائف، تصاویر، تصاویر،
      ویڈیو، آڈیو وغیرہ شامل ہیں۔
            </p>
            <p>
                ویب سائٹ اسلامی کتابوں کی دنیا کو آپس میں جوڑنے والی ایک محفل ہے۔ اس
      ویب سائٹ کی مدد سے لوگ اپنے دین کے بارے میں بہت کچھ سیکھ سکتے ہیں اور
      اسے مزید بہترین بنانے کیلئے تلاش کر سکتے ہیں۔ اس کے علاوہ، یہ ویب سائٹ
      ان لوگوں کیلئے بھی بہت فائدہ مند ہے جو اپنے اسلامی علم کو بڑھانا چاہتے
      ہیں۔
            </p>
            <p>
                اس ویب سائٹ کا تعارف کرنا مکمل نہیں ہوتا جب تک آپ اس پر گھستی کر کے
      اپنے خود کے لئے ایک اکاؤنٹ نہیں بناتے۔ ایک بار جب آپ ایک اکاؤنٹ بنا
      دیتے ہیں، تو آپ ویب سائٹ پر کتابیں اپ لوڈ کر سکتے ہیں، انہیں اپ ڈیٹ کر
      سکتے ہیں، اور انہیں حذف کر سکتے ہیں۔ اس ویب سائٹ کے ساتھ آپ بلا شبہ
      ایک سفر کرنے کو تیار ہوں گے جہاں آپ کے لئے بہت سے سیکھنے اور شیئر کرنے
      کے لئے کچھ نیا ہوگا۔
            </p>
        </div>
    </section>
    
    <section className="library">
            <div className="wraper">
                <Link to="/" className="logo">
                    <h2>ختم نبوت</h2>
                </Link>
                <div className="banner_search">
                    <div className="baner_search_right">
                        <input
                            name="text"
                            type="text"
                            id="text"
                            className="input"
                            placeholder="الفاظ کی مدد سے کتابوں میں تلاش کے لئے یہاں ٹائپ کریں..."
                            vki2_attached="true"
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fas fa-regular fa-microphone"></i>
                    </div>
                    <input type="button" value="تلاش کریں"/>
                </div>
            </div>
        </section>
        <section className="container">
            {
                books.map((myBooks) =>{
                    const {autherName,bookCover,name,publisher,visibility,} = myBooks;
                    return(
                        <>
                        <div className="container_box">
                    <img src={bookCover} alt="" />
                    <div className="content_box">
                        <h3>{name} </h3>
                        <div className="profile">
                            <div className="left">
                                <i className="fa-solid fa-circle-user"></i>
                            </div>
                            <div className="right">
                                <p> {autherName} </p>
                                <p className="Publisher">Publisher : {publisher} </p>
                                <p className="Publisher"> {visibility} </p>
                            </div>
                        </div>
                    </div>
                </div>
                        </>
                    )
                })
            }
        </section>
        {/* <section className="contact">
        <h2 className="text_center">Contact Us</h2>
        <div className="form">
            <input className="form_input" type="text" name="name" id="name" placeholder="Enter Your Name"/>
            <input className="form_input" type="number" name="phone" id="phone" placeholder="Enter Your Phone"/>
            <input className="form_input" type="email" name="email" id="email" placeholder="Enter Your Email"/>
            <textarea className="form_input" name="text" id="text" cols="30" rows="10"placeholder="Ellaborate Your concern">
            </textarea>
            <button className="btn btn_dark">Submit</button>
        </div>
    </section> */}
    <section className="form">
        <h2>رابطہ نمبر</h2>
        <div className="form_container_box">
        <div className="form_box">
            <div className="icon">
                <i className="fas fa-phone-square-alt"></i>
            </div>
            <div className="form_conten">
                <h3>موبائل نمبر</h3>
                <p>+923026668601</p>
                <p>+923344037449</p>
            </div>
        </div>
        <div className="form_box">
            <div className="icon">
            <i className="fas fa-mail-bulk"></i>
            </div>
            <div className="form_conten">
                <h3> ای میل </h3>
                <p>ghulammustafa030266@gmail.com</p>
            </div>
        </div>
        <div className="form_box">
            <div className="icon">
            <i class="fas fa-location-arrow"></i>
            </div>
            <div className="form_conten">
                <h3>ہوم اڈریس</h3>
                <p>Muslim Town Wahdat Road,<br /> Lahore, LHR 54000</p>
            </div>
        </div>
        </div>
    </section>
    <footer className="footer">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav_links">
                        <li>
                            <Link to="/">ہوم</Link>
                        </li>
                        <li>
                            <Link to="/about">تعارف</Link>
                        </li>
                        <li>
                            <Link to="/contact">رابطہ</Link>
                        </li>
                        <li>
                            <Link to="/galry">گیلری</Link>
                        </li>
        </ul>
        <div className="sociol_links">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
        </div>
    </footer>
    </div>
  )
}

export default Home
